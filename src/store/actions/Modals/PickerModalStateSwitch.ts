import { PickerModalState } from "../../ModalsState";
import { CharacterSheetState } from "../../Store";
import { Dispatch, ReactText } from "react";
import { AppActions } from "../AllActionTypesAggregated";
import { CHANGE_LEVEL } from "../PlayerCharacter/PlayerCharacterActionTypes";
import { ChangeLevel } from "../PlayerCharacter/PlayerCharacterActions";
import { ChangePickerSelection } from "./ModalsActions";

export const PickerModalStateSwitch = (actionType: string, state: CharacterSheetState, dispatch: Dispatch<AppActions>): PickerModalState => {
    console.log(actionType);
    switch(actionType) {
    case CHANGE_LEVEL:
        return {
            title: "Level",
            items: Array.from(new Array(20), (x, i) => i + 1),
            currentSelection: state.modals.pickerModal.currentSelection,
            onSelect: (value: ReactText, index: number) => {
                dispatch(ChangeLevel(value));
                dispatch(ChangePickerSelection(value));
            }
        };
    default: 
        return state.modals.pickerModal;
    }
};