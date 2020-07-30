import { Proficiencies } from "../../../../../PF2eCoreLib/Proficiencies";
import { Ability } from "../../../../../PF2eCoreLib/Ability";
import { Weapon, WeaponProficiencies } from "../../../../../PF2eCoreLib/PlayerCharacter";
import { AbilityScore } from "../../../../../PF2eCoreLib/AbilityScores";


export interface WeaponViewProps {
    title: string;
    abilityModifier: AbilityScore;
    proficiency: Proficiencies;
    itemBonus: number;
    damageDice: string;
    damageAbilityModifier: number;
    damageType: string;
    weaponTraits: string;
}

export function GetProficiencyForWeapon(weapon: Weapon, proficiencies: WeaponProficiencies) : Proficiencies {
    //TODO!
    return Proficiencies.Trained;
}
