import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import EncounterOffense, { MainOffenseNavigationProps } from "../EncounterOffense";
import EditActionsView from "./EditActionsView";
import { Icon, TopNavigationAction, TopNavigation, useTheme } from "@ui-kitten/components";

export type OffenseStackParamList = {
    MainOffenseView: undefined;
    EditActionsView: undefined;
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
            </Stack.Navigator>
        </NavigationContainer>
    );
};
