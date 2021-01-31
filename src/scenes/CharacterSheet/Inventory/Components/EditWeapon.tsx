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
import {
    Weapon,
    WeaponProficiencies,
} from "../../../../PF2eCoreLib/PlayerCharacter";
import { EditItemState } from "./EditItem";
import { isNumbersOnlyElseReturn0 } from "../../../Shared/Misc/StringToNumberHelper";
import { Ability } from "../../../../PF2eCoreLib/Ability";
import { EditDamageDice } from "./EditDamageDice";
import { CurrentPCWeaponProficiencies } from "../../Encounter/Offense/Weapons/WeaponHelper";
import { BonusType } from "../../../../PF2eCoreLib/BonusTypes";

type Props = {
    weapon: Weapon;
    state: EditItemState;
    setState: React.Dispatch<React.SetStateAction<EditItemState>>;
};

export const EditWeapon: React.FC<Props> = (props) => {
    const changeToHitBonus = (text: string) => {
        const toHitBonusInput = isNumbersOnlyElseReturn0(text);
        props.setState({
            ...props.state,
            item: {
                ...props.state.item,
                toHitBonus: {
                    appliesTo: "toHit",
                    type: BonusType.Item,
                    source: props.weapon.id.toString(),
                    amount: toHitBonusInput,
                },
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
    const weaponCategoryData = [
        `Unarmed (${CurrentPCWeaponProficiencies().Unarmed})`,
        `Simple (${CurrentPCWeaponProficiencies().Simple})`,
        `Martial (${CurrentPCWeaponProficiencies().Martial})`,
        "Other",
    ];
    const handleWeaponCategorySelect = (index: IndexPath | IndexPath[]) => {
        const trueIndex = index as IndexPath;
        let category: keyof WeaponProficiencies | undefined;
        // TODO: Handle Editing of Other Category properties. i.e description and mapping description to weapon proficiency.
        switch (weaponCategoryData[trueIndex.row]) {
            case weaponCategoryData[0]:
                category = "Unarmed";
                break;
            case weaponCategoryData[1]:
                category = "Simple";
                break;
            case weaponCategoryData[2]:
                category = "Martial";
                break;
            case weaponCategoryData[3]:
                category = "Other";
                break;
            default:
                category = undefined;
                break;
        }
        props.setState({
            ...props.state,
            item: { ...props.state.item, weaponCategory: category },
        });
    };
    const weaponCategories = () => {
        let items: JSX.Element[] = weaponCategoryData.map((x) => (
            <SelectItem title={x} key={x} />
        ));
        return items;
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
            <Text category="h6" style={{ textAlign: "center" }}>
                Weapon Properties
            </Text>
            {
                // TODO: Enrich View with basic weapon stat breakdown calculations and summary
            }
            <Select
                value={props.state.item.weaponCategory}
                label={"Weapon Category"}
                onSelect={handleWeaponCategorySelect}
                placeholder={"Select Weapon Category"}
                style={{ flex: 1, paddingHorizontal: 5, paddingVertical: 5 }}
            >
                {weaponCategories()}
            </Select>
            <Input
                label={"to Hit Bonus"}
                placeholder="Bonus to Hit"
                value={props.weapon.toHitBonus.toString()}
                size="medium"
                keyboardType="numeric"
                onChangeText={changeToHitBonus}
                style={{ flex: 1, paddingHorizontal: 5, paddingVertical: 5 }}
            />
            {
                // TODO: Enrich Selection data with ability modifier in dropdown
            }
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
