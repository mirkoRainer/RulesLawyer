import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
// eslint-disable-next-line no-unused-vars
import { AbilityScore, GetAbilityModifierFromScores, CalculateAbilityScoreModifier } from "../../Shared/PF2eCoreLib/AbilityScores";

export interface State {}

export default class AbilityScoreView extends Component<AbilityScore, State> {
    render() {
        return (
            <View style={styles.item}>
                <Text style={styles.ability}>{this.props.ability}:</Text>
                <Text style={styles.amount}>{this.props.amount}</Text>
                <Text style={styles.modifier}>{CalculateAbilityScoreModifier(this.props.amount)}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
    },
    ability: {
        flex: 2,
        textAlign: "right",
    },
    amount: {
        flex: 1,
        textAlign: "center",
    },
    modifier: {
        flex: 2,
    },
});
