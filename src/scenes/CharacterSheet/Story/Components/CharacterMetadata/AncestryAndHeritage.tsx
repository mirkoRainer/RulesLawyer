import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { bindActionCreators } from "redux";
import { startTextEditModal } from "../../../../../store/actions/Modals/ModalsActions";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import {
    CHANGE_ANCESTRY,
    CHANGE_HERITAGE,
} from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";
import styles from "./CharacterMetadata.styles";

interface OwnProps {
    ancestry: string;
    heritage: string;
}

type Props = OwnProps & LinkDispatchProps;

const AncestryAndHeritage: React.FC<Props> = (props) => {
    const changeAncestry = () => {
        props.startTextEditModal(CHANGE_ANCESTRY);
    };
    const changeHeritage = () => {
        props.startTextEditModal(CHANGE_HERITAGE);
    };
    return (
        <Layout style={styles.container}>
            <Layout style={styles.rowContainer}>
                <Text
                    style={{ ...styles.header }}
                    onPress={changeAncestry}
                    category="h5"
                >
                    Ancestry:
                </Text>
                <Text
                    style={{ ...styles.text }}
                    onPress={changeAncestry}
                    category="h5"
                >
                    {props.ancestry}
                </Text>
            </Layout>
            <Layout style={styles.rowContainer}>
                <Text
                    style={{ ...styles.header }}
                    onPress={changeHeritage}
                    category="h5"
                >
                    Heritage:
                </Text>
                <Text
                    style={styles.text}
                    onPress={changeHeritage}
                    category="h5"
                >
                    {props.heritage}
                </Text>
            </Layout>
        </Layout>
    );
};

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

export default connect(null, mapDispatchToProps)(AncestryAndHeritage);
