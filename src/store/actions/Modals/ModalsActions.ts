import { Dispatch, ActionCreator } from "redux";
import {
    ModalActionTypes,
    TOGGLE_TEXTEDIT_MODAL,
    TOGGLE_NUMBERPICKER_MODAL,
    UPDATE_TEXT_MODAL_STATE,
} from "./ModalsActionTypes";
import { AppActions } from "../AllActionTypesAggregated";
import { TextEditModalState, ModalState } from "../../ModalsState";
import { startChangeCharacterName, ChangeCharacterName } from "../PlayerCharacter/PlayerCharacterActions";
import { CharacterSheetState } from "../../Store";

const ToggleTextEditModal: ActionCreator<ModalActionTypes> = (): ModalActionTypes => ({ type: TOGGLE_TEXTEDIT_MODAL });

const UpdateTextEditModalState: ActionCreator<ModalActionTypes> = (
    newModalState: TextEditModalState
): ModalActionTypes => ({
    type: UPDATE_TEXT_MODAL_STATE,
    payload: newModalState
});

export const startTextEditModalForCharacterName = () => {
    return (dispatch: Dispatch<AppActions>, getState: () => CharacterSheetState) => {
        const characterNameInState = getState().playerCharacter.name;
        const newModalState: TextEditModalState = {
            title: "Character Name:",
            value: characterNameInState,
            onSelect: () => dispatch(ToggleTextEditModal()),
            onTextChange: (value: string) => { 
                console.log("changed!");
                console.log(value);
                dispatch(ChangeCharacterName(value));
            }
        };
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
