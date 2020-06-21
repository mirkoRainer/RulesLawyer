import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import CharacterSheet from "./CharacterSheet";

export default function App() {
    return (
        <View style={styles.container}>
            <CharacterSheet />
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
