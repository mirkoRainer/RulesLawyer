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
import EarnIncomeActivity from "./Components/EarnIncomeActivity";
import TreatDiseaseActivity from "./Components/TreatDiseaseActivity";
import CreateForgeryActivity from "./Components/CreateForgeryActivity";
import SubsistActivity from "./Components/SubsistActivity";

type Props = {};

export const Downtime: React.FC<Props> = (props) => {
    return (
        <Layout style={styles.container}>
            <Divider />
            <ScrollView>
                {/* TODO: Make the text here prettier */}
                <PrepareSpellsActivity />
                <BribeAContactActivity />
                <CostOfLivingActivity />
                <BuyingAndSellingActivity />
                <LongTermRestActivity />
                <RetrainingActivity />
                <CraftActivity />
                <EarnIncomeActivity />
                <TreatDiseaseActivity />
                <CreateForgeryActivity />
                <SubsistActivity />
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
