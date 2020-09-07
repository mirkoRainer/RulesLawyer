import React from "react";
import { StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { OffenseStackParamList } from "./OffenseNavigation";
import { Layout, Text, Button, TopNavigationAction, Icon, TopNavigation } from "@ui-kitten/components";

type ActionsNavigationProps = StackNavigationProp<OffenseStackParamList, "EditActionsView">;
interface OwnProps {
    navigation: ActionsNavigationProps
}
type Props = OwnProps;

export const EditActionsView: React.FC<Props> = (props) => {
    const BackIcon = (props: any) => (
        <Icon {...props} name='arrow-back' />
    );
    const EditActionsBackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={()=>{props.navigation.navigate("MainOffenseView");}} />
    );
    return(
        <Layout>
            <TopNavigation
                accessoryLeft={EditActionsBackAction}
                title='Edit Actions'
            />
            <Text style={styles.centered}>EditActionsView</Text>
        </Layout>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center"
    }
});