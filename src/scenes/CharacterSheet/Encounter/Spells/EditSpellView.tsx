import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";

type Props = {};

export const EditSpellView: React.FC<Props> = (props) => {
    return (
        <Layout>
            <Text style={styles.centered}>EditSpellView</Text>
        </Layout>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
