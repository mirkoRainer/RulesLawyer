import { Card, Text, Layout } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import { Item } from "../../../../PF2eCoreLib/PlayerCharacter";
import { prop } from "../../../../PF2eCoreLib/TypescriptEvolution";
import { getBulkString } from "../InventoryHelper";

type Props = {
    item: Item;
    index: number;
    cardStatus: "primary" | "success" | "info" | "warning" | "danger" | "basic";
};

export const ItemView: React.FC<Props> = (props) => {
    const bulk = getBulkString(props.item.bulk);

    const itemHeader = () => (
        <Layout>
            <Layout style={{ flexDirection: "row" }}>
                <Text
                    style={{ flex: 1, marginHorizontal: 10, marginVertical: 5 }}
                    category="h6"
                >
                    {props.item.name}
                </Text>
                <Text
                    style={{
                        justifyContent: "flex-end",
                        flex: 0.2,
                        textAlign: "right",
                        marginHorizontal: 10,
                        marginVertical: 5,
                    }}
                >
                    Bulk: {bulk}
                </Text>
            </Layout>
            {props.item.invested ? (
                <Text
                    category="s2"
                    style={{
                        justifyContent: "flex-end",
                        alignContent: "flex-start",
                        flex: 0.2,
                        textAlign: "right",
                        marginHorizontal: 10,
                        marginVertical: 5,
                    }}
                    appearance="hint"
                >
                    Invested
                </Text>
            ) : (
                <></>
            )}
        </Layout>
    );
    const cardProps: TouchableOpacityProps = { disabled: true }; // no touching items right now.
    return (
        <Card
            header={itemHeader}
            status={props.cardStatus}
            style={{ width: "100%" }}
            {...cardProps}
        >
            <Text>{props.item.description}</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
