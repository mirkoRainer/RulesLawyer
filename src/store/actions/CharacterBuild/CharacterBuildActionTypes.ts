import { Ancestries } from "../../../scenes/Shared/PF2eCoreLib/Ancestries";

export const CHANGE_BUILD_ANCESTRY = "CHANGE_BUILD_ANCESTRY";
export interface ChangeBuildAncestry extends Action<string> {
    type: typeof CHANGE_BUILD_ANCESTRY;
    Ancestry: keyof Ancestries;
} 

export type CharacterBuildActionTypes = ChangeBuildAncestry; // | OtherActions