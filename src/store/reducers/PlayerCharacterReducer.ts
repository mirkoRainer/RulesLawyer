import { examplePlayerCharacter } from "../../../examplePlayerCharacter";
import { CHANGE_CHARACTER_NAME, CHANGE_PLAYER_NAME, PlayerCharacterActionTypes, CHANGE_ANCESTRY, CHANGE_HERITAGE, CHANGE_BACKGROUND, CHANGE_ALIGNMENT, CHANGE_DEITY, CHANGE_NOTES, CHANGE_RESISTANCES, CHANGE_IMMUNITIES, CHANGE_WEAKNESSES, CHANGE_CONDITIONS, CHANGE_SENSES, CHANGE_LEVEL, CHANGE_EXPERIENCE_POINTS, CHANGE_ABILITY_SCORE, CHANGE_CLASS_DC_PROFICIENCY, CHANGE_HIT_POINTS, CHANGE_TEMPORARY_HITPOINTS, CHANGE_DYING_VALUE, CHANGE_WOUNDED_VALUE, CHANGE_MAX_HITPOINTS, CHANGE_SHIELD } from "../actions/PlayerCharacter/PlayerCharacterActionTypes";
import { PlayerCharacter } from "../../PF2eCoreLib/PlayerCharacter";
import { UpdateAbilityScore } from "../../PF2eCoreLib/AbilityScores";
import { ResolveHitPoints, HealthData } from "../../PF2eCoreLib/HealthData";
import WoundedView from "../../scenes/CharacterSheet/Encounter/Defense/HealthData/WoundedView";
import { CHANGE_ARMOR_CLASS_PROFICIENCY, CHANGE_SAVE_PROFICIENCIES } from "../actions/PlayerCharacter/ProficiencyActionTypes";
import { NativeViewGestureHandler } from "react-native-gesture-handler";

const defaultState: PlayerCharacter = examplePlayerCharacter;

const playerCharacterReducer = (state=defaultState, action: PlayerCharacterActionTypes): PlayerCharacter => { 
    let modifiedState: PlayerCharacter;
    let newHealthData: HealthData;
    switch(action.type) {
    case CHANGE_CHARACTER_NAME:
        modifiedState = { 
            ...state,
            name: action.name
        };
        return modifiedState;
    case CHANGE_PLAYER_NAME:
        modifiedState = {
            ...state,
            playerName: action.name
        };
        return modifiedState;
    case CHANGE_ANCESTRY:
        modifiedState = {
            ...state,
            ancestry: {
                ...state.ancestry,
                name: action.ancestry
            }
        };
        return modifiedState;
    case CHANGE_HERITAGE:
        modifiedState = {
            ...state,
            ancestry: {
                ...state.ancestry,
                heritage: action.heritage
            }
        };
        return modifiedState;
    case CHANGE_BACKGROUND:
        modifiedState = {
            ...state,
            background: {
                ...state.background,
                name: action.Background
            } 
        };
        return modifiedState;
    case CHANGE_ALIGNMENT:
        modifiedState = {
            ...state,
            alignment: action.Alignment
        };
        return modifiedState;
    case CHANGE_DEITY:
        modifiedState = {
            ...state,
            deity: action.Deity
        };
        return modifiedState;
    case CHANGE_NOTES:
        modifiedState = {
            ...state,
            campaignNotesData: {
                ...state.campaignNotesData,
                notes: action.Notes
            } 
        };
        return modifiedState;
    case CHANGE_RESISTANCES:
        modifiedState = {
            ...state,
            resistances: action.Resistances
        };
        return modifiedState;
    case CHANGE_IMMUNITIES:
        modifiedState = {
            ...state,
            immunities: action.Immunities
        };
        return modifiedState;
    case CHANGE_WEAKNESSES:
        modifiedState = {
            ...state,
            weakness: action.Weaknesses
        };
        return modifiedState;
    case CHANGE_CONDITIONS:
        modifiedState = {
            ...state,
            conditions: action.Conditions
        };
        return modifiedState;
    case CHANGE_SENSES:
        modifiedState = {
            ...state,
            senses: action.Senses
        };
        return modifiedState;
    case CHANGE_LEVEL:
        modifiedState = {
            ...state,
            level: action.Level
        };
        return modifiedState;
    case CHANGE_EXPERIENCE_POINTS:
        modifiedState = {
            ...state,
            experiencePoints: action.ExperiencePoints
        };
        return modifiedState;
    case CHANGE_ABILITY_SCORE:
        modifiedState = {
            ...state,
            abilityScores: UpdateAbilityScore(action.AbilityScore, state.abilityScores)
        };
        return modifiedState;
    case CHANGE_CLASS_DC_PROFICIENCY:
        modifiedState = {
            ...state,
            pcClass: {
                ...state.pcClass,
                proficiency: action.Proficiency
            }
        };
        return modifiedState;
    case CHANGE_HIT_POINTS:
        console.debug("CHANGE_HIT_POINTS");
        console.debug(`action: ${JSON.stringify(action)}`);
        newHealthData = ResolveHitPoints(state.hitPoint, action.HitPointDelta, action.RemovesWounded);
        console.debug(`newHealthData: ${JSON.stringify(newHealthData)}`);
        modifiedState = {
            ...state,
            hitPoint: newHealthData
        };
        console.debug(`result: ${JSON.stringify(modifiedState.hitPoint)}`);
        return modifiedState;
    case CHANGE_TEMPORARY_HITPOINTS:
        console.debug("CHANGE_TEMPORARY_HITPOINTS");
        modifiedState = {
            ...state,
            hitPoint: {
                ...state.hitPoint,
                temporaryHitPoints: action.TemporaryHitPoints
            }
        };
        return modifiedState;
    case CHANGE_DYING_VALUE:
        console.debug(`CHANGE_DYING_VALUE in reducer. ${action.DyingValue}`);
        modifiedState ={
            ...state,
            hitPoint: {
                ...state.hitPoint,
                dying: action.DyingValue
            }
        };
        return modifiedState;
    case CHANGE_WOUNDED_VALUE:
        console.debug(`CHANGE_WOUNDED_VALUE in reducer. ${action.WoundedValue}`);
        modifiedState = {
            ...state,
            hitPoint: {
                ...state.hitPoint,
                wounded: action.WoundedValue
            }
        };
        return modifiedState;
    case CHANGE_MAX_HITPOINTS:
        console.debug(`CHANGE_MAX_HITPOINTS in reducer. ${action.MaxHitPoints}`);
        modifiedState = {
            ...state,
            hitPoint: {
                ...state.hitPoint,
                maxHitPoints: action.MaxHitPoints
            }
        };
        return modifiedState;
    case CHANGE_SAVE_PROFICIENCIES:
        console.debug(`CHANGE_SAVE_PROFICIENCIES in reducer. ${JSON.stringify(action.saves)}`);
        modifiedState = {
            ...state,
            saves: action.saves
        };
        return modifiedState;
    case CHANGE_SHIELD:
        console.debug(`SHIELD in reducer. ${JSON.stringify(action.Shield)}`);
        modifiedState = {
            ...state,
            shield: action.Shield
        };
        return modifiedState;
    default:
        return state;
    }
};

export { playerCharacterReducer };