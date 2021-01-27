import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
    Button,
    Card,
    IndexPath,
    Input,
    Layout,
    Select,
    SelectItem,
    Text,
    Toggle,
} from "@ui-kitten/components";
import { Guid } from "guid-typescript";
import React, { useEffect, useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacityProps,
} from "react-native";
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
    Price,
} from "../../../../PF2eCoreLib/PlayerCharacter";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { startChangeItem } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { EntireAppState } from "../../../../store/Store";
import CoinPriceEditor from "../../../Shared/CoinPriceEditor";
import { CheckIcon } from "../../../Shared/IconButtons";
import { Dictionary } from "../../../Shared/Misc/Dictionary";
import { isNumbersOnly } from "../../../Shared/Misc/StringToNumberHelper";
import TraitSelector from "../../../Shared/TraitSelector";
import { InventoryStackParamList } from "../InventoryNavigation";
import { EditArmor } from "./EditArmor";
import { EditItemTypeToggles } from "./EditItemTypeToggles";
import { EditWeapon } from "./EditWeapon";

type OwnProps = {
    navigation: InventoryNavigationProps;
    route: EditItemViewRouteProp;
};

type InventoryNavigationProps = StackNavigationProp<
    InventoryStackParamList,
    "EditItemView"
>;
type EditItemViewRouteProp = RouteProp<InventoryStackParamList, "EditItemView">;

export interface EditItemState {
    item: InventoryItem;
    isWeapon: boolean;
    isShield: boolean;
    isArmor: boolean;
}

const EditItemView: React.FC<Props> = (props) => {
    const [state, setState] = useState<EditItemState>(() => {
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
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    // TODO: Use this on all forms. Disable the update button if things are being typed.
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            "keyboardDidShow",
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            "keyboardDidHide",
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const updateInventoryState = () => {
        Keyboard.dismiss();
        props.updateInventoryItem(state.item);
        props.navigation.goBack();
    };

    const onChangeName = (text: string) => {
        setState({
            ...state,
            item: { ...state.item, name: text },
        });
    };
    const onChangeItemLevel = (text: string) => {
        const valid = isNumbersOnly(text) && parseInt(text) >= 0;
        if (valid) {
            setState({
                ...state,
                item: { ...state.item, level: parseInt(text) },
            });
        }
    };
    const onChangeBulk = (text: string) => {
        const valid = isNumbersOnly(text) && parseInt(text) >= 0;
        if (valid) {
            setState({
                ...state,
                item: { ...state.item, bulk: parseInt(text) },
            });
        }
    };
    const onChangeDescription = (text: string) => {
        setState({
            ...state,
            item: { ...state.item, description: text },
        });
    };
    const onChangeInvested = (toggle: boolean) => {
        setState({
            ...state,
            item: { ...state.item, invested: toggle },
        });
    };
    const onChangeContainer = (toggle: boolean) => {
        setState({
            ...state,
            item: { ...state.item, isContainer: toggle },
        });
    };
    const onChangePrice = (newPrice: Price | undefined) => {
        setState({
            ...state,
            item: {
                ...state.item,
                price: newPrice,
            },
        });
    };
    const onChangeQuantity = (text: string) => {
        const valid = isNumbersOnly(text) && parseInt(text) >= 0;
        if (valid) {
            setState({
                ...state,
                item: { ...state.item, quantity: parseInt(text) },
            });
        }
    };
    const onChangeReadied = (toggle: boolean) => {
        setState({
            ...state,
            item: { ...state.item, readied: toggle },
        });
    };
    const onChangeWorn = (toggle: boolean) => {
        setState({
            ...state,
            item: { ...state.item, worn: toggle },
        });
    };
    const rarityData: Dictionary<string> = {
        0: "Common",
        1: "Uncommon",
        2: "Rare",
        3: "Unique",
    };
    const handleRaritySelect = (index: IndexPath | IndexPath[]) => {
        const trueIndex = index as IndexPath;
        let rarity: typeof state.item.rarity;
        switch (trueIndex.row) {
            case 0:
                rarity = undefined; // Common
                break;
            case 1:
                rarity = "uncommon";
                break;
            case 2:
                rarity = "rare";
                break;
            case 3:
                rarity = "unique";
        }
        setState({
            ...state,
            item: { ...state.item, rarity: rarity },
        });
    };
    const onTraitSelection = (traits: string[]) => {
        setState({
            ...state,
            item: { ...state.item, traits },
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
                    disabled={isKeyboardVisible}
                />
            </Layout>
            <KeyboardAvoidingView
                style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                }}
                behavior="padding"
                enabled
                keyboardVerticalOffset={100}
            >
                <ScrollView>
                    <EditItemTypeToggles setState={setState} state={state} />
                    <Input
                        label={"Name"}
                        placeholder="Item Name"
                        value={state.item.name}
                        onChangeText={onChangeName}
                        style={{ flex: 1, paddingHorizontal: 5 }}
                    />
                    <Input
                        label={"Level"}
                        placeholder="Item Level"
                        value={state.item.level.toString()}
                        size="medium"
                        keyboardType="numeric"
                        onChangeText={onChangeItemLevel}
                        style={{ flex: 1, paddingHorizontal: 5 }}
                    />
                    <Input
                        label={"Bulk"}
                        placeholder="Item Bulk"
                        value={state.item.bulk.toString()}
                        size="medium"
                        keyboardType="numeric"
                        onChangeText={onChangeBulk}
                        style={{ flex: 1, paddingHorizontal: 5 }}
                    />
                    <Input
                        label={"Description"}
                        placeholder="Item Description"
                        value={state.item.description}
                        multiline={true}
                        onChangeText={onChangeDescription}
                        style={{ flex: 1, paddingHorizontal: 5 }}
                    />
                    <Layout
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginHorizontal: 10,
                        }}
                    >
                        <Layout>
                            <Text category="s2" style={{ textAlign: "center" }}>
                                Invested?
                            </Text>
                            <Toggle
                                checked={state.item.invested}
                                onChange={onChangeInvested}
                            />
                        </Layout>
                        <Layout>
                            <Text category="s2" style={{ textAlign: "center" }}>
                                Readied?
                            </Text>
                            <Toggle
                                checked={state.item.readied}
                                onChange={onChangeReadied}
                            />
                        </Layout>
                        <Layout>
                            <Text category="s2" style={{ textAlign: "center" }}>
                                Worn?
                            </Text>
                            <Toggle
                                checked={state.item.worn}
                                onChange={onChangeWorn}
                            />
                        </Layout>
                        <Layout>
                            <Text category="s2" style={{ textAlign: "center" }}>
                                Is Container?
                            </Text>
                            <Toggle
                                checked={state.item.isContainer}
                                onChange={onChangeContainer}
                            />
                        </Layout>
                    </Layout>
                    <Layout style={{ paddingHorizontal: 5 }}>
                        <CoinPriceEditor
                            currentPrice={state.item.price}
                            updatePrice={onChangePrice}
                        />
                    </Layout>
                    <Input
                        label={"Quantity"}
                        placeholder="Number of things you have"
                        value={
                            state.item.quantity
                                ? state.item.quantity.toString()
                                : "0"
                        }
                        onChangeText={onChangeQuantity}
                        style={{ flex: 1, paddingHorizontal: 5 }}
                    />
                    <Select
                        value={state.item.rarity}
                        label={"Item Rarity"}
                        onSelect={handleRaritySelect}
                        placeholder={"Select Item Rarity"}
                        style={{
                            flex: 1,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                        }}
                    >
                        <SelectItem title={rarityData[0]} />
                        <SelectItem title={rarityData[1]} />
                        <SelectItem title={rarityData[2]} />
                        <SelectItem title={rarityData[3]} />
                    </Select>
                    {state.isArmor ? (
                        <EditArmor
                            armor={state.item as Armor}
                            setState={setState}
                            state={state}
                        />
                    ) : (
                        <></>
                    )}
                    {state.isWeapon ? (
                        <EditWeapon
                            weapon={state.item as Weapon}
                            state={state}
                            setState={setState}
                        />
                    ) : (
                        <></>
                    )}
                    {state.isShield ? <Text>Shield</Text> : <></>}
                    <TraitSelector
                        currentTraits={state.item.traits}
                        onSelection={onTraitSelection}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
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
