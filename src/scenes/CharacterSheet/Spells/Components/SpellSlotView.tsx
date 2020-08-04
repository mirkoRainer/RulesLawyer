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
            ? { ...styles.outOfSpells, ...styles.spellSlot }
            : { ...styles.text, ...styles.spellSlot };
    focusPoint = this.props.focus ? { flex: 3.9 } : {};
    view =
        this.props.maximum === 0 ? (
            <Layout>
            </Layout>
        ) : (
            <Layout
                style={{
                    ...this.spellSlotStyle,
                    ...styles.spellSlot,
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
        justifyContent: "center",
    },
    spellSlot: {
        flex: 3,
        width: 50
    },
    outOfSpells: {
        backgroundColor: "lightgray",
    },
    spellSlotUnavailable: {
        backgroundColor: "darkgray",
    },
});
