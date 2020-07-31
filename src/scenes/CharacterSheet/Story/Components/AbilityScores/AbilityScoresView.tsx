import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { AbilityScoreArray } from "../../../../../PF2eCoreLib/AbilityScores";
import AbilityScoreView from "./AbilityScoreView";

export interface Props {
    abilityScores: AbilityScoreArray;
}
export interface State {}

export default class AbilityScores extends Component<Props, State> {
    render() {
        const Strength = this.props.abilityScores["Strength"];
        const Dexterity = this.props.abilityScores["Dexterity"];
        const Constitution = this.props.abilityScores["Constitution"];
        const Intelligence = this.props.abilityScores["Intelligence"];
        const Wisdom = this.props.abilityScores["Wisdom"];
        const Charisma = this.props.abilityScores["Charisma"];
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <View style={styles.borderlessContainer}>
                        <AbilityScoreView
                            ability={Strength.ability}
                            score={Strength.score}
                        />
                        <AbilityScoreView
                            ability={Dexterity.ability}
                            score={Dexterity.score}
                        />
                        <AbilityScoreView
                            ability={Constitution.ability}
                            score={Constitution.score}
                        />
                    </View>
                    <View style={styles.borderlessContainer}>
                        <AbilityScoreView
                            ability={Intelligence.ability}
                            score={Intelligence.score}
                        />
                        <AbilityScoreView
                            ability={Wisdom.ability}
                            score={Wisdom.score}
                        />
                        <AbilityScoreView
                            ability={Charisma.ability}
                            score={Charisma.score}
                        />
                    </View>
                </View>
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
    borderlessContainer: {
        flex: 1,
        alignSelf: "stretch",
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
        alignSelf: "center",
    },
    text: {
        alignSelf: "center",
    },
});
