import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

interface Props {
    playerName: string;
}

interface State {}

export default class PlayerName extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {" "}
                    PlayerName: {this.props.playerName}{" "}
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
        alignContent: "stretch",
        alignSelf: "stretch",
    },
    text: {},
});
