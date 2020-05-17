import React, { Component } from "react";
import { View, StyleSheet, Text, CheckBox, Switch } from "react-native";

interface Props {
    proficiency: string;
}

interface State {}

export default class ProficiencyArrayView extends Component<Props, State> {
    public static defaultProps = {};

    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={
                        ["T", "E", "M", "L"].includes(
                            this.props.proficiency.substring(0, 1)
                        )
                            ? styles.profTextTrue
                            : styles.profTextFalse
                    }
                >
                    T
                </Text>
                <Text
                    style={
                        ["E", "M", "L"].includes(
                            this.props.proficiency.substring(0, 1)
                        )
                            ? styles.profTextTrue
                            : styles.profTextFalse
                    }
                >
                    E
                </Text>
                <Text
                    style={
                        ["M", "L"].includes(
                            this.props.proficiency.substring(0, 1)
                        )
                            ? styles.profTextTrue
                            : styles.profTextFalse
                    }
                >
                    M
                </Text>
                <Text
                    style={
                        ["L"].includes(this.props.proficiency.substring(0, 1))
                            ? styles.profTextTrue
                            : styles.profTextFalse
                    }
                >
                    L
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center",
    },
    profTextTrue: {
        flex: 1,
        fontSize: 12,
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 1,
    },
    profTextFalse: {
        flex: 1,
        fontSize: 12,
        textAlign: "center",
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 1,
    },
});
