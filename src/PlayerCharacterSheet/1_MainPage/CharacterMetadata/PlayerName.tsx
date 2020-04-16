import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {
    playerName: string;
}

interface State {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 2,
        alignContent: 'center',
        alignSelf: 'stretch',
    },
    text: {
        backgroundColor: 'green',
    },
});

export default class PlayerName extends Component<Props, State> {
    public static defaultProps = {
        playerName: 'Mirko',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> PlayerName: {this.props.playerName} </Text>
            </View>
        );
    }
}
