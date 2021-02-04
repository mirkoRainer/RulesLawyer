import React from "react";
import {
    createStackNavigator,
    StackNavigationProp,
} from "@react-navigation/stack";
import { SpellList } from "./Spells/Components/Spell";
import SpellsPage from "./Spells/SpellsPage";
import EditSpellView from "./Spells/EditSpellView";

export type SpellsStackParamList = {
    SpellsView: undefined;
    AddSpellView: undefined;
    EditSpellView: {
        index: number;
        spellType: keyof SpellList;
    };
};

export type MainOffenseNavigationProps = StackNavigationProp<
    SpellsStackParamList,
    "SpellsView"
>;

export const SpellsNavigator: React.FC = () => {
    const Stack = createStackNavigator<SpellsStackParamList>();
    return (
        <Stack.Navigator initialRouteName="SpellsView" headerMode="none">
            <Stack.Screen name="SpellsView" component={SpellsPage} />
            <Stack.Screen name="AddSpellView" component={EditSpellView} />
            <Stack.Screen name="EditSpellView" component={EditSpellView} />
        </Stack.Navigator>
    );
};
