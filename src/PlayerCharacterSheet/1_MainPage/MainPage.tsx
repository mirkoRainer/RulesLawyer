import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import CharacterMetadata from "./CharacterMetadata";
import AbilityScores from "./AbilityScoresView";
import { Dimensions } from "react-native";
import { IAbilityScore } from "./AbilityScores/IAbilityScores";
import ProficiencyView from "../Shared/ProficiencyView";
import ArmorProficiencies from "./ArmorClass/ArmorProficiencies";
import Shield from "./ArmorClass/Shield";
import HitPoints from "./HitPoints/HitPoints";

var width: number = Dimensions.get("window").width; //full width

interface Props {}

interface State {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        width: width,
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
    },
    notes: {
        flex: 1,
    },
});

export default class MainPage extends Component<Props, State> {
    public static defaultProps = {};
    scores: IAbilityScore[] = [
        { amount: 10, ability: "Strength" },
        { amount: 10, ability: "Dexterity" },
        { amount: 10, ability: "Constitution" },
        { amount: 10, ability: "Intelligence" },
        { amount: 10, ability: "Wisdom" },
        { amount: 10, ability: "Charisma" },
    ];
    render() {
        return (
            <View style={styles.container}>
                <CharacterMetadata />
                <AbilityScores abilityScores={this.scores} />
                <ProficiencyView
                    title={"Class\nDC"}
                    proficiency="Trained"
                    keyAbilityModifier={4}
                    is10base={true}
                    itemBonus={1}
                    level={1}
                />
                <ProficiencyView
                    title={"AC"}
                    keyAbilityModifier={2}
                    proficiency="Trained"
                    level={1}
                    itemBonus={1}
                    is10base={true}
                    isACbase={true}
                    dexCap={3}
                    armorPenatly={0}
                />
                <ArmorProficiencies
                    unarmoredProficiency={"Trained"}
                    lightArmorProficiency={"Expert"}
                    mediumArmorProficiency={"Master"}
                    heavyArmorProficiency={"Legendary"}
                />
                <Shield acBonus={2} hardness={5} maxHP={10} currentHP={7} />
                <ProficiencyView
                    title={"Fortitude"}
                    keyAbilityModifier={3}
                    proficiency="Trained"
                    level={1}
                    itemBonus={0}
                />
                <ProficiencyView
                    title={"Reflex"}
                    keyAbilityModifier={3}
                    proficiency="Trained"
                    level={1}
                    itemBonus={0}
                />
                <ProficiencyView
                    title={"Will"}
                    keyAbilityModifier={3}
                    proficiency="Trained"
                    level={1}
                    itemBonus={0}
                />
                <Text style={styles.notes}>Notes: </Text>
                <HitPoints
                    max={20}
                    current={19}
                    temporary={5}
                    dying={0}
                    wounded={0}
                />
                <View style={styles.rowContainer}>
                    <Text>Resistances: None</Text>
                    <Text>Immunities: All</Text>
                </View>
                <Text>Conditions: Flat Footed</Text>
                <ProficiencyView
                    title={"Perception"}
                    keyAbilityModifier={2}
                    proficiency={"Expert"}
                    level={1}
                    itemBonus={0}
                    descriptor={"Senses: Low Light Vision"}
                />
                <View style={styles.rowContainer}>
                    <Text>Speed: {30} feet</Text>
                    <Text>Movement Types/Notes: {"Climb 20"}</Text>
                </View>
            </View>
        );
    }
}
