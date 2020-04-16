import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {
    deity: string;
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

export default class Deity extends Component<Props, State> {
    public static defaultProps = {
        deity: 'Irori',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Deity: {this.props.deity} </Text>
            </View>
        );
    }
}
