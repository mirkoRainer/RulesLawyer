import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import CharacterMetadata from "./CharacterMetadata";
import AbilityScores from "./AbilityScoresView";
import { Dimensions } from "react-native";
import { IAbilityScore } from "./AbilityScores/IAbilityScores";
import ProficiencyView from "../Shared/ProficiencyView";
import ProficiencyArrayView from "../Shared/ProficiencyArrayView";
import ArmorProficiencies from "./ArmorClass/ArmorProficiencies";
import Shield from "./ArmorClass/Shield";

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
            </View>
        );
    }
}
