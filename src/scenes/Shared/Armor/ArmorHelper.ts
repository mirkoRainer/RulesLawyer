import { ArmorCategory } from "../../../PF2eCoreLib/ArmorCategory";
import { ArmorGroup } from "../../../PF2eCoreLib/ArmorGroup";
import { Armor, IsArmor } from "../../../PF2eCoreLib/PlayerCharacter/Armor";
import Store from "../../../store/Store";
import { Dictionary } from "../Misc/Dictionary";

export const ArmorCategoryData: Dictionary<string> = {
    0: "Unarmored",
    1: "Light",
    2: "Medium",
    3: "Heavy",
};

export const ArmorGroupData: Dictionary<string> = {
    0: ArmorGroup.Leather,
    1: ArmorGroup.Composite,
    2: ArmorGroup.Chain,
    3: ArmorGroup.Plate,
};

export function getArmorFromInventory(): string[] {
    const state = Store.getState();
    let armorInInventory: string[] = [];
    const armors: Armor[] = state.playerCharacter.inventory.items.filter<Armor>(
        IsArmor
    );
    armors.forEach((armor) => {
        armorInInventory.push(armor.name);
    });
    return armorInInventory;
}
