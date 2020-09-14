import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import EncounterOffense, { MainOffenseNavigationProps } from "../EncounterOffense";
import EditActionsView from "./EditActionsView";
import { Icon, TopNavigationAction, TopNavigation, useTheme } from "@ui-kitten/components";
import EditActionView from "./EditActionView";
import { PF2Action } from "../../../../PF2eCoreLib/PlayerCharacter";

export type OffenseStackParamList = {
    MainOffenseView: undefined;
    EditActionsView: undefined;
    EditActionView: { index: number, updateAction: (updatedAction: PF2Action, index: number) => void};
}

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
