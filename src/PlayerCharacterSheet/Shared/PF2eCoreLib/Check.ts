import { Bonus } from "./Bonus";

export interface Check {
    Bonuses: Bonus[];
    AbilityModifier: number;
    Penalties: Bonus[];
}
