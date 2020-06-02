import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

interface Props {
    pcClass: string;
    subClass: string;
}

interface State {}

export default class Class extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {" "}
                    Class: {this.props.pcClass} ({this.props.subClass})
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
