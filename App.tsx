import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Header } from "react-native-elements";
import MainPage from "./src/PlayerCharacterSheet/1_MainPage/MainPage";
import FeatsAndInventoryPage from "./src/PlayerCharacterSheet/2_FeatsAndInventoryPage/FeatsAndInventoryPage";
import StoryAndActionsPage from "./src/PlayerCharacterSheet/3_StoryAndActionsPage/StoryAndActionsPage";
import SpellsPage from "./src/PlayerCharacterSheet/4_SpellsPage/SpellsPage";
import { example } from "./examplePlayerCharacter";

export default function App() {
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
                    characterMetadata={example.playerCharacter.metadata}
                    classDCProficiency={
                        example.playerCharacter.pcClass.proficiency
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
