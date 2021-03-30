import { Layout, Toggle, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import React from "react";
import { EditItemState } from "./EditItem";
import { Item } from "../../../../PF2eCoreLib/PlayerCharacter/Inventory";
import {
    Armor,
    DEFAULT_ARMOR,
    DEFAULT_ARMOR_ONLY_PROPS,
} from "../../../../PF2eCoreLib/PlayerCharacter/Armor";

interface Props {
    state: EditItemState;
    setState: React.Dispatch<React.SetStateAction<EditItemState>>;
}

export const EditItemTypeToggles: React.FC<Props> = (props) => {
    const onWeaponToggle = (toggleState: boolean) => {
        props.setState({
            ...props.state,
            isWeapon: toggleState,
        });
    };
    const onShieldToggle = (toggleState: boolean) => {
        props.setState({
            ...props.state,
            isShield: toggleState,
        });
    };
    const onArmorToggle = (toggleState: boolean) => {
        if (toggleState) {
            const armorNoMore = props.state.item as Item;
            props.setState({
                ...props.state,
                isArmor: toggleState,
                item: armorNoMore,
            });
        } else {
            const armorNow = props.state.item as Item;
            props.setState({
                ...props.state,
                isArmor: toggleState,
                item: {
                    ...armorNow,
                    ...DEFAULT_ARMOR_ONLY_PROPS,
                },
            });
        }
    };
    return (
        <Layout style={styles.headerSection}>
            <Layout>
                <Toggle
                    checked={props.state.isWeapon}
                    onChange={onWeaponToggle}
                />
                <Text category="s2">Is Weapon?</Text>
            </Layout>
            <Layout>
                <Toggle
                    checked={props.state.isShield}
                    onChange={onShieldToggle}
                />
                <Text category="s2">Is Shield?</Text>
            </Layout>
            <Layout>
                <Toggle
                    checked={props.state.isArmor}
                    onChange={onArmorToggle}
                />
                <Text category="s2">Is Armor?</Text>
            </Layout>
        </Layout>
    );
};

const styles = StyleSheet.create({
    headerSection: {
        flex: 1,
        flexDirection: "row",
        alignContent: "space-between",
        justifyContent: "space-around",
        marginHorizontal: 10,
    },
});
