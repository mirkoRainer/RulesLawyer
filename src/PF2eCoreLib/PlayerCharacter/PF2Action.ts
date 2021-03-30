import { Traits } from "../Traits";
import { Guid } from "guid-typescript";
import { Weapon } from "./Weapon";
import { Skills } from "./Skills";

export interface PF2Action {
    id: Guid;
    name: string;
    numberOfActions: number;
    traits: (keyof typeof Traits)[];
    description: string;
    source: string;
    bookAbbreviation?: string;
    pageNumber?: number;
    trigger?: string;
    requirements?: string;
    critSuccess?: string;
    success?: string;
    failure?: string;
    critFailure?: string;
    weapon?: Weapon;
    skill?: keyof Skills;
}
