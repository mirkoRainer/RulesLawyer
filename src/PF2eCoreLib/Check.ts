import { iBonus } from "./Bonus";

export interface Check {
    Bonuses: iBonus[];
    AbilityModifier: number;
    Penalties: iBonus[];
}
