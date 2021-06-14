import _ from "lodash";
import { iBonus } from "../../PF2eCoreLib/Bonus";
import {
    InventoryItem,
    Item,
} from "../../PF2eCoreLib/PlayerCharacter/Inventory";
import { Armor, IsArmor } from "../../PF2eCoreLib/PlayerCharacter/Armor";
import { Weapon } from "../../PF2eCoreLib/PlayerCharacter/Weapon";
import { Shield } from "../../PF2eCoreLib/PlayerCharacter/Shield";
import Store from "../Store";
import { ChangeWornArmor } from "../actions/PlayerCharacter/PlayerCharacterActions";
import { ArmorCategoryData } from "../../scenes/Shared/Armor/ArmorHelper";

export const UpdateItemInInventory = (
    newItem: InventoryItem,
    inventory: InventoryItem[]
): InventoryItem[] => {
    const foundIndex = inventory.findIndex((item) => {
        return item.id === newItem.id;
    });
    if (foundIndex === -1) {
        console.error(
            `Inventory item not found. itemId:${newItem.id.toString()}`
        );
        return inventory;
    }
    inventory[foundIndex] = newItem;
    return inventory;
};

export const InsertOrUpdateBonuses = (
    newBonuses: iBonus[],
    bonuses: iBonus[]
): iBonus[] => {
    let output = bonuses;
    newBonuses.forEach((bonus) => {
        output = InsertOrUpdateBonus(bonus, output);
    });
    return output;
};

export const InsertOrUpdateBonus = (
    bonus: iBonus,
    bonuses: iBonus[]
): iBonus[] => {
    const index = bonuses.findIndex(
        (x) =>
            x.appliesTo === bonus.appliesTo &&
            x.source === bonus.source &&
            x.type === bonus.type
    );
    if (index <= -1) {
        // Bonus doesn't exist.
        bonuses.push(bonus);
        return bonuses;
    } else {
        bonuses[index] = bonus;
        return bonuses;
    }
};
export const RemoveBonus = (bonus: iBonus, bonuses: iBonus[]): iBonus[] => {
    return bonuses.filter((x) => !_.isEqual(x, bonus));
};

export const ChangeArmorThatIsWorn = (
    newArmor: Armor,
    inventory: InventoryItem[]
): InventoryItem[] => {
    return inventory.map((item) => {
        if (!IsArmor(item)) return item;
        if (newArmor.id === item.id) {
            return { ...item, worn: true };
        } else {
            return { ...item, worn: false };
        }
    });
};
