import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

import {
    startTogglePickerModal,
    startNumberPickerModalSelection,
} from "../../../../../store/actions/Modals/ModalsActions";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { CHANGE_LEVEL } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";
import styles from "./CharacterMetadata.styles";

const Level: React.FC<Props> = (props) => {
    const changeLevel = () => {
        props.startPickerModal(CHANGE_LEVEL, props.level);
    };

    return (
        <Layout style={styles.rowContainer}>
            <Text style={styles.header} onPress={changeLevel} category="h5">
                Level:
            </Text>
            <Text style={styles.text} onPress={changeLevel} category="h5">
                {props.level}
            </Text>
        </Layout>
    );
};

interface OwnProps {
    level: number;
}

type Props = OwnProps & LinkDispatchProps;

interface LinkDispatchProps {
    startPickerModal: (actionType: string, level: number) => void;
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

export default connect(null, mapDispatchToProps)(Level);
