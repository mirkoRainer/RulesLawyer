import React from "react";
import { StyleSheet } from "react-native";
import {
    Icon,
    Layout,
    Text,
    TopNavigation,
    TopNavigationAction,
} from "@ui-kitten/components";
import { connect } from "react-redux";
import { EntireAppState } from "../../../store/Store";
import { Item } from "../../../PF2eCoreLib/PlayerCharacter";
import { useNavigation } from "@react-navigation/native";
import { InventoryNavigationProps } from "./Inventory";
import { EditItemView } from "./Components/EditItemView";

const EditInventoryView: React.FC<Props> = (props) => {
    const navigation = useNavigation<InventoryNavigationProps>();
    const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;
    const BackAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={() => {
                navigation.goBack();
            }}
        />
    );

    const items: JSX.Element[] = [];
    props.items.forEach((item, index, originalArrayOfItems) =>
        items.push(
            <EditItemView
                key={`${item.name}:[${index}]`}
                item={item}
                index={index}
                inventory={originalArrayOfItems}
            />
        )
    );

    return (
        <Layout style={{ flex: 1 }}>
            <TopNavigation accessoryLeft={BackAction} title="Edit Inventory" />
            {items}
        </Layout>
    );
};

type Props = LinkStateProps;

interface LinkStateProps {
    items: Item[];
}

const mapStateToProps = (state: EntireAppState): LinkStateProps => {
    return {
        items: state.playerCharacter.inventory.items,
    };
};

export default connect(mapStateToProps, null)(EditInventoryView);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
