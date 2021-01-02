import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";
import WornItemsView from "./Components/WornItems";
import ReadiedItemsView from "./Components/ReadiedItems";
import OtherItemsView from "./Components/OtherItems";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { InventoryStackParamList } from "./InventoryNavigation";

type Props = {};

export type InventoryNavigationProps = StackNavigationProp<
    InventoryStackParamList,
    "EditInventoryView"
>;

export const InventoryPage: React.FC<Props> = (props) => {
    const navigation = useNavigation<InventoryNavigationProps>();
    const goToEditInventoryView = () => {
        console.debug("Navigation to Inventory");
        navigation.navigate("EditInventoryView");
    };
    return (
        <Layout style={styles.container}>
            <ScrollView>
                <ReadiedItemsView readiedItems={[]} />
                <WornItemsView wornItems={[]} />
                <OtherItemsView otherItems={[]} />
            </ScrollView>
            <Button appearance="ghost" onPress={goToEditInventoryView}>
                Edit Inventory
            </Button>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
});
