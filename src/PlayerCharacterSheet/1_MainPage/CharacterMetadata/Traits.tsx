import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {
    traits: string
}

interface State {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 2,
        alignSelf: 'stretch',
        alignContent: 'stretch',
    },
    text: {
        backgroundColor: 'green',
    },
});

export default class Traits extends Component<Props, State> {
    public static defaultProps = {
        traits: 'Dwarf, Humanoid'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Traits: {this.props.traits} </Text>
            </View>
        );
    }
}
