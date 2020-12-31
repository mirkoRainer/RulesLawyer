import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import WornItemsView from "./Components/WornItems";
import ReadiedItemsView from "./Components/ReadiedItems";
import OtherItemsView from "./Components/OtherItems";

type Props = {};

export const InventoryPage: React.FC<Props> = (props) => {
    return (
        <Layout style={styles.container}>
            <WornItemsView />
            <ReadiedItemsView />
            <OtherItemsView />
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
