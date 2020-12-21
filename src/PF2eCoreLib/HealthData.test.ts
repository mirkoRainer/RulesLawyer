import {
    HealthData,
    ResolveHitPoints,
    AdjustDyingCondition,
    AdjustWoundedCondition,
} from "./HealthData";

describe("HitPoints", () => {
    describe("ResolveHitPoints", () => {
        describe("AddHitPoints", () => {
            it("increases current hit points by given amount but doesn't exceed maximum hit points", () => {
                const mockHealthData: HealthData = {
                    maxHitPoints: 30,
                    currentHitPoints: 24,
                    temporaryHitPoints: 0,
                    maxDying: 4,
                    dying: 0,
                    wounded: 0,
                };

                expect(
                    ResolveHitPoints(mockHealthData, 3, true).currentHitPoints
                ).toBe(27);
                expect(
                    ResolveHitPoints(mockHealthData, 12, true).currentHitPoints
                ).toBe(30);
            });
            it("removes the dying condition and increases wounded condition by 1 if at 0 HP", () => {
                const mockHealthData: HealthData = {
                    maxHitPoints: 30,
                    currentHitPoints: 0,
                    temporaryHitPoints: 0,
                    maxDying: 4,
                    dying: 2,
                    wounded: 0,
                };
                expect(ResolveHitPoints(mockHealthData, 5, true).dying).toBe(0);
                expect(ResolveHitPoints(mockHealthData, 5, false).wounded).toBe(
                    1
                );
                expect(
                    ResolveHitPoints(mockHealthData, 5, true).currentHitPoints
                ).toBe(5);
            });
        });
        describe("SubtractHitPoints", () => {
            it("decreases current hit points by given amount but doesn't go below 0", () => {
                const mockHealthData: HealthData = {
                    maxHitPoints: 30,
                    currentHitPoints: 4,
                    temporaryHitPoints: 0,
                    maxDying: 4,
                    dying: 0,
                    wounded: 0,
                };

                expect(
                    ResolveHitPoints(mockHealthData, -3, true).currentHitPoints
                ).toBe(1);
                expect(
                    ResolveHitPoints(mockHealthData, -12, true).currentHitPoints
                ).toBe(0);
            });
            it("increases the dying value by 1 plus the wounded value if hit points go to 0", () => {
                const mockHealthData: HealthData = {
                    maxHitPoints: 30,
                    currentHitPoints: 4,
                    temporaryHitPoints: 0,
                    maxDying: 4,
                    dying: 0,
                    wounded: 0,
                };
                expect(ResolveHitPoints(mockHealthData, -4, true).dying).toBe(
                    1
                );
                const mockHealthDataWounded: HealthData = {
                    maxHitPoints: 30,
                    currentHitPoints: 4,
                    temporaryHitPoints: 0,
                    maxDying: 4,
                    dying: 0,
                    wounded: 2,
                };
                const actual = ResolveHitPoints(
                    mockHealthDataWounded,
                    -4,
                    true
                );
                expect(actual.dying).toBe(3);
            });
            it("removes temporary hit points before subtracting from normal hit points", () => {
                const mockHealthData: HealthData = {
                    maxHitPoints: 30,
                    currentHitPoints: 4,
                    temporaryHitPoints: 5,
                    maxDying: 4,
                    dying: 0,
                    wounded: 0,
                };
                const actualWithTempLeftover = ResolveHitPoints(
                    mockHealthData,
                    -4,
                    true
                );
                expect(actualWithTempLeftover.currentHitPoints).toBe(4);
                expect(actualWithTempLeftover.temporaryHitPoints).toBe(1);
                const actual = ResolveHitPoints(mockHealthData, -6, true);
                expect(actual.temporaryHitPoints).toBe(0);
                expect(actual.currentHitPoints).toBe(3);
            });
        });
    });
    describe("AdjustDyingCondition", () => {
        it("increases the dying condition by given amount but doesn't exceed maxDying", () => {
            const mockHealthData: HealthData = {
                maxHitPoints: 30,
                currentHitPoints: 4,
                temporaryHitPoints: 5,
                maxDying: 4,
                dying: 0,
                wounded: 0,
            };
            expect(AdjustDyingCondition(mockHealthData, 3).dying).toBe(3);
            expect(AdjustDyingCondition(mockHealthData, 5).dying).toBe(4);
        });
        it("decreases the dying condition by given amount but doesn't go below 0", () => {
            const mockHealthData: HealthData = {
                maxHitPoints: 30,
                currentHitPoints: 4,
                temporaryHitPoints: 5,
                maxDying: 4,
                dying: 3,
                wounded: 0,
            };
            expect(AdjustDyingCondition(mockHealthData, -2).dying).toBe(1);
            expect(AdjustDyingCondition(mockHealthData, -5).dying).toBe(0);
        });
    });
    describe("AdjustWoundedCondition", () => {
        it("increases the wounded condition by given amount but doesn't exceed maxDying", () => {
            const mockHealthData: HealthData = {
                maxHitPoints: 30,
                currentHitPoints: 4,
                temporaryHitPoints: 5,
                maxDying: 4,
                dying: 0,
                wounded: 0,
            };
            expect(AdjustWoundedCondition(mockHealthData, 3).wounded).toBe(3);
            expect(AdjustWoundedCondition(mockHealthData, 5).wounded).toBe(4);
        });
        it("decreases the wounded condition by given amount but doesn't go below 0", () => {
            const mockHealthData: HealthData = {
                maxHitPoints: 30,
                currentHitPoints: 4,
                temporaryHitPoints: 5,
                maxDying: 4,
                dying: 0,
                wounded: 3,
            };
            expect(AdjustWoundedCondition(mockHealthData, -2).wounded).toBe(1);
            expect(AdjustWoundedCondition(mockHealthData, -5).wounded).toBe(0);
        });
    });
});
