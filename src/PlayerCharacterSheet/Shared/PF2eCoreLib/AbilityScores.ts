export interface AbilityScore {
    ability: string;
    amount: number;
}

export function GetAbilityModifier(
    ability: string,
    abilityScores: AbilityScore[]
): number {
    if (abilityScores.length <= 0) {
        return 0;
    }
    let abilityScore: number | undefined = abilityScores.find(
        (score) => score.ability === ability
    );
    const abilityModifier;
    return abilityModifier;
}
