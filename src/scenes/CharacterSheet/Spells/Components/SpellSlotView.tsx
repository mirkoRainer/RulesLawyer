import React, { Component } from "react";
import {  StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

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
            <Layout
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
            </Layout>
        ) : (
            <Layout
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
            </Layout>
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
