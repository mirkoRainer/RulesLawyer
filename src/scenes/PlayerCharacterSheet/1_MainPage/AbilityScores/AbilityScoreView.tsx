import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
// eslint-disable-next-line no-unused-vars
import {
    AbilityScore,
    CalculateAbilityScoreModifier,
} from "../../../Shared/PF2eCoreLib/AbilityScores";

export interface State {}

export default class AbilityScoreView extends Component<AbilityScore, State> {
    FormatAbilityScoreModifierString(): string {
        const modifier = CalculateAbilityScoreModifier(this.props.score);
        if (modifier > 0) return "+" + modifier;
        return modifier.toString();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.ability}>{this.props.ability}:</Text>
                <Text style={styles.score}>{this.props.score}</Text>
                <Text style={styles.modifier}>
                    {this.FormatAbilityScoreModifierString()}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    ability: {
        flex: 3,
        textAlign: "right",
    },
    score: {
        flex: 2,
        textAlign: "center",
    },
    modifier: {
        flex: 2,
        textAlign: "left",
    },
});
