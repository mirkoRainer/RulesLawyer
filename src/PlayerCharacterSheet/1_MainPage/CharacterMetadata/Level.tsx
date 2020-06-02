import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

interface Props {
    level: number;
}

interface State {}

export default class Level extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Level: {this.props.level} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        alignSelf: "stretch",
        alignContent: "stretch",
    },
    text: {
        backgroundColor: "green",
    },
});
