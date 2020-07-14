import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Proficiencies } from "./PF2eCoreLib/Proficiencies";
import { TouchableOpacity } from "react-native";

interface Props {
    proficiency: Proficiencies;
    onPress: (proficiency: Proficiencies) => void;
}


const ProficiencyArrayView: React.FC<Props> = (props) => {
    const handlePress = () => {
        console.debug("handlePress in ProficiencyArrayView");
        props.onPress(props.proficiency);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress} style={styles.container}>
                <Text
                    style={
                        ["Trained", "Expert", "Master", "Legendary"].includes(
                            props.proficiency.toString()
                        )
                            ? styles.profTextTrue
                            : styles.profTextFalse
                    }
                >
                    T
                </Text>
                <Text
                    style={
                        ["Expert", "Master", "Legendary"].includes(
                            props.proficiency.toString()
                        )
                            ? styles.profTextTrue
                            : styles.profTextFalse
                    }
                >
                    E
                </Text>
                <Text
                    style={
                        ["Master", "Legendary"].includes(
                            props.proficiency.toString()
                        )
                            ? styles.profTextTrue
                            : styles.profTextFalse
                    }
                >
                    M
                </Text>
                <Text
                    style={
                        ["Legendary"].includes(
                            props.proficiency.toString()
                        )
                            ? styles.profTextTrue
                            : styles.profTextFalse
                    }
                >
                    L
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProficiencyArrayView;

const styles = StyleSheet.create({
    container: {
        flex: 4,
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center",
    },
    profTextTrue: {
        flex: 1,
        fontSize: 12,
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 1,
    },
    profTextFalse: {
        flex: 1,
        fontSize: 12,
        textAlign: "center",
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 1,
    },
});
