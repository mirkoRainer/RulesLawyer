import React, { Component } from "react";
import {StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startTextEditModal, startNumberPickerModalSelection } from "../../../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { CHANGE_EXPERIENCE_POINTS } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";


const ExperiencePoints: React.FC<Props> = (props) => {
    const changeExperiencePoints = () => {
        props.startPickerModal(CHANGE_EXPERIENCE_POINTS, props.experiencePoints);
    };
    
    return (
        <Layout style={styles.container}>
            <Text style={styles.text} onPress={changeExperiencePoints}>
                {" "}
                    ExperiencePoints: {props.experiencePoints}{" "}
            </Text>
        </Layout>
    );
};

interface OwnProps {
    experiencePoints: number;
}

type Props = OwnProps & LinkDispatchProps;

interface LinkDispatchProps {
    startPickerModal: (actionType: string, experiencePoints: number) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {
        startPickerModal: bindActionCreators(startNumberPickerModalSelection, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(ExperiencePoints);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        alignContent: "stretch",
    },
    text: {},
});
