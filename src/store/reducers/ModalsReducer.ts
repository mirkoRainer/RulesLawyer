import { ModalBaseProps } from "react-native";
import {
    ModalState,
    TextEditModalState,
    PickerModalState,
} from "../ModalsState";
import {
    ModalActionTypes,
    TOGGLE_PICKER_MODAL,
    TOGGLE_TEXTEDIT_MODAL,
    UPDATE_TEXT_MODAL_STATE,
    UPDATE_PICKER_MODAL_STATE,
    CHANGE_PICKER_SELECTION,
} from "../actions/Modals/ModalsActionTypes";
import { ReactText } from "react";

const textEditDefaultState: TextEditModalState & ModalBaseProps = {
    title: "",
    value: "value",
    onSelect: () => {
        console.log("Text Edit Selected");
    },
    onTextChange: (value) => {
        console.log("text value changed");
        console.log(value);
    },
    visible: false,
    animated: true,
    animationType: "fade",
    transparent: true,
};

const PickerDefaultState: PickerModalState & ModalBaseProps = {
    title: "Make a selection:",
    items: [],
    currentSelection: "",
    onSelect: (itemValue, index) => {},
    visible: false,
};

const defaultState: ModalState = {
    textEditModal: textEditDefaultState,
    pickerModal: PickerDefaultState,
};

const modalsReducer = (
    state = defaultState,
    action: ModalActionTypes
): ModalState => {
    let newState: ModalState;
    switch (action.type) {
        case TOGGLE_PICKER_MODAL:
            newState = {
                ...state,
                pickerModal: {
                    ...state.pickerModal,
                    visible: !state.pickerModal.visible,
                    currentSelection: action.value,
                },
            };
            return newState;
        case UPDATE_PICKER_MODAL_STATE:
            newState = {
                ...state,
                pickerModal: action.payload,
            };
            return newState;
        case TOGGLE_TEXTEDIT_MODAL:
            newState = {
                ...state,
                textEditModal: {
                    ...state.textEditModal,
                    visible: !state.textEditModal.visible,
                },
            };
            return newState;
        case UPDATE_TEXT_MODAL_STATE:
            newState = {
                ...state,
                textEditModal: action.payload,
            };
            return newState;
        case CHANGE_PICKER_SELECTION:
            newState = {
                ...state,
                pickerModal: {
                    ...state.pickerModal,
                    currentSelection: action.PickerSelection,
                },
            };
            return newState;
        default:
            return state;
    }
};

export { modalsReducer };
