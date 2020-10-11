import React from "react";
import { StyleSheet } from "react-native";
import SpellAttackAndDCView from "./Components/SpellAttackAndDCView";
import { MagicTraditionProps } from "./Components/MagicTraditions";
import { SpellList } from "./Components/Spell";
import Spells from "./Components/Spells";
import { Proficiencies } from "../../../../PF2eCoreLib/Proficiencies";
import { iBonus } from "../../../../PF2eCoreLib/Bonus";
import { AbilityScore } from "../../../../PF2eCoreLib/AbilityScores";
import { EntireAppState } from "../../../../store/Store";
import { connect } from "react-redux";
import { Layout, Divider } from "@ui-kitten/components";
import { ScrollView } from "react-native-gesture-handler";
import SpellSlotsView from "./Components/SpellSlotsView";

export type SpellViewNavigationProps = StackNavigationProp<
    SpellsStackParamList,
    "SpellsView"
>;

const SpellsPage: React.FC<Props> = (props) => {
    return (
        <Layout style={styles.container}>
            <ScrollView>
                <Divider />
                <SpellAttackAndDCView />
                <Divider />
                <SpellSlotsView />
                <Divider />
                {/* <MagicTraditions
                    prepared={props.magicTraditions.prepared}
                    spontaneous={props.magicTraditions.spontaneous}
                    arcane={props.magicTraditions.arcane}
                    primal={props.magicTraditions.primal}
                    divine={props.magicTraditions.divine}
                    occult={props.magicTraditions.occult}
                /> */}
                <Divider />
                <Spells spells={props.spells} navigation={props.navigation} />
            </ScrollView>
        </Layout>
    );
};

interface LinkStateProps {
    spellAttackProficiency: Proficiencies;
    spellcastingAbilityModifier: AbilityScore;
    currentLevel: number;
    bonuses: iBonus[];
    magicTraditions: MagicTraditionProps;
    spells: SpellList;
}

type Props = LinkStateProps & {
    navigation: SpellViewNavigationProps;
};

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    spellAttackProficiency: state.playerCharacter.spellAttackProficiency,
    spellcastingAbilityModifier:
        state.playerCharacter.abilityScores[
            state.playerCharacter.spellcastingAbilityModifier
        ],
    currentLevel: state.playerCharacter.level,
    bonuses: state.playerCharacter.bonuses,
    magicTraditions: state.playerCharacter.magicTraditions,
    spells: state.playerCharacter.spells,
});

export default connect(mapStateToProps, null)(SpellsPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
    },
    text: {
        backgroundColor: "yellow",
    },
});
