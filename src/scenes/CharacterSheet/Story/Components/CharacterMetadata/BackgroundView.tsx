import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startTextEditModal } from "../../../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { CHANGE_BACKGROUND } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";
import { Background } from "../../../../../PF2eCoreLib/PlayerCharacter";
import styles from "./CharacterMetadata.styles";

const BackgroundTextView: React.FC<Props> = (props) => {
    const changeBackground = () => {
        props.startTextEditModal(CHANGE_BACKGROUND);
    };
    return (
        <Layout style={styles.rowContainer}>
            <Text
                style={styles.header}
                onPress={changeBackground}
                category="h5"
            >
                Background:
            </Text>
            <Text style={styles.text} onPress={changeBackground} category="h5">
                {props.background.name}
            </Text>
        </Layout>
    );
};

interface OwnProps {
    background: Background;
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

export default connect(null, mapDispatchToProps)(BackgroundTextView);
