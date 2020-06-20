import { Ability } from "./Ability";

export interface AbilityScore {
    ability: Ability;
    amount: number;
}

export function GetAbilityModifierFromScores(
    ability: Ability,
    abilityScores: AbilityScore[]
): number {
    if (abilityScores.length <= 0) {
        return 0;
    }
    let abilityScore: number | undefined = abilityScores.find(
        (score) => score.ability === ability
    )?.amount;
    const abilityModifier =
        abilityScore !== undefined
            ? CalculateAbilityScoreModifier(abilityScore)
            : 0;
    return abilityModifier;
}

export function CalculateAbilityScoreModifier(abilityScore: number): number {
    let result = (abilityScore - 10) / 2;
    return Math.floor(result);
}
