import React, { Component } from "react";
import {  StyleSheet } from "react-native";
import ProficiencyArrayView from "./ProficiencyArrayView";
import {
    Proficiencies,
    GetProficiencyValue,
} from "../../PF2eCoreLib/Proficiencies";
import {
    GetAbilityScoreAbbreviation,
    AbilityScoreArray,
    AbilityScore,
    CalculateAbilityScoreModifier,
} from "../../PF2eCoreLib/AbilityScores";
import { Layout, Text } from "@ui-kitten/components";

export interface ProficiencyProps {
    title: string;
    keyAbility: AbilityScore;
    proficiency: Proficiencies;
    level: number;
    itemBonus: number;
    is10base?: boolean;
    dexCap?: number;
    descriptor?: string;
    armorPenalty?: number;
}

export default class ProficiencyView extends Component<
    ProficiencyProps
> {
    public static defaultProps = {
        is10base: false,
        isACBase: false,
        itemBonus: 0,
    };

    render() {
        const modifier = CalculateAbilityScoreModifier(this.props.keyAbility.score);
        const tenBase = this.props.is10base ? (
            <Text style={styles.tenBase}>10 + </Text>
        ) : (
            <Text style={styles.noTenBase}></Text>
        );

        const keyModifier = (
            <React.Fragment>
                <Text style={styles.modifierText} category='p1'>
                    {GetAbilityScoreAbbreviation(this.props.keyAbility.ability.toString())}{" "}
                </Text>
                <Text category='p1' style={styles.modifierNumber}>
                    {modifier}
                </Text>

            </React.Fragment>
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
                <Text style={styles.descriptor}>{this.props.descriptor}</Text>
            ) : undefined;
        const total =
            CalculateAbilityScoreModifier(this.props.keyAbility.score)+
            this.props.itemBonus +
            GetProficiencyValue(this.props.proficiency, this.props.level);
        const totalView = this.props.is10base ? (
            <Text style={styles.total} category='h5'>{10 + total}</Text>
        ) : (
            <Text style={styles.total} category='h5'>{total > 0 ? "+" : ""}{total}</Text>
        );
        return (
            <Layout style={styles.flex1}>
                <Layout style={styles.horizontal}>
                    <Text style={this.props.is10base ? styles.title10 : styles.title} category='h5'>{this.props.title}</Text>
                    {totalView} 
                </Layout>
                <Layout style={styles.horizontal}>
                    {tenBase}
                    {keyModifier}
                    <Layout style={styles.touchable}>
                        <ProficiencyArrayView
                            proficiency={this.props.proficiency}
                        />
                    </Layout>
                    {itemBonus}
                </Layout>
                {descriptor}
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
        paddingHorizontal: 10
    },
    horizontal: {
        flex: 1,
        flexDirection: "row",
        alignContent: "stretch",
        alignSelf: "stretch",
        justifyContent: "space-evenly",
    },
    descriptor: {
        flex: 1,
        paddingHorizontal: 15
    },
    text: {
        flex: 3,
        width: 100,
    },
    title: {
        flex: 4,
        // alignSelf: "center",
        // textAlign: "center",
    },
    title10: {
        flex: 3,
        // alignSelf: "center",
        // textAlign: "center",
    },
    total: {
        flex: 1,
        alignSelf: "center",
        textAlign: "center",
    },
    equals: {
        flex: 2,
        alignSelf: "center",
    },
    tenBase: {
        flex: 2,
        alignSelf: "center",
    },
    noTenBase: {},
    modifierText: {
        flex: 1.5,
        alignSelf: "center",
    },
    modifierNumber: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "flex-end",
        textAlign: "right",
        paddingRight: 10
    },
    profBonus: {
        flex: 2,
        alignSelf: "center",
    },
    itemBonus: {
        flex: 3,
        alignSelf: "center",
        textAlign: "center",
    },
    equalSign: {
        flex: 1,
        alignSelf: "center",
    },
    touchable: {
        flex: 4,
    },
});
