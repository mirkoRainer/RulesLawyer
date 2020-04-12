import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CharacterMetadata from './CharacterMetadata';
import { Dimensions } from 'react-native';

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
    text: {
        flex: 1,
        width: 100,
        backgroundColor: 'blue',
    },
    metadata: {
        flex: 1,
        backgroundColor: 'grey',
    },
});

export default class MainPage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Main Page </Text>
                <CharacterMetadata />
            </View>
        );
    }
}
