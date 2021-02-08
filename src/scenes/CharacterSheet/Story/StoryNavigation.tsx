import React from "react";
import {
    createStackNavigator,
    StackNavigationProp,
} from "@react-navigation/stack";
import StoryPage from "./StoryPage";
import TraitSelectorView from "./TraitSelectorView";
import EditWeaponProficiencyView from "./EditWeaponProficiencyView";
import EditBioDataView from "./EditBioDataView";
import EditLanguages from "./EditLanguagesView";
import EditPersonalityView from "./EditPersonalityView";
import EditCampaignNotesView from "./EditCampaignNotesView";

export type StoryStackParamList = {
    MainStoryView: undefined;
    EditTraitsView: undefined;
    EditWeaponProficiencyView: undefined;
    EditBioDataView: undefined;
    EditLanguagesView: undefined;
    EditPersonalityView: undefined;
    EditCampaignNotesView: undefined;
};

export type StoryNavigationProps = StackNavigationProp<
    StoryStackParamList,
    "MainStoryView"
>;

export const StoryNavigator: React.FC = () => {
    const Stack = createStackNavigator<StoryStackParamList>();
    return (
        <Stack.Navigator initialRouteName="MainStoryView" headerMode="none">
            <Stack.Screen name="MainStoryView" component={StoryPage} />
            <Stack.Screen name="EditTraitsView" component={TraitSelectorView} />
            <Stack.Screen
                name="EditWeaponProficiencyView"
                component={EditWeaponProficiencyView}
                options={{ headerTitle: "Edit Weapon Proficiencies" }}
            />
            <Stack.Screen name="EditBioDataView" component={EditBioDataView} />
            <Stack.Screen name="EditLanguagesView" component={EditLanguages} />
            <Stack.Screen
                name="EditPersonalityView"
                component={EditPersonalityView}
            />
            <Stack.Screen
                name="EditCampaignNotesView"
                component={EditCampaignNotesView}
            />
        </Stack.Navigator>
    );
};
