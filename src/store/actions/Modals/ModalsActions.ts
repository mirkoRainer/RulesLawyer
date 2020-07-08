import { Dispatch, ActionCreator } from "redux";
import {
    ModalActionTypes,
    TOGGLE_TEXTEDIT_MODAL,
    TOGGLE_NUMBERPICKER_MODAL,
    UPDATE_TEXT_MODAL_STATE,
} from "./ModalsActionTypes";
import { AppActions } from "../AllActionTypesAggregated";
import { TextEditModalState } from "../../ModalsState";
import { CharacterSheetState } from "../../Store";
import { ModalStateSwitch } from "./ModalStateSwitch";

const ToggleTextEditModal: ActionCreator<ModalActionTypes> = (): ModalActionTypes => ({ type: TOGGLE_TEXTEDIT_MODAL });

const UpdateTextEditModalState: ActionCreator<ModalActionTypes> = (
    newModalState: TextEditModalState
): ModalActionTypes => ({
    type: UPDATE_TEXT_MODAL_STATE,
    payload: newModalState
});

export const startTextEditModal = (propertyToChange: string, index?: number) => {
    return (dispatch: Dispatch<AppActions>, getState: () => CharacterSheetState) => {
        let newModalState: TextEditModalState = ModalStateSwitch(propertyToChange, getState(), dispatch);
        dispatch(UpdateTextEditModalState(newModalState));
        dispatch(ToggleTextEditModal());
    };

};

export const startToggleTextEditModal = () => {
    return (dispatch: Dispatch<AppActions>, getState: () => CharacterSheetState) => {
        dispatch(ToggleTextEditModal());
    };

};

const ToggleNumberPickerModal: ActionCreator<ModalActionTypes> = (): ModalActionTypes => ({
    type: TOGGLE_NUMBERPICKER_MODAL,
});

export const startToggleNumberPickerModal = () => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ToggleNumberPickerModal());
    };
};
