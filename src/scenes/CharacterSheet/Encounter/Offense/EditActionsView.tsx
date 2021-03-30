import React, { useEffect, useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { OffenseStackParamList } from "../OffenseNavigation";
import {
    Layout,
    Text,
    Button,
    TopNavigationAction,
    Icon,
    TopNavigation,
    Input,
    Divider,
    ButtonGroup,
} from "@ui-kitten/components";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { startChangePF2Actions } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { PF2Action } from "../../../../PF2eCoreLib/PlayerCharacter/PF2Action";
import { EntireAppState } from "../../../../store/Store";
import { indexOf } from "lodash";
import { NavigationState, useFocusEffect } from "@react-navigation/native";
import { useState } from "react";
import { Guid } from "guid-typescript";

type ActionsNavigationProps = StackNavigationProp<
    OffenseStackParamList,
    "EditActionsView"
>;
interface OwnProps {
    navigation: ActionsNavigationProps;
}

const EditActionsView: React.FC<Props> = (props) => {
    // ensure the page refreshes data when it's navigated back to but setting state when the page is focus. React.useCallback prevents an infinite loop.
    const [state, setState] = useState({});
    useFocusEffect(
        React.useCallback(() => {
            setState({});
        }, [])
    );

    const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;
    const EditActionsBackAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={() => {
                props.navigation.navigate("MainOffenseView");
            }}
        />
    );
    const updateAction = (newAction: PF2Action, index: number) => {
        let actions = props.actions;
        actions[index] = newAction;
        props.updateActions(actions);
    };

    const EditButton = (index: number) => {
        const handleEditButton = () => {
            props.navigation.push("EditActionView", { index, updateAction });
        };
        return <Button onPress={handleEditButton}>Edit</Button>;
    };
    const DeleteButton = (index: number) => {
        const handleDeleteButton = () => {
            let newActions = props.actions;
            newActions.splice(index, 1);
            props.updateActions(newActions);
            setState({});
        };
        return (
            <Button onPress={handleDeleteButton} status="danger">
                -
            </Button>
        );
    };
    const renderItem = (item: PF2Action) => {
        const index = indexOf(props.actions, item);
        return (
            <Layout
                style={{ flex: 1, flexDirection: "row", padding: 10 }}
                key={item.id.toString()}
            >
                {EditButton(index)}
                {DeleteButton(index)}
                <Text
                    style={{
                        flex: 1,
                        paddingHorizontal: 10,
                        alignSelf: "center",
                    }}
                    category="h4"
                >
                    {item.name}
                </Text>
            </Layout>
        );
    };

    let actions: JSX.Element[] = [];
    props.actions.forEach((action, index) => {
        actions.push(renderItem(action));
    });

    const PlusIcon = (props: any) => <Icon {...props} name="plus" />;
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
            <ScrollView>{actions}</ScrollView>
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

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    actions: state.playerCharacter.actions,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
    updateActions: bindActionCreators(startChangePF2Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditActionsView);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
        flex: 1,
    },
});
