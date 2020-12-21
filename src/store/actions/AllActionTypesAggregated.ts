import { PlayerCharacterActionTypes } from "./PlayerCharacter/PlayerCharacterActionTypes";
import { ModalActionTypes } from "./Modals/ModalsActionTypes";
import { CharacterBuildActionTypes } from "./CharacterBuild/CharacterBuildActionTypes";
import { ThemeActionTypes } from "./Theme/ThemeActionTypes";

//aggregate all the App ones.
export type AppActions =
    | PlayerCharacterActionTypes
    | ModalActionTypes
    | CharacterBuildActionTypes
    | ThemeActionTypes;
