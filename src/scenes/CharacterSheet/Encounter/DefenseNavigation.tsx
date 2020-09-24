import React from "react";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import EncounterOffense from "./EncounterOffense";
import EditActionsView from "./Offense/EditActionsView";
import { Icon, TopNavigationAction, TopNavigation, useTheme } from "@ui-kitten/components";
import EditActionView from "./Offense/EditActionView";
import { PF2Action } from "../../../PF2eCoreLib/PlayerCharacter";
import EncounterDefense from "./EncounterDefense";
import EditWornArmor from "./Defense/ArmorClass/EditWornArmor";

export type DefenseStackParamList = {
    MainDefenseView: undefined;
    EditWornArmor: undefined;
    // EditActionView: { index: number, updateAction: (updatedAction: PF2Action, index: number) => void};
}

export type MainDefenseNavigationProps = StackNavigationProp<DefenseStackParamList, "MainDefenseView">;

export const DefenseNavigator: React.FC = () => {
    const Stack = createStackNavigator<DefenseStackParamList>();
    const theme = useTheme();
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator 
                initialRouteName="MainDefenseView"
                headerMode="none"
            >
                <Stack.Screen 
                    name="MainDefenseView"
                    component={EncounterDefense}
                />
                <Stack.Screen
                    name="EditWornArmor"
                    component={EditWornArmor}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
