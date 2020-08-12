import { max } from "react-native-reanimated";

export interface HealthData {
    maxHitPoints:       number;
    currentHitPoints:   number;
    temporaryHitPoints: number;
    dying:     number;
    maxDying: number;
    wounded:   number;
}

export const ResolveHitPoints = (healthData: HealthData, hitPointDelta: number, removesWounded: boolean): HealthData  => {
    console.debug(`ResolveHitPoints with healtData:${JSON.stringify(healthData)} hitPointDelta: ${hitPointDelta} removesWounded: ${removesWounded}`);
    let newHealthData: HealthData = {...healthData};
    if (hitPointDelta > 0) {
        newHealthData = AddHitPoints(healthData, hitPointDelta);
    }
    if (hitPointDelta < 0) {
        newHealthData = SubtractHitPoints(healthData, hitPointDelta);
    }
    newHealthData = removesWounded ? { ...newHealthData, wounded: 0 } : newHealthData;
    return newHealthData;
};

const AddHitPoints = (healthData: HealthData, heal: number): HealthData => {
    let newHealthData: HealthData = {...healthData};
    const currentHitPoints = newHealthData.currentHitPoints;
    const maxHitPoints = newHealthData.maxHitPoints;
    if (healthData.dying === 0) {
        newHealthData.currentHitPoints = IncreaseHP(currentHitPoints, maxHitPoints, heal);
        return newHealthData;
    }
    if (healthData.dying > 0 && currentHitPoints === 0) {
        newHealthData.dying = 0;
        newHealthData.wounded += 1;
        newHealthData.currentHitPoints = IncreaseHP(currentHitPoints, maxHitPoints, heal);
        return newHealthData;
    }
    return newHealthData;
};

const IncreaseHP = (current: number, max: number, heal: number): number => {
    const healed = current + heal;
    return Math.min(max, healed);
};

const SubtractHitPoints = (healthData: HealthData, harm: number): HealthData => {
    const newHealthData = ResolveTemporaryHitPoints(healthData, harm);
    const currentHitPoints = newHealthData.currentHitPoints;
    if (healthData.dying > 0) {
        return {
            ...newHealthData,
            dying: AdjustDyingCondition(newHealthData, 1).dying
        };
    }
    if (healthData.dying === 0) {
        const newDying = AdjustDyingCondition(newHealthData, healthData.dying + healthData.wounded + 1).dying;
        if (newHealthData.temporaryHitPoints > 0) {
            return newHealthData;
        }
        return newHealthData.currentHitPoints === 0 ?  {...newHealthData, dying: newDying} : { ...newHealthData };
    }
    return newHealthData;
};

const ResolveTemporaryHitPoints = (healthData: HealthData, harm: number): HealthData => {
    if (harm >= 0) return healthData;
    if (healthData.temporaryHitPoints === 0) {
        return {
            ...healthData,
            currentHitPoints: DecreaseHP(healthData.currentHitPoints, harm)
        };
    }
    if (healthData.temporaryHitPoints > Math.abs(harm)) {
        const result = {
            ...healthData,
            temporaryHitPoints: healthData.temporaryHitPoints + harm
        };
        return result;
    }
    if (healthData.temporaryHitPoints < Math.abs(harm)) {
        const adjustedHarm = harm + healthData.temporaryHitPoints;
        return {
            ...healthData,
            temporaryHitPoints: 0,
            currentHitPoints: DecreaseHP(healthData.currentHitPoints, adjustedHarm)
        };
    }
    return healthData;
};

const DecreaseHP = (current: number, harm: number): number => {
    const harmed = current + harm;
    return Math.max(0, harmed);
};

export const AdjustDyingCondition = (healthData: HealthData, delta: number): HealthData => {
    if (healthData.dying + delta >= healthData.maxDying)
    {
        return {
            ...healthData,
            dying: healthData.maxDying
        };
    }
    if (healthData.dying + delta <= 0)
    {
        return {
            ...healthData,
            dying: 0
        };
    }
    return {
        ...healthData,
        dying: healthData.dying + delta
    };
};

export const AdjustWoundedCondition = (healthData: HealthData, delta: number): HealthData => {
    if (healthData.wounded + delta >= healthData.maxDying)
    {
        return {
            ...healthData,
            wounded: healthData.maxDying
        };
    }
    if (healthData.wounded + delta <= 0)
    {
        return {
            ...healthData,
            wounded: 0
        };
    }
    return {
        ...healthData,
        wounded: healthData.wounded + delta
    };
};
