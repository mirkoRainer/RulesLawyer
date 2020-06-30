import { Dictionary } from "../Dictionary";
import { Proficiencies } from "./Proficiencies";
import { Ability } from "./Ability";

interface PcClass {
    Name: string;
    TypicalMembers: string;
    RolePlayingSuggestions: string;
    KeyAbilityScores: Ability[];
    HitPoints: number;
    Proficiencies: Dictionary<Proficiencies>;
    AdvancementTable: Dictionary<string[]>;
    ClassFeats: string[];
    NameOfSubClass: string;
    SubClass: string;
    SubClasses: string[];
}
