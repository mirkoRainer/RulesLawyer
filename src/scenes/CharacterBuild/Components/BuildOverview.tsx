import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { LevelsView } from "./LevelsView";

type Props = {};

export const BuildOverview: React.FC<Props> = (props) => {
    return (
        <Layout>
            <Text style={styles.centered}>BuildOverview</Text>
            <LevelsView />
        </Layout>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
