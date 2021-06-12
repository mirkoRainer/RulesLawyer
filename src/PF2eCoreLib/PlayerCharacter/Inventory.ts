import { Traits } from "../Traits";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { Shield } from "./Shield";
import { Weapon } from "./Weapon";
import { Armor } from "./Armor";
import { Price } from "./Price";

export interface Inventory {
    items: InventoryItem[];
}
export type InventoryItem = Item &
    Partial<Weapon> &
    Partial<Armor> &
    Partial<Shield>;

export interface Item {
    bulk: number;
    description: string;
    id: string;
    invested: boolean;
    isContainer: boolean;
    containedItems?: string[];
    level: number;
    name: string;
    price?: Price;
    quantity?: number;
    readied: boolean;
    traits: (keyof typeof Traits)[];
    worn: boolean;
    rarity?: "uncommon" | "rare" | "unique";
}
export const DEFAULT_ITEM: Item = {
    bulk: 0,
    description: "The default item",
    id: uuidv4(),
    invested: false,
    isContainer: false,
    level: 0,
    name: "Default item",
    readied: false,
    traits: [],
    worn: false,
};

export function IsWorn(item: InventoryItem): boolean {
    return item.worn === true;
}
