import { Ability } from "./Ability";
import { prop } from "./TypescriptEvolution";

export interface AbilityScore {
    ability: keyof AbilityScoreArray;
    score: number;
}

export type AbilityScoreArray = {
    Strength: AbilityScore;
    Dexterity: AbilityScore;
    Constitution: AbilityScore;
    Intelligence: AbilityScore;
    Wisdom: AbilityScore;
    Charisma: AbilityScore;
};

export function UpdateAbilityScore(newAbilityScore: AbilityScore, existingAbilityScores: AbilityScoreArray): AbilityScoreArray {
    let scores = existingAbilityScores;
    scores[newAbilityScore.ability] = newAbilityScore;
    return scores;
}

export function GetAbilityModifierFromScores(
    ability: keyof AbilityScoreArray | undefined,
    abilityScores: AbilityScoreArray
): number {
    if (ability) {
        let abilityScore: AbilityScore = abilityScores[ability];
        const abilityModifier =
            abilityScore !== undefined
                ? CalculateAbilityScoreModifier(abilityScore.score)
                : 0;
        return abilityModifier;
    }
    return 0;
}

export function CalculateAbilityScoreModifier(abilityScore: number): number {
    let result = (abilityScore - 10) / 2;
    return Math.floor(result);
}

export function GetAbilityScoreAbbreviation(abilityScoreName: string) {
    switch (abilityScoreName) {
    case "Strength": {
        return "STR";
    }
    case "Dexterity": {
        return "DEX";
    }
    case "Constitution": {
        return "CON";
    }
    case "Intelligence": {
        return "INT";
    }
    case "Wisdom": {
        return "WIS";
    }
    case "Charisma": {
        return "CHA";
    }
    default: {
        return "FREE";
    }
    }
}
