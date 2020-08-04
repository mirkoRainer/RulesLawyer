import React, { Component } from "react";
import { StyleSheet } from "react-native";
import SpellAttackAndDCView from "./Components/SpellAttackAndDCView";
import MagicTraditions, { MagicTraditionProps } from "./Components/MagicTraditions";
import SpellSlots from "./Components/SpellSlots";
import { SpellSlotProps } from "./Components/SpellSlotView";
import { SpellListEntry } from "./Components/Spell";
import Spells from "./Components/Spells";
import { Proficiencies } from "../../../PF2eCoreLib/Proficiencies";
import { Bonus, iBonus } from "../../../PF2eCoreLib/Bonus";
import { BonusType } from "../../../PF2eCoreLib/BonusTypes";
import { AbilityScore } from "../../../PF2eCoreLib/AbilityScores";
import { CharacterSheetState } from "../../../store/Store";
import { connect } from "react-redux";
import { Layout, Text } from "@ui-kitten/components";

const SpellsPage: React.FC<Props> = (props) => {
    return (
        <Layout style={styles.container}>
            <Text category='h4'> Spells Page </Text>
            <SpellAttackAndDCView
                proficiency={props.spellAttackProficiency}
                keySpellcastingAbility={
                    props.spellcastingAbilityModifier
                }
                level={props.currentLevel}
                spellAttackItemBonus={Bonus.GetBonusFor(
                    "SpellAttack",
                    BonusType.Item,
                    props.bonuses
                )}
                spellDCItemBonus={Bonus.GetBonusFor(
                    "SpellDC",
                    BonusType.Item,
                    props.bonuses
                )}
            />
            <MagicTraditions
                prepared={props.magicTraditions.prepared}
                spontaneous={props.magicTraditions.spontaneous}
                arcane={props.magicTraditions.arcane}
                primal={props.magicTraditions.primal}
                divine={props.magicTraditions.divine}
                occult={props.magicTraditions.occult}
            />
            <SpellSlots spellSlots={props.spellSlots} />
            <Spells spells={props.spells} />
        </Layout>
    );
};

interface LinkStateProps {
    spellAttackProficiency: Proficiencies;
    spellcastingAbilityModifier: AbilityScore;
    currentLevel: number;
    bonuses: iBonus[];
    magicTraditions: MagicTraditionProps;
    spellSlots: SpellSlotProps[];
    spells: SpellListEntry[];
}

type Props = LinkStateProps;

const mapStateToProps = (
    state: CharacterSheetState
): LinkStateProps => ({
    spellAttackProficiency: state.playerCharacter.spellAttackProficiency,
    spellcastingAbilityModifier: state.playerCharacter.abilityScores[state.playerCharacter.spellcastingAbilityModifier],
    currentLevel: state.playerCharacter.level,
    bonuses: state.playerCharacter.bonuses,
    magicTraditions: state.playerCharacter.magicTraditions,
    spellSlots: state.playerCharacter.spellSlots,
    spells: state.playerCharacter.spells
});

export default connect(mapStateToProps, null)(SpellsPage);

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
