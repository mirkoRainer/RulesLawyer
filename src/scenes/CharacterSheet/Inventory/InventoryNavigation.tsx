import React from "react";
import {
    createStackNavigator,
    StackNavigationProp,
} from "@react-navigation/stack";
import InventoryView from "./InventoryView";
import EditItemView from "./Components/EditItem";

export type InventoryStackParamList = {
    MainInventoryView: undefined;
    EditInventoryView: undefined;
    EditItemView: { itemGuid: string };
};

export type InventoryNavigationProps = StackNavigationProp<
    InventoryStackParamList,
    "MainInventoryView"
>;

export const InventoryNavigator: React.FC = () => {
    const Stack = createStackNavigator<InventoryStackParamList>();
    return (
        <Stack.Navigator initialRouteName="MainInventoryView" headerMode="none">
            <Stack.Screen name="MainInventoryView" component={InventoryView} />
            <Stack.Screen name="EditItemView" component={EditItemView} />
        </Stack.Navigator>
    );
};
