import { Proficiencies } from "../../Shared/PF2eCoreLib/Proficiencies";

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
