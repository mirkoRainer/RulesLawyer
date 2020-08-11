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
    
    return newHealthData;
};

const AddHitPoints = (healthData: HealthData, heal: number): HealthData => {
    
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