import {
    AbilityScore,
    GetAbilityModifierFromScores,
} from "../src/PlayerCharacterSheet/Shared/PF2eCoreLib/AbilityScores";

describe(`Ability Scores`, () => {
    describe(`GetAbilityModifierFromScores`, () => {
        it(`appropriately calculates modifier based on score`, () => {
            let abilityScores: AbilityScore[] = [
                { amount: 12, ability: "Strength" },
                { amount: 12, ability: "Dexterity" },
                { amount: 12, ability: "Constitution" },
                { amount: 12, ability: "Intelligence" },
                { amount: 12, ability: "Wisdom" },
                { amount: 12, ability: "Charisma" },
            ];
            let actual: number = GetAbilityModifierFromScores(
                "Strength",
                abilityScores
            );
            expect(actual).toBe(1);
        });
        it(`looks up the given ability modifier`, () => {
            let abilityScores: AbilityScore[] = [
                { amount: 18, ability: "Strength" },
                { amount: 12, ability: "Dexterity" },
                { amount: 12, ability: "Constitution" },
                { amount: 12, ability: "Intelligence" },
                { amount: 12, ability: "Wisdom" },
                { amount: 12, ability: "Charisma" },
            ];
            let actual: number = GetAbilityModifierFromScores(
                "Strength",
                abilityScores
            );
            expect(actual).toBe(4);
        });
    });
});
