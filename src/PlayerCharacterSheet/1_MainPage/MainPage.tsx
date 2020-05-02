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
import Weapons from "./Weapons/Weapons";
import WeaponProficiencies from "./Weapons/WeaponProficiencies";
import Skills from "./Skills";
import { Skill } from "./Skill";

var width: number = Dimensions.get("window").width; //full width

interface Props {}

interface State {}

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
    languages: string[] = [" Common", " Dwarf", " Goblin"];
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
                <WeaponProficiencies
                    simple={"Trained"}
                    martial={"Trained"}
                    others={
                        [] /* Others should have a description and proficiency. */
                    }
                />
                <Weapons />
                <Text style={styles.text}>Skillz</Text>
                <Skills skills={["Object/array of skills"]} level={1} />
                <Text style={styles.text}>
                    Languages: {this.languages.toString()}
                </Text>
            </View>
        );
    }
}

const SKILLSDATA: Skill[] = [
    {
        name: "Acrobatics",
        abilityModifier: 3,
        proficiency: "Trained",
        itemBonus: 1,
        hasArmorPenalty: true,
        armorPenalty: 0,
    },
    {
        name: "Arcana",
        abilityModifier: 3,
        proficiency: "Trained",
        itemBonus: 1,
        hasArmorPenalty: true,
        armorPenalty: 0,
    },
    {
        name: "Atheltics",
        abilityModifier: 3,
        proficiency: "Trained",
        itemBonus: 1,
        hasArmorPenalty: true,
        armorPenalty: 0,
    },
    {
        name: "Crafting",
        abilityModifier: 3,
        proficiency: "Trained",
        itemBonus: 1,
        hasArmorPenalty: true,
        armorPenalty: 0,
    },
    {
        name: "Deception",
        abilityModifier: 3,
        proficiency: "Trained",
        itemBonus: 1,
        hasArmorPenalty: true,
        armorPenalty: 0,
    },
    {
        name: "Diplomacy",
        abilityModifier: 3,
        proficiency: "Trained",
        itemBonus: 1,
        hasArmorPenalty: true,
        armorPenalty: 0,
    },
    {
        name: "Intimidation",
        abilityModifier: 3,
        proficiency: "Trained",
        itemBonus: 1,
        hasArmorPenalty: true,
        armorPenalty: 0,
    },
    {
        name: "Lore",
        loreDescriptor: "Golarion",
        abilityModifier: 3,
        proficiency: "Trained",
        itemBonus: 1,
        hasArmorPenalty: true,
        armorPenalty: 0,
    },
    {
        name: "Medicine",
        abilityModifier: 3,
        proficiency: "Trained",
        itemBonus: 1,
        hasArmorPenalty: true,
        armorPenalty: 0,
    },
    {
        name: "Nature",
        abilityModifier: 3,
        proficiency: "Trained",
        itemBonus: 1,
        hasArmorPenalty: true,
        armorPenalty: 0,
    },
    {
        name: "Occultism",
        abilityModifier: 3,
        proficiency: "Trained",
        itemBonus: 1,
        hasArmorPenalty: true,
        armorPenalty: 0,
    },
    {
        name: "Performance",
        abilityModifier: 3,
        proficiency: "Trained",
        itemBonus: 1,
        hasArmorPenalty: true,
        armorPenalty: 0,
    },
    {
        name: "Religion",
        abilityModifier: 3,
        proficiency: "Trained",
        itemBonus: 1,
        hasArmorPenalty: true,
        armorPenalty: 0,
    },
    {
        name: "Society",
        abilityModifier: 3,
        proficiency: "Trained",
        itemBonus: 1,
        hasArmorPenalty: true,
        armorPenalty: 0,
    },
    {
        name: "Stealth",
        abilityModifier: 3,
        proficiency: "Trained",
        itemBonus: 1,
        hasArmorPenalty: true,
        armorPenalty: 0,
    },
    {
        name: "Survival",
        abilityModifier: 3,
        proficiency: "Trained",
        itemBonus: 1,
        hasArmorPenalty: false,
    },
    {
        name: "Thievery",
        abilityModifier: 3,
        proficiency: "Trained",
        itemBonus: 1,
        hasArmorPenalty: true,
        armorPenalty: 2,
    },
];

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
    text: {
        alignSelf: "center",
        flex: 1,
    },
});
