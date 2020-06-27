import {
    AbilityScore,
    GetAbilityModifierFromScores,
    AbilityModifierWithName,
    AbilityScoreArray,
} from "../src/PlayerCharacterSheet/Shared/PF2eCoreLib/AbilityScores";
import { Ability } from "../src/PlayerCharacterSheet/Shared/PF2eCoreLib/Ability";

describe("Ability Scores", () => {
    describe("GetAbilityModifierFromScores", () => {
        it("appropriately calculates modifier based on score", () => {
            let abilityScores: AbilityScoreArray = {
                strength: { score: 12, ability: Ability.Strength },
                dexterity: { score: 12, ability: Ability.Dexterity },
                constitution: { score: 12, ability: Ability.Constitution },
                intelligence: { score: 12, ability: Ability.Intelligence },
                wisdom: { score: 12, ability: Ability.Wisdom },
                charisma: { score: 12, ability: Ability.Charisma },
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
                strength: { score: 18, ability: Ability.Strength },
                dexterity: { score: 12, ability: Ability.Dexterity },
                constitution: { score: 12, ability: Ability.Constitution },
                intelligence: { score: 12, ability: Ability.Intelligence },
                wisdom: { score: 12, ability: Ability.Wisdom },
                charisma: { score: 12, ability: Ability.Charisma },
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
