import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export interface Props {
    acBonus: number;
    hardness: number;
    maxHP: number;
    currentHP: number;
}

export interface State {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    text: {
        flex: 1,
        alignSelf: "stretch",
        textAlign: "center",
    },
});

export default class Shield extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Shield: {this.props.acBonus}</Text>
                <Text style={styles.text}>Hardness: {this.props.hardness}</Text>
                <Text style={styles.text}>Max HP: {this.props.maxHP}</Text>
                <Text style={styles.text}>BT: {this.props.maxHP / 2}</Text>
                <Text style={styles.text}>
                    Current HP: {this.props.currentHP}
                </Text>
            </View>
        );
    }
}
