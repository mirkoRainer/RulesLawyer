import React, { Component } from 'react';
import { Text } from 'react-native';

export interface Props {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

export interface State {

};

export default class AbilityScores extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Text>
                =============
                Ability Scores.
                STR: {this.props.strength}
                DEX: {this.props.dexterity}
                CON: {this.props.constitution}
                INT: {this.props.intelligence}
                WIS: {this.props.wisdom}
                CHA: {this.props.charisma}
                =============
            </Text>
        )
    }
}