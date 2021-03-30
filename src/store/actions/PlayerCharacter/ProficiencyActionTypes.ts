import { Proficiencies } from "../../../PF2eCoreLib/Proficiencies";
import { Action } from "redux";
import { Saves } from "../../../PF2eCoreLib/PlayerCharacter/Saves";

export const CHANGE_SAVE_PROFICIENCIES = "CHANGE_SAVE_PROFICIENCIES";
export interface ChangeSaveProficienciesAction extends Action<string> {
    type: typeof CHANGE_SAVE_PROFICIENCIES;
    saves: Saves;
}

export const CHANGE_PERCEPTION_PROFICIENCY = "CHANGE_PERCEPTION_PROFICIENCY";
export interface ChangePerceptionProficiencyAction extends Action<string> {
    type: typeof CHANGE_PERCEPTION_PROFICIENCY;
    PerceptionProficiency: Proficiencies;
}

export const CHANGE_SPELL_PROFICIENCY = "CHANGE_SPELL_PROFICIENCY";
export interface ChangeSpellProficiencyAction extends Action<string> {
    type: typeof CHANGE_SPELL_PROFICIENCY;
    SpellProficiency: Proficiencies;
}

export type ProficiencyActionTypes =
    | ChangeSaveProficienciesAction
    | ChangePerceptionProficiencyAction
    | ChangeSpellProficiencyAction;
