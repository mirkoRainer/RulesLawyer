import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export interface SpellSlotProps {
    maximum: number;
    current: number;
    spellLevel: string;
    focus?: boolean;
}

interface State {}

export default class SpellSlotView extends Component<SpellSlotProps, State> {
    spellSlotStyle =
        this.props.current === 0
            ? { ...styles.outOfSpells, ...styles.bordered }
            : { ...styles.text, ...styles.bordered };
    focusPoint = this.props.focus ? { flex: 3.9 } : {};
    view =
        this.props.maximum === 0 ? (
            <View
                style={{
                    ...styles.spellSlotUnavailable,
                    ...styles.bordered,
                    ...this.focusPoint,
                }}
            >
                <Text style={styles.text}> - </Text>
                <Text style={{ ...styles.text, ...styles.spellLevel }}>
                    {" "}
                    {this.props.spellLevel}{" "}
                </Text>
                <Text style={styles.text}> - </Text>
            </View>
        ) : (
            <View
                style={{
                    ...this.spellSlotStyle,
                    ...styles.bordered,
                    ...this.focusPoint,
                }}
            >
                <Text style={styles.text}> {this.props.current} </Text>
                <Text style={{ ...styles.text, ...styles.spellLevel }}>
                    {" "}
                    {this.props.spellLevel}{" "}
                </Text>
                <Text style={styles.text}> {this.props.maximum} </Text>
            </View>
        );

    render() {
        return this.view;
    }
}

const styles = StyleSheet.create({
    text: {
        flex: 3,
        textAlign: "center",
    },
    spellLevel: {
        fontWeight: "bold",
        justifyContent: "center",
        fontSize: 12,
    },
    bordered: {
        borderColor: "black",
        borderWidth: 1,
        flex: 3,
    },
    outOfSpells: {
        backgroundColor: "lightgray",
    },
    spellSlotUnavailable: {
        backgroundColor: "darkgray",
    },
});
