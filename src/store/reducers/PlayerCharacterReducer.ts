import { examplePlayerCharacter } from "../../../examplePlayerCharacter";
import { CHANGE_CHARACTER_NAME, CHANGE_PLAYER_NAME, PlayerCharacterActionTypes, CHANGE_ANCESTRY, CHANGE_HERITAGE, CHANGE_BACKGROUND, CHANGE_ALIGNMENT, CHANGE_DEITY, CHANGE_NOTES, CHANGE_RESISTANCES, CHANGE_IMMUNITIES, CHANGE_WEAKNESSES, CHANGE_CONDITIONS, CHANGE_SENSES, CHANGE_LEVEL, CHANGE_EXPERIENCE_POINTS, CHANGE_ABILITY_SCORE, CHANGE_CLASS_DC_PROFICIENCY, CHANGE_HIT_POINTS } from "../actions/PlayerCharacter/PlayerCharacterActionTypes";
import { PlayerCharacter } from "../../PF2eCoreLib/PlayerCharacter";
import { UpdateAbilityScore } from "../../PF2eCoreLib/AbilityScores";
import { ResolveHitPoints, HealthData } from "../../PF2eCoreLib/HealthData";

const defaultState: PlayerCharacter = examplePlayerCharacter;

const playerCharacterReducer = (state=defaultState, action: PlayerCharacterActionTypes): PlayerCharacter => { 
    let newState: PlayerCharacter;
    let newHealthData: HealthData;
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
    case CHANGE_EXPERIENCE_POINTS:
        newState = {
            ...state,
            experiencePoints: action.ExperiencePoints
        };
        return newState;
    case CHANGE_ABILITY_SCORE:
        newState = {
            ...state,
            abilityScores: UpdateAbilityScore(action.AbilityScore, state.abilityScores)
        };
        return newState;
    case CHANGE_CLASS_DC_PROFICIENCY:
        newState = {
            ...state,
            pcClass: {
                ...state.pcClass,
                proficiency: action.Proficiency
            }
        };
        return newState;
    case CHANGE_HIT_POINTS:
        console.debug("CHANGE_HIT_POINTS");
        console.debug(`action: ${JSON.stringify(action)}`);
        newHealthData = ResolveHitPoints(state.hitPoint, action.HitPointDelta, action.RemovesWounded);
        console.debug(`newHealthData: ${JSON.stringify(newHealthData)}`);
        newState = {
            ...state,
            hitPoint: newHealthData
        };
        console.debug(`result: ${JSON.stringify(newState.hitPoint)}`);
        return newState;
    default:
        return state;
    }
};

export { playerCharacterReducer };