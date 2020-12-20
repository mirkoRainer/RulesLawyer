import React from "react";
import {
    Icon,
    TopNavigationAction,
    TopNavigation,
} from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { StoryNavigationProps } from "../StoryNavigation";

export const StoryTraitSelectorHeader: React.FC = () => {
    const navigation = useNavigation<StoryNavigationProps>();

    const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;
    const EditActionsBackAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={() => {
                navigation.navigate("MainStoryView");
            }}
        />
    );

    return (
        <TopNavigation
            accessoryLeft={EditActionsBackAction}
            title="Edit PC Traits"
        />
    );
};
