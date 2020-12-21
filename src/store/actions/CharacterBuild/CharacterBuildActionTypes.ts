import { Ancestries } from "../../../PF2eCoreLib/Ancestries";
import { Action } from "redux";

export const CHANGE_BUILD_ANCESTRY = "CHANGE_BUILD_ANCESTRY";
export interface ChangeBuildAncestry extends Action<string> {
    type: typeof CHANGE_BUILD_ANCESTRY;
    Ancestry: keyof Ancestries;
}

export type CharacterBuildActionTypes = ChangeBuildAncestry; // | OtherActions
