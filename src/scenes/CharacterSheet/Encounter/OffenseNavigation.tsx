import React from "react";
import {
    createStackNavigator,
    StackNavigationProp,
} from "@react-navigation/stack";
import EncounterOffense from "./EncounterOffense";
import { useTheme } from "@ui-kitten/components";
import { PF2Action } from "../../../PF2eCoreLib/PlayerCharacter/PF2Action";
import EditActionPcView from "./Offense/EditActionPcView";
import EditActionsPcView from "./Offense/EditActionsPcView";

export type OffenseStackParamList = {
    MainOffenseView: undefined;
    EditActionsView: undefined;
    EditActionPcView: {
        index: number;
    };
};

export type MainOffenseNavigationProps = StackNavigationProp<
    OffenseStackParamList,
    "MainOffenseView"
>;

export const OffenseNavigator: React.FC = () => {
    const Stack = createStackNavigator<OffenseStackParamList>();
    const theme = useTheme();
    return (
        <Stack.Navigator initialRouteName="MainOffenseView" headerMode="none">
            <Stack.Screen name="MainOffenseView" component={EncounterOffense} />
            <Stack.Screen
                name="EditActionsView"
                component={EditActionsPcView}
            />
            <Stack.Screen
                name="EditActionPcView"
                component={EditActionPcView}
            />
        </Stack.Navigator>
    );
};
