import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Proficiencies } from "../../../../Shared/PF2eCoreLib/Proficiencies";
import { Ability } from "../../../../Shared/PF2eCoreLib/Ability";
import { AbilityScoreArray } from "../../../../Shared/PF2eCoreLib/AbilityScores";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { startTextEditModal } from "../../../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";

const ClassView: React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {" "}
                    Class: {props.name} ({props.subClass})
            </Text>
        </View>
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
        borderColor: "black",
        borderWidth: 2,
        alignSelf: "stretch",
        alignContent: "stretch",
    },
    text: {
        flex: 1,
    },
});
