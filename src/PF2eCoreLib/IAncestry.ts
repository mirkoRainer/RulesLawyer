import { Ability } from "./Ability";
import { Traits } from "./Traits";

interface IAncestry {
    Name: string;
    HitPoints: number;
    Size: Size;
    Speed: number;
    AbilityBoosts: Ability[];
    AbilityFlaws: Ability[];
    Languages: Language[];
    Traits: Traits[];
    SpecialAbilities: string[];
}
