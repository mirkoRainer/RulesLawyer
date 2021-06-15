import { BonusType } from "./BonusTypes";
import { prop } from "./TypescriptEvolution";
import Store from "../store/Store";

export interface iBonus {
    type: BonusType;
    appliesTo: string;
    amount: number;
    source: string;
}

export const GetCompanionBonuses = (index: number): iBonus[] => {
    return Store.getState().playerCharacter.companions[index]
        ? Store.getState().playerCharacter.companions[index].bonuses
        : [];
};

export const GetCurrentPCBonuses = (): iBonus[] => {
    return Store.getState().playerCharacter.bonuses;
};

export interface BonusesByType {
    circumstance: number;
    status: number;
    item: number;
}

export const DetermineBonusTotal = (bonuses: iBonus[]): BonusesByType => {
    // Find all bonuses of one type
    const circumstanceBonuses = bonuses.filter(
        (bonus) => bonus.type === BonusType.Circumstance
    );
    const statusBonuses = bonuses.filter(
        (bonus) => bonus.type === BonusType.Status
    );
    const itemBonuses = bonuses.filter(
        (bonus) => bonus.type === BonusType.Item
    );
    const output = {
        circumstance:
            circumstanceBonuses.length === 0
                ? 0
                : Math.max.apply(
                      // Find the highest iBonus based on the amount property
                      Math,
                      circumstanceBonuses.map((bonus) => bonus.amount)
                  ),
        status:
            statusBonuses.length === 0
                ? 0
                : Math.max.apply(
                      Math,
                      statusBonuses.map((bonus) => bonus.amount)
                  ),
        item:
            itemBonuses.length === 0
                ? 0
                : Math.max.apply(
                      Math,
                      itemBonuses.map((bonus) => bonus.amount)
                  ),
    };
    return output;
};

export const DetermineBonusTotalBlog = (bonuses: iBonus[]): number => {
    // Find all bonuses of one type
    const circumstanceBonuses = bonuses.filter(
        (bonus) => bonus.type === BonusType.Circumstance
    );
    const statusBonuses = bonuses.filter(
        (bonus) => bonus.type === BonusType.Status
    );
    const itemBonuses = bonuses.filter(
        (bonus) => bonus.type === BonusType.Item
    );
    const circumstance =
        circumstanceBonuses.length === 0
            ? 0
            : Math.max.apply(
                  // Find the highest iBonus based on the amount property
                  Math,
                  circumstanceBonuses.map((bonus) => bonus.amount)
              );
    const status =
        statusBonuses.length === 0
            ? 0
            : Math.max.apply(
                  Math,
                  statusBonuses.map((bonus) => bonus.amount)
              );
    const item =
        itemBonuses.length === 0
            ? 0
            : Math.max.apply(
                  Math,
                  itemBonuses.map((bonus) => bonus.amount)
              );

    return circumstance + status + item;
};

export const GetBonusesFor = (
    bonusFor: string,
    bonuses: iBonus[]
): BonusesByType => {
    const bonusesFor = bonuses.filter(
        (bonus) => bonus.appliesTo.toLowerCase() === bonusFor.toLowerCase()
    );
    if (bonusesFor.length === 0) return { circumstance: 0, status: 0, item: 0 };
    const bonusByType = DetermineBonusTotal(bonusesFor);
    return bonusByType;
};

export const GetBonusesTotal = (
    bonusFor: string,
    bonuses: iBonus[]
): number => {
    const bonusesFor = bonuses.filter(
        (bonus) => bonus.appliesTo.toLowerCase() === bonusFor.toLowerCase()
    );
    if (bonusesFor.length === 0) return 0;
    const bonusTotal = DetermineBonusTotalBlog(bonusesFor);
    return bonusTotal;
};
