import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";


type Props = {};

export const LevelView: React.FC<Props> = (props) => {
    return(
        <Layout>
            <Text style={styles.centered}>LevelView</Text>
        </Layout>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center"
    }
});