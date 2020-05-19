import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export interface SpellSlotProps {
    maximum: number;
    current: number;
    spellLevel: string;
}

interface State {}

export default class SpellSlotView extends Component<SpellSlotProps, State> {
    spellSlotStyle =
        this.props.current === 0
            ? styles.outOfSpells
            : styles.hasSpellsAvailable;
    view =
        this.props.maximum === 0 ? (
            <View style={styles.spellSlotUnavailable}>
                <Text style={styles.text}> - </Text>
                <Text style={styles.text}> {this.props.spellLevel} </Text>
                <Text style={styles.text}> - </Text>
            </View>
        ) : (
            <View style={this.spellSlotStyle}>
                <Text style={styles.text}> {this.props.current} </Text>
                <Text style={styles.text}> {this.props.spellLevel} </Text>
                <Text style={styles.text}> {this.props.maximum} </Text>
            </View>
        );

    render() {
        return this.view;
    }
}

const styles = StyleSheet.create({
    hasSpellsAvailable: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
    },
    text: {
        flex: 1,
        textAlign: "center",
    },
    outOfSpells: {
        flex: 1,
        backgroundColor: "lightgray",
        borderColor: "black",
        borderWidth: 2,
    },
    spellSlotUnavailable: {
        flex: 1,
        backgroundColor: "darkgray",
        borderColor: "black",
        borderWidth: 2,
    },
});
