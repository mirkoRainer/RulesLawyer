import { Dictionary } from "./Dictionary";

export default class ProficiencyCalculator {
    proficiencies: Dictionary<number> = {
        untrained: 0,
        trained: 2,
        expert: 4,
        master: 6,
        legendary: 8,
    };
    calculateProficiencyBonus(proficiency: string, level: number) {
        return this.proficiencies[proficiency] + level;
    }
}
