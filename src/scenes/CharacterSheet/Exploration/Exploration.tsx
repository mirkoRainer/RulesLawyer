import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Layout, Text, Divider } from "@ui-kitten/components";
import AvoidNoticeActivity from "./Components/AvoidNoticeActivity";
import DefendActivity from "./Components/DefendActivity";
import DetectMagicActivity from "./Components/DetectMagicActivity";
import FollowTheExpertActivity from "./Components/FollowTheExpertActivity";
import HustleActivity from "./Components/HustleActivity";
import InvestigateActivity from "./Components/InvestigateActivity";
import RepeatASpellActivity from "./Components/RepeatASpellActivity";
import ScoutActivity from "./Components/ScoutActivity";
import SearchActivity from "./Components/SearchActivity";

type Props = {};

const Exploration: React.FC<Props> = (props) => {
    /* TODO: Make the text display prettier for Exploration Page */
    return (
        <Layout>
            <ScrollView>
                <AvoidNoticeActivity />
                <DefendActivity />
                <DetectMagicActivity />
                <FollowTheExpertActivity />
                <HustleActivity />
                <InvestigateActivity />
                <RepeatASpellActivity />
                <ScoutActivity />
                <SearchActivity />
            </ScrollView>
        </Layout>
    );
};

export default Exploration;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        flex: 0.08,
    },
});
