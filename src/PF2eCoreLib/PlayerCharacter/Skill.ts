import { AbilityScoreArray } from "../AbilityScores";
import { Proficiencies } from "../Proficiencies";
import { Skills } from "./Skills";

export interface Skill {
    name: keyof Skills;
    ability: keyof AbilityScoreArray;
    proficiency: Proficiencies;
    hasArmorPenalty: boolean;
    armorPenalty?: number;
    loreDescriptor?: string;
}
