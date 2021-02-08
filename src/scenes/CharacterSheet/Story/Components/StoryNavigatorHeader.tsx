import React from "react";
import {
    Icon,
    TopNavigationAction,
    TopNavigation,
} from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { StoryNavigationProps } from "../StoryNavigation";

type Props = {
    title: string;
};

export const StoryNavigatorHeader: React.FC<Props> = (props) => {
    const navigation = useNavigation<StoryNavigationProps>();

    const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;
    const EditActionsBackAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={() => {
                navigation.goBack();
            }}
        />
    );

    return (
        <TopNavigation
            accessoryLeft={EditActionsBackAction}
            title={props.title}
        />
    );
};
