import React from "react";
import {  StyleSheet } from "react-native";
import { Proficiencies } from "../../PF2eCoreLib/Proficiencies";
import {Layout, Text } from "@ui-kitten/components";

interface Props {
    proficiency: Proficiencies;
}


const ProficiencyArrayView: React.FC<Props> = (props) => {
    return (
        <Layout style={styles.container}>
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
        </Layout>
    );
};

export default ProficiencyArrayView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignSelf: "stretch",
        alignItems: "center",
    },
    profTextTrue: {
        flex: 1,
        fontSize: 12,
        backgroundColor: "black",
        textAlign: "center",
        justifyContent: "center",
        borderColor: "white",
        borderWidth: 1,
    },
    profTextFalse: {
        flex: 1,
        fontSize: 12,
        textAlign: "center",
        justifyContent: "center",
        borderColor: "black",
    },
});
