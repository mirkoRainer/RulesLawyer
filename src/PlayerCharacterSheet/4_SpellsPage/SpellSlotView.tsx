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
            ? { ...styles.outOfSpells, ...styles.bordered }
            : { ...styles.text, ...styles.bordered };
    view =
        this.props.maximum === 0 ? (
            <View
                style={{ ...styles.spellSlotUnavailable, ...styles.bordered }}
            >
                <Text style={styles.text}> - </Text>
                <Text style={styles.text}> {this.props.spellLevel} </Text>
                <Text style={styles.text}> - </Text>
            </View>
        ) : (
            <View style={{ ...this.spellSlotStyle, ...styles.bordered }}>
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
    text: {
        flex: 1,
        textAlign: "center",
    },
    bordered: {
        borderColor: "black",
        borderWidth: 1,
    },
    outOfSpells: {
        flex: 1,
        backgroundColor: "lightgray",
    },
    spellSlotUnavailable: {
        flex: 1,
        backgroundColor: "darkgray",
    },
});
