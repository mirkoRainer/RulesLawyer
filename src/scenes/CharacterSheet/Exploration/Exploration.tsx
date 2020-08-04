import React from "react";
import {  StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";


type Props = {}

export const Exploration: React.FC<Props> = (props) => {
    return (
        <Layout style={styles.container}>
            <Text h4>
                Exploration!
            </Text>
            <Text>Avoid Notice</Text>
            <Text>Defend</Text>
            <Text>Detect Magic</Text>
            <Text>Follow the Expert</Text>
            <Text>Hustle</Text>
            <Text>Investigate</Text>
            <Text>Repeat a Spell</Text>
            <Text>Scout</Text>
            <Text>Search</Text>
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