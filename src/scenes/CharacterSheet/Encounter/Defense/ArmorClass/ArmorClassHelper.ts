import { ArmorProficiencies } from "../../../../../PF2eCoreLib/PlayerCharacter";
import { ArmorCategory } from "../../../../../PF2eCoreLib/ArmorCategory";
import { Proficiencies } from "../../../../../PF2eCoreLib/Proficiencies";
import Store from "../../../../../store/Store";

export const getArmorProficiencyForCurrentPC = (
    wornArmorCategory: ArmorCategory
): Proficiencies => {
    const armorProficiencies = Store.getState().playerCharacter
        .armorProficiencies;
    switch (wornArmorCategory) {
        case "Unarmored": {
            return armorProficiencies.unarmored;
        }
        case "Light": {
            return armorProficiencies.light;
        }
        case "Medium": {
            return armorProficiencies.medium;
        }
        case "Heavy": {
            return armorProficiencies.heavy;
        }
        default: {
            return Proficiencies.Untrained;
        }
    }
};
