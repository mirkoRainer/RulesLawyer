import ProficiencyCalculator from "../../src/PlayerCharacterSheet/Shared/ProficiencyCalculator";

describe(`ProficiencyCalculator`, () => {
    describe(`calculateProficiencyBonus`, () => {
        it(`Should return 1 for Untrained at Level 1`, () => {
            const calculator = new ProficiencyCalculator();
            expect(calculator.calculateProficiencyBonus("Untrained", 1)).toBe(
                1
            );
        });
        it(`Should return 2 for Untrained at Level 2`, () => {
            const calculator = new ProficiencyCalculator();
            expect(calculator.calculateProficiencyBonus("Untrained", 2)).toBe(
                2
            );
        });
        it(`Should return 3 for Trained at Level 1`, () => {
            const calculator = new ProficiencyCalculator();
            expect(calculator.calculateProficiencyBonus("Untrained", 2)).toBe(
                3
            );
        });
        it(`Should return 5 for Trained at Level 2`, () => {
            const calculator = new ProficiencyCalculator();
            expect(calculator.calculateProficiencyBonus("Untrained", 2)).toBe(
                5
            );
        });
        it(`Should return 5 for Expert at Level 1`, () => {
            const calculator = new ProficiencyCalculator();
            expect(calculator.calculateProficiencyBonus("Untrained", 2)).toBe(
                5
            );
        });
        it(`Should return 6 for Expert at Level 2`, () => {
            const calculator = new ProficiencyCalculator();
            expect(calculator.calculateProficiencyBonus("Untrained", 2)).toBe(
                6
            );
        });
        it(`Should return 7 for Master at Level 1`, () => {
            const calculator = new ProficiencyCalculator();
            expect(calculator.calculateProficiencyBonus("Untrained", 2)).toBe(
                7
            );
        });
        it(`Should return 8 for Master at Level 2`, () => {
            const calculator = new ProficiencyCalculator();
            expect(calculator.calculateProficiencyBonus("Untrained", 2)).toBe(
                8
            );
        });
        it(`Should return 9 for Legendary at Level 1`, () => {
            const calculator = new ProficiencyCalculator();
            expect(calculator.calculateProficiencyBonus("Untrained", 2)).toBe(
                9
            );
        });
        it(`Should return 10 for Legendeary at Level 2`, () => {
            const calculator = new ProficiencyCalculator();
            expect(calculator.calculateProficiencyBonus("Untrained", 2)).toBe(
                10
            );
        });
    });
});
