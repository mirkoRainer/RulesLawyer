import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
    Button,
    Divider,
    Layout,
    TopNavigation,
    TopNavigationAction,
} from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { OffenseStackParamList } from "../OffenseNavigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { BackIcon, PlusIcon } from "../../../Shared/IconButtons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { PF2Action } from "../../../../PF2eCoreLib/PlayerCharacter/PF2Action";
import { bindActionCreators } from "redux";
import { startChangePF2Actions } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { Guid } from "guid-typescript";
import EditActions from "./EditActions";
import { EntireAppState } from "../../../../store/Store";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";

const EditActionsPcView: React.FC<Props> = (props) => {
    // ensure the page refreshes data when it's navigated back to but setting state when the page is focus. React.useCallback prevents an infinite loop.
    const [state, setState] = useState({});
    useFocusEffect(
        React.useCallback(() => {
            setState({});
        }, [])
    );
    const navigation = useNavigation<ActionsNavigationProps>();
    const EditActionsBackAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={() => {
                navigation.navigate("MainOffenseView");
            }}
        />
    );
    const updateAction = (newAction: PF2Action, index: number) => {
        let actions = props.actions;
        actions[index] = newAction;
        props.updateActions(actions);
    };
    const handleEditButton = (index: number) => {
        navigation.push("EditActionPcView", { index, updateAction });
    };
    const handleDeleteButton = (index: number) => {
        let newActions = props.actions;
        newActions.splice(index, 1);
        props.updateActions(newActions);
    };
    const handleAddNewActionButton = () => {
        let actions = props.actions;
        actions.push({
            id: Guid.create(),
            name: "New Action",
            numberOfActions: 1,
            traits: [],
            description: "Description here",
            source: "Source of the Action",
        });
        props.updateActions(actions);
        setState({});
    };
    return (
        <Layout style={{ flex: 1 }}>
            <TopNavigation
                accessoryLeft={EditActionsBackAction}
                title="Edit Actions"
            />
            <Button
                style={{ flex: 0.25, margin: 10 }}
                appearance="outline"
                accessoryRight={PlusIcon}
                onPress={handleAddNewActionButton}
            >
                Add New Action
            </Button>
            <Divider />
            <EditActions
                actions={props.actions}
                handleDeleteButton={handleDeleteButton}
                handleEditButton={handleEditButton}
            />
        </Layout>
    );
};

type ActionsNavigationProps = StackNavigationProp<
    OffenseStackParamList,
    "EditActionsView"
>;

type Props = OwnProps & LinkDispatchProps & LinkStateProps;

interface OwnProps {}

interface LinkDispatchProps {
    updateActions: (action: PF2Action[]) => void;
}

interface LinkStateProps {
    actions: PF2Action[];
}

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    actions: state.playerCharacter.actions,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
    updateActions: bindActionCreators(startChangePF2Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditActionsPcView);

export const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
        padding: 10,
        flex: 1,
    },
});
