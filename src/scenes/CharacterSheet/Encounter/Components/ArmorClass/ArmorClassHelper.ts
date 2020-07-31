import { ArmorProficiencies } from "../../../../../PF2eCoreLib/PlayerCharacter";
import { ArmorCategory } from "../../../../../PF2eCoreLib/ArmorCategory";
import { Proficiencies } from "../../../../../PF2eCoreLib/Proficiencies";

export const getWornArmorProficiency = (armorProficiencies: ArmorProficiencies, wornArmorCategory: ArmorCategory): Proficiencies => {
    switch (wornArmorCategory) {
    case ArmorCategory.Unarmored: {
        return armorProficiencies.unarmored;
    }
    case ArmorCategory.Light: {
        return armorProficiencies.light;
    }
    case ArmorCategory.Medium: {
        return armorProficiencies.medium;
    }
    case ArmorCategory.Heavy: {
        return armorProficiencies.heavy;
    }
    default: {
        return Proficiencies.Untrained;
    }
    }
};