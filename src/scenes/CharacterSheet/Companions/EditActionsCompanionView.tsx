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
import { StackNavigationProp } from "@react-navigation/stack";
import {
    RouteProp,
    useFocusEffect,
    useNavigation,
} from "@react-navigation/native";
import { bindActionCreators } from "redux";
import { Guid } from "guid-typescript";
import {
    CompanionsStackParamList,
    EditCompanionActionsNavigationProps,
} from "./CompanionsNavigator";
import { BackIcon, PlusIcon } from "../../Shared/IconButtons";
import { PF2Action } from "../../../PF2eCoreLib/PlayerCharacter/PF2Action";
import EditActions from "../../Shared/Actions/EditActions";
import { EntireAppState } from "../../../store/Store";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { startChangeCompanionActions } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";

const EditActionsCompanionView: React.FC<Props> = (props) => {
    // ensure the page refreshes data when it's navigated back to but setting state when the page is focus. React.useCallback prevents an infinite loop.
    const [state, setState] = useState({});
    useFocusEffect(
        React.useCallback(() => {
            setState({});
        }, [])
    );
    const navigation = useNavigation<EditCompanionActionsNavigationProps>();
    const EditActionsBackAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={() => {
                navigation.goBack();
            }}
        />
    );
    const updateAction = (newAction: PF2Action, index: number) => {
        let actions = props.actions;
        actions[index] = newAction;
        props.updateActions(props.route.params.companionGuid, actions);
    };
    const handleEditButton = (index: number) => {};
    const handleDeleteButton = (index: number) => {
        let newActions = props.actions;
        newActions.splice(index, 1);
        props.updateActions(props.route.params.companionGuid, newActions);
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
        props.updateActions(props.route.params.companionGuid, actions);
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

type Props = OwnProps & LinkStateProps & LinkDispatchProps;

interface OwnProps {
    route: RouteProp<CompanionsStackParamList, "EditCompanionActionsView">;
}

interface LinkStateProps {
    actions: PF2Action[];
}

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    actions: state.playerCharacter.actions,
});

interface LinkDispatchProps {
    updateActions: (companionId: Guid, action: PF2Action[]) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
    updateActions: bindActionCreators(startChangeCompanionActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditActionsCompanionView);

export const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
        padding: 10,
        flex: 1,
    },
});
