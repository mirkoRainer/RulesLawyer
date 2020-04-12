import React, { Component } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface Props {}

interface State {}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        paddingTop: 10,
        marginTop: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
    },
});

export default class CharacterMetadata extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return <View>Character Metadata</View>;
    }
}
