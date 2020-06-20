import {
    AbilityScore,
    GetAbilityModifierFromScores,
} from "../src/PlayerCharacterSheet/Shared/PF2eCoreLib/AbilityScores";

describe("Ability Scores", () => {
    describe("GetAbilityModifierFromScores", () => {
        it("appropriately calculates modifier based on score", () => {
            let abilityScores: AbilityScore[] = [
                { amount: 12, ability: Ability.Strength },
                { amount: 12, ability: Ability.Dexterity },
                { amount: 12, ability: Ability.Constitution },
                { amount: 12, ability: Ability.Intelligence },
                { amount: 12, ability: Ability.Wisdom },
                { amount: 12, ability: Ability.Charisma },
            ];
            let actual: number = GetAbilityModifierFromScores(
                Ability.Strength,
                abilityScores
            );
            expect(actual).toBe(1);
        });
        it("calculates the ability modifier for a requested Score", () => {
            let abilityScores: AbilityScore[] = [
                { amount: 18, ability: Ability.Strength },
                { amount: 12, ability: Ability.Dexterity },
                { amount: 12, ability: Ability.Constitution },
                { amount: 12, ability: Ability.Intelligence },
                { amount: 12, ability: Ability.Wisdom },
                { amount: 12, ability: Ability.Charisma },
            ];
            let actual: number = GetAbilityModifierFromScores(
                Ability.Strength,
                abilityScores
            );
            expect(actual).toBe(4);
        });
    });
});
