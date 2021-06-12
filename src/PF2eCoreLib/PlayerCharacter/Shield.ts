import { iBonus } from "../Bonus";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
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
    id: uuidv4(),
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
