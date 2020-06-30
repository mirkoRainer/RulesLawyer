import { CHANGE_CHARACTER_NAME, CHANGE_PLAYER_NAME, AppActions, PlayerCharacterActionTypes } from "./StoreActionTypes";
import { ActionCreator, Dispatch } from "redux";

const ChangeCharacterName: ActionCreator<PlayerCharacterActionTypes> = (name: string): PlayerCharacterActionTypes => ({  
    type: CHANGE_CHARACTER_NAME, 
    name 
});

const ChangePlayerName: ActionCreator<PlayerCharacterActionTypes> = (name: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_PLAYER_NAME, 
    name 
});

export const startChangeCharacterName = (name: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeCharacterName(name));
    };
};

export const startChangePlayerName = (name: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangePlayerName(name));
    };
};