import React from "react";
import { StyleSheet } from "react-native";
import {
    Icon,
    Layout,
    TopNavigation,
    TopNavigationAction,
} from "@ui-kitten/components";
import { connect } from "react-redux";
import { OffenseStackParamList } from "../OffenseNavigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { PF2Action } from "../../../../PF2eCoreLib/PlayerCharacter/PF2Action";
import { RouteProp } from "@react-navigation/native";
import EditAction from "../../../Shared/Actions/EditAction";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { startChangePF2Actions } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { EntireAppState } from "../../../../store/Store";

const EditActionPcView: React.FC<Props> = (props) => {
    const index: number = props.route.params.index;
    const updateAction = (newAction: PF2Action, index: number) => {
        let actions = props.actions;
        actions[index] = newAction;
        props.updateActions(actions);
    };

    const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;
    const EditActionsBackAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={() => {
                props.navigation.goBack();
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

type ActionsNavigationProps = StackNavigationProp<
    OffenseStackParamList,
    "EditActionPcView"
>;

type Props = {
    navigation: ActionsNavigationProps;
    route: RouteProp<OffenseStackParamList, "EditActionPcView">;
} & LinkStateProps &
    LinkDispatchProps;

interface LinkStateProps {
    actions: PF2Action[];
}

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    actions: state.playerCharacter.actions,
});

interface LinkDispatchProps {
    updateActions: (action: PF2Action[]) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
    updateActions: bindActionCreators(startChangePF2Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditActionPcView);

export const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
        padding: 10,
        flex: 1,
    },
});
