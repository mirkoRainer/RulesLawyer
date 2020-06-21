import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Header } from "react-native-elements";
import MainPage from "./src/PlayerCharacterSheet/1_MainPage/MainPage";
import FeatsAndInventoryPage from "./src/PlayerCharacterSheet/2_FeatsAndInventoryPage/FeatsAndInventoryPage";
import StoryAndActionsPage from "./src/PlayerCharacterSheet/3_StoryAndActionsPage/StoryAndActionsPage";
import SpellsPage from "./src/PlayerCharacterSheet/4_SpellsPage/SpellsPage";
import { example } from "./examplePlayerCharacter";
import { CharacterMetadataProps } from "./src/PlayerCharacterSheet/1_MainPage/CharacterMetadata";
import { ProficiencyProps } from "./src/PlayerCharacterSheet/Shared/ProficiencyView";
import { GetAbilityModifierFromScores } from "./src/PlayerCharacterSheet/Shared/PF2eCoreLib/AbilityScores";
import { Bonus } from "./src/PlayerCharacterSheet/Shared/PF2eCoreLib/Bonus";
import { BonusType } from "./src/PlayerCharacterSheet/Shared/PF2eCoreLib/BonusTypes";
import { prop } from "./src/PlayerCharacterSheet/Shared/PF2eCoreLib/TypescriptEvolution";
import { Proficiencies } from "./src/PlayerCharacterSheet/Shared/PF2eCoreLib/Proficiencies";
import { WeaponViewProps, GetProficiencyForWeapon } from "./src/PlayerCharacterSheet/1_MainPage/Weapons/WeaponViewProps";
import { ArmorCategory } from "./src/PlayerCharacterSheet/Shared/PF2eCoreLib/ArmorCategory";
import { Ability } from "./src/PlayerCharacterSheet/Shared/PF2eCoreLib/Ability";

export default function App() {
    const characterMetadata: CharacterMetadataProps = {
        characterName: example.playerCharacter.name,
        playerName: example.playerCharacter.playerName,
        ancestry: example.playerCharacter.ancestry.name,
        heritage: example.playerCharacter.ancestry.heritage,
        level: example.playerCharacter.level,
        experiencePoints: example.playerCharacter.experiencePoints,
        background: example.playerCharacter.background.name,
        pcClass: example.playerCharacter.class.name,
        subclass: example.playerCharacter.class.subClass,
        alignment: example.playerCharacter.alignment,
        deity: example.playerCharacter.deity,
        traits: example.playerCharacter.traits,
    };
    const classDCProficiency: ProficiencyProps = {
        title: "Class DC",
        keyAbility: GetAbilityModifierFromScores(example.playerCharacter.class.keyAbility, example.playerCharacter.abilityScores),
        proficiency: example.playerCharacter.class.proficiency,
        level: example.playerCharacter.level,
        itemBonus: Bonus.GetBonusFor("classDc", BonusType.Item, example.playerCharacter.bonuses),
        is10base: true,
    };

    let wornArmorProficiency: Proficiencies;
    switch (example.playerCharacter.wornArmor.Category) {
    case ArmorCategory.Unarmored: {
        wornArmorProficiency = prop(example.playerCharacter.armorProficiencies, "unarmored");
        break;
    }
    case ArmorCategory.Light: {
        wornArmorProficiency = prop(example.playerCharacter.armorProficiencies, "light");
        break;
    }
    case ArmorCategory.Medium: {
        wornArmorProficiency = prop(example.playerCharacter.armorProficiencies, "medium");
        break;
    }
    case ArmorCategory.Heavy: {
        wornArmorProficiency = prop(example.playerCharacter.armorProficiencies, "heavy");
        break;
    }
    default: {
        wornArmorProficiency = Proficiencies.Untrained;
    }
    }
    const acProficiency: ProficiencyProps = {
        title: "AC",
        keyAbility: GetAbilityModifierFromScores(Ability.Dexterity, example.playerCharacter.abilityScores),
        proficiency: wornArmorProficiency,
        level: example.playerCharacter.level,
        itemBonus: example.playerCharacter.wornArmor.ACBonus,
        is10base: true,
        isACBase: true,
        dexCap: example.playerCharacter.wornArmor.DexCap,
    };
    const fortitudeSave: ProficiencyProps = {
        title: "Fortitude",
        keyAbility: GetAbilityModifierFromScores(Ability.Constitution, example.playerCharacter.abilityScores),
        proficiency: example.playerCharacter.saves.fortitude,
        level: example.playerCharacter.level,
        itemBonus: Bonus.GetBonusFor("fortitude", BonusType.Item, example.playerCharacter.bonuses),
    };
    const willSave: ProficiencyProps = {
        title: "Will",
        keyAbility: GetAbilityModifierFromScores(Ability.Wisdom, example.playerCharacter.abilityScores),
        proficiency: example.playerCharacter.saves.will,
        level: example.playerCharacter.level,
        itemBonus: Bonus.GetBonusFor("wisdom", BonusType.Item, example.playerCharacter.bonuses),
    };
    const reflexSave: ProficiencyProps = {
        title: "Reflex",
        keyAbility: GetAbilityModifierFromScores(Ability.Dexterity, example.playerCharacter.abilityScores),
        proficiency: example.playerCharacter.saves.reflex,
        level: example.playerCharacter.level,
        itemBonus: Bonus.GetBonusFor("dexterity", BonusType.Item, example.playerCharacter.bonuses),
    };
    const perception: ProficiencyProps = {
        title: "Perception",
        keyAbility: GetAbilityModifierFromScores(Ability.Wisdom, example.playerCharacter.abilityScores),
        proficiency: example.playerCharacter.perceptionProficiency,
        level: example.playerCharacter.level,
        itemBonus: Bonus.GetBonusFor("perception", BonusType.Item, example.playerCharacter.bonuses),
        descriptor: example.playerCharacter.senses,
    };
    const weapon0 = example.playerCharacter.weapons[0];
    const weapons: WeaponViewProps[] = [
        {
            title: weapon0.title,
            abilityModifier: GetAbilityModifierFromScores(weapon0.ability, example.playerCharacter.abilityScores),
            proficiency: GetProficiencyForWeapon(weapon0, example.playerCharacter.weaponProficiencies),
            itemBonus: weapon0.toHitBonus,
            damageDice: weapon0.damageDice,
            damageAbilityModifier: GetAbilityModifierFromScores(weapon0.damageAbilityModifier, example.playerCharacter.abilityScores).modifier,
            damageType: weapon0.damageType,
            weaponTraits: weapon0.weaponTraits,
        }
    ];

    return (
        <View style={styles.container}>
            <Header
                placement="left"
                leftComponent={{ icon: "menu", color: "#fff" }}
                centerComponent={{
                    text: "Rules Lawyer",
                    style: { color: "#fff" },
                }}
                rightComponent={{ icon: "home", color: "#fff" }}
            />
            <ScrollView>
                <MainPage
                    skills={example.playerCharacter.skills}
                    scores={example.playerCharacter.abilityScores}
                    languages={example.playerCharacter.languages}
                    characterMetadata={characterMetadata}
                    classDCProficiency={classDCProficiency}
                    acProficiency={acProficiency}
                    level={example.playerCharacter.level}
                    armorProficiency={example.playerCharacter.armorProficiencies}
                    shieldProps={example.playerCharacter.shield}
                    saves={{fortitude: fortitudeSave, reflex: reflexSave, will: willSave}}
                    hitPoints={example.playerCharacter.hitPoint}
                    resistances={example.playerCharacter.resistances}
                    immunities={example.playerCharacter.immunities}
                    weaknesses={example.playerCharacter.weakness}
                    conditions={example.playerCharacter.conditions}
                    perception={perception}
                    movements={example.playerCharacter.movement}
                    weaponProficiencies={
                        example.playerCharacter.weaponProficiencies
                    }
                    weapons={weapons}
                />
                <FeatsAndInventoryPage
                    ancestryFeatsAndAbilities={
                        example.playerCharacter.ancestryFeatsAndAbilities
                    }
                    skillFeats={example.playerCharacter.skillFeats}
                    generalFeats={example.playerCharacter.generalFeats}
                    classFeatsAndAbilities={
                        example.playerCharacter.classFeatsAndAbilities
                    }
                    bonusFeats={example.playerCharacter.bonusFeats}
                />
                <StoryAndActionsPage
                    bioData={example.playerCharacter.biographicalData}
                    personalityData={example.playerCharacter.personalityData}
                    campaignNotesData={
                        example.playerCharacter.campaignNotesData
                    }
                    actions={example.playerCharacter.actions}
                />
                <SpellsPage
                    spellAttackProficiency={
                        example.playerCharacter.spellAttackProficiency
                    }
                    spellcastingAbilityModifier={
                        GetAbilityModifierFromScores(example.playerCharacter.spellcastingAbilityModifier, example.playerCharacter.abilityScores)
                    }
                    currentLevel={example.playerCharacter.level}
                    bonuses={example.playerCharacter.bonuses}
                    /* Need to calculate the bonus total from the bonuses given */
                    spellSlots={example.playerCharacter.spellSlots}
                    magicTraditions={example.playerCharacter.magicTraditions}
                    spells={example.playerCharacter.spells}
                />
            </ScrollView>
        </View>
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
