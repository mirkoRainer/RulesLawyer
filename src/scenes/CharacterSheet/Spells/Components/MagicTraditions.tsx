import React, { Component } from "react";
import { StyleSheet } from "react-native";
import MagicTradition from "./MagicTradition";
import { Layout, Text } from "@ui-kitten/components";

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
            <Layout style={styles.container}>
                <Layout style={styles.rowContainer}>
                    <MagicTradition
                        traditionName={"Spontaneous"}
                        hasTradition={this.props.spontaneous}
                    />
                    <MagicTradition
                        traditionName={"Prepared"}
                        hasTradition={this.props.prepared}
                    />
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
                </Layout>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: .17,
        padding: 5
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
    },
    text: {
        flex: 1,
    },
    header: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
});
