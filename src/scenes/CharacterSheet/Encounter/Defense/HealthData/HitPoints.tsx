import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Layout, Text, Button, ButtonGroup } from "@ui-kitten/components";
import { bindActionCreators } from "redux";
import { startChangeHitPoints } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import TemporaryHitPoints from "./TemporaryHitPoints";
import DyingView from "./DyingView";
import WoundedView from "./WoundedView";
import { CHANGE_MAX_HITPOINTS } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";
import { startNumberPickerModalSelection } from "../../../../../store/actions/Modals/ModalsActions";
import { HealthData } from "../../../../../PF2eCoreLib/HealthData";

const HitPoints: React.FC<Props> = (props) => {
    const PlusHPButton = (amount: number) => (
        // @ts-ignore
        <Button
            onPress={() => {
                props.AdjustHitPoints(
                    amount,
                    false,
                    props.isCompanion,
                    props.companionIndex
                );
            }}
            style={styles.plus}
        >
            +{amount.toString()}
        </Button>
    );
    const MinusHPButton = (amount: number) => (
        // @ts-ignore
        <Button
            onPress={() => {
                props.AdjustHitPoints(
                    -amount,
                    false,
                    props.isCompanion,
                    props.companionIndex
                );
            }}
            style={styles.minus}
        >
            -{amount.toString()}
        </Button>
    );

    const handleHPTap = () => {
        console.debug("handleHPTap");
        props.startPickerModal(
            CHANGE_MAX_HITPOINTS,
            props.healthData.maxHitPoints
        );
    };

    const maxHP = () => {
        const delta =
            props.healthData.maxHitPoints - props.healthData.currentHitPoints;
        props.AdjustHitPoints(
            delta,
            false,
            props.isCompanion,
            props.companionIndex
        );
    };

    return (
        <Layout>
            <Layout style={styles.rowContainer}>
                <ButtonGroup
                    style={styles.container}
                    size="tiny"
                    status="danger"
                >
                    {MinusHPButton(1)}
                    {MinusHPButton(5)}
                    {MinusHPButton(10)}
                </ButtonGroup>
                <Layout>
                    <TouchableOpacity onPress={handleHPTap}>
                        <Text style={styles.subHeader} category="p1">
                            {" "}
                            HP:{" "}
                        </Text>
                        <Text category="h4" style={styles.text}>
                            {" "}
                            {props.healthData.currentHitPoints}/
                            {props.healthData.maxHitPoints}{" "}
                        </Text>
                    </TouchableOpacity>
                    <Button size="tiny" status="basic" onPress={maxHP}>
                        Max
                    </Button>
                </Layout>
                <ButtonGroup style={styles.container} size="tiny" status="info">
                    {PlusHPButton(10)}
                    {PlusHPButton(5)}
                    {PlusHPButton(1)}
                </ButtonGroup>
            </Layout>
            <Layout style={{ padding: 10, flex: 0.65 }}>
                <Layout style={styles.rowContainer}>
                    <TemporaryHitPoints
                        isCompanion={props.isCompanion}
                        companionIndex={props.companionIndex}
                    />
                    <DyingView
                        isCompanion={props.isCompanion}
                        companionIndex={props.companionIndex}
                    />
                    <WoundedView
                        isCompanion={props.isCompanion}
                        companionIndex={props.companionIndex}
                    />
                </Layout>
            </Layout>
        </Layout>
    );
};

type Props = OwnProps & LinkDispatchProps;

interface OwnProps {
    healthData: HealthData;
    isCompanion?: boolean;
    companionIndex?: number;
}

interface LinkDispatchProps {
    AdjustHitPoints: (
        delta: number,
        removesWounded: boolean,
        isCompanion?: boolean,
        companionIndex?: number
    ) => void;
    startPickerModal: (actionType: string, maxHitPoints: number) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProp: OwnProps
): LinkDispatchProps => ({
    AdjustHitPoints: bindActionCreators(startChangeHitPoints, dispatch),
    startPickerModal: bindActionCreators(
        startNumberPickerModalSelection,
        dispatch
    ),
});

export default connect(null, mapDispatchToProps)(HitPoints);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowContainer: {
        flex: 0.5,
        flexDirection: "row",
    },
    text: {
        flex: 1,
        textAlign: "center",
        alignSelf: "center",
        justifyContent: "flex-start",
    },
    subHeader: {
        flex: 2,
        justifyContent: "flex-end",
        textAlign: "center",
        alignSelf: "center",
    },
    plus: {
        flex: 1,
        justifyContent: "center",
    },
    minus: {
        flex: 1,
        justifyContent: "center",
    },
});
