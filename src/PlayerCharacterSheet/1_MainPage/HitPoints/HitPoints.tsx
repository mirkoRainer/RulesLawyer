import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export interface HitPointProps {
    max: number;
    current: number;
    temporary: number;
    dying: number;
    wounded: number;
}

interface State {}

export default class HitPoints extends Component<HitPointProps, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    HP: {this.props.current}/{this.props.max}:
                    {this.props.temporary}
                </Text>
                <Text>Dying {this.props.dying}</Text>
                <Text>Wounded {this.props.wounded}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 2,
        alignContent: "stretch",
        alignSelf: "stretch",
    },
    text: {},
});
