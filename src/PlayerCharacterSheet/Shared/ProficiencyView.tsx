import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import ProficiencyArrayView from "./ProficiencyArrayView";
import { Proficiencies, GetProficiencyValue } from "./PF2eCoreLib/Proficiencies";
import { AbilityModifierWithName } from "./PF2eCoreLib/AbilityScores";

export interface ProficiencyProps {
    title: string;
    keyAbility: AbilityModifierWithName;
    proficiency: Proficiencies;
    level: number;
    itemBonus: number;
    is10base?: boolean;
    isACBase?: boolean;
    dexCap?: number;
    descriptor?: string;
    armorPenalty?: number;
}

interface State {}

export default class ProficiencyView extends Component<
    ProficiencyProps,
    State
> {
    public static defaultProps = {
        is10base: false,
        isACBase: false,
        itemBonus: 0,
    };

    render() {
        const tenBase = this.props.is10base ? (
            <Text style={styles.tenBase}>Base: 10</Text>
        ) : (
            <Text style={styles.noTenBase}></Text>
        );

        const keyModifier = this.props.isACBase ? (
            <Text style={styles.acBase}>
                Dex:{this.props.keyAbility.modifier} Cap:
                {this.props.dexCap !== undefined ? this.props.dexCap : 0}
            </Text>
        ) : (
            <Text style={styles.acBase}>
                {this.props.keyAbility.name}: {this.props.keyAbility.modifier}
            </Text>
        );

        const proficiencyBonus = (
            <Text style={styles.profBonus}>
                Level {this.props.level}
            </Text>
        );
        const itemBonus =
            this.props.itemBonus !== null ? (
                <Text style={styles.itemBonus}>
                    Item: {this.props.itemBonus}
                </Text>
            ) : (
                <Text style={styles.itemBonus}> Item: 0</Text>
            );

        const descriptor =
            this.props.descriptor !== undefined ? (
                <Text style={styles.container}>{this.props.descriptor}</Text>
            ) : undefined;
        const total = this.props.keyAbility.modifier + this.props.level + this.props.itemBonus + GetProficiencyValue(this.props.proficiency);
        const totalView = this.props.is10base ? (
            <Text style={styles.total}>
                {10 + total}
            </Text>
        ) : (
            <Text style={styles.total}>
                {total}
            </Text>
        );
        return (
            <>
                <View style={styles.container}>
                    <Text style={styles.title}>{this.props.title}:</Text>
                    {totalView}
                    <Text style={styles.equalSign}> = </Text>
                    {tenBase}
                    {keyModifier}
                    {proficiencyBonus}
                    <ProficiencyArrayView
                        proficiency={this.props.proficiency}
                    />
                    {itemBonus}
                </View>
                {descriptor}
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 2,
        alignContent: "stretch",
        alignSelf: "stretch",
        justifyContent: "space-evenly",
    },
    text: {
        flex: 3,
        width: 100,
    },
    title: {
        flex: 3,
        alignSelf: "center",
        textAlign: "center"
    },
    total: {
        flex: 1,
        fontWeight: "bold",
        fontSize: 16,
        alignSelf: "center",
        textAlign: "center"
    },
    equals: {
        flex: 2,
        alignSelf: "center",
    },
    tenBase: {
        flex: 3,
        alignSelf: "center",
    },
    noTenBase: {},
    acBase: {
        flex: 3,
        alignSelf: "center",
    },
    profBonus: {
        flex: 2,
        alignSelf: "center",
    },
    itemBonus: {
        flex: 3,
        alignSelf: "center",
    },
    equalSign: {
        flex: 1,
        alignSelf: "center",
    },
});
