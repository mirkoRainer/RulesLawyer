import ProficiencyCalculator from "../src/PlayerCharacterSheet/Shared/ProficiencyCalculator";

describe(`ProficiencyCalculator`, () => {
    describe(`calculateProficiencyBonus`, () => {
        it(`Should return 1 for Untrained at Level 1`, () => {
            const calculator = new ProficiencyCalculator();
            const result: number = calculator.calculateProficiencyBonus(
                "Untrained",
                1
            );
            expect(result).toBe(1);
        });
        it(`Should return 2 for Untrained at Level 2`, () => {
            const calculator = new ProficiencyCalculator();
            const result: number = calculator.calculateProficiencyBonus(
                "Untrained",
                2
            );
            expect(result).toBe<number>(2);
        });
        it(`Should return 3 for Trained at Level 1`, () => {
            const calculator = new ProficiencyCalculator();
            const result: number = calculator.calculateProficiencyBonus(
                "Trained",
                1
            );
            expect(result).toBe(3);
        });
        it(`Should return 5 for Trained at Level 2`, () => {
            const calculator = new ProficiencyCalculator();
            const result: number = calculator.calculateProficiencyBonus(
                "Trained",
                2
            );
            expect(result).toBe(4);
        });
        it(`Should return 5 for Expert at Level 1`, () => {
            const calculator = new ProficiencyCalculator();
            const result: number = calculator.calculateProficiencyBonus(
                "Expert",
                1
            );
            expect(result).toBe(5);
        });
        it(`Should return 6 for Expert at Level 2`, () => {
            const calculator = new ProficiencyCalculator();
            const result: number = calculator.calculateProficiencyBonus(
                "Expert",
                2
            );
            expect(result).toBe(6);
        });
        it(`Should return 7 for Master at Level 1`, () => {
            const calculator = new ProficiencyCalculator();
            const result: number = calculator.calculateProficiencyBonus(
                "Master",
                1
            );
            expect(result).toBe(7);
        });
        it(`Should return 8 for Master at Level 2`, () => {
            const calculator = new ProficiencyCalculator();
            const result: number = calculator.calculateProficiencyBonus(
                "Master",
                2
            );
            expect(result).toBe(8);
        });
        it(`Should return 9 for Legendary at Level 1`, () => {
            const calculator = new ProficiencyCalculator();
            const result: number = calculator.calculateProficiencyBonus(
                "Legendary",
                1
            );
            expect(result).toBe(9);
        });
        it(`Should return 10 for Legendeary at Level 2`, () => {
            const calculator = new ProficiencyCalculator();
            const result: number = calculator.calculateProficiencyBonus(
                "Legendary",
                2
            );
            expect(result).toBe(10);
        });
    });
});
