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
    UPDATE_TEXT_MODAL_STATE,
} from "../actions/Modals/ModalsActionTypes";

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

const numberPickerDefaultState: NumberPickerModalState & ModalBaseProps = {
    title: "Pick a Number",
    max: 10,
    min: 1,
    value: 5,
    onSelect: () => {
        console.log("Picker Selected!");
    },
    visible: true,
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
    case UPDATE_TEXT_MODAL_STATE:
        newState = {
            ...state,
            textEditModal: action.payload
        };
        return newState;
    default:
        return state;
    }
};

export { modalsReducer };
