import { Layout, Toggle, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import React from "react";
import { EditItemState } from "./EditItemView";

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
        props.setState({
            ...props.state,
            isArmor: toggleState,
        });
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
