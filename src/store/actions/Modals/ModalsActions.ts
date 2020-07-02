import { ActionCreator, Dispatch } from "redux";
import { ModalActionTypes, TOGGLE_TEXTEDIT_MODAL, TOGGLE_NUMBERPICKER_MODAL } from "./ModalsActionTypes";
import { Action } from "../../../scenes/PlayerCharacterSheet/3_StoryAndActionsPage/ActionsAndActivities";
import { Modal } from "react-native";
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