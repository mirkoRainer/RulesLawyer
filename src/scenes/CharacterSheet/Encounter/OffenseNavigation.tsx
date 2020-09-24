import React from "react";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import EncounterOffense from "./EncounterOffense";
import EditActionsView from "./Offense/EditActionsView";
import { Icon, TopNavigationAction, TopNavigation, useTheme } from "@ui-kitten/components";
import EditActionView from "./Offense/EditActionView";
import { PF2Action } from "../../../PF2eCoreLib/PlayerCharacter";
import { DefenseStackParamList } from "./DefenseNavigation";

export type OffenseStackParamList = {
    MainOffenseView: undefined;
    EditActionsView: undefined;
    EditActionView: { index: number, updateAction: (updatedAction: PF2Action, index: number) => void};
}

export type MainOffenseNavigationProps = StackNavigationProp<OffenseStackParamList, "MainOffenseView">;

export const OffenseNavigator: React.FC = () => {
    const Stack = createStackNavigator<OffenseStackParamList>();
    const theme = useTheme();
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator 
                initialRouteName="MainOffenseView"
                headerMode="none"
            >
                <Stack.Screen 
                    name="MainOffenseView"
                    component={EncounterOffense}
                />
                <Stack.Screen
                    name="EditActionsView"
                    component={EditActionsView}
                />
                <Stack.Screen
                    name="EditActionView"
                    component={EditActionView}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
