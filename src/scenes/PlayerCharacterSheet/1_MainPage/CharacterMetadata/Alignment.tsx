import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startTextEditModal } from "../../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { CHANGE_ALIGNMENT } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";

const Alignment: React.FC<Props> = (props) => {
    const changeAlignment = () => {
        props.startTextEditModal(CHANGE_ALIGNMENT);
    };
    return (
        <View style={styles.container}>
            <Text 
                style={styles.text}
                onPress={changeAlignment}
            >
                {" "}
                    Alignment: {props.alignment}{" "}
            </Text>
        </View>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        alignSelf: "stretch",
        alignContent: "stretch",
    },
    text: {
        flex: 1,
    },
});
