import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

interface Props {
    ancestry: string;
    heritage: string;
}

interface State {}

export default class AncestryAndHeritage extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ ...styles.text, ...styles.container }}>
                    {" "}
                    Ancestry: {this.props.ancestry}{" "}
                </Text>
                <Text style={{ ...styles.text, ...styles.container }}>
                    {" "}
                    Heritage: {this.props.heritage}{" "}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
        alignContent: "stretch",
        alignSelf: "stretch",
    },
    text: {},
});
