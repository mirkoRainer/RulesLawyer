import _ from "lodash";
import { iBonus } from "../../PF2eCoreLib/Bonus";
import {
    Armor,
    InventoryItem,
    Item,
    Shield,
    Weapon,
} from "../../PF2eCoreLib/PlayerCharacter";
import Store from "../Store";

export const UpdateItemInInventory = (
    newItem: InventoryItem,
    inventory: InventoryItem[]
): InventoryItem[] => {
    const foundIndex = inventory.findIndex((item) => {
        return item.id.equals(newItem.id);
    });
    if (foundIndex === -1) {
        console.error(
            `Inventory item not found. ${JSON.stringify(newItem, null, 1)}`
        );
    }
    inventory[foundIndex] = newItem;
    return inventory;
};

export const InsertOrUpdateBonus = (
    bonus: iBonus,
    bonuses: iBonus[]
): iBonus[] => {
    const index = bonuses.findIndex((x) => _.isEqual(x, bonus));
    if (index <= -1) {
        // Bonus doesn't exist.
        bonuses.push(bonus);
        return bonuses;
    } else {
        bonuses[index] = bonus;
        return bonuses;
    }
};
