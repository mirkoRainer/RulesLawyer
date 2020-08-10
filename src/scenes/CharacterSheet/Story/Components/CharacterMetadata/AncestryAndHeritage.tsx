import React, { Component } from "react";
import {StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { bindActionCreators } from "redux";
import { startTextEditModal } from "../../../../../store/actions/Modals/ModalsActions";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { CHANGE_ANCESTRY, CHANGE_HERITAGE } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";

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
            <Text 
                style={{ ...styles.text, ...styles.container }}
                onPress={changeAncestry}
            >
                {" "}
                    Ancestry: {props.ancestry}{" "}
            </Text>
            <Text 
                style={{ ...styles.text, ...styles.container }}
                onPress={changeHeritage}
            >
                {" "}
                    Heritage: {props.heritage}{" "}
            </Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "stretch",
        alignSelf: "stretch",
    },
    text: {},
});
