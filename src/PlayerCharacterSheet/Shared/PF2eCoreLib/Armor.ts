import { Bonus } from "./Bonus";

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
    Group: ArmorGroup;
    Traits: Traits[];
}
