import { Ability } from "./Ability";
import { prop } from "./TypescriptEvolution";

export interface AbilityScore {
    ability: Ability;
    score: number;
}

export interface AbilityModifierWithName {
    name: string;
    modifier: number;
}

export type AbilityScoreArray = {
    strength: AbilityScore;
    dexterity: AbilityScore;
    constitution: AbilityScore;
    intelligence: AbilityScore;
    wisdom: AbilityScore;
    charisma: AbilityScore;
}

export function GetAbilityModifierFromScores(
    ability: keyof AbilityScoreArray,
    abilityScores: AbilityScoreArray
): AbilityModifierWithName {
    let abilityScore: AbilityScore = abilityScores[ability];
    const abilityModifier =
        abilityScore !== undefined
            ? CalculateAbilityScoreModifier(abilityScore.score)
            : 0;
    return { name: ability,modifier: abilityModifier} ;
}

export function CalculateAbilityScoreModifier(abilityScore: number): number {
    let result = (abilityScore - 10) / 2;
    return Math.floor(result);
}
