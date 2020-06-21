import { Ability } from "./Ability";

export interface AbilityScore {
    ability: Ability;
    amount: number;
}

export interface AbilityModifierWithName {
    name: string;
    modifier: number;
}

export function GetAbilityModifierFromScores(
    ability: Ability,
    abilityScores: AbilityScore[]
): AbilityModifierWithName {
    if (abilityScores.length <= 0) {
        return { name: ability.toString(),modifier: 0};
    }
    let abilityScore: number | undefined = abilityScores.find(
        (score) => score.ability === ability
    )?.amount;
    const abilityModifier =
        abilityScore !== undefined
            ? CalculateAbilityScoreModifier(abilityScore)
            : 0;
    return { name: ability.toString(),modifier: abilityModifier} ;
}

export function CalculateAbilityScoreModifier(abilityScore: number): number {
    let result = (abilityScore - 10) / 2;
    return Math.floor(result);
}
