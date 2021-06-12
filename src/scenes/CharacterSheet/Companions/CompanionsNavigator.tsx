import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import {
    createStackNavigator,
    StackNavigationProp,
} from "@react-navigation/stack";
import Companions from "./Companions";
import EditCompanions from "./EditCompanions";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import EditCompanion from "./EditCompanion";
import EditActionsCompanionView from "./EditActionsCompanionView";
import EditActionCompanionView from "./EditActionCompanionView";

export type CompanionsStackParamList = {
    MainCompanionView: undefined;
    EditCompanionsView: undefined;
    EditCompanionView: { companionUuid: string };
    EditCompanionActionsView: { companionUuid: string };
    EditCompanionActionView: { companionUuid: string; actionIndex: number };
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
            <Stack.Screen
                name="EditCompanionActionView"
                component={EditActionCompanionView}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
