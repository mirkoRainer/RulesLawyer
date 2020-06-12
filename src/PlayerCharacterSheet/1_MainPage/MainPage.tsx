import React, { Component } from "react";
import { View, Text, StyleSheet, SnapshotViewIOSProps } from "react-native";
import CharacterMetadata, { CharacterMetadataProps } from "./CharacterMetadata";
import AbilityScores from "./AbilityScoresView";
import { Dimensions } from "react-native";
import { AbilityScore } from "../Shared/PF2eCoreLib/AbilityScores";
import ProficiencyView, { ProficiencyProps } from "../Shared/ProficiencyView";
import ArmorProficiencies, {
    ArmorProficiencyProps,
} from "./ArmorClass/ArmorProficiencies";
import Shield, { ShieldProps } from "./ArmorClass/Shield";
import HitPoints, { HitPointProps } from "./HitPoints/HitPoints";
import Weapons from "./Weapons/Weapons";
import WeaponProficiencies, {
    WeaponProficiencyProps,
} from "./Weapons/WeaponProficiencies";
import Skills from "./Skills";
import { Skill } from "./Skill";
import { MovementProps } from "./MovementProps";
import OtherMovements from "./OtherMovements";
import WeaponDamageSection from "./Weapons/WeaponDamageSection";
import { WeaponViewProps } from "./Weapons/Weapon";
import { SavesProp } from "./SavesProps";

var width: number = Dimensions.get("window").width; //full width

interface Props {
    skills: Skill[];
    languages: string[];
    scores: AbilityScore[];
    characterMetadata: CharacterMetadataProps;
    classDCProficiency: ProficiencyProps;
    acProficiency: ProficiencyProps;
    level: number;
    armorProficiency: ArmorProficiencyProps;
    shieldProps: ShieldProps;
    saves: SavesProp;
    hitPoints: HitPointProps;
    resistances: string[];
    immunities: string[];
    conditions: string[];
    perception: ProficiencyProps;
    movement: MovementProps;
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
                    title={this.props.classDCProficiency.title}
                    proficiency={this.props.classDCProficiency.proficiency}
                    keyAbilityModifier={
                        this.props.classDCProficiency.keyAbilityModifier
                    }
                    is10base={this.props.classDCProficiency.is10base}
                    itemBonus={this.props.classDCProficiency.itemBonus}
                    level={this.props.level}
                />
                <ProficiencyView
                    title={"AC"}
                    keyAbilityModifier={
                        this.props.acProficiency.keyAbilityModifier
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
                    unarmoredProficiency={
                        this.props.armorProficiency.unarmoredProficiency
                    }
                    lightArmorProficiency={
                        this.props.armorProficiency.lightArmorProficiency
                    }
                    mediumArmorProficiency={
                        this.props.armorProficiency.mediumArmorProficiency
                    }
                    heavyArmorProficiency={
                        this.props.armorProficiency.heavyArmorProficiency
                    }
                />
                <Shield
                    hasShield={this.props.shieldProps.hasShield}
                    acBonus={this.props.shieldProps.acBonus}
                    hardness={this.props.shieldProps.hardness}
                    maxHP={this.props.shieldProps.maxHP}
                    currentHP={this.props.shieldProps.currentHP}
                />
                <ProficiencyView
                    title={"Fortitude"}
                    keyAbilityModifier={
                        this.props.saves.fortitude.keyAbilityModifier
                    }
                    proficiency={this.props.saves.fortitude.proficiency}
                    level={this.props.level}
                    itemBonus={this.props.saves.fortitude.itemBonus}
                />
                <ProficiencyView
                    title={"Reflex"}
                    keyAbilityModifier={
                        this.props.saves.reflex.keyAbilityModifier
                    }
                    proficiency={this.props.saves.reflex.proficiency}
                    level={this.props.level}
                    itemBonus={this.props.saves.reflex.itemBonus}
                />
                <ProficiencyView
                    title={"Will"}
                    keyAbilityModifier={
                        this.props.saves.will.keyAbilityModifier
                    }
                    proficiency={this.props.saves.will.proficiency}
                    level={this.props.level}
                    itemBonus={this.props.saves.will.itemBonus}
                />
                <Text style={styles.notes}>Notes: </Text>
                <HitPoints
                    max={this.props.hitPoints.max}
                    current={this.props.hitPoints.current}
                    temporary={this.props.hitPoints.temporary}
                    dying={this.props.hitPoints.dying}
                    wounded={this.props.hitPoints.wounded}
                />
                <View style={styles.rowContainer}>
                    <Text>Resistances: {this.props.resistances}</Text>
                    <Text>Immunities: {this.props.immunities}</Text>
                </View>
                <Text>Conditions: {this.props.conditions}</Text>
                <ProficiencyView
                    title={"Perception"}
                    keyAbilityModifier={
                        this.props.perception.keyAbilityModifier
                    }
                    proficiency={this.props.perception.proficiency}
                    level={this.props.level}
                    itemBonus={this.props.perception.itemBonus}
                    descriptor={this.props.perception.descriptor}
                />
                <View style={styles.rowContainer}>
                    <Text>Speed: {this.props.movement.landSpeed} feet</Text>
                    <OtherMovements movements={this.props.movement} />
                </View>
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
