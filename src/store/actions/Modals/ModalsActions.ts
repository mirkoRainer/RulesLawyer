import { Dispatch, ActionCreator } from "redux";
import {
    ModalActionTypes,
    TOGGLE_TEXTEDIT_MODAL,
    TOGGLE_NUMBERPICKER_MODAL,
    UPDATE_TEXT_MODAL_STATE,
} from "./ModalsActionTypes";
import { AppActions } from "../AllActionTypesAggregated";
import { TextEditModalState } from "../../ModalsState";
import { ChangeCharacterName, startChangePlayerName, startChangeCharacterName, ChangePlayerName } from "../PlayerCharacter/PlayerCharacterActions";
import { CharacterSheetState } from "../../Store";
import { CHANGE_CHARACTER_NAME, CHANGE_PLAYER_NAME } from "../PlayerCharacter/PlayerCharacterActionTypes";

const ToggleTextEditModal: ActionCreator<ModalActionTypes> = (): ModalActionTypes => ({ type: TOGGLE_TEXTEDIT_MODAL });

const UpdateTextEditModalState: ActionCreator<ModalActionTypes> = (
    newModalState: TextEditModalState
): ModalActionTypes => ({
    type: UPDATE_TEXT_MODAL_STATE,
    payload: newModalState
});

export const startTextEditModal = (propertyToChange: string, index?: number) => {
    return (dispatch: Dispatch<AppActions>, getState: () => CharacterSheetState) => {
        let newModalState = getState().modals.textEditModal;
        switch (propertyToChange) {
        case CHANGE_CHARACTER_NAME:
            newModalState = {
                title: "Character Name:",
                value: getState().playerCharacter.name,
                onSelect: () => dispatch(ToggleTextEditModal()),
                onTextChange: (value: string) => { 
                    dispatch(ChangeCharacterName(value));
                }
            };
            break;
        case CHANGE_PLAYER_NAME:
            newModalState = {
                title: "Player Name:",
                value: getState().playerCharacter.playerName,
                onSelect: () => {},
                onTextChange: (value: string) => {
                    dispatch(ChangePlayerName(value));
                }
            };
            break;
        }
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
