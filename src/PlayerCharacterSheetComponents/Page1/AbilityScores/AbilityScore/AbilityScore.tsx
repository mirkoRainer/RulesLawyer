
import React, { Component } from 'react';
import { Text } from 'react-native';

export interface Props {
     
}

export interface State {

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