import { Proficiencies } from "../../../../../PF2eCoreLib/Proficiencies";
import {
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
        case "Others":
            proficiencies.Others.forEach((customProficiency) => {
                if (customProficiency.description === weapon.name) {
                    return customProficiency.proficiency;
                }
            });
            return Proficiencies.Untrained;
        default:
            return Proficiencies.Untrained;
    }
}

export function getWeaponsFromInventory(): string[] {
    const state = Store.getState();
    let weaponsInInventory: string[] = [];
    state.playerCharacter.weapons.forEach((weapon) => {
        weaponsInInventory.push(weapon.name);
    });
    return weaponsInInventory;
}
