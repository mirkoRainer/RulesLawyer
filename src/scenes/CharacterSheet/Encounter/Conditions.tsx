import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { OwnProps } from "../Story/Components/CharacterMetadata/ClassView";
import { bindActionCreators } from "redux";
import { startTextEditModal } from "../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { CHANGE_CONDITIONS } from "../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";

const Conditions: React.FC<Props> = (props) => {
    const conditions: string = props.conditions;
    const changeConditions = () => {
        props.startTextEditModal(CHANGE_CONDITIONS);
    };    
    return (
        <Layout style={styles.container}>
            <Text onPress={changeConditions} category='h6'>Conditions:</Text>
            <Text onPress={changeConditions}>{conditions}</Text>
        </Layout>
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
        flex: .08,
        alignContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        flexDirection: "row"
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