import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input } from 'react-native-elements';

interface Props {
    characterName: string;
}

interface State {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 2,
        alignContent: 'stretch',
        alignSelf: 'stretch',
    },
    text: {
        backgroundColor: 'green',
    },
});

export default class CharacterName extends Component<Props, State> {
    public static defaultProps = {
        characterName: 'Adventurer',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Character Name: {this.props.characterName} </Text>
            </View>
        );
    }
}
