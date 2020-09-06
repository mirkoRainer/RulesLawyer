import React, { Component } from "react";
import {  StyleSheet, FlatList } from "react-native";
import ActionView from "./ActionView";
import { PF2Action } from "../../../../PF2eCoreLib/PlayerCharacter";
import { Layout, Text, Divider } from "@ui-kitten/components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { startChangePF2Actions } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { AppState } from "../../../../store/Store";

interface OwnProps {
}
const ActionsAndActivities: React.FC<Props> = (props) => {
    const renderItem = (item: PF2Action, actionIndex: number) => {
        // create callback for edit Action
        const actionViewCallback = (newAction: PF2Action) => {
            let actions = props.actions;
            actions[actionIndex] = newAction;
            props.updateActions(actions);
        };
        return <ActionView action={item} key={item.name} updateAction={actionViewCallback} />;
    };

    const actions: JSX.Element[] = [];
    props.actions.forEach((action, index) => {
        actions.push(renderItem(action, index));
    });

    return (
        <Layout style={styles.container}>
            <Text style={styles.header} category='h3'>
                    Actions
            </Text>
            <Divider />
            {actions}
        </Layout>
    );
};

type Props = OwnProps & LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {
    updateActions: (action: PF2Action[]) => void;
}

interface LinkStateProps {
    actions: PF2Action[];
}

const mapStateToProps = (
    state: AppState,
): LinkStateProps => ({
    actions: state.playerCharacter.actions,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
    updateActions: bindActionCreators(startChangePF2Actions, dispatch),

});

export default connect(mapStateToProps, mapDispatchToProps)(ActionsAndActivities);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5
    },
    text: {
        flex: 1,
        width: 100,
    },
    header: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        paddingBottom: 5
    },
});
