import { Bonus } from "./Bonus";
import { ArmorCategory } from "./ArmorCategory";
import { ArmorGroup } from "./ArmorGroup";

interface Armor {
    Name: string;
    Category: ArmorCategory;
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
