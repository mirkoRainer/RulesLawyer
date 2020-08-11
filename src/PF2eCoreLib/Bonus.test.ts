import { Bonus } from "./Bonus";
import { BonusType } from "./BonusTypes";
import { examplePlayerCharacter } from "../../examplePlayerCharacter";


describe("Bonus", () => {
    describe("GetBonusFor", () => {
        it("outputs bonus total by type", () => {
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
            const actual = Bonus.DetermineBonusTotal(bonuses);
            expect(actual).toStrictEqual({
                circumstance: expect.any(Number),
                status: expect.any(Number),
                item: expect.any(Number),
            });
        });
        it("outputs the highest bonus of one type and doesn't add them together", () => {
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
            const actual = Bonus.DetermineBonusTotal(bonuses);
            expect(actual).toStrictEqual({
                circumstance: 1,
                status: 3,
                item: 4,
            });
        });
        it("returns the highest number applied to the requested property for specificied type", () => {
            var actual = Bonus.GetBonusFor("classDc", BonusType.Item, examplePlayerCharacter.bonuses);
            expect(actual).toBe(3);
            actual = Bonus.GetBonusFor("nothing", BonusType.Circumstance, examplePlayerCharacter.bonuses);
            expect(actual).toBe(0);
        });
    });
});
