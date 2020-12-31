import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

type Props = {};

export const InventoryPage: React.FC<Props> = (props) => {
    return (
        <Layout style={styles.container}>
            <Text>Inventory Page</Text>
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
