import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { CHANGE_TEMPORARY_HITPOINTS } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";
import { EntireAppState } from "../../../../../store/Store";
import { startNumberPickerModalSelection } from "../../../../../store/actions/Modals/ModalsActions";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import {
    startChangeCompanion,
    startChangeCompanionTempHp,
} from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { Companion } from "../../../../../PF2eCoreLib/PlayerCharacter/Companion";

const TemporaryHitPoints: React.FC<Props> = (props) => {
    const changeTempHP = () => {
        props.startPickerModal(
            CHANGE_TEMPORARY_HITPOINTS,
            props.temporaryHitPoints
        );
    };
    const changeTempHpCompanion = (delta: number) => {
        props.changeCompanionTempHp(
            props.temporaryHitPoints + delta,
            props.companionIndex!
        );
    };
    const plus = props.isCompanion ? (
        <Button
            appearance="outline"
            style={{ flex: 0.25 }}
            onPress={() => {
                changeTempHpCompanion(1);
            }}
        >
            +
        </Button>
    ) : (
        <></>
    );
    const minus = props.isCompanion ? (
        <Button
            appearance="outline"
            style={{ flex: 0.25 }}
            onPress={() => {
                changeTempHpCompanion(-1);
            }}
        >
            -
        </Button>
    ) : (
        <></>
    );

    return (
        <Layout style={styles.container}>
            <TouchableOpacity
                style={styles.container}
                onPress={changeTempHP}
                disabled={props.isCompanion}
            >
                {plus}
                <Layout style={{ alignItems: "center", padding: 5, flex: 1 }}>
                    <Text style={styles.text} category="p1">
                        {" "}
                        Temp:{" "}
                    </Text>
                    <Text category="h4" style={styles.text}>
                        {" "}
                        {props.temporaryHitPoints}{" "}
                    </Text>
                </Layout>
                {minus}
            </TouchableOpacity>
        </Layout>
    );
};

type Props = LinkStateProps & LinkDispatchProps & OwnProps;

interface OwnProps {
    isCompanion?: boolean;
    companionIndex?: number;
}

interface LinkDispatchProps {
    startPickerModal: (actionType: string, tempHitPoints: number) => void;
    changeCompanionTempHp: (newTempHp: number, index: number) => void;
}

interface LinkStateProps {
    temporaryHitPoints: number;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {
        startPickerModal: bindActionCreators(
            startNumberPickerModalSelection,
            dispatch
        ),
        changeCompanionTempHp: bindActionCreators(
            startChangeCompanionTempHp,
            dispatch
        ),
    };
};

const mapStateToProps = (
    state: EntireAppState,
    ownProps: OwnProps
): LinkStateProps => {
    if (ownProps.isCompanion && ownProps.companionIndex !== undefined) {
        return {
            temporaryHitPoints:
                state.playerCharacter.companions[ownProps.companionIndex]
                    .hitPoints.temporaryHitPoints,
        };
    }
    return {
        temporaryHitPoints: state.playerCharacter.hitPoints.temporaryHitPoints,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TemporaryHitPoints);

const styles = StyleSheet.create({
    container: {
        flex: 1.2,
        alignItems: "center",
        flexDirection: "row",
    },
    text: {},
});
