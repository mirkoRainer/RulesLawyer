import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Proficiencies } from "../../../Shared/PF2eCoreLib/Proficiencies";
import { Ability } from "../../../Shared/PF2eCoreLib/Ability";
import { AbilityScoreArray } from "../../../Shared/PF2eCoreLib/AbilityScores";

export interface iClass {
    name:        string;
    subClass:    string;
    proficiency: Proficiencies;
    keyAbility:  keyof AbilityScoreArray;
}

interface State {}

export default class Class extends Component<iClass, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {" "}
                    Class: {this.props.name} ({this.props.subClass})
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        alignSelf: "stretch",
        alignContent: "stretch",
    },
    text: {
        flex: 1,
    },
});
