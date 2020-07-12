import { Dispatch, ActionCreator } from "redux";
import {
    ModalActionTypes,
    TOGGLE_TEXTEDIT_MODAL,
    TOGGLE_PICKER_MODAL,
    UPDATE_TEXT_MODAL_STATE,
    UPDATE_PICKER_MODAL_STATE,
    CHANGE_PICKER_SELECTION,
} from "./ModalsActionTypes";
import { AppActions } from "../AllActionTypesAggregated";
import { TextEditModalState, PickerModalState } from "../../ModalsState";
import { CharacterSheetState } from "../../Store";
import { TextEditModalStateSwitch } from "./TextEditModalStateSwitch";
import { PickerModalStateSwitch } from "./PickerModalStateSwitch";
import { ReactText } from "react";

const ToggleTextEditModal: ActionCreator<ModalActionTypes> = (): ModalActionTypes => ({ type: TOGGLE_TEXTEDIT_MODAL });

export const startToggleTextEditModal = () => {
    return (dispatch: Dispatch<AppActions>, getState: () => CharacterSheetState) => {
        dispatch(ToggleTextEditModal());
    };

};

const UpdateTextEditModalState: ActionCreator<ModalActionTypes> = (
    newModalState: TextEditModalState
): ModalActionTypes => ({
    type: UPDATE_TEXT_MODAL_STATE,
    payload: newModalState
});

export const startTextEditModal = (actionType: string, index?: number) => {
    return (dispatch: Dispatch<AppActions>, getState: () => CharacterSheetState) => {
        let newModalState: TextEditModalState = TextEditModalStateSwitch(actionType, getState(), dispatch);
        dispatch(UpdateTextEditModalState(newModalState));
        dispatch(ToggleTextEditModal());
    };
};


const TogglePickerModal: ActionCreator<ModalActionTypes> = (value: number): ModalActionTypes => ({
    type: TOGGLE_PICKER_MODAL,
    value: value
});

export const startTogglePickerModal = () => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(TogglePickerModal());
    };
};

const UpdatePickerModalState: ActionCreator<ModalActionTypes> = (
    newModalState: PickerModalState
): ModalActionTypes => ({
    type: UPDATE_PICKER_MODAL_STATE,
    payload: newModalState
});

export const ChangePickerSelection: ActionCreator<ModalActionTypes> = (
    newSelection: ReactText
): ModalActionTypes => ({
    type: CHANGE_PICKER_SELECTION,
    PickerSelection: newSelection
});

export const startPickerModalSelection = (actionType: string, value: number) => {
    return (dispatch: Dispatch<AppActions>, getState: () => CharacterSheetState) => {
        let newModalState: PickerModalState = PickerModalStateSwitch(actionType, getState(), dispatch);
        dispatch(UpdatePickerModalState(newModalState));
        dispatch(TogglePickerModal(value));
    };
};
