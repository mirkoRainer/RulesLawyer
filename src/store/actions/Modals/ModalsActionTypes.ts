import { Action } from "redux";
import { TextEditModalState, ModalState } from "../../ModalsState";

export const TOGGLE_TEXTEDIT_MODAL = "TOGGLE_TEXTEDIT_MODAL";
export const TOGGLE_NUMBERPICKER_MODAL = "TOGGLE_NUMBERPICKER_MODAL";
export const UPDATE_TEXT_MODAL_STATE = "UPDATE_TEXT_MODAL_STATE";

export interface ToggleTextEditModalAction extends Action<string> {
    type: typeof TOGGLE_TEXTEDIT_MODAL;
}

export interface ToggleNumberPickerModalAction extends Action<string> {
    type: typeof TOGGLE_NUMBERPICKER_MODAL;
}

export interface UpdateTextModalStateAction extends Action<string> {
    type: typeof UPDATE_TEXT_MODAL_STATE;
    payload: TextEditModalState;
}

export type ModalActionTypes =
    | ToggleNumberPickerModalAction
    | ToggleTextEditModalAction
    | UpdateTextModalStateAction; // | SomeOtherAction
