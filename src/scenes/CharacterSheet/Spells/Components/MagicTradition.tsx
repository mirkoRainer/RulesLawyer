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
        if (this.props.hasTradition) {
            return (
                <Layout style={styles.container}>
                    <Text style={styles.text}>{this.props.traditionName}</Text>
                </Layout>
            );
        } else { 
            return (<Layout></Layout>);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
    },
    text: {
        textAlign: "center",
        justifyContent: "flex-start"
    },
});
