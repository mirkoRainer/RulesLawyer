import React from "react";
import {
    createStackNavigator,
    StackNavigationProp,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import InventoryPage from "./Inventory";
import EditItemView from "./Components/EditItemView";
import EditInventoryView from "./EditInventoryView";

export type InventoryStackParamList = {
    MainInventoryView: undefined;
    EditInventoryView: undefined;
};

export type InventoryNavigationProps = StackNavigationProp<
    InventoryStackParamList,
    "MainInventoryView"
>;

export const InventoryNavigator: React.FC = () => {
    const Stack = createStackNavigator<InventoryStackParamList>();
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="MainInventoryView"
                headerMode="none"
            >
                <Stack.Screen
                    name="MainInventoryView"
                    component={InventoryPage}
                />
                <Stack.Screen
                    name="EditInventoryView"
                    component={EditInventoryView}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
