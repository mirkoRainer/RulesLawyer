import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Layout } from "@ui-kitten/components";
import ProficiencyView, {
    ProficiencyProps,
} from "../../../Shared/ProficiencyView";
import { Bonus, iBonus } from "../../../../PF2eCoreLib/Bonus";
import { BonusType } from "../../../../PF2eCoreLib/BonusTypes";
import PlayerCharacter, {
    iClass,
} from "../../../../PF2eCoreLib/PlayerCharacter";
import { Action, bindActionCreators } from "redux";
import { EntireAppState } from "../../../../store/Store";
import { connect } from "react-redux";
import { startChangeClassDCProficiency } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { AbilityScoreArray } from "../../../../PF2eCoreLib/AbilityScores";
import {
    Proficiencies,
    DetermineNextProficiency,
} from "../../../../PF2eCoreLib/Proficiencies";

const ClassDC: React.FC<Props> = (props) => {
    const classDCProficiency = (): ProficiencyProps => {
        return {
            title: "Class DC",
            keyAbility: props.abilityScores[props.pcClass.keyAbility],
            proficiency: props.pcClass.proficiency,
            level: props.level,
            itemBonus: Bonus.GetBonusFor(
                "classDc",
                BonusType.Item,
                props.bonuses
            ),
            is10base: true,
        };
    };

    const changeProf = () => {
        const dcProf = props.pcClass.proficiency;
        props.changeClassDCProficiency(DetermineNextProficiency(dcProf));
    };

    return (
        <Layout>
            <TouchableOpacity onPress={changeProf}>
                <ProficiencyView
                    title={"Class DC"}
                    proficiency={classDCProficiency().proficiency}
                    keyAbility={classDCProficiency().keyAbility}
                    is10base={classDCProficiency().is10base}
                    itemBonus={classDCProficiency().itemBonus}
                    level={props.level}
                />
            </TouchableOpacity>
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {
    changeClassDCProficiency: (classDCProficiency: Proficiencies) => void;
}

interface LinkStateProps {
    abilityScores: AbilityScoreArray;
    pcClass: iClass;
    level: number;
    bonuses: iBonus[];
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        changeClassDCProficiency: bindActionCreators(
            startChangeClassDCProficiency,
            dispatch
        ),
    };
};

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    abilityScores: state.playerCharacter.abilityScores,
    pcClass: state.playerCharacter.pcClass,
    level: state.playerCharacter.level,
    bonuses: state.playerCharacter.bonuses,
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassDC);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
    },
    header: {
        flex: 1,
        textAlign: "center",
        fontSize: 22,
    },
});
