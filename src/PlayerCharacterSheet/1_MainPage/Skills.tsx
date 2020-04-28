import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import ProficiencyView from "../Shared/ProficiencyView";

interface Props {
    skills: string[];
    level: number;
}

interface State {}

interface Skill {
    name: string;
    loreDescriptor?: string;
    abilityModifier: number;
    proficiency: string;
    itemBonus: number;
    hasArmorPenalty: boolean;
    armorPenalty?: number;
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

export default class Skills extends Component<Props, State> {
    renderItem = ({ item }: { item: Skill }) => (
        <ProficiencyView
            title={item.name}
            keyAbilityModifier={item.abilityModifier}
            proficiency={item.proficiency}
            level={this.props.level}
            itemBonus={item.itemBonus}
            armorPenatly={item.hasArmorPenalty ? item.armorPenalty : undefined}
        />
    );
    keyExtractor = (item: Skill) => item.name;

    render() {
        return (
            <View style={styles.container}>
                <FlatList<Skill>
                    data={SKILLSDATA}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                ></FlatList>
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
    text: {
        flex: 1,
        width: 100,
        backgroundColor: "green",
    },
});
