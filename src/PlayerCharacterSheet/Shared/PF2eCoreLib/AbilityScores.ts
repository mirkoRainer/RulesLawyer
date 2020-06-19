export interface AbilityScore {
    ability: string;
    amount: number;
}

export function GetAbilityModifierFromScores(
    ability: string,
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

function CalculateAbilityScoreModifier(abilityScore: number): number {}
