import { AbilityModifierWithName } from "../../../../Shared/PF2eCoreLib/AbilityScores";
import { Proficiencies } from "../../../../Shared/PF2eCoreLib/Proficiencies";
import { Ability } from "../../../../Shared/PF2eCoreLib/Ability";
import { WeaponProficiencyProps } from "./WeaponProficienciesView";
import { Weapon } from "../../../../Shared/PF2eCoreLib/PlayerCharacter";


export interface WeaponViewProps {
    title: string;
    abilityModifier: AbilityModifierWithName;
    proficiency: Proficiencies;
    itemBonus: number;
    damageDice: string;
    damageAbilityModifier: number;
    damageType: string;
    weaponTraits: string;
}

export function GetProficiencyForWeapon(weapon: Weapon, proficiencies: WeaponProficiencyProps) : Proficiencies {
    //TODO!
    return Proficiencies.Trained;
}
