import { examplePlayerCharacter } from "../../../examplePlayerCharacter";
import { CHANGE_CHARACTER_NAME, CHANGE_PLAYER_NAME, PlayerCharacterActionTypes, CHANGE_ANCESTRY, CHANGE_HERITAGE, CHANGE_BACKGROUND, CHANGE_CLASS, CHANGE_SUBCLASS, CHANGE_ALIGNMENT, CHANGE_DEITY, CHANGE_NOTES, CHANGE_RESISTANCES, CHANGE_IMMUNITIES, CHANGE_WEAKNESSES, CHANGE_CONDITIONS, CHANGE_SENSES, CHANGE_LEVEL } from "../actions/PlayerCharacter/PlayerCharacterActionTypes";
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
    case CHANGE_ANCESTRY:
        newState = {
            ...state,
            ancestry: {
                ...state.ancestry,
                name: action.ancestry
            }
        };
        return newState;
    case CHANGE_HERITAGE:
        newState = {
            ...state,
            ancestry: {
                ...state.ancestry,
                heritage: action.heritage
            }
        };
        return newState;
    case CHANGE_BACKGROUND:
        newState = {
            ...state,
            background: {
                ...state.background,
                name: action.Background
            } 
        };
        return newState;
    case CHANGE_CLASS:
        newState = {
            ...state,
            class:{
                ...state.class,
                name: action.Class  
            } 
        };
        return newState;
    case CHANGE_SUBCLASS:
        newState = {
            ...state,
            class: {
                ...state.class,
                subClass: action.SubClass
            } 
        };
        return newState;
    case CHANGE_ALIGNMENT:
        newState = {
            ...state,
            alignment: action.Alignment
        };
        return newState;
    case CHANGE_DEITY:
        newState = {
            ...state,
            deity: action.Deity
        };
        return newState;
    case CHANGE_NOTES:
        newState = {
            ...state,
            campaignNotesData: {
                ...state.campaignNotesData,
                notes: action.Notes
            } 
        };
        return newState;
    case CHANGE_RESISTANCES:
        newState = {
            ...state,
            resistances: action.Resistances
        };
        return newState;
    case CHANGE_IMMUNITIES:
        newState = {
            ...state,
            immunities: action.Immunities
        };
        return newState;
    case CHANGE_WEAKNESSES:
        newState = {
            ...state,
            weakness: action.Weaknesses
        };
        return newState;
    case CHANGE_CONDITIONS:
        newState = {
            ...state,
            conditions: action.Conditions
        };
        return newState;
    case CHANGE_SENSES:
        newState = {
            ...state,
            senses: action.Senses
        };
        return newState;
    case CHANGE_LEVEL:
        newState = {
            ...state,
            level: action.Level
        };
        return newState;
    default:
        return state;
    }
};

export { playerCharacterReducer };