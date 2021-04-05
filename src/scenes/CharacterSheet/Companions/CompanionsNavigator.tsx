import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import {
    createStackNavigator,
    StackNavigationProp,
} from "@react-navigation/stack";
import Companions from "./Companions";
import EditCompanions from "./EditCompanions";
import { Guid } from "guid-typescript";
import EditCompanion from "./EditCompanion";
import EditActionsCompanionView from "./EditActionsCompanionView";

export type CompanionsStackParamList = {
    MainCompanionView: undefined;
    EditCompanionsView: undefined;
    EditCompanionView: { companionGuid: string };
    EditCompanionActionsView: { companionGuid: Guid };
    EditCompanionActionView: { companionGuid: string; index: number };
};

export type MainCompanionNavigationProps = StackNavigationProp<
    CompanionsStackParamList,
    "MainCompanionView"
>;
export type EditCompanionsNavigationProps = StackNavigationProp<
    CompanionsStackParamList,
    "EditCompanionsView"
>;
export type EditCompanionNavigationProps = StackNavigationProp<
    CompanionsStackParamList,
    "EditCompanionView"
>;

export type EditCompanionActionsNavigationProps = StackNavigationProp<
    CompanionsStackParamList,
    "EditCompanionActionsView"
>;
s;
export type EditCompanionActionNavigationProps = StackNavigationProp<
    CompanionsStackParamList,
    "EditCompanionActionView"
>;

export const CompanionsNavigator: React.FC = (props) => {
    const Stack = createStackNavigator<CompanionsStackParamList>();
    return (
        <Stack.Navigator initialRouteName="MainCompanionView" headerMode="none">
            <Stack.Screen name="MainCompanionView" component={Companions} />
            <Stack.Screen
                name="EditCompanionsView"
                component={EditCompanions}
            />
            <Stack.Screen name="EditCompanionView" component={EditCompanion} />
            <Stack.Screen
                name="EditCompanionActionsView"
                component={EditActionsCompanionView}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
