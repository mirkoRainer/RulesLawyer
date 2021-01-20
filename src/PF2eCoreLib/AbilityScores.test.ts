import { Ability } from "./Ability";
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
                Strength: { score: 12, ability: Ability.Strength },
                Dexterity: { score: 12, ability: Ability.Dexterity },
                Constitution: { score: 12, ability: Ability.Constitution },
                Intelligence: { score: 12, ability: Ability.Intelligence },
                Wisdom: { score: 12, ability: Ability.Wisdom },
                Charisma: { score: 12, ability: Ability.Charisma },
            };
            let actual: number = GetAbilityModifierFromScores(
                Ability.Strength,
                abilityScores
            );
            expect(actual).toBe(1);
        });
        it("calculates the ability modifier for a requested Score", () => {
            let abilityScores: AbilityScoreArray = {
                Strength: { score: 18, ability: Ability.Strength },
                Dexterity: { score: 12, ability: Ability.Dexterity },
                Constitution: { score: 12, ability: Ability.Constitution },
                Intelligence: { score: 12, ability: Ability.Intelligence },
                Wisdom: { score: 12, ability: Ability.Wisdom },
                Charisma: { score: 12, ability: Ability.Charisma },
            };
            let actual: number = GetAbilityModifierFromScores(
                Ability.Strength,
                abilityScores
            );
            expect(actual).toBe(4);
        });
    });
    describe("UpdateAbilityScore", () => {
        it("assigns the new ability score to the appropriate ability entry", () => {
            let abilityScores: AbilityScoreArray = {
                Strength: { score: 18, ability: Ability.Strength },
                Dexterity: { score: 12, ability: Ability.Dexterity },
                Constitution: { score: 12, ability: Ability.Constitution },
                Intelligence: { score: 12, ability: Ability.Intelligence },
                Wisdom: { score: 12, ability: Ability.Wisdom },
                Charisma: { score: 12, ability: Ability.Charisma },
            };
            let newAbility: AbilityScore = {
                score: 12,
                ability: Ability.Strength,
            };
            abilityScores = UpdateAbilityScore(newAbility, abilityScores);
            expect(abilityScores.Strength).toBe(newAbility);
        });
    });
});
