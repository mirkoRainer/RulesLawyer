import {
    AbilityScore,
    GetAbilityModifierFromScores,
    AbilityModifierWithName,
} from "../src/PlayerCharacterSheet/Shared/PF2eCoreLib/AbilityScores";
import { Ability } from "../src/PlayerCharacterSheet/Shared/PF2eCoreLib/Ability";

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
            let actual: AbilityModifierWithName = GetAbilityModifierFromScores(
                Ability.Strength,
                abilityScores
            );
            expect(actual.modifier).toBe(1);
            expect(actual.name).toBe("Strength");
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
            let actual: AbilityModifierWithName = GetAbilityModifierFromScores(
                Ability.Strength,
                abilityScores
            );
            expect(actual.modifier).toBe(4);
            expect(actual.name).toBe("Strength");
        });
    });
});
