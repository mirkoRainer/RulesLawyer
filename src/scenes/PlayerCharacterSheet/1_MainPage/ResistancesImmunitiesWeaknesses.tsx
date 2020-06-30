import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export interface ResistancesImmunitiesWeaknessesProps {
    resistances: string;
    immunities: string;
    weaknesses: string;
}

interface State {}

export default class ResistancesImmunitiesWeaknesses extends Component<ResistancesImmunitiesWeaknessesProps, State> {
    render() {
        const resistancesDisplay: string = this.props.resistances;
        const immunitiesDisplay: string = this.props.immunities;
        const weaknessesDisplay: string = this.props.weaknesses;

        return (
            <View style={styles.container}>
                <Text>Resistances: {resistancesDisplay}</Text>
                <Text>Immunities: {immunitiesDisplay}</Text>
                <Text>Weaknesses: {weaknessesDisplay}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignContent: "stretch",
        alignSelf: "stretch",
    },
    text: {
        flex: 1,
        alignSelf: "center",
    },
    text2: {
        flex: 2,
        alignSelf: "center",
    },
});
