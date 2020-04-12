import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export interface Props {
    characterName: string;
}

export interface State {

};

export default class PlayerCharacterMetaData extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Text>
                =============
                This is PlayerCharacterMetaData.
                characterName: {this.props.characterName}
                =============
            </Text>
        )
    }
}