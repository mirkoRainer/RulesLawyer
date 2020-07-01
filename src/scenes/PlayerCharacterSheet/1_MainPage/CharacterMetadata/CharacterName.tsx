import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, Dimensions } from "react-native";

interface Props {
    characterName: string;
    toggleModal: () => void;
}

const CharacterName: React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text} onLongPress={props.toggleModal} >
                {" "}
                Character Name: {props.characterName}{" "}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
    },
    text:{},
});

export default CharacterName;