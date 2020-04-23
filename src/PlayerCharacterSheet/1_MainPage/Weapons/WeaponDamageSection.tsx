import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

interface Props {
    damageDice: string; // should be a dice class
    abilityModifier: number;
    damageType: string;
    other: string;
    traits: string[];
}

interface State {}

export default class WeaponDamageSection extends Component<Props, State> {
    public static defaultProps = {};

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> {this.props.damageDice} </Text>
                <Text style={styles.text}> {this.props.abilityModifier} </Text>
                <Text style={styles.text}> {this.props.damageType} </Text>
                <Text style={styles.text}> {this.props.other} </Text>
                <Text style={styles.text}> {this.props.traits} </Text>
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
    },
    text: {
        flex: 1,
        width: 100,
    },
});
