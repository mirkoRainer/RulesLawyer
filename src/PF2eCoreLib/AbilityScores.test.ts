import {
    GetAbilityModifierFromScores,
    AbilityScoreArray,
    AbilityScore,
    UpdateAbilityScore,
} from "./AbilityScores";

describe("Ability Scores", () => {
    describe("GetAbilityModifierFromScores", () => {
        it("appropriately calculates modifier based on score", () => {
            let abilityScores: AbilityScoreArray = {
                Strength: { score: 12, ability: "Strength" },
                Dexterity: { score: 12, ability: "Dexterity" },
                Constitution: { score: 12, ability: "Constitution" },
                Intelligence: { score: 12, ability: "Intelligence" },
                Wisdom: { score: 12, ability: "Wisdom" },
                Charisma: { score: 12, ability: "Charisma" },
            };
            let actual: number = GetAbilityModifierFromScores(
                "Strength",
                abilityScores
            );
            expect(actual).toBe(1);
        });
        it("calculates the ability modifier for a requested Score", () => {
            let abilityScores: AbilityScoreArray = {
                Strength: { score: 18, ability: "Strength" },
                Dexterity: { score: 12, ability: "Dexterity" },
                Constitution: { score: 12, ability: "Constitution" },
                Intelligence: { score: 12, ability: "Intelligence" },
                Wisdom: { score: 12, ability: "Wisdom" },
                Charisma: { score: 12, ability: "Charisma" },
            };
            let actual: number = GetAbilityModifierFromScores(
                "Strength",
                abilityScores
            );
            expect(actual).toBe(4);
        });
    });
    describe("UpdateAbilityScore", () => {
        it("assigns the new ability score to the appropriate ability entry", () => {
            let abilityScores: AbilityScoreArray = {
                Strength: { score: 18, ability: "Strength" },
                Dexterity: { score: 12, ability: "Dexterity" },
                Constitution: { score: 12, ability: "Constitution" },
                Intelligence: { score: 12, ability: "Intelligence" },
                Wisdom: { score: 12, ability: "Wisdom" },
                Charisma: { score: 12, ability: "Charisma" },
            };
            let newAbility: AbilityScore = { score: 12, ability: "Strength" };
            abilityScores = UpdateAbilityScore(newAbility, abilityScores);
            expect(abilityScores.Strength).toBe(newAbility);
        });
    });
});
