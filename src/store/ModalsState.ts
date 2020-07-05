import { ModalProps } from "react-native";

export type ModalState = {
    textEditModal: TextEditModalState & ModalProps;
    numberPickerModal: NumberPickerModalState & ModalProps;
};
export type TextEditModalState = {
    title: string;
    value: string;
    onSelect: () => void;
    onTextChange: (value: string) => void;
};
export type NumberPickerModalState = {
    title: string;
    max: number;
    min: number;
    value: number;
    onSelect: () => void;
};
