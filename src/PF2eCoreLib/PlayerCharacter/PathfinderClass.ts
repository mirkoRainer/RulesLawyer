import { AbilityScoreArray } from "../AbilityScores";
import { Proficiencies } from "../Proficiencies";

export interface PathfinderClass {
    name: string;
    subClass: string;
    proficiency: Proficiencies;
    keyAbility: keyof AbilityScoreArray;
}
