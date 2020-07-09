import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import SpellAttackAndDCView from "./Components/SpellAttackAndDCView";
import MagicTraditions, { MagicTraditionProps } from "./Components/MagicTraditions";
import SpellSlots from "./Components/SpellSlots";
import { SpellSlotProps } from "./Components/SpellSlotView";
import { Spell, SpellListEntry } from "./Components/Spell";
import Spells from "./Components/Spells";
import { Proficiencies } from "../../Shared/PF2eCoreLib/Proficiencies";
import { Bonus, iBonus } from "../../Shared/PF2eCoreLib/Bonus";
import { BonusType } from "../../Shared/PF2eCoreLib/BonusTypes";
import { AbilityModifierWithName } from "../../Shared/PF2eCoreLib/AbilityScores";

interface Props {
    spellAttackProficiency: Proficiencies;
    spellcastingAbilityModifier: AbilityModifierWithName;
    currentLevel: number;
    bonuses: iBonus[];
    magicTraditions: MagicTraditionProps;
    spellSlots: SpellSlotProps[];
    spells: SpellListEntry[];
}

interface State {}

export default class SpellsPage extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text h4> Spells Page </Text>
                <SpellAttackAndDCView
                    proficiency={this.props.spellAttackProficiency}
                    keySpellcastingAbility={
                        this.props.spellcastingAbilityModifier
                    }
                    level={this.props.currentLevel}
                    spellAttackItemBonus={Bonus.GetBonusFor(
                        "SpellAttack",
                        BonusType.Item,
                        this.props.bonuses
                    )}
                    spellDCItemBonus={Bonus.GetBonusFor(
                        "SpellDC",
                        BonusType.Item,
                        this.props.bonuses
                    )}
                />
                <MagicTraditions
                    prepared={this.props.magicTraditions.prepared}
                    spontaneous={this.props.magicTraditions.spontaneous}
                    arcane={this.props.magicTraditions.arcane}
                    primal={this.props.magicTraditions.primal}
                    divine={this.props.magicTraditions.divine}
                    occult={this.props.magicTraditions.occult}
                />
                <SpellSlots spellSlots={this.props.spellSlots} />
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
