import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { bindActionCreators } from "redux";
import { startToggleTextEditModal } from "../../../../store/actions/Modals/ModalsActions";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";

interface OwnProps {
    characterName: string;
}

type Props = OwnProps & LinkDispatchProps;

const CharacterName: React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <Text
                style={styles.text}
                onPress={props.toggleModal}
                onLongPress={props.toggleModal}
            >
                {" "}
                Character Name: {props.characterName}{" "}
            </Text>
        </View>
    );
};

interface LinkDispatchProps {
    toggleModal: () => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {
        toggleModal: bindActionCreators(startToggleTextEditModal, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(CharacterName);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
    },
    text: {},
});
