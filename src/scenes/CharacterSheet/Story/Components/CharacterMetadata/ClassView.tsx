import React, { Component } from "react";
import {StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { Proficiencies } from "../../../../../PF2eCoreLib/Proficiencies";
import { AbilityScoreArray } from "../../../../../PF2eCoreLib/AbilityScores";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { startTextEditModal } from "../../../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";

const ClassView: React.FC<Props> = (props) => {
    return (
        <Layout style={styles.container}>
            <Text style={styles.text}>
                {" "}
                    Class: {props.name} ({props.subClass})
            </Text>
        </Layout>
    );
};

export interface OwnProps {
    name:        string;
    subClass:    string;
    proficiency: Proficiencies;
    keyAbility:  keyof AbilityScoreArray;
}

type Props = OwnProps & LinkDispatchProps;

interface LinkDispatchProps {
    startTextEditModal: (propertyToChange: string) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {
        startTextEditModal: bindActionCreators(startTextEditModal, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(ClassView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        alignContent: "stretch",
    },
    text: {
        flex: 1,
    },
});
