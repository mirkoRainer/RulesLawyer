import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startTextEditModal } from "../../../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { CHANGE_DEITY } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";
import styles from "./CharacterMetadata.styles";

const Deity: React.FC<Props> = (props) => {
    const changeDeity = () => {
        props.startTextEditModal(CHANGE_DEITY);
    };
    return (
        <Layout style={styles.rowContainer}>
            <Text style={styles.header} onPress={changeDeity} category="h5">
                Deity:
            </Text>
            <Text style={styles.text} onPress={changeDeity} category="h5">
                {props.deity}
            </Text>
        </Layout>
    );
};

interface OwnProps {
    deity: string;
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

export default connect(null, mapDispatchToProps)(Deity);
