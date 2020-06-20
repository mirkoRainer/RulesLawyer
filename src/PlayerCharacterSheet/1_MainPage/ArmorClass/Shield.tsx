import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export interface ShieldProps {
    hasShield: boolean;
    acBonus: number;
    hardness: number;
    maxHP: number;
    breakThreshold: number;
    currentHP: number;
}

interface Props {
    shieldProps: ShieldProps;
}

export interface State {}

export default class Shield extends Component<Props, State> {
    render() {
        const shieldView = this.props.shieldProps.hasShield ? (
            <View style={styles.container}>
                <Text style={styles.text}>Shield Bonus: +{this.props.shieldProps.acBonus}</Text>
                <Text style={styles.text}>Hardness: {this.props.shieldProps.hardness}</Text>
                <Text style={styles.text}>Max HP: {this.props.shieldProps.maxHP}</Text>
                <Text style={styles.text}>BT: {this.props.shieldProps.breakThreshold}</Text>
                <Text style={styles.text}>
                    Current HP: {this.props.shieldProps.currentHP}
                </Text>
            </View>
        ) : (
            <View></View>
        );

        return shieldView;
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
