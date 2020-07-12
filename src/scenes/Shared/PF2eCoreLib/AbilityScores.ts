import { Ability } from "./Ability";
import { prop } from "./TypescriptEvolution";

export interface AbilityScore {
    ability: keyof AbilityScoreArray;
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
};

export function UpdateAbilityScore(newAbilityScore: AbilityScore, existingAbilityScores: AbilityScoreArray): AbilityScoreArray {
    let scores = existingAbilityScores;
    scores[newAbilityScore.ability] = newAbilityScore;
    return scores;
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
    return { name: ability, modifier: abilityModifier };
}

export function CalculateAbilityScoreModifier(abilityScore: number): number {
    let result = (abilityScore - 10) / 2;
    return Math.floor(result);
}

export function GetAbilityScoreAbbreviation(abilityScoreName: string) {
    switch (abilityScoreName) {
    case "strength": {
        return "STR";
    }
    case "dexterity": {
        return "DEX";
    }
    case "constitution": {
        return "CON";
    }
    case "intelligence": {
        return "INT";
    }
    case "wisdom": {
        return "WIS";
    }
    case "charisma": {
        return "CHA";
    }
    default: {
        return "FREE";
    }
    }
}
