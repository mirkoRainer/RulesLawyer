import { Ability } from "./Ability";

export interface AbilityScore {
    ability: Ability;
    score: number;
}

export type AbilityScoreArray = {
    Strength: AbilityScore;
    Dexterity: AbilityScore;
    Constitution: AbilityScore;
    Intelligence: AbilityScore;
    Wisdom: AbilityScore;
    Charisma: AbilityScore;
    [key: string]: AbilityScore;
};

export function AbilityEnumToAbilityScoreArrayKey(
    ability: Ability
): keyof AbilityScoreArray {
    switch (ability) {
        case Ability.Free:
            return Ability.Free as keyof AbilityScoreArray;
        case Ability.Strength:
            return Ability.Strength as keyof AbilityScoreArray;
        case Ability.Dexterity:
            return Ability.Dexterity as keyof AbilityScoreArray;
        case Ability.Constitution:
            return Ability.Constitution as keyof AbilityScoreArray;
        case Ability.Intelligence:
            return Ability.Intelligence as keyof AbilityScoreArray;
        case Ability.Wisdom:
            return Ability.Wisdom as keyof AbilityScoreArray;
        case Ability.Charisma:
            return Ability.Charisma as keyof AbilityScoreArray;
        default:
            return Ability.Free as keyof AbilityScoreArray;
    }
}

export function UpdateAbilityScore(
    newAbilityScore: AbilityScore,
    existingAbilityScores: AbilityScoreArray
): AbilityScoreArray {
    let scores = existingAbilityScores;
    scores[
        AbilityEnumToAbilityScoreArrayKey(newAbilityScore.ability)
    ] = newAbilityScore;
    return scores;
}

export function GetAbilityModifierFromScores(
    ability: Ability | undefined,
    abilityScores: AbilityScoreArray
): number {
    if (ability) {
        let abilityScore: AbilityScore =
            abilityScores[AbilityEnumToAbilityScoreArrayKey(ability)];
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
