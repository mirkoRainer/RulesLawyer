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
                    <Text style={styles.subHeader} category='p1'> HP: </Text>
                    <Text style={styles.subHeader} category='p1'> Temp: </Text>
                    <Text style={styles.subHeader} category='p1'>Dying:</Text>
                    <Text style={styles.subHeader} category='p1'>Wounded:</Text>
                </Layout>
                <Layout style={styles.container}>
                    <Text category='h4' style={styles.text}> {this.props.current}/{this.props.max} </Text>
                    <Text category='h4' style={styles.text}> {this.props.temporary} </Text>
                    <Text category='h4' style={styles.text}>{this.props.dying}</Text>
                    <Text category='h4' style={styles.text}>{this.props.wounded}</Text>
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
    },
    subHeader: {
        flex: 2,
        justifyContent: "flex-end",
        textAlign: "center",
        alignSelf: "center"
    }
});
