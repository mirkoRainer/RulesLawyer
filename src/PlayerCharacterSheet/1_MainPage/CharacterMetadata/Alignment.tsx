import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {
    alignment: string;
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

export default class Alignment extends Component<Props, State> {
    public static defaultProps = {
        alignment: 'LN'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Alignment: {this.props.alignment} </Text>
            </View>
        );
    }
}
