import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import {
    startTextEditModal,
    startNumberPickerModalSelection,
} from "../../../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { CHANGE_EXPERIENCE_POINTS } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";
import styles from "./CharacterMetadata.styles";

const ExperiencePoints: React.FC<Props> = (props) => {
    const changeExperiencePoints = () => {
        props.startPickerModal(
            CHANGE_EXPERIENCE_POINTS,
            props.experiencePoints
        );
    };

    return (
        <Layout style={{ ...styles.rowContainer, flex: 3 }}>
            <Text
                style={styles.header}
                onPress={changeExperiencePoints}
                category="h5"
            >
                {" "}
                ExperiencePoints:
            </Text>
            <Text
                style={styles.text}
                onPress={changeExperiencePoints}
                category="h5"
            >
                {props.experiencePoints}{" "}
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
        startPickerModal: bindActionCreators(
            startNumberPickerModalSelection,
            dispatch
        ),
    };
};

export default connect(null, mapDispatchToProps)(ExperiencePoints);
