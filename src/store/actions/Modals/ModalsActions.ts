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
import { AppState } from "../../Store";
import { TextEditModalStateSwitch } from "./TextEditModalStateSwitch";
import { PickerModalStateSwitch } from "./PickerModalStateSwitch";
import { ReactText } from "react";
import { AbilityScore } from "../../../PF2eCoreLib/AbilityScores";
import { ChangeAbilityScore } from "../PlayerCharacter/PlayerCharacterActions";

const ToggleTextEditModal: ActionCreator<ModalActionTypes> = (): ModalActionTypes => ({ type: TOGGLE_TEXTEDIT_MODAL });

export const startToggleTextEditModal = () => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
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
    console.debug(`startTextEditModal with ${JSON.stringify(actionType)}`);
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        const newModalState: TextEditModalState = TextEditModalStateSwitch(actionType, getState(), dispatch);
        console.debug(`newModalState in startTextEditModal: ${JSON.stringify(newModalState)}`);
        dispatch(UpdateTextEditModalState(newModalState));
        dispatch(ToggleTextEditModal());
    };
};


const TogglePickerModal: ActionCreator<ModalActionTypes> = (value: ReactText): ModalActionTypes => ({
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

export const startNumberPickerModalSelection = (actionType: string, value: number) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        let newModalState: PickerModalState = PickerModalStateSwitch(actionType, getState(), dispatch);
        dispatch(UpdatePickerModalState(newModalState));
        dispatch(TogglePickerModal(value));
    };
};
export const startStringPickerModalSelection = (actionType: string, value: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        let newModalState: PickerModalState = PickerModalStateSwitch(actionType, getState(), dispatch);
        dispatch(UpdatePickerModalState(newModalState));
        dispatch(TogglePickerModal(value));
    };
};
export const startPickerForAbilityScore = (actionType: string, abilityScore: AbilityScore) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        let newModalState: PickerModalState = {
            title: "Editing " + abilityScore.ability,
            items: Array.from(new Array(30), (x, i) => i + 1),
            currentSelection: getState().modals.pickerModal.currentSelection,
            onSelect: (value: ReactText, index: number) => {
                let newAbilityScore: AbilityScore = { ability: abilityScore.ability, score: <number>value };
                dispatch(ChangeAbilityScore(newAbilityScore));
                dispatch(ChangePickerSelection(value));
            }
        };
        dispatch(UpdatePickerModalState(newModalState));
        dispatch(TogglePickerModal(abilityScore.score));
    };
};