import { Bonus } from "./Bonus";
import { ArmorCategory } from "./ArmorCategory";
import { ArmorGroup } from "./ArmorGroup";
import { Traits } from "./Traits";

export interface Armor {
    Name: string;
    Category: keyof ArmorCategory;
    Level: number;
    Price: Coins;
    ACBonus: number;
    DexCap: number;
    CheckPenalty: Bonus;
    SpeedPenalty: Bonus;
    StrengthRequirement: number;
    Bulk: number;
    WornBulk: number;
    Group: ArmorGroup;
    Traits: Traits[];
}
