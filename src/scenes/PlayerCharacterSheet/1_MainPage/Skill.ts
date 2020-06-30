import { Proficiencies } from "../../Shared/PF2eCoreLib/Proficiencies";
import { AbilityModifierWithName } from "../../Shared/PF2eCoreLib/AbilityScores";

export interface Skill {
    name: string;
    loreDescriptor?: string;
    abilityModifier: AbilityModifierWithName;
    proficiency: Proficiencies;
    itemBonus: number;
    hasArmorPenalty: boolean;
    armorPenalty?: number;
}
