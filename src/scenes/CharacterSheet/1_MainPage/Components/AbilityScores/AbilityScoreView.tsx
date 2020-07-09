import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
// eslint-disable-next-line no-unused-vars
import {
    AbilityScore,
    CalculateAbilityScoreModifier,
    GetAbilityScoreAbbreviation,
} from "../../../../Shared/PF2eCoreLib/AbilityScores";

const AbilityScoreView: React.FC<AbilityScore> = (props) => {
    let formattedModifierString: string;
    const modifier = CalculateAbilityScoreModifier(props.score);
    formattedModifierString = modifier > 0 ? ("+" + modifier) : (modifier.toString());
    const abilityName = GetAbilityScoreAbbreviation(props.ability);

    return (
        <View style={styles.container}>
            <Text style={styles.ability}>{abilityName}:</Text>
            <Text style={styles.score}>{props.score}</Text>
            <Text style={styles.modifier}>
                {formattedModifierString}
            </Text>
        </View>
    );
};

export default AbilityScoreView;

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
