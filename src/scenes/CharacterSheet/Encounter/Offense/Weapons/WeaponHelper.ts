import { Proficiencies } from "../../../../../PF2eCoreLib/Proficiencies";
import {
    IsWeapon,
    Weapon,
    WeaponProficiencies,
} from "../../../../../PF2eCoreLib/PlayerCharacter";
import Store from "../../../../../store/Store";

// TODO [$6021f0207b27d600084dbee5]: Write TESTS for WeaponHelper.ts!
export function GetProficiencyForWeapon(weapon: Weapon): Proficiencies {
    const state = Store.getState();
    const proficiencies = state.playerCharacter.weaponProficiencies;
    switch (weapon.weaponCategory) {
        case "Other":
            proficiencies.Other.forEach((customProficiency) => {
                // TODO [$6021f0207b27d600084dbee6]: Make Other weapon proficiency and weapon name not need to match
                // i.e.Currently you need to have +1 Shortsword as a weapon name and Other proficiency for it to match here.
                // This will be tricky.
                if (customProficiency.description === weapon.name) {
                    return customProficiency.proficiency;
                }
            });
            return Proficiencies.Untrained;
        case "Unarmed":
            return proficiencies.Unarmed;
        case "Simple":
            return proficiencies.Simple;
        case "Martial":
            return proficiencies.Martial;
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
