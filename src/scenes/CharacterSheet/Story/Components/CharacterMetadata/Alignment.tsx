import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startTextEditModal } from "../../../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { CHANGE_ALIGNMENT } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";
import styles from "./CharacterMetadata.styles";

const Alignment: React.FC<Props> = (props) => {
    const changeAlignment = () => {
        props.startTextEditModal(CHANGE_ALIGNMENT);
    };
    return (
        <Layout style={styles.rowContainer}>
            <Text style={styles.header} onPress={changeAlignment} category="h5">
                Alignment:
            </Text>
            <Text style={styles.text} onPress={changeAlignment} category="h5">
                {props.alignment}
            </Text>
        </Layout>
    );
};

interface OwnProps {
    alignment: string;
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

export default connect(null, mapDispatchToProps)(Alignment);
