import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { OwnProps } from "../../Story/Components/CharacterMetadata/ClassView";
import { bindActionCreators } from "redux";
import { startTextEditModal } from "../../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { CHANGE_RESISTANCES, CHANGE_IMMUNITIES, CHANGE_WEAKNESSES } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";

const ResistancesImmunitiesWeaknesses: React.FC<Props> = (props) => {
    const resistancesDisplay: string = props.resistances;
    const changeResistances = () => {props.startTextEditModal(CHANGE_RESISTANCES);};
    const immunitiesDisplay: string = props.immunities;
    const changeImmunities = () => {props.startTextEditModal(CHANGE_IMMUNITIES);};
    const weaknessesDisplay: string = props.weaknesses;
    const changeWeaknesses = () => {props.startTextEditModal(CHANGE_WEAKNESSES);};

    return (
        <View style={styles.container}>
            <Text onPress={changeResistances}>Resistances: {resistancesDisplay}</Text>
            <Text onPress={changeImmunities}>Immunities: {immunitiesDisplay}</Text>
            <Text onPress={changeWeaknesses}>Weaknesses: {weaknessesDisplay}</Text>
        </View>
    );
};

export interface ResistancesImmunitiesWeaknessesProps {
    resistances: string;
    immunities: string;
    weaknesses: string;
}

type Props = ResistancesImmunitiesWeaknessesProps & LinkDispatchProps;

interface LinkDispatchProps {
    startTextEditModal: (propertyToChange: string) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: ResistancesImmunitiesWeaknessesProps
): LinkDispatchProps => {
    return {
        startTextEditModal: bindActionCreators(startTextEditModal, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(ResistancesImmunitiesWeaknesses);

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignContent: "stretch",
        alignSelf: "stretch",
    },
    text: {
        flex: 1,
        alignSelf: "center",
    },
    text2: {
        flex: 2,
        alignSelf: "center",
    },
});
