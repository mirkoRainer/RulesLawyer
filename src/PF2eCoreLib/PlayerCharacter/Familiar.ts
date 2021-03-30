import { Size } from "../Size";
import { PF2Action } from "./PF2Action";
import { Movement } from "./Movement";

export interface Familiar {
    abilities: string;
    actions: PF2Action[];
    movement: Movement;
    name: string;
    type: string;
    size: Size;
}
