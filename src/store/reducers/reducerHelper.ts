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
