import { Check } from "./Check";

export interface Action {
    ActionCost: number;
    SubordinateActions: Action[];
    Traits: Traits[];
    Trigger: string;
    Check: Check;
    Effect: string;
}
