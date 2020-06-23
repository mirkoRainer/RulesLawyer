import React, { Component, useState } from "react";
import { View, StyleSheet, Text, TextInputComponent, TextInput, Button, ShadowPropTypesIOS } from "react-native";
import Modal from "react-native-modal";

interface Props {
    characterName: string;
}

interface State {}

const CharacterName: React.FC<Props> = (props) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    let lastTap = 0;
    const handleDoubleTap = () => {
        const now = Date.now();
        const DOUBLE_TAP_DELAY = 300;
        if (lastTap && (now - lastTap) < DOUBLE_TAP_DELAY) {
            setModalVisible(!isModalVisible);
        } else {
            lastTap = now;
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text} onPress={handleDoubleTap} >
                {" "}
                Character Name: {props.characterName}{" "}
            </Text>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modal}>
                    <TextInput></TextInput>
                    <Button title="Done" onPress={toggleModal} />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        alignContent: "stretch",
        alignSelf: "stretch",
    },
    text: {},
    modal: {
        flex: 1
    }
});

export default CharacterName;