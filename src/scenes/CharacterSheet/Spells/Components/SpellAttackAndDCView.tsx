import React, { Component } from "react";
import { StyleSheet } from "react-native";
import ProficiencyView from "../../../Shared/ProficiencyView";
import { Proficiencies, GetProficiencyTotalWithLevel } from "../../../../PF2eCoreLib/Proficiencies";
import { AbilityScore, CalculateAbilityScoreModifier, GetAbilityScoreAbbreviation } from "../../../../PF2eCoreLib/AbilityScores";
import { Layout, Text, Divider } from "@ui-kitten/components";
import ProficiencyArrayView from "../../../Shared/ProficiencyArrayView";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { startToggleDarkMode } from "../../../../store/actions/Theme/ThemeActions";
import { DarkModeOptions } from "../../../../store/ThemeState";
import { EntireAppState } from "../../../../store/Store";


const SpellAttackDCView: React.FC<Props> = (props) => {
    const spellAttackTotal =
            CalculateAbilityScoreModifier(props.keySpellcastingAbility.score)+
            props.spellAttackItemBonus +
            GetProficiencyTotalWithLevel(props.proficiency, props.level);
    const spellDCTotal =
            CalculateAbilityScoreModifier(props.keySpellcastingAbility.score)+
            props.spellDCItemBonus +
            GetProficiencyTotalWithLevel(props.proficiency, props.level) +
            10;
    const spellAttackItemBonus =
            props.spellAttackItemBonus !== null ? (
                <Text>
                    Item: +{props.spellAttackItemBonus}
                </Text>
            ) : (
                <Text/>
            );
    const spellDCItemBonus =
            props.spellDCItemBonus !== null ? (
                <Text>
                    Item: +{props.spellDCItemBonus}
                </Text>
            ) : (
                <Text/>
            );
    const modifier = CalculateAbilityScoreModifier(props.keySpellcastingAbility.score);
    const keyModifier = (
        <React.Fragment>
            <Text  category='p1'>
                {GetAbilityScoreAbbreviation(props.keySpellcastingAbility.ability.toString())}{" +"}
                {modifier}
            </Text>
        </React.Fragment>
    );
    return (
        <Layout style={styles.container}>
            <Layout style={styles.rowContainer}>
                <Text category='h5' style={styles.title}>Spell Attack</Text>
                <Layout style={styles.profAndMath}>
                    <ProficiencyArrayView proficiency={props.proficiency} />
                    <Layout style={styles.math} >
                        {spellAttackItemBonus}
                        {keyModifier}
                    </Layout>
                </Layout>
                <Text category='h5'>+{spellAttackTotal}</Text>
            </Layout>
            <Divider />
            <Layout style={styles.rowContainer}>
                <Text category='h5' style={styles.title}>Spell DC</Text>
                <Layout style={styles.profAndMath}>
                    <ProficiencyArrayView proficiency={props.proficiency} />
                    <Layout style={styles.math} >
                        {spellDCItemBonus}
                        {keyModifier}
                    </Layout>
                </Layout>
                <Text category='h5'>{spellDCTotal}</Text>
            </Layout>
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps
 
interface LinkStateProps {
    proficiency: Proficiencies;
    keySpellcastingAbility: AbilityScore;
    level: number;
    spellAttackItemBonus: number;
    spellDCItemBonus: number;
}
//all actions to be dispatched
interface LinkDispatchProps {

}

const mapStateToProps = (
    state: EntireAppState): LinkStateProps => ({
    proficiency: state.,
    keySpellcastingAbility: AbilityScore;
    level: number;
    spellAttackItemBonus: number;
    spellDCItemBonus: number;
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SpellAttackDCView);

const styles = StyleSheet.create({
    container: {
        flex: .45,
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        paddingHorizontal: 10
    },
    title: {
        flex: 1
    },
    profAndMath: {
        flex: 1,
        paddingHorizontal: 10
    },
    math: {
        flex: 1,
        justifyContent: "space-evenly",
        flexDirection: "row"
    }
});
