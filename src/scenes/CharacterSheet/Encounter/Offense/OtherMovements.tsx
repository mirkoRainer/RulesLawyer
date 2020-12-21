import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { Movement } from "../../../../PF2eCoreLib/PlayerCharacter";

interface Props {
    movements: Movement;
}

interface State {}

export default class OtherMovements extends Component<Props, State> {
    render() {
        const climb =
            this.props.movements.climbSpeed &&
            this.props.movements.climbSpeed !== 0
                ? `Climb ${this.props.movements.climbSpeed}, `
                : "";
        const burrow =
            this.props.movements.burrowSpeed &&
            this.props.movements.burrowSpeed !== 0
                ? `Burrow ${this.props.movements.burrowSpeed}, `
                : "";
        const swim =
            this.props.movements.swimSpeed &&
            this.props.movements.swimSpeed !== 0
                ? `Swim ${this.props.movements.swimSpeed}, `
                : "";
        const fly =
            this.props.movements.flySpeed && this.props.movements.flySpeed !== 0
                ? `Fly ${this.props.movements.flySpeed}, `
                : "";
        return (
            <Layout style={styles.container}>
                <Text category="h6">Other Movement</Text>
                <Text>
                    {climb || burrow || swim || fly
                        ? `${climb}${fly}${swim}${burrow}`
                        : "None"}
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
        padding: 5,
    },
    text: {
        flex: 1,
    },
});
