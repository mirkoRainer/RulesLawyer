import React, { Component } from "react";
import {  StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

interface Props {
    hasTradition: boolean;
    traditionName: string;
}

interface State {}

export default class MagicTradition extends Component<Props, State> {
    render() {
        return (
            <Layout style={styles.container}>
                <Text style={styles.text}>{this.props.traditionName}</Text>
                <Layout style={styles.rowContainer}>
                    <Layout style={styles.buffer} />
                    <Text
                        style={
                            this.props.hasTradition
                                ? styles.filled
                                : styles.unfilled
                        }
                    >
                        X
                    </Text>
                    <Layout style={styles.buffer} />
                </Layout>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
        borderColor: "black",
    },
    text: {
        flex: 1,
        textAlign: "center",
    },
    buffer: {
        flex: 2,
    },
    filled: {
        flex: 1,
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
    },
    unfilled: {
        flex: 1,
        color: "white",
    },
});
