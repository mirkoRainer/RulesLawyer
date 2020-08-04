import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startTextEditModal } from "../../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { CHANGE_RESISTANCES, CHANGE_IMMUNITIES, CHANGE_WEAKNESSES } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";
import { Layout, Text } from "@ui-kitten/components";
import { CharacterSheetState } from "../../../../store/Store";

const ResistancesImmunitiesWeaknesses: React.FC<Props> = (props) => {
    const resistancesDisplay: string = props.resistances;
    const changeResistances = () => {props.startTextEditModal(CHANGE_RESISTANCES);};
    const immunitiesDisplay: string = props.immunities;
    const changeImmunities = () => {props.startTextEditModal(CHANGE_IMMUNITIES);};
    const weaknessesDisplay: string = props.weaknesses;
    const changeWeaknesses = () => {props.startTextEditModal(CHANGE_WEAKNESSES);};

    return (
        <Layout style={styles.container}>
            <Layout style={styles.horizontal}>
                <Layout style={styles.container}>
                    <Text style={styles.text} category='h6' onPress={changeResistances}>Resistances: </Text>
                    <Text style={styles.text} category='p1' onPress={changeResistances}>{resistancesDisplay}</Text>
                </Layout>
                <Layout style={styles.container}>
                    <Text style={styles.text} category='h6' onPress={changeImmunities}>Immunities: </Text>
                    <Text style={styles.text} category='p1' onPress={changeImmunities}>{immunitiesDisplay}</Text>
                </Layout>
            </Layout>
            <Text style={styles.text} category='h6' onPress={changeWeaknesses}>Weaknesses: </Text>
            <Text style={styles.text} category='p1' onPress={changeWeaknesses}>{weaknessesDisplay}</Text>
        </Layout>
    );
};

interface LinkStateProps {
    resistances: string;
    immunities: string;
    weaknesses: string;
}

type Props = LinkStateProps & LinkDispatchProps;

interface LinkDispatchProps {
    startTextEditModal: (propertyToChange: string) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        startTextEditModal: bindActionCreators(startTextEditModal, dispatch),
    };
};

const mapStateToProps = (
    state: CharacterSheetState): LinkStateProps => ({
    resistances: state.playerCharacter.resistances,
    immunities: state.playerCharacter.immunities,
    weaknesses: state.playerCharacter.weakness
});

export default connect(mapStateToProps, mapDispatchToProps)(ResistancesImmunitiesWeaknesses);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "stretch",
        alignSelf: "stretch",
        padding: 5
    },
    horizontal: {
        flex: 1,
        flexDirection: "row",
        flexGrow: 1
    },
    text: {
        flex: 1,
        alignSelf: "center",
    },
});
