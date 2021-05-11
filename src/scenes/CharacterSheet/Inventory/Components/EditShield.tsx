import React, { useEffect, useState } from "react";
import { Keyboard, StyleSheet } from "react-native";
import { Input, Layout, Text } from "@ui-kitten/components";
import { Shield } from "../../../../PF2eCoreLib/PlayerCharacter/Shield";
import { EditItemState } from "./EditItem";
import { isNumbersOnlyElseReturn0 } from "../../../Shared/Misc/StringToNumberHelper";
import { BonusType } from "../../../../PF2eCoreLib/BonusTypes";

type Props = {
    shield: Shield;
    state: EditItemState;
    setState: React.Dispatch<React.SetStateAction<EditItemState>>;
};

export const EditShield: React.FC<Props> = (props) => {
    const handleAcBonusChange = (text: string) => {
        const acBonusInput = isNumbersOnlyElseReturn0(text);
        props.setState({
            ...props.state,
            item: {
                ...props.state.item,
                acBonus: {
                    appliesTo: "ac",
                    type: BonusType.Circumstance,
                    source: props.shield.id.toString(),
                    amount: acBonusInput,
                },
            },
        });
    };
    const handleHardnessChange = (text: string) => {
        const hardness = isNumbersOnlyElseReturn0(text);
        props.setState({
            ...props.state,
            item: {
                ...props.state.item,
                hardness,
            },
        });
    };
    const handleHPChange = (text: string) => {
        let maxHP = isNumbersOnlyElseReturn0(text);
        if (maxHP <= 0) {
            maxHP = 1;
        }
        const breakThreshold = Math.max(Math.floor(maxHP / 2), 0);
        props.setState({
            ...props.state,
            item: {
                ...props.state.item,
                maxHP,
                breakThreshold,
            },
        });
    };
    const handleBreakThresholdChange = (text: string) => {
        let breakThreshold = isNumbersOnlyElseReturn0(text);
        if (breakThreshold > props.shield.maxHP) {
            breakThreshold = props.shield.maxHP;
        } else if (breakThreshold < 0) {
            breakThreshold = 0;
        }
        props.setState({
            ...props.state,
            item: {
                ...props.state.item,
                breakThreshold,
            },
        });
    };
    return (
        <Layout>
            <Input
                label={"AC Bonus"}
                placeholder="Enter AC bonus For Shield"
                value={
                    isNaN(props.shield.acBonus.amount)
                        ? ""
                        : props.shield.acBonus.amount.toString()
                }
                onChangeText={handleAcBonusChange}
                keyboardType="numeric"
                style={{ flex: 1, paddingHorizontal: 5 }}
            />
            <Input
                label={"Hardness"}
                placeholder="Enter Shield Hardness"
                value={
                    props.shield.hardness
                        ? props.shield.hardness.toString()
                        : "0"
                }
                onChangeText={handleHardnessChange}
                keyboardType="numeric"
                style={{ flex: 1, paddingHorizontal: 5 }}
            />
            <Input
                label={"Max HP"}
                placeholder="Enter Shield Max HP"
                value={props.shield.maxHP ? props.shield.maxHP.toString() : "0"}
                onChangeText={handleHPChange}
                keyboardType="numeric"
                style={{ flex: 1, paddingHorizontal: 5 }}
            />
            <Input
                label={"Break Threshold (Usually half Max HP)"}
                placeholder="Enter Shield Break Threshold"
                value={
                    props.shield.breakThreshold
                        ? props.shield.breakThreshold.toString()
                        : "0"
                }
                onChangeText={handleBreakThresholdChange}
                keyboardType="numeric"
                style={{ flex: 1, paddingHorizontal: 5 }}
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
