import React, { Component } from "react";
import {  StyleSheet } from "react-native";
import { MovementProps } from "./Movements";
import { Layout, Text } from "@ui-kitten/components";

interface Props {
    movements: MovementProps;
}

interface State {}

export default class OtherMovements extends Component<Props, State> {
    render() {
        const climb = this.props.movements.climbSpeed
            ? `Climb ${this.props.movements.climbSpeed}, `
            : "";
        const burrow = this.props.movements.burrowSpeed
            ? `Burrow ${this.props.movements.burrowSpeed}, `
            : "";
        const swim = this.props.movements.swimSpeed
            ? `Swim ${this.props.movements.swimSpeed}, `
            : "";
        const fly = this.props.movements.flySpeed
            ? `Fly ${this.props.movements.flySpeed}, `
            : "";
        return (
            <Layout style={styles.container}>
                <Text category='h6'>
                    Other Movement
                </Text>
                <Text>
                    {`${climb}${fly}${swim}${burrow}`}
                </Text>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 5
    },
    text: {
        flex: 1,
    },
});
