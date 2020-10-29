import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

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
            <Layout style={styles.container}>
                <Layout style={styles.rowContainer}>
                    <Layout style={styles.borderlessContainer}>
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
                    </Layout>
                    <Layout style={styles.borderlessContainer}>
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
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        padding: 10,
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
