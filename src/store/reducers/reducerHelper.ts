import { Armor, Item, Shield, Weapon } from "../../PF2eCoreLib/PlayerCharacter";

export const UpdateItemInInventory = (
    newItem: Item | Weapon | Armor | Shield,
    inventory: (Item | Weapon | Shield | Armor)[]
): (Item | Weapon | Shield | Armor)[] => {
    let foundIndex = inventory.findIndex((item) => item.id === newItem.id);
    inventory[foundIndex] = newItem;
    return inventory;
};
