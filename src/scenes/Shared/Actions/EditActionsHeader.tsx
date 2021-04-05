import React from "react";
import {
    Icon,
    TopNavigationAction,
    TopNavigation,
} from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { MainOffenseNavigationProps } from "../../CharacterSheet/Encounter/OffenseNavigation";

export const EditActionsHeader: React.FC = () => {
    const navigation = useNavigation<MainOffenseNavigationProps>();

    const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;
    const EditActionsBackAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={() => {
                navigation.navigate("MainOffenseView");
            }}
        />
    );

    return (
        <TopNavigation
            accessoryLeft={EditActionsBackAction}
            title="Edit Actions"
        />
    );
};
