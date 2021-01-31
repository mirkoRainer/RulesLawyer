import { Bonus, iBonus } from "./Bonus";
import { BonusType } from "./BonusTypes";
import { examplePlayerCharacter } from "../../examplePlayerCharacter";

describe("Bonus", () => {
    describe("GetBonusFor", () => {
        it("outputs bonus total by type", () => {
            const bonuses: iBonus[] = [
                {
                    type: BonusType.Item,
                    appliesTo: "spellAttack",
                    amount: 1,
                    source: "",
                },
                {
                    type: BonusType.Item,
                    appliesTo: "spellAttack",
                    amount: 4,
                    source: "",
                },
                {
                    type: BonusType.Item,
                    appliesTo: "spellAttack",
                    amount: 2,
                    source: "",
                },
                {
                    type: BonusType.Circumstance,
                    appliesTo: "spellAttack",
                    amount: 1,
                    source: "",
                },
                {
                    type: BonusType.Circumstance,
                    appliesTo: "spellAttack",
                    amount: 1,
                    source: "",
                },
                {
                    type: BonusType.Status,
                    appliesTo: "spellAttack",
                    amount: 3,
                    source: "",
                },
            ];
            const actual = Bonus.DetermineBonusTotal(bonuses);
            expect(actual).toStrictEqual({
                circumstance: expect.any(Number),
                status: expect.any(Number),
                item: expect.any(Number),
            });
        });
        it("outputs the highest bonus of one type and doesn't add them together", () => {
            const bonuses: iBonus[] = [
                {
                    type: BonusType.Item,
                    appliesTo: "spellAttack",
                    amount: 1,
                    source: "",
                },
                {
                    type: BonusType.Item,
                    appliesTo: "spellAttack",
                    amount: 4,
                    source: "",
                },
                {
                    type: BonusType.Item,
                    appliesTo: "spellAttack",
                    amount: 2,
                    source: "",
                },
                {
                    type: BonusType.Circumstance,
                    appliesTo: "spellAttack",
                    amount: 1,
                    source: "",
                },
                {
                    type: BonusType.Circumstance,
                    appliesTo: "spellAttack",
                    amount: 1,
                    source: "",
                },
                {
                    type: BonusType.Status,
                    appliesTo: "spellAttack",
                    amount: 3,
                    source: "",
                },
                {
                    type: BonusType.Status,
                    appliesTo: "spellAttack",
                    amount: 2,
                    source: "",
                },
            ];
            const actual = Bonus.DetermineBonusTotal(bonuses);
            expect(actual).toStrictEqual({
                circumstance: 1,
                status: 3,
                item: 4,
            });
        });
        it("returns the highest number applied to the requested property for specified type", () => {
            var actual = Bonus.GetBonusFor(
                "classDc",
                BonusType.Item,
                examplePlayerCharacter.bonuses
            );
            expect(actual).toBe(3);
            actual = Bonus.GetBonusFor(
                "nothing",
                BonusType.Circumstance,
                examplePlayerCharacter.bonuses
            );
            expect(actual).toBe(0);
        });
    });
});
