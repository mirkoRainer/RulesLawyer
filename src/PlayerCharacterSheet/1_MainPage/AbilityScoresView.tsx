import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { IAbilityScore } from "./AbilityScores/IAbilityScores";
import AbilityScoreView from "./AbilityScores/AbilityScoreView";

export interface Props {
    abilityScores: IAbilityScore[];
}
export interface State {}

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

export default class AbilityScoresView extends Component<Props, State> {
    renderItem = ({ item }: { item: IAbilityScore }) => (
        <AbilityScoreView ability={item.ability} amount={item.amount} />
    );
    keyExtractor = (item: IAbilityScore) => item.ability;

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Ability Scores</Text>
                <FlatList<IAbilityScore>
                    data={this.props.abilityScores}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        );
    }
}
