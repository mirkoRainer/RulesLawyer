import { Ability } from "./Ability";
import { Language } from "./Language";
import { Traits } from "./Traits";

interface IAncestry {
    Name: string;
    HitPoints: number;
    Size: Size;
    Speed: number;
    AbilityBoosts: Ability[];
    AbilityFlaws: Ability[];
    Languages: Language[];
    Traits: (keyof typeof Traits)[];
    SpecialAbilities: string[];
}
