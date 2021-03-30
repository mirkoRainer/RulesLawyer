import { iBonus } from "../Bonus";
import { Guid } from "guid-typescript";
import { BonusType } from "../BonusTypes";
import { Item, InventoryItem } from "./Inventory";

export interface Shield extends Item {
    acBonus: iBonus;
    hardness: number;
    maxHP: number;
    currentHP: number;
    breakThreshold: number;
    isRaised: boolean;
}
export function IsShield(item: InventoryItem): item is Shield {
    return (item as Shield).breakThreshold !== undefined;
}

export const DEFAULT_SHIELD: Shield = {
    id: Guid.create(),
    description: "Leather Armor made from leather",
    invested: false,
    worn: true,
    readied: false,
    name: "Shield McShieldFace",
    bulk: 1,
    level: 1,
    acBonus: {
        type: BonusType.Circumstance,
        appliesTo: "ac",
        amount: 0,
        source: "",
    },
    hardness: 5,
    maxHP: 20,
    currentHP: 15,
    breakThreshold: 10,
    traits: ["Additive", "Grapple"],
    isContainer: false,
    isRaised: false,
};
