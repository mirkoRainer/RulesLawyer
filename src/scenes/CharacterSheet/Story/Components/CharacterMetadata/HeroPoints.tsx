import React, { Component } from "react";
import {StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";


interface Props {}

interface State {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        alignContent: "stretch",
    },
    text: {
        backgroundColor: "green",
    },
});

export default class HeroPoints extends Component<Props, State> {
    public static defaultProps = {};

    render() {
        return (
            <Layout style={styles.container}>
                <Text style={styles.text}> HeroPoints </Text>
            </Layout>
        );
    }
}
