import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, Dimensions } from "react-native";
import Modal from "react-native-modal";
import { PlayerCharacterActionTypes, CHANGE_CHARACTER_NAME } from "../../../store/CharacterStoreActionTypes";
import PlayerCharacterStore from "../../../store/CharacterStore";

interface Props {
    characterName: string;
}

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

    function changeCharacterName(text: string) {
        PlayerCharacterStore.dispatch({
            type: CHANGE_CHARACTER_NAME,
            payload: text
        }
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text} onPress={handleDoubleTap} onLongPress={toggleModal} >
                {" "}
                Character Name: {props.characterName}{" "}
            </Text>
            <Modal 
                isVisible={isModalVisible}
                avoidKeyboard={true}
                onBackdropPress={() => setModalVisible(false)}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection={"left"}
                style={styles.modal}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.modalText}>Editing Character Name:</Text>
                    <TextInput 
                        style={styles.modalTextInput}
                        placeholder={"Character Name"} 
                        onChangeText={changeCharacterName}
                    >
                        {props.characterName}
                    </TextInput>
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
    },
    text:{},
    modalContainer: {
        justifyContent: "center",
        backgroundColor: "white"
    },
    modalText: {
        justifyContent: "center",
        textAlign: "center"
    },
    modalTextInput: {
        justifyContent: "center",
        textAlign: "center",
        borderBottomColor: "black",
        borderBottomWidth: 2,
        width: "100%",
        fontSize: 32,
        backgroundColor: "#e4dada"
    },
    modal: {
        // backgroundColor: "white",
        maxHeight: Dimensions.get("window").height / 4,
        top: "30%"
    }
});

export default CharacterName;