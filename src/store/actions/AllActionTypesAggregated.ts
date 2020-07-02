import { PlayerCharacterActionTypes } from "./PlayerCharacter/PlayerCharacterActionTypes";
import { ModalActionTypes } from "./Modals/ModalsActionTypes";

//aggregate all the App ones.
export type AppActions = PlayerCharacterActionTypes | ModalActionTypes;