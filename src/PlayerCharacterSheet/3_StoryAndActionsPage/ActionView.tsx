import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Action } from "./ActionsAndActivities";

interface Props {
    action: Action;
}

interface State {}

export default class ActionView extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> ActionView </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
    },
    text: {
        flex: 1,
        width: 100,
        backgroundColor: "green",
    },
});
