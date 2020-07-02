import { Action } from "redux";

export const TOGGLE_TEXTEDIT_MODAL = "TOGGLE_TEXTEDIT_MODAL";
export const TOGGLE_NUMBERPICKER_MODAL = "TOGGLE_NUMBERPICKER_MODAL";

export interface ToggleTextEditModalAction extends Action<string> {
    type: typeof TOGGLE_TEXTEDIT_MODAL;
}

export interface ToggleNumberPickerModalAction extends Action<string> {
    type: typeof TOGGLE_NUMBERPICKER_MODAL;
}

export type ModalActionTypes = ToggleNumberPickerModalAction | ToggleTextEditModalAction; // | SomeOtherAction