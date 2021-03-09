import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

import {
    AbilityScore,
    AbilityScoreArray,
} from "../../../../../PF2eCoreLib/AbilityScores";
import AbilityScoreView from "./AbilityScoreView";

export interface Props {
    abilityScores: AbilityScoreArray;
    companion?: boolean;
}
export interface State {}

export default class AbilityScores extends Component<Props, State> {
    render() {
        const Strength: AbilityScore = this.props.abilityScores["Strength"];
        const Dexterity: AbilityScore = this.props.abilityScores["Dexterity"];
        const Constitution: AbilityScore = this.props.abilityScores[
            "Constitution"
        ];
        const Intelligence: AbilityScore = this.props.abilityScores[
            "Intelligence"
        ];
        const Wisdom: AbilityScore = this.props.abilityScores["Wisdom"];
        const Charisma: AbilityScore = this.props.abilityScores["Charisma"];
        return (
            <Layout style={styles.container}>
                <Layout style={styles.rowContainer}>
                    <Layout style={styles.borderlessContainer}>
                        <AbilityScoreView
                            abilityScore={Strength}
                            companion={this.props.companion}
                        />
                        <AbilityScoreView
                            abilityScore={Dexterity}
                            companion={this.props.companion}
                        />
                        <AbilityScoreView
                            abilityScore={Constitution}
                            companion={this.props.companion}
                        />
                    </Layout>
                    <Layout style={styles.borderlessContainer}>
                        <AbilityScoreView
                            abilityScore={Intelligence}
                            companion={this.props.companion}
                        />
                        <AbilityScoreView
                            abilityScore={Wisdom}
                            companion={this.props.companion}
                        />
                        <AbilityScoreView
                            abilityScore={Charisma}
                            companion={this.props.companion}
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
