import React, { Component } from "react";
import {StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startTextEditModal } from "../../../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { CHANGE_BACKGROUND } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";
import { Background } from "../../../../../PF2eCoreLib/PlayerCharacter";

const BackgroundView: React.FC<Props> = (props) => {
    const changeBackground = () => {
        props.startTextEditModal(CHANGE_BACKGROUND);
    };
    return (
        <Layout style={styles.container}>
            <Text 
                style={styles.text}
                onPress={changeBackground}    
            >
                {" "}
                    Background: {props.background.name}
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

export default connect(null, mapDispatchToProps)(BackgroundView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "stretch",
        alignSelf: "stretch",
    },
    text: {},
});
