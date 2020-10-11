import React from "react";
import {
    createStackNavigator,
    StackNavigationProp,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import EncounterOffense from "./EncounterOffense";
import EditActionsView from "./Offense/EditActionsView";
import {
    Icon,
    TopNavigationAction,
    TopNavigation,
    useTheme,
} from "@ui-kitten/components";
import EditActionView from "./Offense/EditActionView";
import { PF2Action } from "../../../PF2eCoreLib/PlayerCharacter";
import { DefenseStackParamList } from "./DefenseNavigation";
import { Spell } from "./Spells/Components/Spell";
import SpellsPage from "./Spells/SpellsPage";
import { EditSpellView } from "./Spells/EditSpellView";

export type SpellsStackParamList = {
    SpellsView: undefined;
    AddSpellView: undefined;
    EditSpellView: {
        index: number;
        updateSpell: (updatedSpell: Spell) => void;
    };
};

export type MainOffenseNavigationProps = StackNavigationProp<
    SpellsStackParamList,
    "SpellsView"
>;

export const SpellsNavigator: React.FC = () => {
    const Stack = createStackNavigator<SpellsStackParamList>();
    const theme = useTheme();
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="SpellsView" headerMode="none">
                <Stack.Screen name="SpellsView" component={SpellsPage} />
                <Stack.Screen name="AddSpellView" component={EditSpellView} />
                <Stack.Screen name="EditSpellView" component={EditSpellView} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
