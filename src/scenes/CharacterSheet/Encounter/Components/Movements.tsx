import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import OtherMovements from "./OtherMovements";
import { MovementProps } from "./MovementProps";

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
            <View style={styles.container}>
                <Text style={styles.text}>Speed: {this.props.movements.landSpeed} feet</Text>
                <OtherMovements movements={this.props.movements} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignContent: "stretch",
        alignSelf: "stretch",
        borderColor: "black",
        borderWidth: 2
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