import React, { Component } from "react";
import { StyleSheet } from "react-native";
import OtherMovements from "./OtherMovements";
import { Layout, Text } from "@ui-kitten/components";

interface Props {
    movements: MovementProps;
}

export interface MovementProps {
    landSpeed: number;
    burrowSpeed?: number;
    climbSpeed?: number;
    flySpeed?: number;
    swimSpeed?: number;
}


interface State {}

export default class Movements extends Component<Props, State> {
    render() {
        return (
            <Layout style={styles.horizontal}>
                <Layout style={styles.container}>
                    <Text style={styles.text} category='h6'>Speed: </Text>
                    <Text style={styles.text} category='p1'>{this.props.movements.landSpeed} feet</Text>
                </Layout>
                <OtherMovements movements={this.props.movements} />
            </Layout>
        );
    }
}
const styles = StyleSheet.create({
    horizontal: {
        flex: 1,
        flexDirection: "row",
        alignContent: "stretch",
        alignSelf: "stretch",
        padding: 5
    },
    container: {
        flex: 1
    },
    text: {
        flex: 1,
        alignSelf: "center",
    },
    text2: {
        flex: 2,
        alignSelf: "center",
    },
});