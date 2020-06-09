import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { MovementProps } from "./MovementProps";

interface Props {
    movements: MovementProps;
}

interface State {}

export default class OtherMovements extends Component<Props, State> {
    render() {
        const climb = this.props.movements.climbSpeed
            ? `Climb ${this.props.movements.climbSpeed}`
            : "";
        const burrow = this.props.movements.burrowSpeed
            ? `Burrow ${this.props.movements.burrowSpeed}`
            : "";
        const swim = this.props.movements.swimSpeed
            ? `Swim ${this.props.movements.swimSpeed}`
            : "";
        const fly = this.props.movements.flySpeed
            ? `Fly ${this.props.movements.flySpeed}`
            : "";
        return (
            <View style={styles.container}>
                <Text>
                    Movement Types/Notes:{" "}
                    {`${climb}, ${fly}, ${swim}, ${burrow}`}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
    },
    text: {
        flex: 1,
    },
});
