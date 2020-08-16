import { Proficiencies } from "../../../PF2eCoreLib/Proficiencies";

export const CHANGE_ARMOR_CLASS_PROFICIENCY = "CHANGE_ARMOR_CLASS_PROFICIENCY";
export interface ChangeACProficiencyAction extends Action<string> {
    type: typeof CHANGE_ARMOR_CLASS_PROFICIENCY;
    ACProficiency: Proficiencies;
}


export type ProficiencyActionTypes = ChangeACProficiencyAction