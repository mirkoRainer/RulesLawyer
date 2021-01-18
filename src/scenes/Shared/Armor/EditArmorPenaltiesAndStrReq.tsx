import React from "react";
import { StyleSheet } from "react-native";
import { Input, Layout, Text } from "@ui-kitten/components";

type Props = {
    changeCheckPenalty: (checkPenaltyAmount: string) => void;
    changeSpeedPenalty: (checkPenaltyAmount: string) => void;
    changeStrengthRequirement: (checkPenaltyAmount: string) => void;
    checkPenaltyAmount: number | string;
    speedPenaltyAmount: number | string;
    strengthRequirement: number | string;
};

export const EditArmorPenaltiesAndStrReq: React.FC<Props> = ({
    changeCheckPenalty,
    changeSpeedPenalty,
    changeStrengthRequirement,
    checkPenaltyAmount,
    speedPenaltyAmount,
    strengthRequirement,
}) => {
    return (
        <Layout
            style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
                paddingBottom: 10,
            }}
        >
            <Input
                label={"Check Penalty"}
                placeholder="Penalty"
                value={checkPenaltyAmount.toString()}
                size="medium"
                keyboardType="numeric"
                onChangeText={changeCheckPenalty}
                style={{ flex: 1, paddingHorizontal: 5 }}
            />
            <Input
                label={"Speed Penalty"}
                placeholder="Penalty"
                value={speedPenaltyAmount.toString()}
                size="medium"
                keyboardType="numeric"
                onChangeText={changeSpeedPenalty}
                style={{ flex: 1, paddingHorizontal: 5 }}
            />
            <Input
                label={"Strength Req."}
                placeholder="STR Req"
                value={strengthRequirement.toString()}
                size="medium"
                keyboardType="numeric"
                onChangeText={changeStrengthRequirement}
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
