import React, { Component } from "react";
import {StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";


interface Props {
    traits: string[];
}

interface State {}

export default class TraitsView extends Component<Props, State> {
    render() {
        return (
            <Layout style={styles.container}>
                <Text style={styles.text}>
                    {" "}
                    Traits: {this.props.traits.join(",")}{" "}
                </Text>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        alignContent: "stretch",
    },
    text: {
        flex: 1,
    },
});
