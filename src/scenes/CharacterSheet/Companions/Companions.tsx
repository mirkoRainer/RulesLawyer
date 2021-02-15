import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

type Props = {};

export const Companions: React.FC<Props> = (props) => {
    return (
        <Layout>
            {/* TODO [#43]: Finish Companion View 
            Need to lay out something similar to the companion sheet from the APG. */}
            <Text style={styles.centered}>Companions</Text>
        </Layout>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
