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
        backgroundColor: 'yellow',
    },
});

export default class SpellsPage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Spells Page </Text>
            </View>
        );
    }
}
