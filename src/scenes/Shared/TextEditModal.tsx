import React, { useEffect, useState } from "react";
import { Modal, Picker, View, Text, StyleSheet, TextInput} from "react-native";
import { Icon, Input } from "react-native-elements";


type Props = {
    visible: boolean;
    title: string;
    onClose:() => void;
    onSelect: (value: string) => void;
    value?: string;
}

const TextEditModal: React.FC<Props> = ({
    visible,
    title,
    onClose,
    onSelect,
    value
}) => {
    const [textValue, setTextValue] = useState<string>("Value");

    useEffect(() => {
        if (value) {
            setTextValue(value);
        }
    }, [value]);

    const changeCharacterName = () => {

    };

    return (
        <Modal animated transparent visible={visible} animationType="fade" >
            <View style={styles.container}>
                <View style={styles.pickerContainer}>
                    <View style={styles.header}>
                        <Icon name="close" onPress={onClose}/>
                        <Text>{title || "Placeholder"}</Text>
                        <Icon name="check" />
                    </View>
                    <View>
                        <TextInput 
                            style={styles.modalTextInput}
                            placeholder={"Character Name"} 
                            onChangeText={changeCharacterName}
                        >
                            {value}
                        </TextInput>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    pickerContainer: {
        height: 200,
        width: "100%",
        backgroundColor: "white"
    },
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#eee",
        padding: 10
    },
    text: {
        alignSelf: "center",
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
});

export default TextEditModal;