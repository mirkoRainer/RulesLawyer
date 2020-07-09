import React, { Component } from "react";
import { View, Text, StyleSheet, SnapshotViewIOSProps } from "react-native";
import CharacterMetadata, { CharacterMetadataProps } from "./Components/CharacterMetadata";
import AbilityScores from "./Components/AbilityScores/AbilityScoresView";
import { Dimensions } from "react-native";
import { AbilityScore, AbilityScoreArray } from "../../Shared/PF2eCoreLib/AbilityScores";
import ProficiencyView, { ProficiencyProps } from "../../Shared/ProficiencyView";
import ArmorProficiencies, {
    ArmorProficiencyProps,
} from "./Components/ArmorClass/ArmorProficiencies";
import Shield, { ShieldProps } from "./Components/ArmorClass/Shield";
import HitPoints, { HitPointProps } from "./Components/HitPoints/HitPoints";
import Skills from "./Components/Skills";
import { Skill } from "./Components/Skill";
import { MovementProps } from "./Components/MovementProps";
import { SavesProp } from "./Components/SavesProps";
import ResistancesImmunitiesWeaknesses from "./Components/ResistancesImmunitiesWeaknesses";
import Conditions from "./Components/Conditions";
import Movements from "./Components/Movements";
import WeaponProficiencies, { WeaponProficiencyProps } from "./Components/Weapons/WeaponProficiencies";
import { WeaponViewProps } from "./Components/Weapons/WeaponViewProps";
import Weapons from "./Components/Weapons/Weapons";

var width: number = Dimensions.get("window").width; //full width

interface Props {
    skills: Skill[];
    languages: string[];
    scores: AbilityScoreArray;
    characterMetadata: CharacterMetadataProps;
    classDCProficiency: ProficiencyProps;
    acProficiency: ProficiencyProps;
    level: number;
    armorProficiency: ArmorProficiencyProps;
    shieldProps: ShieldProps;
    saves: SavesProp;
    hitPoints: HitPointProps;
    resistances: string;
    immunities: string;
    weaknesses: string;
    conditions: string;
    perception: ProficiencyProps;
    movements: MovementProps;
    weaponProficiencies: WeaponProficiencyProps;
    weapons: WeaponViewProps[];
}

interface State {}

export default class MainPage extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <CharacterMetadata
                    characterMetadata={this.props.characterMetadata}
                />
                <AbilityScores abilityScores={this.props.scores} />
                <ProficiencyView
                    title={"Class DC"}
                    proficiency={this.props.classDCProficiency.proficiency}
                    keyAbility={
                        this.props.classDCProficiency.keyAbility
                    }
                    is10base={this.props.classDCProficiency.is10base}
                    itemBonus={this.props.classDCProficiency.itemBonus}
                    level={this.props.level}
                />
                <ProficiencyView
                    title={"AC"}
                    keyAbility={
                        this.props.acProficiency.keyAbility
                    }
                    proficiency={this.props.acProficiency.proficiency}
                    level={this.props.level}
                    itemBonus={this.props.acProficiency.itemBonus}
                    is10base={this.props.acProficiency.is10base}
                    isACBase={true}
                    dexCap={this.props.acProficiency.dexCap}
                    armorPenalty={this.props.acProficiency.armorPenalty}
                />
                <ArmorProficiencies
                    unarmored={
                        this.props.armorProficiency.unarmored
                    }
                    light={
                        this.props.armorProficiency.light
                    }
                    medium={
                        this.props.armorProficiency.medium
                    }
                    heavy={
                        this.props.armorProficiency.heavy
                    }
                />
                <Shield
                    shieldProps={this.props.shieldProps}
                />
                <ProficiencyView
                    title={"Fortitude"}
                    keyAbility={
                        this.props.saves.fortitude.keyAbility
                    }
                    proficiency={this.props.saves.fortitude.proficiency}
                    level={this.props.level}
                    itemBonus={this.props.saves.fortitude.itemBonus}
                />
                <ProficiencyView
                    title={"Reflex"}
                    keyAbility={
                        this.props.saves.reflex.keyAbility
                    }
                    proficiency={this.props.saves.reflex.proficiency}
                    level={this.props.level}
                    itemBonus={this.props.saves.reflex.itemBonus}
                />
                <ProficiencyView
                    title={"Will"}
                    keyAbility={
                        this.props.saves.will.keyAbility
                    }
                    proficiency={this.props.saves.will.proficiency}
                    level={this.props.level}
                    itemBonus={this.props.saves.will.itemBonus}
                />
                <HitPoints
                    max={this.props.hitPoints.max}
                    current={this.props.hitPoints.current}
                    temporary={this.props.hitPoints.temporary}
                    dying={this.props.hitPoints.dying}
                    wounded={this.props.hitPoints.wounded}
                />
                <ResistancesImmunitiesWeaknesses 
                    resistances={this.props.resistances}
                    immunities={this.props.immunities}
                    weaknesses={this.props.weaknesses}
                />
                <Conditions conditions={this.props.conditions} />
                <ProficiencyView
                    title={"Perception"}
                    keyAbility={
                        this.props.perception.keyAbility
                    }
                    proficiency={this.props.perception.proficiency}
                    level={this.props.level}
                    itemBonus={this.props.perception.itemBonus}
                    descriptor={this.props.perception.descriptor}
                />
                <Movements 
                    movements={this.props.movements}
                />
                <Text style={styles.text}>Weapon Proficiencies</Text>
                <WeaponProficiencies
                    unarmed={this.props.weaponProficiencies.unarmed}
                    simple={this.props.weaponProficiencies.simple}
                    martial={this.props.weaponProficiencies.martial}
                    others={
                        this.props.weaponProficiencies.others
                        /* Others should have a description and proficiency. */
                    }
                />
                <Weapons
                    weapons={this.props.weapons}
                    level={this.props.level}
                />
                <Text style={styles.text}>Skillz</Text>
                <Skills skills={this.props.skills} level={1} />
                <Text style={styles.text}>
                    Languages: {this.props.languages.toString()}
                </Text>
            </View>
        );
    }
}

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
