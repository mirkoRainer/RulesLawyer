import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import MagicTradition from "./MagicTradition";

export interface MagicTraditionProps {
    prepared: boolean;
    spontaneous: boolean;
    arcane: boolean;
    primal: boolean;
    occult: boolean;
    divine: boolean;
}

interface State {}

export default class MagicTraditions extends Component<
    MagicTraditionProps,
    State
> {
    public static defaultProps = {};

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}> Magic Traditions </Text>
                <View style={styles.rowContainer}>
                    <MagicTradition
                        traditionName={"Spontaneous"}
                        hasTradition={this.props.spontaneous}
                    />
                    <MagicTradition
                        traditionName={"Prepared"}
                        hasTradition={this.props.prepared}
                    />
                </View>
                <View style={styles.rowContainer}>
                    <MagicTradition
                        traditionName={"Arcane"}
                        hasTradition={this.props.arcane}
                    />
                    <MagicTradition
                        traditionName={"Divine"}
                        hasTradition={this.props.divine}
                    />
                    <MagicTradition
                        traditionName={"Occult"}
                        hasTradition={this.props.occult}
                    />
                    <MagicTradition
                        traditionName={"Primal"}
                        hasTradition={this.props.primal}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
    },
    rowContainer: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
        flexDirection: "row",
    },
    text: {
        flex: 1,
    },
    header: {
        flex: 1,
        fontSize: 16,
        fontWeight: "bold",
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
});
