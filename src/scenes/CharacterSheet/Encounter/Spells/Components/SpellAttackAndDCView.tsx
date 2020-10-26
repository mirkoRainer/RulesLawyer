import React, { Component, useState } from "react";
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityComponent,
} from "react-native";
import ProficiencyView from "../../../../Shared/ProficiencyView";
import {
    Proficiencies,
    GetProficiencyTotalWithLevel,
    DetermineNextProficiency,
} from "../../../../../PF2eCoreLib/Proficiencies";
import {
    AbilityScore,
    CalculateAbilityScoreModifier,
    GetAbilityScoreAbbreviation,
} from "../../../../../PF2eCoreLib/AbilityScores";
import { Layout, Text, Divider } from "@ui-kitten/components";
import ProficiencyArrayView from "../../../../Shared/ProficiencyArrayView";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { EntireAppState } from "../../../../../store/Store";

import { bindActionCreators } from "redux";
import { startChangeSpellProficiency } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { useFocusEffect } from "@react-navigation/native";

const SpellAttackDCView: React.FC<Props> = (props) => {
    // ensure the page refreshes data when it's navigated back to but setting state when the page is focus. React.useCallback prevents an infinite loop.
    const [state, setState] = useState({});
    useFocusEffect(
        React.useCallback(() => {
            setState({});
        }, [])
    );
    const spellAttackTotal =
        CalculateAbilityScoreModifier(props.keySpellcastingAbility.score) +
        props.spellAttackItemBonus +
        GetProficiencyTotalWithLevel(props.proficiency, props.level);
    const spellDCTotal =
        CalculateAbilityScoreModifier(props.keySpellcastingAbility.score) +
        props.spellDCItemBonus +
        GetProficiencyTotalWithLevel(props.proficiency, props.level) +
        10;
    const spellAttackItemBonus =
        props.spellAttackItemBonus !== null ? (
            <Text>Item: +{props.spellAttackItemBonus}</Text>
        ) : (
            <Text />
        );
    const spellDCItemBonus =
        props.spellDCItemBonus !== null ? (
            <Text>Item: +{props.spellDCItemBonus}</Text>
        ) : (
            <Text />
        );
    const modifier = CalculateAbilityScoreModifier(
        props.keySpellcastingAbility.score
    );
    const keyModifier = (
        <React.Fragment>
            <Text category="p1">
                {GetAbilityScoreAbbreviation(
                    props.keySpellcastingAbility.ability.toString()
                )}
                {" +"}
                {modifier}
            </Text>
        </React.Fragment>
    );
    const handleTouch = () => {
        const newProficiency = DetermineNextProficiency(props.proficiency);
        props.updateSpellProficiency(newProficiency);
        setState({});
    };

    return (
        <Layout style={styles.container}>
            <TouchableOpacity onPress={handleTouch} style={{ flex: 1 }}>
                <Layout style={styles.rowContainer}>
                    <Layout style={{ ...styles.math, ...styles.title }}>
                        <Text
                            category="h5"
                            style={{ ...styles.title, textAlign: "right" }}
                        >
                            Attack
                        </Text>
                        <Text
                            category="h5"
                            style={{ ...styles.title, textAlign: "right" }}
                        >
                            DC
                        </Text>
                    </Layout>
                    <Layout style={styles.profAndMath}>
                        <ProficiencyArrayView proficiency={props.proficiency} />
                        <Layout style={styles.math}>
                            <Text>Spell:</Text>
                            {spellAttackItemBonus}
                            {keyModifier}
                        </Layout>
                        <Layout style={styles.math}>
                            <Text>DC:</Text>
                            {spellDCItemBonus}
                        </Layout>
                    </Layout>
                    <Layout>
                        <Text category="h5">+{spellAttackTotal}</Text>
                        <Text category="h5">DC{spellDCTotal}</Text>
                    </Layout>
                </Layout>
            </TouchableOpacity>
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkStateProps {
    proficiency: Proficiencies;
    keySpellcastingAbility: AbilityScore;
    level: number;
    spellAttackItemBonus: number;
    spellDCItemBonus: number;
}
//all actions to be dispatched
interface LinkDispatchProps {
    updateSpellProficiency: (newProf: Proficiencies) => void;
}

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    proficiency: state.playerCharacter.spellAttackProficiency,
    keySpellcastingAbility:
        state.playerCharacter.abilityScores[
            state.playerCharacter.spellcastingAbilityModifier
        ],
    level: state.playerCharacter.level,
    spellAttackItemBonus: state.playerCharacter.spellAttackItemBonus,
    spellDCItemBonus: state.playerCharacter.spellDCItemBonus,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
    updateSpellProficiency: bindActionCreators(
        startChangeSpellProficiency,
        dispatch
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpellAttackDCView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        padding: 10,
    },
    title: {
        flex: 0.5,
        flexDirection: "column",
    },
    profAndMath: {
        flex: 1,
        paddingHorizontal: 10,
    },
    math: {
        flex: 1,
        justifyContent: "space-evenly",
        flexDirection: "row",
    },
});
