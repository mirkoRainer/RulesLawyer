import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {}

interface State {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
    },
});

export default class CharacterMetadata extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Character Metadata</Text>
            </View>
        );
    }
}
