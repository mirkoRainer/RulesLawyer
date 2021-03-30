import { IndexPath, Select, SelectItem } from "@ui-kitten/components";
import { indexOf } from "lodash";
import React from "react";
import { StyleSheet } from "react-native";
import { Weapon } from "../../../../../PF2eCoreLib/PlayerCharacter/Weapon";
import { getWeaponsFromInventory } from "./WeaponHelper";

type Props = {
    currentWeapons: Weapon[];
    currentWeaponSelected: Weapon | undefined;
    onSelect: (weapon: Weapon | undefined) => void;
};

export const WeaponSelector: React.FC<Props> = (props) => {
    const handleWeaponSelect = (index: IndexPath | IndexPath[]) => {
        const trueIndex = index as IndexPath;
        const weaponsArray = getWeaponsFromInventory();
        console.debug(`handleWeaponSelect: ${weaponsArray[trueIndex.row]}`);
        if (trueIndex.row === 0) {
            props.onSelect(undefined);
            return;
        }
        console.debug(
            `Not undefined so it's ${props.currentWeapons[trueIndex.row - 1]}`
        );
        props.onSelect(props.currentWeapons[trueIndex.row - 1]);
        return;
    };

    const renderSelectItem = (weapon: Weapon | undefined) => {
        if (!weapon) {
            return <SelectItem title={"None"} key={undefined}></SelectItem>;
        }
        const title: string = weapon.name;
        return (
            <SelectItem title={title} key={weapon.id.toString()}></SelectItem>
        );
    };
    const weapons = props.currentWeapons.map((x) => renderSelectItem(x));
    weapons.unshift(renderSelectItem(undefined));
    const value = props.currentWeaponSelected
        ? props.currentWeaponSelected.name
        : "None";
    const selectedIndex = props.currentWeaponSelected
        ? new IndexPath(
              indexOf(
                  getWeaponsFromInventory(),
                  props.currentWeaponSelected!.name
              ) + 1
          )
        : new IndexPath(0);

    return (
        <>
            <Select
                label="Weapon"
                placeholder="Select a Weapon"
                selectedIndex={selectedIndex}
                onSelect={handleWeaponSelect}
                value={value}
                style={{ paddingBottom: 10 }}
            >
                {weapons}
            </Select>
        </>
    );
};
