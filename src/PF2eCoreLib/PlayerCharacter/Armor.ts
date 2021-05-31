import { iBonus } from "../Bonus";
import { ArmorCategory } from "../ArmorCategory";
import { ArmorGroup } from "../ArmorGroup";
import { Guid } from "guid-typescript";
import { BonusType } from "../BonusTypes";
import { Price } from "./Price";
import { Item, InventoryItem } from "./Inventory";

export interface Armor extends Item {
    category: ArmorCategory;
    acBonus: iBonus;
    dexCap: number;
    checkPenalty: iBonus;
    speedPenalty: iBonus;
    strengthRequirement: number;
    wornBulk: number;
    armorGroup: ArmorGroup;
    price: Price;
}
export function IsArmor(item: InventoryItem): item is Armor {
    return (item as Armor).dexCap !== undefined;
}
export const DEFAULT_ARMOR_ONLY_PROPS: Omit<Armor, keyof Item> = {
    category: ArmorCategory.Unarmored,
    acBonus: {
        type: BonusType.Item,
        appliesTo: "ac",
        amount: 0,
        source: "",
    },
    dexCap: 6,
    checkPenalty: {
        type: BonusType.Untyped,
        appliesTo: "skills",
        amount: 0,
        source: "",
    },
    speedPenalty: {
        type: BonusType.Untyped,
        appliesTo: "speed",
        amount: 0,
        source: "",
    },
    strengthRequirement: 0,
    wornBulk: 0,
    armorGroup: ArmorGroup.Clothing,
};
export const DEFAULT_COMPANION_ARMOR: Armor = {
    id: Guid.create(),
    description: "Fur, feathers, or scales",
    invested: false,
    worn: true,
    readied: false,
    name: "Fur, Feathers, or Scales",
    category: ArmorCategory.Unarmored,
    level: 0,
    price: { Copper: 0, Silver: 0, Gold: 0, Platinum: 0 },
    acBonus: {
        type: BonusType.Item,
        appliesTo: "ac",
        amount: 0,
        source: "",
    },
    dexCap: 10,
    checkPenalty: {
        type: BonusType.Armor,
        appliesTo: "StrAndDexChecks",
        amount: 0,
        source: "",
    },
    speedPenalty: {
        type: BonusType.Armor,
        appliesTo: "speed",
        amount: 0,
        source: "",
    },
    strengthRequirement: 0,
    bulk: 0,
    wornBulk: 0,
    armorGroup: ArmorGroup.Clothing,
    traits: [],
    isContainer: false,
};
export const DEFAULT_ARMOR: Armor = {
    id: Guid.create(),
    description: "Plain clothing offering no real protection",
    invested: false,
    worn: false,
    readied: false,
    name: "Unarmored",
    category: ArmorCategory.Light,
    level: 0,
    price: { Copper: 0, Silver: 0, Gold: 0, Platinum: 0 },
    acBonus: {
        type: BonusType.Item,
        appliesTo: "ac",
        amount: 0,
        source: "",
    },
    dexCap: 10,
    checkPenalty: {
        type: BonusType.Armor,
        appliesTo: "StrAndDexChecks",
        amount: 0,
        source: "",
    },
    speedPenalty: {
        type: BonusType.Armor,
        appliesTo: "speed",
        amount: 0,
        source: "",
    },
    strengthRequirement: 0,
    bulk: 0.1,
    wornBulk: 0,
    armorGroup: ArmorGroup.Clothing,
    traits: [],
    isContainer: false,
};
