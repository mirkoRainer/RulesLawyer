import React from "react";
import { StyleSheet } from "react-native";
import {
    IndexPath,
    Input,
    Layout,
    Select,
    SelectItem,
    Text,
} from "@ui-kitten/components";
import { Weapon } from "../../../../PF2eCoreLib/PlayerCharacter";
import { EditItemState } from "./EditItemView";
import { isNumbersOnlyElseReturn0 } from "../../../Shared/Misc/StringToNumberHelper";
import { Dictionary } from "../../../Shared/Misc/Dictionary";
import { Ability } from "../../../../PF2eCoreLib/Ability";
import { useGestureHandlerRef } from "@react-navigation/stack";
import { EditDamageDice } from "./EditDamageDice";

type Props = {
    weapon: Weapon;
    state: EditItemState;
    setState: React.Dispatch<React.SetStateAction<EditItemState>>;
};

export const EditWeapon: React.FC<Props> = (props) => {
    const changeToHitBonus = (text: string) => {
        const toHitBonus = isNumbersOnlyElseReturn0(text);
        props.setState({
            ...props.state,
            item: {
                ...props.state.item,
                toHitBonus,
            },
        });
    };
    const abilityData = Object.keys(Ability);
    const handleAbilitySelect = (index: IndexPath | IndexPath[]) => {
        const trueIndex = index as IndexPath;
        let ability: Ability | undefined;
        switch (abilityData[trueIndex.row]) {
            case Ability.Strength:
                ability = Ability.Strength;
                break;
            case Ability.Dexterity:
                ability = Ability.Dexterity;
                break;
            case Ability.Constitution:
                ability = Ability.Constitution;
                break;
            case Ability.Intelligence:
                ability = Ability.Intelligence;
                break;
            case Ability.Wisdom:
                ability = Ability.Wisdom;
                break;
            case Ability.Charisma:
                ability = Ability.Charisma;
                break;
            default:
                ability = undefined;
                break;
        }
        props.setState({
            ...props.state,
            item: { ...props.state.item, ability },
        });
    };
    const handleDamageAbilitySelect = (index: IndexPath | IndexPath[]) => {
        const trueIndex = index as IndexPath;
        let damageAbilityModifier: Ability | undefined;
        switch (abilityData[trueIndex.row]) {
            case Ability.Strength:
                damageAbilityModifier = Ability.Strength;
                break;
            case Ability.Dexterity:
                damageAbilityModifier = Ability.Dexterity;
                break;
            case Ability.Constitution:
                damageAbilityModifier = Ability.Constitution;
                break;
            case Ability.Intelligence:
                damageAbilityModifier = Ability.Intelligence;
                break;
            case Ability.Wisdom:
                damageAbilityModifier = Ability.Wisdom;
                break;
            case Ability.Charisma:
                damageAbilityModifier = Ability.Charisma;
                break;
            default:
                damageAbilityModifier = undefined;
                break;
        }
        props.setState({
            ...props.state,
            item: { ...props.state.item, damageAbilityModifier },
        });
    };
    const toHitAbilities = () => {
        let items: JSX.Element[] = [];
        abilityData.forEach((x) => {
            if (x === "Free") {
                items.push(<SelectItem title={"None"} key={x} />);
                return;
            }
            items.push(<SelectItem title={x} key={x} />);
        });
        return items;
    };
    const damageAbilities = () => {
        let items: JSX.Element[] = [];
        abilityData.forEach((x) => {
            if (x === "Free") {
                items.push(<SelectItem title={"None"} key={x} />);
                return;
            }
            items.push(<SelectItem title={x} key={x} />);
        });
        return items;
    };
    return (
        <Layout>
            <Input
                label={"to Hit Bonus"}
                placeholder="Bonus to Hit"
                value={props.weapon.toHitBonus.toString()}
                size="medium"
                keyboardType="numeric"
                onChangeText={changeToHitBonus}
                style={{ flex: 1, paddingHorizontal: 5, paddingVertical: 5 }}
            />
            <Select
                value={props.state.item.ability}
                label={"to Hit Ability"}
                onSelect={handleAbilitySelect}
                placeholder={"Select Weapon Ability Modifier"}
                style={{ flex: 1, paddingHorizontal: 5, paddingVertical: 5 }}
            >
                {toHitAbilities()}
            </Select>
            <Select
                value={props.state.item.damageAbilityModifier}
                label={"Damage Ability"}
                onSelect={handleDamageAbilitySelect}
                placeholder={"Select Weapon Ability Modifier"}
                style={{ flex: 1, paddingHorizontal: 5, paddingVertical: 5 }}
            >
                {damageAbilities()}
            </Select>
            <EditDamageDice
                setState={props.setState}
                state={props.state}
                damageDice={props.weapon.damageDice}
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
