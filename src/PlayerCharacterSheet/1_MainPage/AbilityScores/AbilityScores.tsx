import React, { Component } from 'react';
import { Text } from 'react-native';
import AbilityScores from './AbilityScores';

export interface Props {
    scores: AbilityScores
}

export interface State {
    strengthScore: number;
    dexterityScore: number;
    constitutionScore: number;
    intelligenceScore: number;
    wisdomScore: number;
    charismaScore: number;
    strengthModifier: string;
    dexterityModifier: string;
    constitutionModifier: string;
    intelligenceModifier: string;
    wisdomModifier: string;
    charismaModifier: string;
};

export default class AbilityScoresView extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.setState((state, props) => ({
            strengthScore: props.scores.strength,
            dexterityScore: props.scores.dexterity,
            constitutionScore: props.scores.constitution,
            intelligenceScore: props.scores.intelligence,
            wisdomScore: props.scores.wisdom,
            charismaScore: props.scores.charisma,
        }));
    }

    render() {
        return (
            <Text>
                =============
                Ability Scores.
                <AbilityScore score=10 ability='strength' />
                STR: {this.state.scores.strength}
                DEX: {this.state.scores.dexterity}
                CON: {this.state.scores.constitution}
                INT: {this.state.scores.intelligence}
                WIS: {this.state.scores.wisdom}
                CHA: {this.state.scores.charisma}
                =============
            </Text>
        )
    }
}