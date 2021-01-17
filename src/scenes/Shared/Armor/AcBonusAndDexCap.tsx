import React from "react";
import { StyleSheet } from "react-native";
import { Input, Layout } from "@ui-kitten/components";

type Props = {
    acBonus: string | number;
    dexCap: string | number;
    changeACBonus: (bonus: string) => void;
    changeDexCap: (dexCap: string) => void;
};

const AcBonusAndDexCap: React.FC<Props> = (props) => {
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
                label={"AC Bonus"}
                placeholder="AC Bonus"
                value={props.acBonus.toString()}
                size="medium"
                keyboardType="numeric"
                onChangeText={props.changeACBonus}
                style={{ flex: 1, paddingHorizontal: 5 }}
            />
            <Input
                label={"Dexterity Cap"}
                placeholder="DEX Cap"
                value={props.dexCap.toString()}
                size="medium"
                keyboardType="numeric"
                onChangeText={props.changeDexCap}
                style={{ flex: 1, paddingHorizontal: 5 }}
            />
        </Layout>
    );
};

export default AcBonusAndDexCap;

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
