import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
// eslint-disable-next-line no-unused-vars
import { IAbilityScore } from './IAbilityScores';

export interface State {}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
    },
    ability: {
        flex: 2,
        textAlign: 'right'
    },
    amount: {
        flex: 1,
        textAlign: 'center'
    },
    modifier: {
        flex: 2,
    }
}
);

export default class AbilityScoreView extends Component<IAbilityScore, State> {

    render() {
        return (
            <View style={styles.item}>
                <Text style={styles.ability}>
                    {this.props.ability}:
                </Text>
                <Text style={styles.amount}>
                    {this.props.amount}
                </Text>
                <Text style={styles.modifier}> 
                    +0
                </Text>
            </View>
        );
    }
}