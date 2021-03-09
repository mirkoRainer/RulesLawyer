import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import {
    createStackNavigator,
    StackNavigationProp,
} from "@react-navigation/stack";
import Companions from "./Companions";
import { EditCompanions } from "./EditCompanions";
import { Guid } from "guid-typescript";

export type CompanionsStackParamList = {
    MainCompanionView: undefined;
    EditCompanionView: { companionGuid: Guid };
};

export type MainCompanionNavigationProps = StackNavigationProp<
    CompanionsStackParamList,
    "MainCompanionView"
>;

export const CompanionsNavigator: React.FC = (props) => {
    const Stack = createStackNavigator<CompanionsStackParamList>();
    return (
        <Stack.Navigator initialRouteName="MainCompanionView" headerMode="none">
            <Stack.Screen name="MainCompanionView" component={Companions} />
            <Stack.Screen name="EditCompanionView" component={EditCompanions} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
