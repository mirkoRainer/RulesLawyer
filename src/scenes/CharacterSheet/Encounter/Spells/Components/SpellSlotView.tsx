import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Icon, Button } from "@ui-kitten/components";
import { SpellSlot } from "../../../../../PF2eCoreLib/PlayerCharacter/PlayerCharacter";
import { useFocusEffect } from "@react-navigation/native";

type Props = {
    spellSlot: SpellSlot;
    increase: (index: number) => void;
    decrease: (index: number) => void;
    index: number;
};

const SpellSlotView: React.FC<Props> = (props) => {
    const spellSlotStyle =
        props.spellSlot.current === 0
            ? { ...styles.outOfSpells, ...styles.spellSlot }
            : { ...styles.spellSlot };
    const focusPoint = props.spellSlot.focus ? { flex: 3.9 } : {};
    const UpIcon = (props: any) => (
        <Icon {...props} name="arrow-ios-upward-outline" />
    );
    const DownIcon = (props: any) => (
        <Icon {...props} name="arrow-ios-downward-outline" />
    );
    const increase = () => {
        props.increase(props.index);
    };
    const decrease = () => {
        props.decrease(props.index);
    };

    const view =
        props.spellSlot.maximum === 0 ? (
            <Layout></Layout>
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
                    appearance="ghost"
                    accessoryRight={UpIcon}
                    size="small"
                    onPress={increase}
                >
                    {props.spellSlot.current.toString()}
                </Button>
                <Text
                    style={{ ...styles.text, ...styles.spellLevel }}
                    category="h6"
                >
                    {props.spellSlot.spellLevel}
                </Text>
                <Button
                    style={styles.button}
                    appearance="ghost"
                    accessoryRight={DownIcon}
                    size="small"
                    onPress={decrease}
                >
                    {props.spellSlot.maximum}
                </Button>
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
        width: 70,
        borderLeftWidth: 1,
        padding: 5,
    },
    outOfSpells: {
        backgroundColor: "lightgray",
    },
    spellSlotUnavailable: {
        backgroundColor: "darkgray",
    },
    button: {},
    horizontal: {
        flex: 1,
        flexDirection: "row",
    },
});
