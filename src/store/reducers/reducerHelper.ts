import {
    Armor,
    InventoryItem,
    Item,
    Shield,
    Weapon,
} from "../../PF2eCoreLib/PlayerCharacter";

export const UpdateItemInInventory = (
    newItem: InventoryItem,
    inventory: InventoryItem[]
): InventoryItem[] => {
    let foundIndex = inventory.findIndex((item) => item.id === newItem.id);
    inventory[foundIndex] = newItem;
    return inventory;
};
