import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import ProficiencyArrayView from "./ProficiencyArrayView";

interface Props {
    title: string;
    keyAbilityModifier: number;
    proficiency: string;
    level: number;
    itemBonus?: number;
    is10base?: boolean;
    isACbase?: boolean;
    dexCap?: number;
    descriptor?: string;
    armorPenatly?: number;
}

interface State {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 2,
        alignContent: "stretch",
        alignSelf: "stretch",
    },
    text: {
        flex: 1,
        width: 100,
    },
    title: {},
    total: {
        fontWeight: "bold",
    },
    equals: {},
    acBase: {},
    profBonus: {},
    itemBonus: {},
});

export default class ProficiencyView extends Component<Props, State> {
    public static defaultProps = {
        is10base: false,
        isACbase: false,
    };

    render() {
        const tenBase = this.props.is10base ? (
            <Text style={styles.equals}> = Base: 10</Text>
        ) : (
            <Text style={styles.equals}> =</Text>
        );
        const keyModifier = this.props.isACbase ? (
            <Text style={styles.acBase}>
                Dex:{this.props.keyAbilityModifier} Cap:
                {this.props.dexCap !== undefined ? this.props.dexCap : 0}
            </Text>
        ) : (
            <Text style={styles.acBase}>
                Key: {this.props.keyAbilityModifier}
            </Text>
        );
        const proficiencyBonus = (
            <Text style={styles.profBonus}>
                {this.props.proficiency} at Level {this.props.level}
            </Text>
        );
        const itemBonus =
            this.props.itemBonus !== undefined ? (
                <Text style={styles.itemBonus}>
                    Item: {this.props.itemBonus}
                </Text>
            ) : (
                <Text style={styles.itemBonus}> Item: 0</Text>
            );
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}:</Text>
                <Text style={styles.total}>16</Text>
                {tenBase}
                {keyModifier}
                {proficiencyBonus}
                <ProficiencyArrayView proficiency="Trained" />
                {itemBonus}
            </View>
        );
    }
}
