import React from "react";
import { StyleSheet } from "react-native";
import {
    Icon,
    Layout,
    TopNavigation,
    TopNavigationAction,
} from "@ui-kitten/components";
import { connect } from "react-redux";
import { startChangeCompanionActions } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { PF2Action } from "../../../PF2eCoreLib/PlayerCharacter/PF2Action";
import { EntireAppState } from "../../../store/Store";
import EditAction from "../../Shared/Actions/EditAction";
import { RouteProp, useNavigation } from "@react-navigation/core";
import {
    CompanionsStackParamList,
    EditCompanionActionNavigationProps,
} from "./CompanionsNavigator";
import { Guid } from "guid-typescript";

const EditActionCompanionView: React.FC<Props> = (props) => {
    const navigation = useNavigation<EditCompanionActionNavigationProps>();
    const index: number = props.route.params.actionIndex;
    const updateAction = (newAction: PF2Action, index: number) => {
        let actions = props.actions;
        actions[index] = newAction;
        props.updateActions(props.route.params.companionGuid, actions);
    };

    const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;
    const EditActionsBackAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={() => {
                navigation.goBack();
            }}
        />
    );
    return (
        <Layout style={{ flex: 1, padding: 10 }}>
            <TopNavigation
                accessoryLeft={EditActionsBackAction}
                title="Edit Action"
            />
            <EditAction updateAction={updateAction} actionIndex={index} />
        </Layout>
    );
};

type Props = {
    route: RouteProp<CompanionsStackParamList, "EditCompanionActionView">;
} & LinkStateProps &
    LinkDispatchProps;

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
)(EditActionCompanionView);

export const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
        padding: 10,
        flex: 1,
    },
});
