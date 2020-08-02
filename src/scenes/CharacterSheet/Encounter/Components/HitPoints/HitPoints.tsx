import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

export interface HitPointProps {
    max: number;
    current: number;
    temporary: number;
    dying: number;
    wounded: number;
}

interface State {}

export default class HitPoints extends Component<HitPointProps, State> {
    render() {
        return (
            <Layout style={{ padding: 10, flex: 0.65 }}>
                <Layout style={styles.container}>
                    <Text style={styles.subHeader} category='h6'> HP: </Text>
                    <Text style={styles.subHeader} category='h6'> Temp: </Text>
                    <Text style={styles.subHeader} category='h6'>Dying:</Text>
                    <Text style={styles.subHeader} category='h6'>Wounded:</Text>
                </Layout>
                <Layout style={styles.container}>
                    <Text style={styles.text}> {this.props.current}/{this.props.max} </Text>
                    <Text style={styles.text}> {this.props.temporary} </Text>
                    <Text style={styles.text}>{this.props.dying}</Text>
                    <Text style={styles.text}>{this.props.wounded}</Text>
                </Layout>
            </Layout>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        flexDirection: "row",
    },
    text: {
        flex: 1,
        textAlign: "center",
        alignSelf: "center",
        justifyContent: "flex-start",
        fontSize: 22
    },
    subHeader: {
        flex: 2,
        justifyContent: "flex-end",
        textAlign: "center",
        alignSelf: "center"
    }
});
