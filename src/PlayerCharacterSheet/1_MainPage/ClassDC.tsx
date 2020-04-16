import React, { Component } from 'react';
import { Text } from 'react-native';

export interface Props {
    classDC: number;
}

interface State {
    classDcTotal: number;
    classDCKeyAbilityModifier: number;
    classDCProficiencyBonus: number;
    classDcIsTrained: boolean;
    classDcIsExpert: boolean;
    classDcIsMaster: boolean;
    classDcIsLegendary: boolean;
    classDCItemBonus: number;
}

export default class ClassDC extends Component<Props, State> {
    public static defaultProps = {};

    render() {
        return (
            <Text>
                ============= Class DC: {this.props.classDC}
                =============
            </Text>
        );
    }
}
