import React, { Component } from "react";
import { StyleSheet } from "react-native";
import ProficiencyView from "../../../Shared/ProficiencyView";
import { Proficiencies } from "../../../../PF2eCoreLib/Proficiencies";
import { AbilityScore } from "../../../../PF2eCoreLib/AbilityScores";
import { Layout, Text, Divider } from "@ui-kitten/components";

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
            <Layout style={styles.container}>
                <ProficiencyView
                    title={"Spell Attack"}
                    proficiency={this.props.proficiency}
                    keyAbility={this.props.keySpellcastingAbility}
                    level={this.props.level}
                    itemBonus={this.props.spellAttackItemBonus}
                />
                <Divider />
                <ProficiencyView
                    title={"Spell DC"}
                    proficiency={this.props.proficiency}
                    keyAbility={this.props.keySpellcastingAbility}
                    level={this.props.level}
                    itemBonus={this.props.spellDCItemBonus}
                    is10base={true}
                />
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: .65,
    },
    text: {
        flex: 1,
        width: 100,
    }
});
