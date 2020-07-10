import { Action } from "redux";

export const CHANGE_CHARACTER_NAME = "CHANGE_CHARACTER_NAME";
export interface ChangeCharacterNameAction extends Action<string> {
    type: typeof CHANGE_CHARACTER_NAME;
    name: string;
}

export const CHANGE_PLAYER_NAME = "CHANGE_PLAYER_NAME";
export interface ChangePlayerNameAction extends Action<string> {
    type: typeof CHANGE_PLAYER_NAME;
    name: string;
}

export const CHANGE_ANCESTRY = "CHANGE_ANCESTRY";
export interface ChangeAncestryAction extends Action<string> {
    type: typeof CHANGE_ANCESTRY;
    ancestry: string;
}

export const CHANGE_HERITAGE = "CHANGE_HERITAGE";
export interface ChangeHeritageAction extends Action<string> {
    type: typeof CHANGE_HERITAGE;
    heritage: string;
}

export const CHANGE_BACKGROUND = "CHANGE_BACKGROUND";
export interface ChangeBackgroundAction extends Action<string> {
    type: typeof CHANGE_BACKGROUND;
    Background: string;
}

export const CHANGE_CLASS = "CHANGE_CLASS";
export interface ChangeClassAction extends Action<string> {
    type: typeof CHANGE_CLASS;
    Class: string;
}

export const CHANGE_SUBCLASS = "CHANGE_SUBCLASS";
export interface ChangeSubClassAction extends Action<string> {
    type: typeof CHANGE_SUBCLASS;
    SubClass: string;
}

export const CHANGE_ALIGNMENT = "CHANGE_ALIGNMENT";
export interface ChangeAlignmentAction extends Action<string> {
    type: typeof CHANGE_ALIGNMENT;
    Alignment: string;
}

export const CHANGE_DEITY = "CHANGE_DEITY";
export interface ChangeDeityAction extends Action<string> {
    type: typeof CHANGE_DEITY;
    Deity: string;
}

export const CHANGE_NOTES = "CHANGE_NOTES";
export interface ChangeNotesAction extends Action<string> {
    type: typeof CHANGE_NOTES;
    Notes: string;
}

export const CHANGE_RESISTANCES = "CHANGE_RESISTANCES";
export interface ChangeResistancesAction extends Action<string> {
    type: typeof CHANGE_RESISTANCES;
    Resistances: string;
}

export const CHANGE_IMMUNITIES = "CHANGE_IMMUNITIES";
export interface ChangeImmunitiesAction extends Action<string> {
    type: typeof CHANGE_IMMUNITIES;
    Immunities: string;
}

export const CHANGE_WEAKNESSES = "CHANGE_WEAKNESSES";
export interface ChangeWeaknessesAction extends Action<string> {
    type: typeof CHANGE_WEAKNESSES;
    Weaknesses: string;
}

export const CHANGE_CONDITIONS = "CHANGE_CONDITIONS";
export interface ChangeConditionsAction extends Action<string> {
    type: typeof CHANGE_CONDITIONS;
    Conditions: string;
}

export const CHANGE_SENSES = "CHANGE_SENSES";
export interface ChangeSensesAction extends Action<string> {
    type: typeof CHANGE_SENSES;
    Senses: string;
}

export const CHANGE_LEVEL = "CHANGE_LEVEL";
export interface ChangeLevelAction extends Action<string> {
    type: typeof CHANGE_LEVEL;
    Level: number;
}


export type PlayerCharacterActionTypes = ChangeAlignmentAction | ChangeAncestryAction | ChangeBackgroundAction | ChangeCharacterNameAction | ChangeClassAction | ChangeConditionsAction | ChangeDeityAction | ChangeHeritageAction | ChangeImmunitiesAction |  ChangeNotesAction | ChangePlayerNameAction | ChangeResistancesAction | ChangeSensesAction |  ChangeSubClassAction | ChangeWeaknessesAction | ChangeLevelAction; // | SomeOtherAction

