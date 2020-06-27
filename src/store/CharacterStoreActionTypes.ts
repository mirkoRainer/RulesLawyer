export const CHANGE_CHARACTER_NAME = "CHANGE_CHARACTER_NAME";

interface ChangeCharacterNameAction {
    type: typeof CHANGE_CHARACTER_NAME;
    payload: string
}

export type PlayerCharacterActionTypes = ChangeCharacterNameAction; // | SomeOtherAction