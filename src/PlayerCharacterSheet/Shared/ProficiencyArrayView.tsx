import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

interface Props {
    proficiency: string;
}

interface State {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 2,
        alignContent: "stretch",
        alignSelf: "stretch",
    },
    text: {
        flex: 1,
        width: 100,
        backgroundColor: "green",
    },
});

export default class ProficiencyArrayView extends Component<Props, State> {
    public static defaultProps = {};

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {" "}
                    [[{this.props.proficiency} Array]]{" "}
                </Text>
            </View>
        );
    }
}
