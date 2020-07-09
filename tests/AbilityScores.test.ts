import {
    GetAbilityModifierFromScores,
    AbilityModifierWithName,
    AbilityScoreArray,
} from "../src/scenes/Shared/PF2eCoreLib/AbilityScores";

describe("Ability Scores", () => {
    describe("GetAbilityModifierFromScores", () => {
        it("appropriately calculates modifier based on score", () => {
            let abilityScores: AbilityScoreArray = {
                strength: { score: 12, ability: "strength" },
                dexterity: { score: 12, ability: "dexterity" },
                constitution: { score: 12, ability: "constitution" },
                intelligence: { score: 12, ability: "intelligence" },
                wisdom: { score: 12, ability: "wisdom" },
                charisma: { score: 12, ability: "charisma" },
            };
            let actual: AbilityModifierWithName = GetAbilityModifierFromScores(
                "strength",
                abilityScores
            );
            expect(actual.modifier).toBe(1);
            expect(actual.name).toBe("strength");
        });
        it("calculates the ability modifier for a requested Score", () => {
            let abilityScores: AbilityScoreArray = {
                strength: { score: 18, ability: "strength" },
                dexterity: { score: 12, ability: "dexterity" },
                constitution: { score: 12, ability: "constitution" },
                intelligence: { score: 12, ability: "intelligence" },
                wisdom: { score: 12, ability: "wisdom" },
                charisma: { score: 12, ability: "charisma" },
            };
            let actual: AbilityModifierWithName = GetAbilityModifierFromScores(
                "strength",
                abilityScores
            );
            expect(actual.modifier).toBe(4);
            expect(actual.name).toBe("strength");
        });
    });
});
