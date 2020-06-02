import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

interface Props {
    traits: string[];
}

interface State {}

export default class Traits extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {" "}
                    Traits: {this.props.traits.join(",")}{" "}
                </Text>
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
        flex: 1,
    },
});
