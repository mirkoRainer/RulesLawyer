import { BonusType } from "./BonusTypes";

export interface Bonus {
    type: BonusType;
    appliesTo: string;
    amount: number;
}

interface BonusesByType {
    circumstance: number;
    status: number;
    item: number;
}

function DetermineBonusTotal(bonuses: Bonus[]): BonusesByType {
    const output = { circumstance: 0, status: 0, item: 0 };
    // Find all bonuses of one type
    const circumstanceBonuses = bonuses.filter(
        (bonus) => bonus.type === BonusType.Circumstance
    );
    // Grab the highest bonus of that type
    output.circumstance = Math.max.apply(
        Math,
        circumstanceBonuses.map((bonus) => bonus.amount)
    );
    const statusBonuses = bonuses.filter(
        (bonus) => bonus.type === BonusType.Status
    );
    output.status = Math.max.apply(
        Math,
        statusBonuses.map((bonus) => bonus.amount)
    );
    const itemBonuses = bonuses.filter(
        (bonus) => bonus.type === BonusType.Item
    );
    output.item = Math.max.apply(
        Math,
        itemBonuses.map((bonus) => bonus.amount)
    );
    return output;
}

export function GetBonusFor(
    bonusFor: string,
    type: BonusType,
    bonuses: Bonus[]
): number {
    const bonusesFor = bonuses.filter((bonus) => bonus.appliesTo === bonusFor);
    const bonusByType = DetermineBonusTotal(bonusesFor);
    return prop(bonusByType, type);
}
