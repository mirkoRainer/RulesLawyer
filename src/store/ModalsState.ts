import { ModalProps } from "react-native";
import { ReactText } from "react";

export type ModalState = {
    textEditModal: TextEditModalState & ModalProps;
    pickerModal: PickerModalState & ModalProps;
};
export type TextEditModalState = {
    title: string;
    value: string;
    onSelect: () => void;
    onTextChange: (value: string) => void;
};
export type PickerModalState = {
    title: string;
    items: ReactText[];
    currentSelection: ReactText;
    onSelect: (itemValue: ReactText, itemIndex: number) => void;
};
