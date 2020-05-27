import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import SpellAttackAndDCView from "./SpellAttackAndDCView";
import MagicTraditions, { MagicTraditionProps } from "./MagicTraditions";
import SpellSlots from "./SpellSlots";
import { SpellSlotProps } from "./SpellSlotView";
import { Spell } from "./Spell";
import Spells from "./Spells";

interface Props {
    spellAttackProficiency: string;
    spellcastingAbilityModifier: number;
    currentLevel: number;
    spellAttackItemBonusTotal: number;
    spellDCItemBonusTotal: number;
    magicTraditions: MagicTraditionProps;
    spellSlots: SpellSlotProps[];
    spells: Spell[];
}

interface State {}

export default class SpellsPage extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Spells Page </Text>
                <SpellAttackAndDCView
                    proficiency={this.props.spellAttackProficiency}
                    keySpellcastingAbilityModifier={
                        this.props.spellcastingAbilityModifier
                    }
                    level={this.props.currentLevel}
                    spellAttackItemBonus={this.props.spellAttackItemBonusTotal}
                    spellDCItemBonus={this.props.spellDCItemBonusTotal}
                />
                <MagicTraditions
                    prepared={this.props.magicTraditions.prepared}
                    spontaneous={this.props.magicTraditions.spontaneous}
                    arcane={this.props.magicTraditions.arcane}
                    primal={this.props.magicTraditions.primal}
                    divine={this.props.magicTraditions.divine}
                    occult={this.props.magicTraditions.occult}
                />
                <SpellSlots SpellSlots={this.props.spellSlots} />
                <Spells spells={this.props.spells} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        alignSelf: "stretch",
        alignContent: "stretch",
    },
    text: {
        backgroundColor: "yellow",
    },
});
