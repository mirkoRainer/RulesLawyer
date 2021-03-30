import { iBonus } from "../Bonus";
import { Ability } from "../Ability";
import { WeaponProficiencies } from "./WeaponProficiencies";
import { DamageDice } from "./Dice";
import { Item, InventoryItem, DEFAULT_ITEM } from "./Inventory";
import { BonusType } from "../BonusTypes";

export interface Weapon extends Item {
    ability: Ability;
    toHitBonus: iBonus;
    damageDice: DamageDice[];
    damageAbilityModifier?: Ability;
    weaponCategory: keyof WeaponProficiencies;
}
export function IsWeapon(item: InventoryItem): item is Weapon {
    return (item as Weapon).damageDice !== undefined;
}

export const DEFAULT_WEAPON_ONLY_PROPS: Omit<Weapon, keyof Item> = {
    ability: Ability.Strength,
    toHitBonus: {
        type: BonusType.Item,
        appliesTo: "toHit",
        amount: 0,
        source: "",
    },
    damageDice: [{ formula: "1d4", damageType: "piercing, slashing" }],
    damageAbilityModifier: Ability.Strength,
    weaponCategory: "Simple",
};
export const DEFAULT_WEAPON: Weapon = {
    ...DEFAULT_ITEM,
    ...DEFAULT_WEAPON_ONLY_PROPS,
};
