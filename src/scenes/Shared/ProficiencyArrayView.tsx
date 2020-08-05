import React from "react";
import {  StyleSheet } from "react-native";
import { Proficiencies } from "../../PF2eCoreLib/Proficiencies";
import {Layout, Text } from "@ui-kitten/components";

interface Props {
    proficiency: Proficiencies;
}

const ProficiencyArrayView: React.FC<Props> = (props) => {
    let trainedStyle;
    let expertStyle;
    let masterStyle;
    let legendaryStyle;
    let trainedCategory;
    let expertCategory;
    let masterCategory;
    let legendaryCategory;

    if (["Trained", "Expert", "Master", "Legendary"].includes(
        props.proficiency.toString()
    )) {
        trainedStyle = styles.profTextTrue;
        trainedCategory = "success";
    } else {
        trainedStyle = styles.profTextFalse;
    }

    if (["Expert", "Master", "Legendary"].includes(
        props.proficiency.toString()
    )) {
        expertStyle = styles.profTextTrue;
        expertCategory = "success";
    } else {
        expertStyle = styles.profTextFalse;
    }

    if (["Master", "Legendary"].includes(
        props.proficiency.toString()
    )) {
        masterStyle =  styles.profTextTrue;
        masterCategory = "success";
    } else {
        masterStyle = styles.profTextFalse;
    }

    if (["Legendary"].includes(
        props.proficiency.toString()
    )) {
        legendaryStyle = styles.profTextTrue;
        legendaryCategory = "success";
    } else {
        legendaryStyle = styles.profTextFalse;
    }

    return (
        <Layout style={styles.container}>
            <Text style={trainedStyle} category={trainedCategory}>T</Text>
            <Text style={expertStyle} category={expertCategory}>E</Text>
            <Text style={masterStyle} category={masterCategory}>M</Text>
            <Text style={legendaryStyle} category={legendaryCategory}>L</Text>
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
