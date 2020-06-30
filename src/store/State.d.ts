export type ModalState = {
    textEditModal: TextEditModalState,
    numberPickerModal: NumberPickerModalState
}
export type TextEditModalState = {
    visible: boolean,
    title: string,
    value: string,
    onClose(): () => void,
    onSelect(): () => void
}
export type NumberPickerModalState = {
    visible: boolean,
    title: string,
    max: number,
    min: number,
    value: number,
    onClose(): () => void,
    onSelect(): () => void
}

