import { Proficiencies } from "../Proficiencies";
import { OtherWeaponProficiencies } from "./OtherWeaponProficiencies";

export interface WeaponProficiencies {
    Unarmed: Proficiencies;
    Simple: Proficiencies;
    Martial: Proficiencies;
    Other: OtherWeaponProficiencies[];
}
