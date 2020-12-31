import React from "react";
import {
    createStackNavigator,
    StackNavigationProp,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { InventoryPage } from "./Inventory";
import { EditItemView } from "./EditItemView";

export type InventoryStackParamList = {
    MainInventoryView: undefined;
    EditItemView: undefined;
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
                <Stack.Screen name="EditItemView" component={EditItemView} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
