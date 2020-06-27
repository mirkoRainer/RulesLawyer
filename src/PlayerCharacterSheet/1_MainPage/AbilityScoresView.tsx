import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { AbilityScoreArray } from "../Shared/PF2eCoreLib/AbilityScores";
import AbilityScoreView from "./AbilityScores/AbilityScoreView";

export interface Props {
    abilityScores: AbilityScoreArray;
}
export interface State {}


export default class AbilityScores extends Component<Props, State> {
    render() {
        const strength = this.props.abilityScores["strength"];
        const dexterity = this.props.abilityScores["dexterity"];
        const constitution = this.props.abilityScores["constitution"];
        const intelligence = this.props.abilityScores["intelligence"];
        const wisdom = this.props.abilityScores["wisdom"];
        const charisma = this.props.abilityScores["charisma"];
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Ability Scores</Text>
                <AbilityScoreView ability={strength.ability} score={strength.score} />
                <AbilityScoreView ability={dexterity.ability} score={dexterity.score} />
                <AbilityScoreView ability={constitution.ability} score={constitution.score} />
                <AbilityScoreView ability={intelligence.ability} score={intelligence.score} />
                <AbilityScoreView ability={wisdom.ability} score={wisdom.score} />
                <AbilityScoreView ability={charisma.ability} score={charisma.score} />
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
    },
    text: {
        alignSelf: "center",
    },
});