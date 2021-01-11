import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Card, Layout, Text, Toggle } from "@ui-kitten/components";
import { Guid } from "guid-typescript";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import {
    Armor,
    Item,
    Shield,
    Weapon,
    IsWeapon,
    IsShield,
    IsArmor,
    InventoryItem,
    Inventory,
} from "../../../../PF2eCoreLib/PlayerCharacter";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { startChangeItem } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { EntireAppState } from "../../../../store/Store";
import { CheckIcon } from "../../../Shared/IconButtons";
import { InventoryStackParamList } from "../InventoryNavigation";

type OwnProps = {
    navigation: InventoryNavigationProps;
    route: EditItemViewRouteProp;
};

type InventoryNavigationProps = StackNavigationProp<
    InventoryStackParamList,
    "EditItemView"
>;
type EditItemViewRouteProp = RouteProp<InventoryStackParamList, "EditItemView">;

interface State {
    item: InventoryItem;
    isWeapon: boolean;
    isShield: boolean;
    isArmor: boolean;
}

const EditItemView: React.FC<Props> = (props) => {
    const [state, setState] = useState<State>(() => {
        const isWeapon = IsWeapon(props.item);
        const isArmor = IsArmor(props.item);
        const isShield = IsShield(props.item);
        return {
            item: props.item,
            isWeapon,
            isArmor,
            isShield,
        };
    });
    const updateInventoryState = () => {
        props.updateInventoryItem(state.item);
        props.navigation.goBack();
    };
    const onWeaponToggle = (toggleState: boolean) => {
        setState({
            ...state,
            isWeapon: toggleState,
        });
    };
    const onShieldToggle = (toggleState: boolean) => {
        setState({
            ...state,
            isShield: toggleState,
        });
    };
    const onArmorToggle = (toggleState: boolean) => {
        setState({
            ...state,
            isArmor: toggleState,
        });
    };

    return (
        <Layout style={{ flex: 1 }}>
            <Layout style={styles.header}>
                <Text category="h5">Editing: {state.item.name}</Text>
                <Button
                    appearance="ghost"
                    accessoryLeft={CheckIcon}
                    onPress={updateInventoryState}
                />
            </Layout>
            <ScrollView>
                <Layout
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        alignContent: "space-between",
                        justifyContent: "space-around",
                        marginHorizontal: 10,
                    }}
                >
                    <Layout>
                        <Toggle
                            checked={state.isWeapon}
                            onChange={onWeaponToggle}
                            disabled={state.isArmor || state.isShield}
                        />
                        <Text>Is Weapon?</Text>
                    </Layout>
                    <Layout>
                        <Toggle
                            checked={state.isShield}
                            onChange={onShieldToggle}
                            disabled={state.isArmor || state.isWeapon}
                        />
                        <Text>Is Shield?</Text>
                    </Layout>
                    <Layout>
                        <Toggle
                            checked={state.isArmor}
                            onChange={onArmorToggle}
                            disabled={state.isWeapon || state.isShield}
                        />
                        <Text>Is Armor?</Text>
                    </Layout>
                </Layout>
                <Text>{Object.keys(state.item)}</Text>
                {state.isShield ? <Text>Shield</Text> : <></>}
                {state.isArmor ? <Text>Armor</Text> : <></>}
                {state.isWeapon ? <Text>Weapon</Text> : <></>}
            </ScrollView>
        </Layout>
    );
};

type Props = LinkStateProps & LinkDispatchProps & OwnProps;

interface LinkStateProps {
    item: InventoryItem;
}

const mapStateToProps = (
    state: EntireAppState,
    ownProps: OwnProps
): LinkStateProps => {
    let item = state.playerCharacter.inventory.items.find(
        (x) => x.id.toString() === ownProps.route.params.itemGuid.toString()
    );
    if (!item) {
        item = {
            bulk: 1,
            description: "New Item",
            id: Guid.create(),
            invested: false,
            isContainer: false,
            level: 0,
            name: "New Item",
            readied: false,
            traits: [],
            worn: false,
        };
    }
    return {
        item,
    };
};

interface LinkDispatchProps {
    updateInventoryItem: (item: InventoryItem) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        updateInventoryItem: bindActionCreators(startChangeItem, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditItemView);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
});
