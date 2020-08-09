import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import PrepareSpellsActivity from "./Components/PrepareSpellsActivity";
import { Divider } from "@ui-kitten/components";
import BribeAContactActivity from "./Components/BribeAContactActivity";

type Props = {}

export const Downtime: React.FC<Props> = (props) => {
    return (
        <Layout style={styles.container}>
            <Divider />
            <ScrollView>
                <PrepareSpellsActivity />
                <BribeAContactActivity />
                <Text>Cost of Living</Text>
                <Text>Buying and Selling</Text>
                <Text>long-term rest</Text>
                <Text>Retraining</Text>
                <Text>Craft</Text>
                <Text>Earn income (Crafting Lore Performance)</Text>
                <Text>Treat Disease</Text>
                <Text>Create Forgery</Text>
                <Text>Subsist</Text>
            </ScrollView>
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