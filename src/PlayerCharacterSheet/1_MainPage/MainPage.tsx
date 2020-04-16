import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CharacterMetadata from './CharacterMetadata';
import AbilityScores from './AbilityScoresView';
import { Dimensions } from 'react-native';
import { IAbilityScore } from './AbilityScores/IAbilityScores';

var width: number = Dimensions.get('window').width; //full width

interface Props {}

interface State {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 2,
        width: width,
    },
});

export default class MainPage extends Component<Props, State> {
    public static defaultProps = {};
    scores: IAbilityScore[] = [
        { amount: 10, ability: 'Strength'},
        { amount: 10, ability: 'Dexterity'},
        { amount: 10, ability: 'Constitution'},
        { amount: 10, ability: 'Intelligence'},
        { amount: 10, ability: 'Wisdom'},
        { amount: 10, ability: 'Charisma'},
    ]
    render() {
        return (
            <View style={styles.container}>
                <CharacterMetadata />
                <AbilityScores abilityScores={this.scores} />
            </View>
        );
    }
}
