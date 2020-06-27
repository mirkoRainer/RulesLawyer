import { createStore } from "redux";
import { examplePlayerCharacter } from "../../examplePlayerCharacter";
import { PlayerCharacterActionTypes, CHANGE_CHARACTER_NAME } from "./CharacterStoreActionTypes";

const defaultState = examplePlayerCharacter;

function characterStoreReducer(state=defaultState, action: PlayerCharacterActionTypes) {
    let newState;
    switch(action.type) {
    case CHANGE_CHARACTER_NAME:
        newState = { 
            ...state,
            name: action.payload
        };
        return newState;
    default:
        return state;
    }
}

const PlayerCharacterStore =  createStore(characterStoreReducer);
export default PlayerCharacterStore;