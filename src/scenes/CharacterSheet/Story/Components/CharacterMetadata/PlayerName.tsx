import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startTextEditModal } from "../../../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { CHANGE_PLAYER_NAME } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";
import styles from "./CharacterMetadata.styles";

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
            <Layout style={styles.rowContainer}>
                <Text style={styles.header} onPress={changeName} category="h5">
                    {" "}
                    PlayerName:
                </Text>
                <Text style={styles.text} onPress={changeName} category="h5">
                    {this.props.playerName}{" "}
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
