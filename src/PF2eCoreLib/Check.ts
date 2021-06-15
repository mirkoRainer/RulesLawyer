import { GetBonusesTotal, iBonus } from "./Bonus";

export interface Check {
    Bonuses: iBonus[];
    AbilityModifier: number;
    Penalties: iBonus[];
}

export enum CheckOutcome {
    CriticalSuccess = "Critical Success",
    Success = "Success",
    Failure = "Failure",
    CriticalFailure = "Critical Failure",
}

function MakeCheck(
    modifiers: number[],
    bonuses: iBonus[],
    penalties: iBonus[],
    checkType: string,
    difficultyClass: number
): CheckOutcome {
    const applicableBonusesTotal = GetBonusesTotal(checkType, bonuses);
    const applicablePenaltiesTotal = GetBonusesTotal(checkType, penalties);
    const dieRoll = RollD(20);
    const modifiersTotal = modifiers.reduce((a, b) => a + b);
    const calculatedResult =
        modifiersTotal +
        dieRoll +
        applicableBonusesTotal +
        applicablePenaltiesTotal;
    return DetermineOutcome(calculatedResult, difficultyClass, dieRoll);
}

function RollD(numberOfSides: number): number {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * numberOfSides);
}

function DetermineOutcome(
    checkTotal: number,
    difficultyClass: number,
    dieRoll: number
): CheckOutcome {
    const isSuccess = checkTotal >= difficultyClass;
    return DetermineCritical(checkTotal, difficultyClass, isSuccess, dieRoll);
}

function DetermineCritical(
    checkTotal: number,
    difficultyClass: number,
    isSuccess: boolean,
    dieRoll: number
): CheckOutcome {
    const difference = isSuccess
        ? checkTotal - difficultyClass // Are we 10 higher?
        : difficultyClass - checkTotal; // Are we 10 lower?
    const isCritical = difference >= 10;
    return AccountFor20Or1onDie(isSuccess, isCritical, dieRoll);
}

function AccountFor20Or1onDie(
    isSuccess: boolean,
    isCritical: boolean,
    dieRoll: number
): CheckOutcome {
    if (dieRoll === 1) {
        return DowngradeResult(isSuccess, isCritical);
    } else if (dieRoll === 20) {
        return UpgradeResult(isSuccess, isCritical);
    } else {
        return DetermineFinalCheckOutcome(isSuccess, isCritical);
    }
}

function DetermineFinalCheckOutcome(
    isSuccess: boolean,
    isCritical: boolean
): CheckOutcome {
    if (isSuccess) {
        if (isCritical) {
            return CheckOutcome.CriticalSuccess;
        }
        return CheckOutcome.Success;
    } else {
        if (isCritical) {
            return CheckOutcome.CriticalFailure;
        }
        return CheckOutcome.Failure;
    }
}

function DowngradeResult(
    isSuccess: boolean,
    isCritical: boolean
): CheckOutcome {
    if (isSuccess && isCritical) {
        // Critical Success becomes a Success
        return CheckOutcome.Success;
    }
    if (isSuccess && !isCritical) {
        // Success becomes Failure
        return CheckOutcome.Failure;
    }
    // Critical Failure remains a Critical Failure
    // Failure becomes Critical Failure
    // So output is the same
    return CheckOutcome.CriticalFailure;
}

function UpgradeResult(isSuccess: boolean, isCritical: boolean): CheckOutcome {
    if (!isSuccess && isCritical) {
        // Critical Failure becomes a Failure
        return CheckOutcome.Failure;
    }
    if (!isSuccess && !isCritical) {
        // Failure becomes Success
        return CheckOutcome.Success;
    }
    // Critical Success remains a Critical Success
    // Success becomes Critical Success
    // So output is the same
    return CheckOutcome.CriticalSuccess;
}
