import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

interface Props {
    experiencePoints: number;
}

interface State {}

export default class ExperiencePoints extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {" "}
                    ExperiencePoints: {this.props.experiencePoints}{" "}
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
    text: {},
});
