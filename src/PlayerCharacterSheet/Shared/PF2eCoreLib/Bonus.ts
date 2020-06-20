import { BonusType } from "./BonusTypes";
import { prop } from "./TypescriptEvolution";

export interface iBonus {
    type: BonusType;
    appliesTo: string;
    amount: number;
}

interface BonusesByType {
    circumstance: number;
    status: number;
    item: number;
}
export class Bonus {
    static DetermineBonusTotal(bonuses: iBonus[]): BonusesByType {
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

    static GetBonusFor(
        bonusFor: string,
        type: BonusType,
        bonuses: iBonus[]
    ): number {
        const bonusesFor = bonuses.filter(
            (bonus) => bonus.appliesTo.toLowerCase() === bonusFor.toLowerCase()
        );
        if (bonusesFor.length === 0) return 0; 
        const bonusByType = Bonus.DetermineBonusTotal(bonusesFor);
        let output: number;
        switch (type) {
        case BonusType.Item: {
            output = prop(bonusByType, "item");
            break;
        }
        case BonusType.Circumstance: {
            output = prop(bonusByType, "circumstance");
            break;
        }
        case BonusType.Status: {
            output = prop(bonusByType, "status");
            break;
        }
        default: {
            output = 0;
        }
        }
        return output;
    }
}
