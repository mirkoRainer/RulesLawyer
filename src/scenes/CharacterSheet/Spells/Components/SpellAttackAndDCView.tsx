import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import ProficiencyView from "../../../Shared/ProficiencyView";
import { Proficiencies } from "../../../../PF2eCoreLib/Proficiencies";
import { AbilityScore } from "../../../../PF2eCoreLib/AbilityScores";

interface Props {
    proficiency: Proficiencies;
    keySpellcastingAbility: AbilityScore;
    level: number;
    spellAttackItemBonus: number;
    spellDCItemBonus: number;
}

interface State {}

export default class SpellAttackDCView extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}> Spell Attack </Text>
                <ProficiencyView
                    title={"Spell Attack"}
                    proficiency={this.props.proficiency}
                    keyAbility={this.props.keySpellcastingAbility}
                    level={this.props.level}
                    itemBonus={this.props.spellAttackItemBonus}
                />
                <ProficiencyView
                    title={"Spell DC"}
                    proficiency={this.props.proficiency}
                    keyAbility={this.props.keySpellcastingAbility}
                    level={this.props.level}
                    itemBonus={this.props.spellDCItemBonus}
                    is10base={true}
                />
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
    },
    header: {
        flex: 1,
        fontSize: 16,
        fontWeight: "bold",
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
});
