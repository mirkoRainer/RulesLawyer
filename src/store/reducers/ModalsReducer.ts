import { ModalBaseProps } from "react-native";
import {
    ModalState,
    TextEditModalState,
    NumberPickerModalState,
} from "../ModalsState";
import {
    ModalActionTypes,
    TOGGLE_NUMBERPICKER_MODAL,
    TOGGLE_TEXTEDIT_MODAL,
} from "../actions/Modals/ModalsActionTypes";

const textEditDefaultState: TextEditModalState & ModalBaseProps = {
    title: "Edit Text",
    value: "value",
    onSelect: () => {
        console.log("Text Edit Selected");
    },
    visible: false,
    animated: true,
    animationType: "fade",
    transparent: true,
};

const numberPickerDefaultState: NumberPickerModalState & ModalBaseProps = {
    title: "Pick a Number",
    max: 10,
    min: 1,
    value: 5,
    onSelect: () => {
        console.log("Picker Selected!");
    },
    visible: false,
};

const defaultState: ModalState = {
    textEditModal: textEditDefaultState,
    numberPickerModal: numberPickerDefaultState,
};

const modalsReducer = (
    state = defaultState,
    action: ModalActionTypes
): ModalState => {
    let newState: ModalState;
    switch (action.type) {
        case TOGGLE_NUMBERPICKER_MODAL:
            newState = {
                ...state,
                numberPickerModal: {
                    ...state.numberPickerModal,
                    visible: !state.numberPickerModal.visible,
                },
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
        default:
            return state;
    }
};

export { modalsReducer };
