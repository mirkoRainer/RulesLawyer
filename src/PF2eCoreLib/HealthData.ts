import { max } from "react-native-reanimated";

export interface HealthData {
    maxHitPoints:       number;
    currentHitPoints:   number;
    temporaryHitPoints: number;
    dying:     number;
    maxDying: number;
    wounded:   number;
}

export const ResolveHitPoints = (healthData: HealthData, hitPointDelta: number): HealthData  => {
    let newHealthData: HealthData = healthData;
    if (hitPointDelta === 0) {
        return newHealthData;
    }
    if (hitPointDelta > 0) {
        newHealthData = AddHitPoints(healthData, hitPointDelta);
    }
    if (hitPointDelta < 0) {
        newHealthData = SubtractHitPoints(healthData, hitPointDelta);
    }
    return newHealthData;
};

const AddHitPoints = (healthData: HealthData, heal: number): HealthData => {
    let newHealthData: HealthData = {...healthData};
    const currentHitPoints = newHealthData.currentHitPoints;
    const maxHitPoints = newHealthData.maxHitPoints;
    if (newHealthData.dying === 0) {
        newHealthData.currentHitPoints = IncreaseHP(currentHitPoints, maxHitPoints, heal);
        return newHealthData;
    }
    if (newHealthData.dying > 0 && currentHitPoints === 0) {
        newHealthData.dying = 0;
        newHealthData.wounded += 1;
        newHealthData.currentHitPoints = IncreaseHP(currentHitPoints, maxHitPoints, heal);
        return newHealthData;
    }
    return newHealthData;
};

const IncreaseHP = (current: number, max: number, heal: number) => {
    const healed = current + heal;
    return Math.min(max, healed);
};

const SubtractHitPoints = (healthData: HealthData, harm: number): HealthData => {

};

export const IncreaseDyingCondition = (healthData: HealthData, delta: number): HealthData => {

};

export const DecreaseDyingCondition = (healthData: HealthData, delta: number): HealthData => {

};

export const IncreaseWoundedCondition = (healthData: HealthData, delta: number): HealthData => {

};

export const DecreaseWoundedCondition = (healthData: HealthData, delta: number): HealthData => {

};