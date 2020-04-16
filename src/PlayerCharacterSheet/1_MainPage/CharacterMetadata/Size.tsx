import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {}

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

export default class Size extends Component<Props, State> {
    public static defaultProps = {};

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Size </Text>
            </View>
        );
    }
}
