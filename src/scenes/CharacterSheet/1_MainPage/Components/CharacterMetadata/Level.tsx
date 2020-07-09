import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { startToggleNumberPickerModal } from "../../../../../store/actions/Modals/ModalsActions";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Level: React.FC<Props> = (props) => {
    const changeLevel = () => {
        props.startPickerModal();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text} onPress={changeLevel}> Level: {props.level} </Text>
        </View>
    );
};

interface OwnProps {
    level: number;
}

type Props = OwnProps & LinkDispatchProps ;

interface LinkDispatchProps {
    startPickerModal: () => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {
        startPickerModal: bindActionCreators(startToggleNumberPickerModal, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(Level);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        alignSelf: "stretch",
        alignContent: "stretch",
    },
    text: {},
});
