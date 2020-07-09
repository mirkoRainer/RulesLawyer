import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { OwnProps } from "./CharacterMetadata/ClassView";
import { bindActionCreators } from "redux";
import { startTextEditModal } from "../../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { CHANGE_CONDITIONS } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";

const Conditions: React.FC<Props> = (props) => {
    const conditions: string = props.conditions;
    const changeConditions = () => {
        props.startTextEditModal(CHANGE_CONDITIONS);
    };    
    return (
        <View style={styles.container}>
            <Text onPress={changeConditions}>Conditions: {conditions}</Text>
        </View>
    );
};

export interface ConditionsProps {
    conditions: string;
}

type Props = ConditionsProps & LinkDispatchProps;

interface LinkDispatchProps {
    startTextEditModal: (propertyToChange: string) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: ConditionsProps
): LinkDispatchProps => {
    return {
        startTextEditModal: bindActionCreators(startTextEditModal, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(Conditions);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "stretch",
        alignSelf: "stretch",
    },
    text: {
        flex: 1,
        alignSelf: "center",
    },
    text2: {
        flex: 2,
        alignSelf: "center",
    },
});