import React, { useState, Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Header } from "react-native-elements";
import MainPage from "./1_MainPage/MainPage";
import FeatsAndInventoryPage from "./2_FeatsAndInventoryPage/FeatsAndInventoryPage";
import StoryAndActionsPage from "./3_StoryAndActionsPage/StoryAndActionsPage";
import SpellsPage from "./4_SpellsPage/SpellsPage";
import { CharacterMetadataProps } from "./1_MainPage/CharacterMetadata";
import { ProficiencyProps } from "./Shared/ProficiencyView";
import { GetAbilityModifierFromScores } from "./Shared/PF2eCoreLib/AbilityScores";
import { Bonus } from "./Shared/PF2eCoreLib/Bonus";
import { BonusType } from "./Shared/PF2eCoreLib/BonusTypes";
import { prop } from "./Shared/PF2eCoreLib/TypescriptEvolution";
import { Proficiencies } from "./Shared/PF2eCoreLib/Proficiencies";
import {
    WeaponViewProps,
    GetProficiencyForWeapon,
} from "./1_MainPage/Weapons/WeaponViewProps";
import { ArmorCategory } from "./Shared/PF2eCoreLib/ArmorCategory";
import { Ability } from "./Shared/PF2eCoreLib/Ability";
import PlayerCharacterStore from "../store/CharacterStore";
import { Provider } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type CharacterSheetNavigationProps = StackNavigationProp<RootStackParamList, "CharacterSheet">;

interface Props {
    navigation: CharacterSheetNavigationProps;
}

interface State {}

export default function CharacterSheet(props: Props){
    const playerCharacter = PlayerCharacterStore.getState();
    const [state, setState] = useState(playerCharacter);
    PlayerCharacterStore.subscribe(() => {
        setState(PlayerCharacterStore.getState());
    });

    const characterMetadata: CharacterMetadataProps = {
        characterName: playerCharacter.name,
        playerName: playerCharacter.playerName,
        ancestry: playerCharacter.ancestry.name,
        heritage: playerCharacter.ancestry.heritage,
        level: playerCharacter.level,
        experiencePoints: playerCharacter.experiencePoints,
        background: playerCharacter.background.name,
        pcClass: playerCharacter.class.name,
        subclass: playerCharacter.class.subClass,
        alignment: playerCharacter.alignment,
        deity: playerCharacter.deity,
        traits: playerCharacter.traits,
    };
    const classDCProficiency: ProficiencyProps = {
        title: "Class DC",
        keyAbility: GetAbilityModifierFromScores(
            playerCharacter.class.keyAbility,
            playerCharacter.abilityScores
        ),
        proficiency: playerCharacter.class.proficiency,
        level: playerCharacter.level,
        itemBonus: Bonus.GetBonusFor(
            "classDc",
            BonusType.Item,
            playerCharacter.bonuses
        ),
        is10base: true,
    };

    let wornArmorProficiency: Proficiencies;
    switch (playerCharacter.wornArmor.Category) {
    case ArmorCategory.Unarmored: {
        wornArmorProficiency = prop(
            playerCharacter.armorProficiencies,
            "unarmored"
        );
        break;
    }
    case ArmorCategory.Light: {
        wornArmorProficiency = prop(
            playerCharacter.armorProficiencies,
            "light"
        );
        break;
    }
    case ArmorCategory.Medium: {
        wornArmorProficiency = prop(
            playerCharacter.armorProficiencies,
            "medium"
        );
        break;
    }
    case ArmorCategory.Heavy: {
        wornArmorProficiency = prop(
            playerCharacter.armorProficiencies,
            "heavy"
        );
        break;
    }
    default: {
        wornArmorProficiency = Proficiencies.Untrained;
    }
    }
    const acProficiency: ProficiencyProps = {
        title: "AC",
        keyAbility: GetAbilityModifierFromScores(
            Ability.Dexterity,
            playerCharacter.abilityScores
        ),
        proficiency: wornArmorProficiency,
        level: playerCharacter.level,
        itemBonus: playerCharacter.wornArmor.ACBonus,
        is10base: true,
        isACBase: true,
        dexCap: playerCharacter.wornArmor.DexCap,
    };
    const fortitudeSave: ProficiencyProps = {
        title: "Fortitude",
        keyAbility: GetAbilityModifierFromScores(
            Ability.Constitution,
            playerCharacter.abilityScores
        ),
        proficiency: playerCharacter.saves.fortitude,
        level: playerCharacter.level,
        itemBonus: Bonus.GetBonusFor(
            "fortitude",
            BonusType.Item,
            playerCharacter.bonuses
        ),
    };
    const willSave: ProficiencyProps = {
        title: "Will",
        keyAbility: GetAbilityModifierFromScores(
            Ability.Wisdom,
            playerCharacter.abilityScores
        ),
        proficiency: playerCharacter.saves.will,
        level: playerCharacter.level,
        itemBonus: Bonus.GetBonusFor(
            "wisdom",
            BonusType.Item,
            playerCharacter.bonuses
        ),
    };
    const reflexSave: ProficiencyProps = {
        title: "Reflex",
        keyAbility: GetAbilityModifierFromScores(
            Ability.Dexterity,
            playerCharacter.abilityScores
        ),
        proficiency: playerCharacter.saves.reflex,
        level: playerCharacter.level,
        itemBonus: Bonus.GetBonusFor(
            "dexterity",
            BonusType.Item,
            playerCharacter.bonuses
        ),
    };
    const perception: ProficiencyProps = {
        title: "Perception",
        keyAbility: GetAbilityModifierFromScores(
            Ability.Wisdom,
            playerCharacter.abilityScores
        ),
        proficiency: playerCharacter.perceptionProficiency,
        level: playerCharacter.level,
        itemBonus: Bonus.GetBonusFor(
            "perception",
            BonusType.Item,
            playerCharacter.bonuses
        ),
        descriptor: playerCharacter.senses,
    };
    const weapon0 = playerCharacter.weapons[0];
    const weapons: WeaponViewProps[] = [
        {
            title: weapon0.title,
            abilityModifier: GetAbilityModifierFromScores(
                weapon0.ability,
                playerCharacter.abilityScores
            ),
            proficiency: GetProficiencyForWeapon(
                weapon0,
                playerCharacter.weaponProficiencies
            ),
            itemBonus: weapon0.toHitBonus,
            damageDice: weapon0.damageDice,
            damageAbilityModifier: GetAbilityModifierFromScores(
                weapon0.damageAbilityModifier,
                playerCharacter.abilityScores
            ).modifier,
            damageType: weapon0.damageType,
            weaponTraits: weapon0.weaponTraits,
        },
    ];

    return (
        <Provider store={PlayerCharacterStore}>
            <View style={styles.container}>
                <ScrollView>
                    <MainPage
                        skills={playerCharacter.skills}
                        scores={playerCharacter.abilityScores}
                        languages={playerCharacter.languages}
                        characterMetadata={characterMetadata}
                        classDCProficiency={classDCProficiency}
                        acProficiency={acProficiency}
                        level={playerCharacter.level}
                        armorProficiency={
                            playerCharacter.armorProficiencies
                        }
                        shieldProps={playerCharacter.shield}
                        saves={{
                            fortitude: fortitudeSave,
                            reflex: reflexSave,
                            will: willSave,
                        }}
                        hitPoints={playerCharacter.hitPoint}
                        resistances={playerCharacter.resistances}
                        immunities={playerCharacter.immunities}
                        weaknesses={playerCharacter.weakness}
                        conditions={playerCharacter.conditions}
                        perception={perception}
                        movements={playerCharacter.movement}
                        weaponProficiencies={
                            playerCharacter.weaponProficiencies
                        }
                        weapons={weapons}
                    />
                    <FeatsAndInventoryPage
                        ancestryFeatsAndAbilities={
                            playerCharacter.ancestryFeatsAndAbilities
                        }
                        skillFeats={playerCharacter.skillFeats}
                        generalFeats={playerCharacter.generalFeats}
                        classFeatsAndAbilities={
                            playerCharacter.classFeatsAndAbilities
                        }
                        bonusFeats={playerCharacter.bonusFeats}
                    />
                    <StoryAndActionsPage
                        bioData={playerCharacter.biographicalData}
                        personalityData={playerCharacter.personalityData}
                        campaignNotesData={
                            playerCharacter.campaignNotesData
                        }
                        actions={playerCharacter.actions}
                    />
                    <SpellsPage
                        spellAttackProficiency={
                            playerCharacter.spellAttackProficiency
                        }
                        spellcastingAbilityModifier={GetAbilityModifierFromScores(
                            playerCharacter.spellcastingAbilityModifier,
                            playerCharacter.abilityScores
                        )}
                        currentLevel={playerCharacter.level}
                        bonuses={playerCharacter.bonuses}
                        /* Need to calculate the bonus total from the bonuses given */
                        spellSlots={playerCharacter.spellSlots}
                        magicTraditions={playerCharacter.magicTraditions}
                        spells={playerCharacter.spells}
                    />
                </ScrollView>
            </View>
        </Provider>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
