import { Action } from "redux";

export const CHANGE_CHARACTER_NAME = "CHANGE_CHARACTER_NAME";
export const CHANGE_PLAYER_NAME = "CHANGE_PLAYER_NAME";

export interface ChangeCharacterNameAction extends Action<string> {
    type: typeof CHANGE_CHARACTER_NAME;
    name: string;
}

export interface ChangePlayerNameAction extends Action<string> {
    type: typeof CHANGE_PLAYER_NAME;
    name: string;
}

export type PlayerCharacterActionTypes = ChangeCharacterNameAction | ChangePlayerNameAction; // | SomeOtherAction

