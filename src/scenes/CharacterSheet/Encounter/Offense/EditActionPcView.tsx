import React from "react";
import { StyleSheet } from "react-native";
import {
    Icon,
    Layout,
    TopNavigation,
    TopNavigationAction,
} from "@ui-kitten/components";
import { connect } from "react-redux";
import { OffenseStackParamList } from "../OffenseNavigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { PF2Action } from "../../../../PF2eCoreLib/PlayerCharacter/PF2Action";
import { RouteProp } from "@react-navigation/native";
import EditAction from "./EditAction";

const EditActionPcView: React.FC<Props> = (props) => {
    const index: number = props.route.params.index;
    const updateAction: (updatedAction: PF2Action, index: number) => void =
        props.route.params.updateAction;

    const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;
    const EditActionsBackAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={() => {
                props.navigation.goBack();
            }}
        />
    );
    return (
        <Layout style={{ flex: 1, padding: 10 }}>
            <TopNavigation
                accessoryLeft={EditActionsBackAction}
                title="Edit Action"
            />
            <EditAction updateAction={updateAction} actionIndex={index} />
        </Layout>
    );
};

type ActionsNavigationProps = StackNavigationProp<
    OffenseStackParamList,
    "EditActionPcView"
>;

type Props = {
    navigation: ActionsNavigationProps;
    route: RouteProp<OffenseStackParamList, "EditActionPcView">;
};

export default connect(null, null)(EditActionPcView);

export const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
        padding: 10,
        flex: 1,
    },
});
