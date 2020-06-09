import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export interface ShieldProps {
    hasShield: boolean;
    acBonus: number;
    hardness: number;
    maxHP: number;
    currentHP: number;
}

export interface State {}

export default class Shield extends Component<ShieldProps, State> {
    render() {
        const shieldView = this.props.hasShield ? (
            <View style={styles.container}>
                <Text style={styles.text}>Shield: {this.props.acBonus}</Text>
                <Text style={styles.text}>Hardness: {this.props.hardness}</Text>
                <Text style={styles.text}>Max HP: {this.props.maxHP}</Text>
                <Text style={styles.text}>BT: {this.props.maxHP / 2}</Text>
                <Text style={styles.text}>
                    Current HP: {this.props.currentHP}
                </Text>
            </View>
        ) : (
            <View></View>
        );

        return { shieldView };
    }
}

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
