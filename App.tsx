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
import { GetAbilityModifier } from "./src/PlayerCharacterSheet/Shared/PF2eCoreLib/AbilityScores";

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
        keyAbilityModifier: GetAbilityModifier(example.playerCharacter.class.keyAbility, example.playerCharacter.abilityScores),
        proficiency: Proficiencies;
        level: number;
        itemBonus: number;
        is10base?: boolean;
        isACBase?: boolean;
        dexCap?: number;
        descriptor?: string;
        armorPenalty?: number;
    };

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
                    classDCProficiency={
                        example.playerCharacter.class.proficiency
                    }
                    acProficiency={example.playerCharacter.ac}
                    level={example.playerCharacter.level}
                    armorProficiency={example.playerCharacter.armorProficiency}
                    shieldProps={example.playerCharacter.shield}
                    saves={example.playerCharacter.saves}
                    hitPoints={example.playerCharacter.hitPoints}
                    resistances={example.playerCharacter.resistances}
                    immunities={example.playerCharacter.immunities}
                    conditions={example.playerCharacter.conditions}
                    perception={example.playerCharacter.perception}
                    movement={example.playerCharacter.movement}
                    weaponProficiencies={
                        example.playerCharacter.weaponProficiencies
                    }
                    weapons={example.playerCharacter.weapons}
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
                        example.playerCharacter.spellcastingAbilityModifier
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
