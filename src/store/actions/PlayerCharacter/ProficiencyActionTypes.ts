import { Proficiencies } from "../../../PF2eCoreLib/Proficiencies";
import { Action } from "redux";
import { Saves } from "../../../PF2eCoreLib/PlayerCharacter";

export const CHANGE_SAVE_PROFICIENCIES = "CHANGE_SAVE_PROFICIENCIES";
export interface ChangeSaveProficienciesAction extends Action<string> {
    type: typeof CHANGE_SAVE_PROFICIENCIES;
    saves: Saves;
}

export type ProficiencyActionTypes = ChangeSaveProficienciesAction