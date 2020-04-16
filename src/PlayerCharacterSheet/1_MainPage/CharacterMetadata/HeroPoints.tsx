import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {}

interface State {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 2,
    },
    text: {
        flex: 1,
        width: 100,
        backgroundColor: 'green',
    },
});

export default class HeroPoints extends Component<Props, State> {
    public static defaultProps = {};

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> HeroPoints </Text>
            </View>
        );
    }
}
