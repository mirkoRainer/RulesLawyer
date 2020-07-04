import { Dispatch, ActionCreator } from "redux";
import {
    ModalActionTypes,
    TOGGLE_TEXTEDIT_MODAL,
    TOGGLE_NUMBERPICKER_MODAL,
} from "./ModalsActionTypes";
import { AppActions } from "../AllActionTypesAggregated";

const ToggleTextEditModal: ActionCreator<ModalActionTypes> = (): ModalActionTypes => ({
    type: TOGGLE_TEXTEDIT_MODAL,
});

const ToggleNumberPickerModal: ActionCreator<ModalActionTypes> = (): ModalActionTypes => ({
    type: TOGGLE_NUMBERPICKER_MODAL,
});

export const startToggleTextEditModal = () => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ToggleTextEditModal());
    };
};

export const startToggleNumberPickerModal = () => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ToggleNumberPickerModal());
    };
};
