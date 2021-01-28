import { Proficiencies } from "../../../../../PF2eCoreLib/Proficiencies";
import {
    IsWeapon,
    Weapon,
    WeaponProficiencies,
} from "../../../../../PF2eCoreLib/PlayerCharacter";
import Store from "../../../../../store/Store";

export function GetProficiencyForWeapon(weapon: Weapon): Proficiencies {
    const state = Store.getState();
    const proficiencies = state.playerCharacter.weaponProficiencies;
    switch (weapon.weaponCategory) {
        case "Unarmed":
            return proficiencies.Unarmed;
        case "Simple":
            return proficiencies.Simple;
        case "Martial":
            return proficiencies.Martial;
        case "Other":
            proficiencies.Other.forEach((customProficiency) => {
                if (customProficiency.description === weapon.name) {
                    return customProficiency.proficiency;
                }
            });
            return Proficiencies.Untrained;
        default:
            return Proficiencies.Untrained;
    }
}

export function CurrentPCWeaponProficiencies(): WeaponProficiencies {
    const state = Store.getState();
    return state.playerCharacter.weaponProficiencies;
}

export function getWeaponsFromInventory(): string[] {
    const state = Store.getState();
    let weaponsInInventory: string[] = [];
    const weapons: Weapon[] = state.playerCharacter.inventory.items.filter<Weapon>(
        IsWeapon
    );
    weapons.forEach((weapon) => {
        weaponsInInventory.push(weapon.name);
    });
    return weaponsInInventory;
}
