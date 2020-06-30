import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export interface ConditionsProps {
    conditions: string;
}

interface State {}

export default class Conditions extends Component<ConditionsProps, State> {
    render() {
        const conditions: string = this.props.conditions;

        return (
            <View style={styles.container}>
                <Text>Conditions: {conditions}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "stretch",
        alignSelf: "stretch",
    },
    text: {
        flex: 1,
        alignSelf: "center",
    },
    text2: {
        flex: 2,
        alignSelf: "center",
    },
});