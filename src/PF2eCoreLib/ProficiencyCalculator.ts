import { Dictionary } from "../scenes/Shared/Misc/Dictionary";

export default class ProficiencyCalculator {
    proficiencies: Dictionary<number> = {
        untrained: 0,
        trained: 2,
        expert: 4,
        master: 6,
        legendary: 8,
    };
    calculateProficiencyBonus(proficiency: string, level: number): number {
        const proficiencyBonus: number = this.proficiencies[
            proficiency.toLowerCase()
        ];
        return proficiencyBonus + level;
    }
}
