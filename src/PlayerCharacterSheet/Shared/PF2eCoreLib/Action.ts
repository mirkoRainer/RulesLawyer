import { Check } from "./Check";

export interface Action {
    ActionCost: ActionCost;
    SubordinateActions: Action[];
    Traits: Traits[];
    Trigger: string;
    Check: Check;
    Effect: IEffect;
}
