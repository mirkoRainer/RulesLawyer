import { Proficiencies } from "../Shared/PF2eCoreLib/Proficiencies";

export interface Skill {
    name: string;
    loreDescriptor?: string;
    abilityModifier: number;
    proficiency: Proficiencies;
    itemBonus: number;
    hasArmorPenalty: boolean;
    armorPenalty?: number;
}
