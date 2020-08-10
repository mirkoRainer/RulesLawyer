import React, { Component } from "react";
import {StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startTextEditModal } from "../../../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { CHANGE_PLAYER_NAME } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";
interface OwnProps {
    playerName: string;
}

type Props = OwnProps & LinkDispatchProps;

class PlayerName extends Component<Props> {
    render() {
        const changeName = () => {
            this.props.startTextEditModal(CHANGE_PLAYER_NAME);
        };
        return (
            <Layout style={styles.container}>
                <Text style={styles.text}
                    onPress={changeName}>
                    {" "}
                    PlayerName: {this.props.playerName}{" "}
                    
                </Text>
            </Layout>
        );
    }
}

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

export default connect(null, mapDispatchToProps)(PlayerName);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "stretch",
        alignSelf: "stretch",
    },
    text: {},
});
