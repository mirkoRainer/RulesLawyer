import { ModalBaseProps } from "react-native";
import { ModalState, TextEditModalState } from "../ModalsState";
import { ModalActionTypes, TOGGLE_NUMBERPICKER_MODAL, TOGGLE_TEXTEDIT_MODAL } from "../actions/Modals/ModalsActionTypes";
import { State } from "react-native-gesture-handler";

const textEditDefaultState: TextEditModalState = {
    title: "Edit Text",
    value: "value",
    onSelect: () => {
        console.log("Text Edit Selected");
    }
};

const numberPickerDefaultState = {
    title: "Pick a Number",
    max: 10,
    min: 1,
    value: 5,
    onSelect: () => {
        console.log("Picker Selected!");
    }
};

const defaultState: ModalState = 
{
    textEditModal: textEditDefaultState,
    numberPickerModal: numberPickerDefaultState
};

const modalsReducer = (state=defaultState, action: ModalActionTypes): ModalState => {
    let newState: ModalState;
    switch(action.type) {
    case TOGGLE_NUMBERPICKER_MODAL:
        newState = {
            ...state,
            numberPickerModal: {
                ...state.numberPickerModal,
                visible: !state.numberPickerModal.visible
            }
        };
        return newState;
    case TOGGLE_TEXTEDIT_MODAL:
        newState = {
            ...state,
            textEditModal: {
                ...state.textEditModal,
                visible: !state.textEditModal.visible
            }
        };
        return newState;
    default:
        return state;
    }
};

export { modalsReducer };