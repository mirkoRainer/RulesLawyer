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
                <Text style={styles.text}>
                    {" "}
                    Ancestry: {this.props.ancestry}{" "}
                </Text>
                <Text style={styles.text}>
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
        borderWidth: 2,
        alignContent: "stretch",
        alignSelf: "stretch",
    },
    text: {
        backgroundColor: "green",
    },
});
