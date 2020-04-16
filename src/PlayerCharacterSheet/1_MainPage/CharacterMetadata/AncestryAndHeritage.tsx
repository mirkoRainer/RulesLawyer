import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {
    ancestry: string;
    heritage: string;
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

export default class AncestryAndHeritage extends Component<Props, State> {
    public static defaultProps = {
        ancestry: 'Dwarf',
        heritage: 'Anvil Dwarf',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Ancestry: {this.props.ancestry} </Text>
                <Text style={styles.text}> Heritage: {this.props.heritage} </Text>
            </View>
        );
    }
}
