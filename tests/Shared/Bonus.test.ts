import { DetermineBonusTotal } from "../../src/PlayerCharacterSheet/Shared/PF2eCoreLib/Bonus";
import { BonusType } from "../../src/PlayerCharacterSheet/Shared/PF2eCoreLib/BonusTypes";

describe(`Bonus`, () => {
    describe(`DetermineBonusTotal`, () => {
        it(`outputs bonus total by type`, () => {
            const bonuses = [
                { type: BonusType.Item, appliesTo: "spellAttack", amount: 1 },
                { type: BonusType.Item, appliesTo: "spellAttack", amount: 4 },
                { type: BonusType.Item, appliesTo: "spellAttack", amount: 2 },
                {
                    type: BonusType.Circumstance,
                    appliesTo: "spellAttack",
                    amount: 1,
                },
                {
                    type: BonusType.Circumstance,
                    appliesTo: "spellAttack",
                    amount: 1,
                },
                { type: BonusType.Status, appliesTo: "spellAttack", amount: 3 },
            ];
            const actual = DetermineBonusTotal(bonuses);
            expect(actual).toStrictEqual({
                circumstance: expect.any(Number),
                status: expect.any(Number),
                item: expect.any(Number),
            });
        });
        it(`outputs the highest bonus of one type and doesn't add them together`, () => {
            const bonuses = [
                { type: BonusType.Item, appliesTo: "spellAttack", amount: 1 },
                { type: BonusType.Item, appliesTo: "spellAttack", amount: 4 },
                { type: BonusType.Item, appliesTo: "spellAttack", amount: 2 },
                {
                    type: BonusType.Circumstance,
                    appliesTo: "spellAttack",
                    amount: 1,
                },
                {
                    type: BonusType.Circumstance,
                    appliesTo: "spellAttack",
                    amount: 1,
                },
                { type: BonusType.Status, appliesTo: "spellAttack", amount: 3 },
                { type: BonusType.Status, appliesTo: "spellAttack", amount: 2 },
            ];
            const actual = DetermineBonusTotal(bonuses);
            expect(actual).toStrictEqual({
                circumstance: 1,
                status: 3,
                item: 4,
            });
        });
    });
});
