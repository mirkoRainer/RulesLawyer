import React, { Component } from "react";
import { View, StyleSheet, Text, CheckBox, Switch } from "react-native";

interface Props {
    proficiency: string;
}

interface State {}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        flexDirection: "row",
        alignContent: "stretch",
        alignSelf: "stretch",
        justifyContent: "space-around",
    },
    profContainer: {
        flex: 1,
        width: 100,
        borderColor: "black",
        borderWidth: 1,
    },
    profText: {
        fontSize: 12,
        alignSelf: "center",
    },
    checkboxStatus: {
        alignSelf: "center",
        fontSize: 12,
    },
});

export default class ProficiencyArrayView extends Component<Props, State> {
    public static defaultProps = {};

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profContainer}>
                    <Text style={styles.profText}>T</Text>
                    <Text style={styles.checkboxStatus}>X</Text>
                </View>
                <View style={styles.profContainer}>
                    <Text style={styles.profText}>E</Text>
                    <Text style={styles.checkboxStatus}>-</Text>
                </View>
                <View style={styles.profContainer}>
                    <Text style={styles.profText}>M</Text>
                    <Text style={styles.checkboxStatus}>-</Text>
                </View>
                <View style={styles.profContainer}>
                    <Text style={styles.profText}>L</Text>
                    <Text style={styles.checkboxStatus}>-</Text>
                </View>
            </View>
        );
    }
}
