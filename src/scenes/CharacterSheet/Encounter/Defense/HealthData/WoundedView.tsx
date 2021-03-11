import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { EntireAppState } from "../../../../../store/Store";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { startChangeWoundedValue } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { bindActionCreators } from "redux";

const WoundedView: React.FC<Props> = (props) => {
    const handleTapOnWounded = () => {
        console.debug("handleTapOnWounded");
        if (props.woundedValue === props.maxDying) {
            props.changeWounded(0); //reset Wounded to 0 on tap if at max dying
        } else {
            props.changeWounded(props.woundedValue + 1);
        }
    };

    return (
        <Layout style={styles.container}>
            <TouchableOpacity
                style={styles.container}
                onPress={handleTapOnWounded}
            >
                <Text style={styles.text} category="p1">
                    Wounded:
                </Text>
                <Text category="h4" style={styles.text}>
                    {props.woundedValue}
                </Text>
            </TouchableOpacity>
        </Layout>
    );
};

type Props = LinkStateProps & LinkDispatchProps & OwnProps;

interface OwnProps {}

interface LinkDispatchProps {
    changeWounded: (WoundedValue: number) => void;
}

interface LinkStateProps {
    woundedValue: number;
    maxDying: number;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {
        changeWounded: bindActionCreators(startChangeWoundedValue, dispatch),
    };
};

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    woundedValue: state.playerCharacter.hitPoints.wounded,
    maxDying: state.playerCharacter.hitPoints.maxDying,
});

export default connect(mapStateToProps, mapDispatchToProps)(WoundedView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    text: {},
});
