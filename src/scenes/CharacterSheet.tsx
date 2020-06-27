import React, { useState, Component } from "react";
import { StyleSheet, View, ScrollView, Alert, Animated } from "react-native";
import { Header } from "react-native-elements";
import MainPage from "../PlayerCharacterSheet/1_MainPage/MainPage";
import FeatsAndInventoryPage from "../PlayerCharacterSheet/2_FeatsAndInventoryPage/FeatsAndInventoryPage";
import StoryAndActionsPage from "../PlayerCharacterSheet/3_StoryAndActionsPage/StoryAndActionsPage";
import SpellsPage from "../PlayerCharacterSheet/4_SpellsPage/SpellsPage";
import { CharacterMetadataProps } from "../PlayerCharacterSheet/1_MainPage/CharacterMetadata";
import { ProficiencyProps } from "../PlayerCharacterSheet/Shared/ProficiencyView";
import { GetAbilityModifierFromScores } from "../PlayerCharacterSheet/Shared/PF2eCoreLib/AbilityScores";
import { Bonus } from "../PlayerCharacterSheet/Shared/PF2eCoreLib/Bonus";
import { BonusType } from "../PlayerCharacterSheet/Shared/PF2eCoreLib/BonusTypes";
import { prop } from "../PlayerCharacterSheet/Shared/PF2eCoreLib/TypescriptEvolution";
import { Proficiencies } from "../PlayerCharacterSheet/Shared/PF2eCoreLib/Proficiencies";
import {
    WeaponViewProps,
    GetProficiencyForWeapon,
} from "../PlayerCharacterSheet/1_MainPage/Weapons/WeaponViewProps";
import { ArmorCategory } from "../PlayerCharacterSheet/Shared/PF2eCoreLib/ArmorCategory";
import PlayerCharacterStore from "../store/CharacterStore";
import { Provider } from "react-redux";
import { RootStackParamList } from "../../App";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { PlayerCharacterDTO } from "../../PlayerCharacter";
import { RectButton } from "react-native-gesture-handler";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import ProficiencyCalculator from "../PlayerCharacterSheet/Shared/ProficiencyCalculator";

type CharacterSheetNavigationProps = DrawerNavigationProp<RootStackParamList, "CharacterSheet">;

interface Props {
    navigation: CharacterSheetNavigationProps;
}

interface State {
    playerCharacter: PlayerCharacterDTO;
}

export default function CharacterSheet(props: Props) {
    const playerCharacter = PlayerCharacterStore.getState();
    const [state, setState] = useState(playerCharacter);
    PlayerCharacterStore.subscribe(() => {
        setState(PlayerCharacterStore.getState());
    });

    function characterMetadata(): CharacterMetadataProps {
        return {
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
    }
    function classDCProficiency(): ProficiencyProps  {
        return {
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
    }
    function wornArmorProficiency(): Proficiencies {
        switch (playerCharacter.wornArmor.Category) {
        case ArmorCategory.Unarmored: {
            return prop(
                playerCharacter.armorProficiencies,
                "unarmored"
            );
            break;
        }
        case ArmorCategory.Light: {
            return prop(
                playerCharacter.armorProficiencies,
                "light"
            );
            break;
        }
        case ArmorCategory.Medium: {
            return prop(
                playerCharacter.armorProficiencies,
                "medium"
            );
        }
        case ArmorCategory.Heavy: {
            return prop(
                playerCharacter.armorProficiencies,
                "heavy"
            );
        }
        default: {
            return Proficiencies.Untrained;
        }
        }
    }
    function acProficiency(): ProficiencyProps  {
        return {
            title: "AC",
            keyAbility: GetAbilityModifierFromScores(
                "dexterity",
                playerCharacter.abilityScores
            ),
            proficiency: wornArmorProficiency(),
            level: playerCharacter.level,
            itemBonus: playerCharacter.wornArmor.ACBonus,
            is10base: true,
            isACBase: true,
            dexCap: playerCharacter.wornArmor.DexCap,
        };
    }
    function fortitudeSave(): ProficiencyProps {
        return {
            title: "Fortitude",
            keyAbility: GetAbilityModifierFromScores(
                "constitution",
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
    }
    function willSave(): ProficiencyProps {
        return {
            title: "Will",
            keyAbility: GetAbilityModifierFromScores(
                "wisdom",
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
    }
    function reflexSave(): ProficiencyProps {
        return {
            title: "Reflex",
            keyAbility: GetAbilityModifierFromScores(
                "dexterity",
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
    }
    function perception(): ProficiencyProps {
        return {
            title: "Perception",
            keyAbility: GetAbilityModifierFromScores(
                "wisdom",
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
    }
    function weapons(): WeaponViewProps[] { 
        const weapon0 = playerCharacter.weapons[0];
        return [
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
    }
    function headerText(): string {
        const pcClass = playerCharacter.class;
        const name = playerCharacter.name;
        return  name + " - " + pcClass.subClass + " " + pcClass.name + " Lvl:" + playerCharacter.level;
    }

    return (
        <Provider store={PlayerCharacterStore}>
            <View style={styles.container}>
                <Header centerComponent={{ text: headerText(), style: { color: "#fff" }}} />
                <ScrollView>
                    <MainPage
                        skills={playerCharacter.skills}
                        scores={playerCharacter.abilityScores}
                        languages={playerCharacter.languages}
                        characterMetadata={characterMetadata()}
                        classDCProficiency={classDCProficiency()}
                        acProficiency={acProficiency()}
                        level={playerCharacter.level}
                        armorProficiency={
                            playerCharacter.armorProficiencies
                        }
                        shieldProps={playerCharacter.shield}
                        saves={{
                            fortitude: fortitudeSave(),
                            reflex: reflexSave(),
                            will: willSave(),
                        }}
                        hitPoints={playerCharacter.hitPoint}
                        resistances={playerCharacter.resistances}
                        immunities={playerCharacter.immunities}
                        weaknesses={playerCharacter.weakness}
                        conditions={playerCharacter.conditions}
                        perception={perception()}
                        movements={playerCharacter.movement}
                        weaponProficiencies={
                            playerCharacter.weaponProficiencies
                        }
                        weapons={weapons()}
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
    leftAction: {
        flex: 1,
        backgroundColor: "#497AFC",
        justifyContent: "center",
    },
    actionText: {
        color: "white",
        fontSize: 16,
        backgroundColor: "transparent",
        padding: 10,
    },
});
