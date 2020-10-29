import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { Proficiencies } from "../../../../../PF2eCoreLib/Proficiencies";
import { AbilityScoreArray } from "../../../../../PF2eCoreLib/AbilityScores";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { startTextEditModal } from "../../../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import styles from "./CharacterMetadata.styles";

const ClassTextView: React.FC<Props> = (props) => {
    return (
        <Layout style={styles.rowContainer}>
            <Text style={styles.header} category="h5">
                Class:
            </Text>
            <Text style={styles.text} category="h5">
                {props.name} ({props.subClass})
            </Text>
        </Layout>
    );
};

interface OwnProps {
    name: string;
    subClass: string;
    proficiency: Proficiencies;
    keyAbility: keyof AbilityScoreArray;
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

export default connect(null, mapDispatchToProps)(ClassTextView);
