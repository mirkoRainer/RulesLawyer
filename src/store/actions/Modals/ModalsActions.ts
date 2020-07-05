import { Dispatch, ActionCreator } from "redux";
import {
    ModalActionTypes,
    TOGGLE_TEXTEDIT_MODAL,
    TOGGLE_NUMBERPICKER_MODAL,
} from "./ModalsActionTypes";
import { AppActions } from "../AllActionTypesAggregated";
import { TextEditModalState } from "../../ModalsState";

const ToggleTextEditModal: ActionCreator<ModalActionTypes> = (
    newModalState: TextEditModalState
): ModalActionTypes => ({
    type: TOGGLE_TEXTEDIT_MODAL,
    payload: newModalState,
});

export const startToggleTextEditModal = () => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
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
