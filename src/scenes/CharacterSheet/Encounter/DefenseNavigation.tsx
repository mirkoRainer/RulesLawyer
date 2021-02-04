import React from "react";
import {
    createStackNavigator,
    StackNavigationProp,
} from "@react-navigation/stack";
import EncounterDefense from "./EncounterDefense";
import EditWornArmor from "./Defense/ArmorClass/EditWornArmor";

export type DefenseStackParamList = {
    MainDefenseView: undefined;
    EditWornArmor: undefined;
    // EditActionView: { index: number, updateAction: (updatedAction: PF2Action, index: number) => void};
};

export type MainDefenseNavigationProps = StackNavigationProp<
    DefenseStackParamList,
    "MainDefenseView"
>;

export const DefenseNavigator: React.FC = () => {
    const Stack = createStackNavigator<DefenseStackParamList>();
    return (
        <Stack.Navigator initialRouteName="MainDefenseView" headerMode="none">
            <Stack.Screen name="MainDefenseView" component={EncounterDefense} />
            <Stack.Screen name="EditWornArmor" component={EditWornArmor} />
        </Stack.Navigator>
    );
};
