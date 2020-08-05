import React from "react";
import {  StyleSheet } from "react-native";
import { Layout, Text, Icon, Button } from "@ui-kitten/components";

export interface SpellSlotProps {
    maximum: number;
    current: number;
    spellLevel: string;
    focus?: boolean;
}

interface State {}

const SpellSlotView: React.FC<SpellSlotProps> = (props) => {
    const spellSlotStyle =
        props.current === 0
            ? { ...styles.outOfSpells, ...styles.spellSlot }
            : { ...styles.spellSlot };
    const focusPoint = props.focus ? { flex: 3.9 } : {};
    const UpIcon = (props) => (
        <Icon {...props} name='arrow-ios-upward-outline'/>
    );
    const DownIcon = (props) => (
        <Icon {...props} name='arrow-ios-downward-outline'/>
    );
    const view =
        props.maximum === 0 ? (
            <Layout>
            </Layout>
        ) : (
            <Layout
                style={{
                    ...spellSlotStyle,
                    ...styles.spellSlot,
                    ...focusPoint,
                }}
            >
                <Button
                    style={styles.button}
                    appearance='ghost'
                    accessoryRight={UpIcon}
                    size='small'
                >{props.current.toString()}</Button>
                <Text style={{ ...styles.text, ...styles.spellLevel }} category='h6'>
                    {props.spellLevel}
                </Text>
                <Button
                    style={styles.button}
                    appearance='ghost'
                    accessoryRight={DownIcon}
                    size='small'
                >{props.maximum.toString()}</Button>
            </Layout>
        );

    return view;
};

export default SpellSlotView;

const styles = StyleSheet.create({
    text: {
        flex: 1,
        textAlign: "center",
        alignSelf: "flex-start",
        alignContent: "flex-start",
    },
    spellLevel: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
    },
    spellSlot: {
        flex: 1,
        width: 55,
        borderLeftWidth: 1
    },
    outOfSpells: {
        backgroundColor: "lightgray",
    },
    spellSlotUnavailable: {
        backgroundColor: "darkgray",
    },
    button: {
    },
    horizontal: {
        flex: 1,
        flexDirection: "row"
    }
});
