import React, { Component } from "react";
import { StyleSheet } from "react-native";
// eslint-disable-next-line no-unused-vars
import {
    AbilityScore,
    CalculateAbilityScoreModifier,
    GetAbilityScoreAbbreviation,
} from "../../../../../PF2eCoreLib/AbilityScores";
import { CHANGE_ABILITY_SCORE } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startTextEditModal, startPickerForAbilityScore } from "../../../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { Layout, Text } from "@ui-kitten/components";

import { Ability } from "../../../../../PF2eCoreLib/Ability";
import { startChangeAbilityScore } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActions";

const AbilityScoreView: React.FC<Props> = (props) => {
    let formattedModifierString: string;
    const modifier = CalculateAbilityScoreModifier(props.score);
    formattedModifierString = modifier > 0 ? ("+" + modifier) : (modifier.toString());
    const abilityName = GetAbilityScoreAbbreviation(props.ability);
    const abilityScore: AbilityScore = { ability: props.ability, score: props.score };
    const changeAbilityScore = () => {
        props.startPickerModal(CHANGE_ABILITY_SCORE, abilityScore);
    };
    return (
        <Layout style={styles.container}>
            <Text style={styles.ability}>{abilityName}:</Text>
            <Text style={styles.score} onPress={changeAbilityScore}>{props.score}</Text>
            <Text style={styles.modifier} onPress={changeAbilityScore}>
                {formattedModifierString}
            </Text>
        </Layout>
    );
};

type Props = AbilityScore & LinkDispatchProps;

interface LinkDispatchProps {
    startPickerModal: (actionTytpe: string, abilityScore: AbilityScore) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: AbilityScore
): LinkDispatchProps => {
    return {
        startPickerModal: bindActionCreators(startPickerForAbilityScore, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(AbilityScoreView);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    ability: {
        flex: 3,
        textAlign: "right",
    },
    score: {
        flex: 2,
        textAlign: "center",
    },
    modifier: {
        flex: 2,
        textAlign: "left",
    },
});
