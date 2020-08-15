

import React from "react";
import {StyleSheet, TouchableOpacity } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { CharacterSheetState } from "../../../../../store/Store";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { startChangeDyingValue } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { bindActionCreators } from "redux";

const DyingView: React.FC<Props> = (props) => {
    const handleTapOnDying = () => {
        console.debug("handleTapOnDying");
        if (props.dyingValue === props.maxDying) {
            props.changeDying(0); //reset Dying to 0 on tap if at max dying
        } else {
            props.changeDying(props.dyingValue + 1);
        }
    };

    return (
        <Layout style={styles.container}>
            <TouchableOpacity style={styles.container} onPress={handleTapOnDying}>
                <Text style={styles.text} category='p1'>Dying:</Text>
                <Text category='h4' style={styles.text}>{props.dyingValue}</Text>
            </TouchableOpacity>
        </Layout>
    );
};

type Props = LinkStateProps & LinkDispatchProps & OwnProps;

interface OwnProps {}

interface LinkDispatchProps {
    changeDying: (DyingValue: number) => void;
}

interface LinkStateProps {
    dyingValue: number;
    maxDying: number;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {
        changeDying: bindActionCreators(startChangeDyingValue, dispatch)
    };
};

const mapStateToProps = (
    state: CharacterSheetState): LinkStateProps => ({
    dyingValue: state.playerCharacter.hitPoint.dying,
    maxDying: state.playerCharacter.hitPoint.maxDying
});

export default connect(mapStateToProps, mapDispatchToProps)(DyingView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    text: {},
});

