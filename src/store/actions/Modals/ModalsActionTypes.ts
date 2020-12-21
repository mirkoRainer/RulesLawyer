import { Action } from "redux";
import {
    TextEditModalState,
    ModalState,
    PickerModalState,
} from "../../ModalsState";
import { ReactText } from "react";

export const TOGGLE_TEXTEDIT_MODAL = "TOGGLE_TEXTEDIT_MODAL";
export const TOGGLE_PICKER_MODAL = "TOGGLE_PICKER_MODAL";
export const UPDATE_TEXT_MODAL_STATE = "UPDATE_TEXT_MODAL_STATE";
export const UPDATE_PICKER_MODAL_STATE = "UPDATE_PICKER_MODAL_STATE";

export interface ToggleTextEditModalAction extends Action<string> {
    type: typeof TOGGLE_TEXTEDIT_MODAL;
}

export interface TogglePickerModalAction extends Action<string> {
    type: typeof TOGGLE_PICKER_MODAL;
    value: ReactText;
}

export interface UpdateTextModalStateAction extends Action<string> {
    type: typeof UPDATE_TEXT_MODAL_STATE;
    payload: TextEditModalState;
}

export interface UpdatePickerModalStateAction extends Action<string> {
    type: typeof UPDATE_PICKER_MODAL_STATE;
    payload: PickerModalState;
}

export const CHANGE_PICKER_SELECTION = "CHANGE_PICKER_SELECTION";
export interface ChangePickerSelectionAction extends Action<string> {
    type: typeof CHANGE_PICKER_SELECTION;
    PickerSelection: ReactText;
}

export type ModalActionTypes =
    | TogglePickerModalAction
    | ToggleTextEditModalAction
    | UpdateTextModalStateAction
    | UpdatePickerModalStateAction
    | ChangePickerSelectionAction; // | SomeOtherAction
