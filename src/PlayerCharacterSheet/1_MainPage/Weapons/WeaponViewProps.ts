import { Proficiencies } from "../../Shared/PF2eCoreLib/Proficiencies";
import WeaponProficiencies, { WeaponProficiencyProps } from "./WeaponProficiencies";

export interface WeaponViewProps {
    title: string;
    abilityModifier: number;
    proficiency: Proficiencies;
    itemBonus: number;
    damageDice: string;
    damageAbilityModifier: number;
    damageType: string;
    weaponTraits: string[];
}

export interface Weapon {
    title: string;
    ability: Ability;
    toHitBonus: number;
    damageDice: string;
    damageAbilityModifier: Ability;
    damageType: string;
    weaponTraits: string[];
}

export function GetProficiencyForWeapon(weapon: Weapon, proficiencies: WeaponProficiencyProps) : Proficiencies {
    //TODO!
    return Proficiencies.Trained;
}
