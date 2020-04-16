import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {
    background: string,
}

interface State {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 2,
        alignContent: 'stretch',
        alignSelf: 'stretch'
    },
    text: {
        backgroundColor: 'green'
    }
});

export default class Background extends Component<Props, State> {
    public static defaultProps = {
        background: 'Emancipated'
    };

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Background: {this.props.background}</Text>
            </View>
        );
    }
}
