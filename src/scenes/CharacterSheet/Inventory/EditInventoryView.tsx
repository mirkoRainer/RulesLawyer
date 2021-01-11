import React, { ReactNode, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
    Icon,
    Layout,
    TopNavigation,
    TopNavigationAction,
} from "@ui-kitten/components";
import { connect } from "react-redux";
import { EntireAppState } from "../../../store/Store";
import {
    Armor,
    InventoryItem,
    Item,
    Shield,
    Weapon,
} from "../../../PF2eCoreLib/PlayerCharacter";
import { useNavigation } from "@react-navigation/native";
import { InventoryNavigationProps } from "./Inventory";
import EditItemView from "./Components/EditItemView";
import DraggableFlatList, {
    RenderItemParams,
} from "react-native-draggable-flatlist";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { startChangeInventory } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { bindActionCreators } from "redux";
import { ItemView } from "./Components/ItemView";

const EditInventoryView: React.FC<Props> = (props) => {
    const navigation = useNavigation<InventoryNavigationProps>();
    const [items, setItems] = useState(props.items);
    const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;
    const BackAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={async () => {
                if (props.items !== items) props.updateInventoryItems(items);
                navigation.goBack();
            }}
        />
    );

    const renderItem: (params: RenderItemParams<InventoryItem>) => ReactNode = (
        params
    ) => {
        return (
            <TouchableOpacity
                style={{
                    height: 100,
                    alignItems: "center",
                    justifyContent: "center",
                }}
                onLongPress={params.drag}
            >
                <ItemView
                    item={params.item}
                    index={params.index ? params.index : 0}
                    cardStatus="basic"
                />
            </TouchableOpacity>
        );
    };

    return (
        <Layout style={{ flex: 1 }}>
            <TopNavigation
                accessoryLeft={BackAction}
                title="Arrange Inventory"
            />
            <DraggableFlatList<InventoryItem>
                data={items}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${item.name}-${index}`}
                onDragEnd={(props) => setItems(props.data)}
                style={{ marginHorizontal: 5 }}
            />
        </Layout>
    );
};

type Props = LinkStateProps & LinkDispatchProps;

interface LinkStateProps {
    items: InventoryItem[];
}

const mapStateToProps = (state: EntireAppState): LinkStateProps => {
    return {
        items: state.playerCharacter.inventory.items,
    };
};

interface LinkDispatchProps {
    updateInventoryItems: (items: InventoryItem[]) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        updateInventoryItems: bindActionCreators(
            startChangeInventory,
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditInventoryView);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
