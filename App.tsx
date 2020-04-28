import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Header } from "react-native-elements";
import MainPage from "./src/PlayerCharacterSheet/1_MainPage/MainPage";
import FeatsAndInventoryPage from "./src/PlayerCharacterSheet/2_FeatsAndInventoryPage/FeatsAndInventoryPage";
import StoryAndActionsPage from "./src/PlayerCharacterSheet/3_StoryAndActionsPage/StoryAndActionsPage";
import SpellsPage from "./src/PlayerCharacterSheet/4_SpellsPage/SpellsPage";

export default function App() {
    const exampleData = {
        playerCharacter: {
            ancestryFeatsAndAbilities: ["Dwarf Stuff", "moar Dwarf stuff"],
            skillFeats: ["Quikc Repair", "Battle Medicine"],
            generalFeats: ["GeneralFeat 1", "General Feat 2"],
            classFeatsAndAbilities: ["Sneak Attack", "Surprise Attack"],
            bonusFeats: undefined,
        },
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
                <MainPage />
                <FeatsAndInventoryPage
                    ancestryFeatsAndAbilities={
                        exampleData.playerCharacter.ancestryFeatsAndAbilities
                    }
                    skillFeats={exampleData.playerCharacter.skillFeats}
                    generalFeats={exampleData.playerCharacter.generalFeats}
                    classFeatsAndAbilities={
                        exampleData.playerCharacter.classFeatsAndAbilities
                    }
                    bonusFeats={exampleData.playerCharacter.bonusFeats}
                />
                <StoryAndActionsPage />
                <SpellsPage />
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
