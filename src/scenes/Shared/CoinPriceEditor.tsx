import React from "react";
import { StyleSheet } from "react-native";
import { Input, Layout, Text } from "@ui-kitten/components";
import { Price } from "../../PF2eCoreLib/PlayerCharacter/PlayerCharacter";
import {
    isNumbersOnly,
    isNumbersOnlyElseReturn0,
} from "./Misc/StringToNumberHelper";

const CoinPriceEditor: React.FC<Props> = (props) => {
    let currentPrice: Price = {
        Copper: 0,
        Silver: 0,
        Gold: 0,
        Platinum: 0,
    };
    if (props.currentPrice) {
        currentPrice = props.currentPrice;
    }
    return (
        <>
            <Text
                category="h6"
                style={{ textAlign: "center", paddingVertical: 5 }}
            >
                Price
            </Text>
            <Layout style={{ flex: 1, flexDirection: "row" }}>
                <Layout style={styles.inputColumn}>
                    <Input
                        label={"PP"}
                        value={currentPrice.Platinum.toString()}
                        size="medium"
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            let value = isNumbersOnlyElseReturn0(text);
                            props.updatePrice({
                                ...currentPrice,
                                Platinum: value,
                            });
                        }}
                    />
                    <Input
                        label={"SP"}
                        value={currentPrice.Silver.toString()}
                        size="medium"
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            let value = isNumbersOnlyElseReturn0(text);
                            props.updatePrice({
                                ...currentPrice,
                                Silver: value,
                            });
                        }}
                    />
                </Layout>
                <Layout style={styles.inputColumn}>
                    <Input
                        label={"GP"}
                        value={currentPrice.Gold.toString()}
                        size="medium"
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            let value = isNumbersOnlyElseReturn0(text);
                            props.updatePrice({
                                ...currentPrice,
                                Gold: value,
                            });
                        }}
                    />
                    <Input
                        label={"CP"}
                        value={currentPrice.Copper.toString()}
                        size="medium"
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            let value = isNumbersOnlyElseReturn0(text);
                            props.updatePrice({
                                ...currentPrice,
                                Copper: value,
                            });
                        }}
                    />
                </Layout>
            </Layout>
        </>
    );
};

type Props = {
    currentPrice: Price | undefined;
    updatePrice: (currentPrice: Price) => void;
};

const styles = StyleSheet.create({
    inputColumn: {
        flex: 1,
    },
});

export default CoinPriceEditor;
