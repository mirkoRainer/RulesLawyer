import React, { Component } from "react";
import { StyleSheet } from "react-native";
import ProficiencyArrayView from "../../../../Shared/ProficiencyArrayView";
import { Proficiencies } from "../../../../../PF2eCoreLib/Proficiencies";
import { Layout, Text } from "@ui-kitten/components";

export interface ArmorProficiencyProps {
    unarmored: Proficiencies;
    light: Proficiencies;
    medium: Proficiencies;
    heavy: Proficiencies;
}

export interface State {}

export default class ArmorProficiencies extends Component<
    ArmorProficiencyProps,
    State
> {
    render() {
        return (
            <Layout style={styles.container}>
                <Layout style={styles.armorEntry}>
                    <Text style={styles.text}>Unarmored</Text>
                    <ProficiencyArrayView proficiency={this.props.unarmored} />
                </Layout>
                <Layout style={styles.armorEntry}>
                    <Text style={styles.text}>Light Armor</Text>
                    <ProficiencyArrayView proficiency={this.props.light} />
                </Layout>
                <Layout style={styles.armorEntry}>
                    <Text style={styles.text}>Med. Armor</Text>
                    <ProficiencyArrayView proficiency={this.props.medium} />
                </Layout>
                <Layout style={styles.armorEntry}>
                    <Text style={styles.text}>Heavy Armor</Text>
                    <ProficiencyArrayView proficiency={this.props.heavy} />
                </Layout>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    armorEntry: {
        flex: 1,
    },
    text: {
        flex: 1,
        alignSelf: "stretch",
        textAlign: "center",
        borderWidth: 1,
        borderStartWidth: 2,
        borderStartColor: "black",
    },
});
