import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { bindActionCreators } from "redux";
import { startTextEditModal } from "../../../../store/actions/Modals/ModalsActions";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { CHANGE_CHARACTER_NAME } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";

interface OwnProps {
    characterName: string;
}

type Props = OwnProps & LinkDispatchProps;



const CharacterName: React.FC<Props> = (props) => {
    const changeName = () => {
        props.startTextEditModal(CHANGE_CHARACTER_NAME);
    };
    return (
        <View style={styles.container}>
            <Text
                style={styles.text}
                onPress={changeName}
            >
                {" "}
                Character Name: {props.characterName}{" "}
            </Text>
        </View>
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

export default connect(null, mapDispatchToProps)(CharacterName);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
    },
    text: {},
});
