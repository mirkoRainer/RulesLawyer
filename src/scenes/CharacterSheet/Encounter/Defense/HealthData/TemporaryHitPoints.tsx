import React, { Component } from "react";
import {StyleSheet, TouchableOpacity } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { CHANGE_TEMPORARY_HITPOINTS } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";
import { AppState } from "../../../../../store/Store";
import { startNumberPickerModalSelection } from "../../../../../store/actions/Modals/ModalsActions";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";

const TemporaryHitPoints: React.FC<Props> = (props) => {
    const changeTempHP = () => {
        props.startPickerModal(CHANGE_TEMPORARY_HITPOINTS, props.temporaryHitPoints);
    };

    return (
        <Layout style={styles.container}>
            <TouchableOpacity style={styles.container} onPress={changeTempHP}>
                <Text style={styles.text} category='p1'> Temp: </Text>
                <Text category='h4' style={styles.text}> {props.temporaryHitPoints} </Text>
            </TouchableOpacity>
        </Layout>
    );
};

type Props = LinkStateProps & LinkDispatchProps & OwnProps;

interface OwnProps {}

interface LinkDispatchProps {
    startPickerModal: (actionType: string, tempHitPoints: number) => void;
}

interface LinkStateProps {
    temporaryHitPoints: number;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {
        startPickerModal: bindActionCreators(startNumberPickerModalSelection, dispatch),
    };
};

const mapStateToProps = (
    state: AppState): LinkStateProps => ({
    temporaryHitPoints: state.playerCharacter.hitPoint.temporaryHitPoints,
});

export default connect(mapStateToProps, mapDispatchToProps)(TemporaryHitPoints);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    text: {},
});

