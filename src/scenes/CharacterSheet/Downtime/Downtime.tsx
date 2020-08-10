import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import PrepareSpellsActivity from "./Components/PrepareSpellsActivity";
import { Divider } from "@ui-kitten/components";
import BribeAContactActivity from "./Components/BribeAContactActivity";
import CostOfLivingActivity from "./Components/CostOfLiviningActivity";
import BuyingAndSellingActivity from "./Components/BuyingAndSellingActivity";
import LongTermRestActivity from "./Components/LongTermRest";
import RetrainingActivity from "./Components/Retraining";
import CraftActivity from "./Components/CraftActivity";

type Props = {}

export const Downtime: React.FC<Props> = (props) => {
    return (
        <Layout style={styles.container}>
            <Divider />
            <ScrollView>
                <PrepareSpellsActivity />
                <BribeAContactActivity />
                <CostOfLivingActivity />
                <BuyingAndSellingActivity />
                <LongTermRestActivity />
                <RetrainingActivity />
                <CraftActivity />
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