import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import SpellAttackAndDCView from "./SpellAttackAndDCView";
import MagicTraditions from "./MagicTraditions";

interface Props {
    spellAttackProficiency: string;
    spellcastingAbilityModifier: number;
    currentLevel: number;
    spellAttackItemBonusTotal: number;
    spellDCItemBonusTotal: number;
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
                    prepared={true}
                    spontaneous={false}
                    arcane={false}
                    primal={true}
                    divine={true}
                    occult={false}
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
        alignSelf: "stretch",
        alignContent: "stretch",
    },
    text: {
        backgroundColor: "yellow",
    },
});
