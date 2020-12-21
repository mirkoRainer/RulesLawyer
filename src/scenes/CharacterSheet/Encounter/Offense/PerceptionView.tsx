import React from "react";
import { StyleSheet } from "react-native";
import {
    AbilityScore,
    CalculateAbilityScoreModifier,
    GetAbilityScoreAbbreviation,
} from "../../../../PF2eCoreLib/AbilityScores";
import {
    Proficiencies,
    GetProficiencyTotalWithLevel,
    DetermineNextProficiency,
} from "../../../../PF2eCoreLib/Proficiencies";
import { Layout, Text } from "@ui-kitten/components";
import ProficiencyArrayView from "../../../Shared/ProficiencyArrayView";
import { connect } from "react-redux";
import { EntireAppState } from "../../../../store/Store";
import { Bonus, iBonus } from "../../../../PF2eCoreLib/Bonus";
import { BonusType } from "../../../../PF2eCoreLib/BonusTypes";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startChangePerceptionProficiency } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { startTextEditModal } from "../../../../store/actions/Modals/ModalsActions";
import { CHANGE_SENSES } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";

const PerceptionView: React.FC<Props> = (props) => {
    const modifier = CalculateAbilityScoreModifier(props.keyAbility.score);
    const tenBase = <Text style={styles.tenBase}>10 + </Text>;

    const keyModifier = (
        <React.Fragment>
            <Text style={styles.modifierText} category="p1">
                {GetAbilityScoreAbbreviation(
                    props.keyAbility.ability.toString()
                )}{" "}
            </Text>
            <Text category="p1" style={styles.modifierNumber}>
                {modifier}
            </Text>
        </React.Fragment>
    );
    const itemBonus = Bonus.GetBonusFor(
        "perception",
        BonusType.Item,
        props.bonuses
    );

    const itemBonusView = (
        <Text style={styles.itemBonus}>Item: {itemBonus}</Text>
    );

    const senses = (
        <Text style={styles.descriptor}>Senses: {props.senses}</Text>
    );

    const total =
        CalculateAbilityScoreModifier(props.keyAbility.score) +
        itemBonus +
        GetProficiencyTotalWithLevel(props.proficiency, props.level);
    const totalView = (
        <Text style={styles.total} category="h5">
            {10 + total}
        </Text>
    );

    const handleProficiencyChange = () => {
        console.debug("handleProficiencyChange in PerceptionView");
        props.changeProficiency(DetermineNextProficiency(props.proficiency));
    };

    const handleChangeSenses = () => {
        props.startTextEditModal(CHANGE_SENSES);
    };

    return (
        <Layout style={styles.flex1}>
            <TouchableOpacity onPress={handleProficiencyChange}>
                <Layout style={styles.horizontal}>
                    <Text style={styles.title10} category="h5">
                        Perception
                    </Text>
                    {totalView}
                </Layout>
                <Layout style={styles.horizontal}>
                    {tenBase}
                    {keyModifier}
                    {itemBonusView}
                    <Layout style={styles.touchable}>
                        <ProficiencyArrayView proficiency={props.proficiency} />
                    </Layout>
                </Layout>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleChangeSenses}>
                {senses}
            </TouchableOpacity>
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {
    changeProficiency: (newProficiency: Proficiencies) => void;
    startTextEditModal: (propertyToChange: string) => void;
}

interface LinkStateProps {
    keyAbility: AbilityScore;
    proficiency: Proficiencies;
    level: number;
    bonuses: iBonus[];
    senses: string;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        changeProficiency: bindActionCreators(
            startChangePerceptionProficiency,
            dispatch
        ),
        startTextEditModal: bindActionCreators(startTextEditModal, dispatch),
    };
};

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    keyAbility: state.playerCharacter.abilityScores.Wisdom,
    proficiency: state.playerCharacter.perceptionProficiency,
    level: state.playerCharacter.level,
    bonuses: state.playerCharacter.bonuses,
    senses: state.playerCharacter.senses,
});

export default connect(mapStateToProps, mapDispatchToProps)(PerceptionView);

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
        padding: 5,
    },
    horizontal: {
        flex: 1,
        flexDirection: "row",
        alignContent: "stretch",
        alignSelf: "stretch",
        justifyContent: "space-around",
        paddingHorizontal: 10,
    },
    descriptor: {
        flex: 1,
        paddingHorizontal: 15,
    },
    text: {
        flex: 3,
        width: 100,
    },
    title: {
        flex: 4,
        // alignSelf: "center",
        // textAlign: "center",
    },
    title10: {
        flex: 3,
        // alignSelf: "center",
        // textAlign: "center",
    },
    total: {
        flex: 1,
        alignSelf: "center",
        textAlign: "center",
    },
    equals: {
        flex: 2,
        alignSelf: "center",
    },
    tenBase: {
        flex: 2,
        alignSelf: "center",
    },
    noTenBase: {},
    modifierText: {
        flex: 1.5,
        alignSelf: "center",
    },
    modifierNumber: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "flex-end",
        textAlign: "right",
        paddingRight: 10,
    },
    profBonus: {
        flex: 2,
        alignSelf: "center",
    },
    itemBonus: {
        flex: 3,
        alignSelf: "center",
        textAlign: "center",
    },
    equalSign: {
        flex: 1,
        alignSelf: "center",
    },
    touchable: {
        flex: 4,
    },
});
