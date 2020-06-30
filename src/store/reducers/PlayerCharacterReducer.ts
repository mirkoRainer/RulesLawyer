import { examplePlayerCharacter } from "../../../examplePlayerCharacter";
import { CHANGE_CHARACTER_NAME, CHANGE_PLAYER_NAME,  PlayerCharacterActionTypes } from "../actions/StoreActionTypes";
import { PlayerCharacterDTO } from "../../scenes/Shared/PF2eCoreLib/PlayerCharacter";

const defaultState: PlayerCharacterDTO = examplePlayerCharacter;

const playerCharacterReducer = (state=defaultState, action: PlayerCharacterActionTypes): PlayerCharacterDTO => { 
    let newState: PlayerCharacterDTO;
    switch(action.type) {
    case CHANGE_CHARACTER_NAME:
        newState = { 
            ...state,
            name: action.name
        };
        return newState;
    case CHANGE_PLAYER_NAME:
        newState = {
            ...state,
            playerName: action.name
        };
        return newState;
    default:
        return state;
    }
};

export { playerCharacterReducer };