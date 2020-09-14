import React from "react";
import { StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { OffenseStackParamList } from "./OffenseNavigation";
import { Layout, Text, Button, TopNavigationAction, Icon, TopNavigation, Input, Divider } from "@ui-kitten/components";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { startChangePF2Actions } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { PF2Action } from "../../../../PF2eCoreLib/PlayerCharacter";
import { AppState } from "../../../../store/Store";
import { ScrollView } from "react-native-gesture-handler";
import { indexOf } from "lodash";
import EditActionView from "./EditActionView";
import { NavigationState, useFocusEffect } from "@react-navigation/native";
import { useState } from "react";

type ActionsNavigationProps = StackNavigationProp<OffenseStackParamList, "EditActionsView">
interface OwnProps {
    navigation: ActionsNavigationProps
}

const EditActionsView: React.FC<Props> = (props) => {
    // ensure the page refreshes data when it's navigated back to but setting state when the page is focus. React.useCallback prevents an infinite loop.
    const [ state, setState ] = useState({});
    useFocusEffect(
        React.useCallback(() => {
            setState({});
        }, [])
    );

    const BackIcon = (props: any) => (
        <Icon {...props} name='arrow-back' />
    );
    const EditActionsBackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={()=>{props.navigation.navigate("MainOffenseView");}} />
    );
    const updateAction = (newAction: PF2Action, index: number) => {
        let actions = props.actions;
        actions[index] = newAction;
        props.updateActions(actions);
    };

    const EditButton = (index: number) => {
        const handleDropDownButton = () => {
            props.navigation.push("EditActionView", { index, updateAction });
        };
        return <Button onPress={handleDropDownButton} style={{flex: .2}}>Edit</Button>;
    };
    const renderItem = (item: PF2Action) => {
        const index = indexOf(props.actions, item);
        return (<Layout style={{flex: 1, flexDirection: "row", padding: 10}}>
            {EditButton(indexOf(props.actions, item))}
            <Text style={{flex: 1, paddingHorizontal: 10, alignSelf: "center"}} category='h4'>{item.name}</Text>
        </Layout>);
    };
    
    let actions: JSX.Element[] = [];
    props.actions.forEach((action, index) => {
        actions.push(renderItem(action));
    });

    const PlusIcon = (props: any) => (
        <Icon {...props} name='plus' />
    );
    const handleAddNewActionButton = () => {
        let actions = props.actions;
        actions.push({ name: "New Action", numberOfActions: 1, traits: [], description: "Description here", source: "Source of the Action" });
        props.updateActions(actions);
        props.navigation.navigate("EditActionView", { index: props.actions.length, updateAction: updateAction });
    };

    return(
        <Layout style={{flex: 1}}>
            <TopNavigation
                accessoryLeft={EditActionsBackAction}
                title='Edit Actions'
            />
            <Button style={{flex: .25, margin: 10}} appearance='outline' accessoryRight={PlusIcon} onPress={handleAddNewActionButton}>Add New Action</Button>
            <Divider />
            <ScrollView>
                {actions}
            </ScrollView>
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
    updateActions: bindActionCreators(startChangePF2Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditActionsView);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
        flex :1
    }
});