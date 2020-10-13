import { examplePlayerCharacter } from "../../../examplePlayerCharacter";
import {
    CHANGE_CHARACTER_NAME,
    CHANGE_PLAYER_NAME,
    PlayerCharacterActionTypes,
    CHANGE_ANCESTRY,
    CHANGE_HERITAGE,
    CHANGE_BACKGROUND,
    CHANGE_ALIGNMENT,
    CHANGE_DEITY,
    CHANGE_NOTES,
    CHANGE_RESISTANCES,
    CHANGE_IMMUNITIES,
    CHANGE_WEAKNESSES,
    CHANGE_CONDITIONS,
    CHANGE_SENSES,
    CHANGE_LEVEL,
    CHANGE_EXPERIENCE_POINTS,
    CHANGE_ABILITY_SCORE,
    CHANGE_CLASS_DC_PROFICIENCY,
    CHANGE_HIT_POINTS,
    CHANGE_TEMPORARY_HITPOINTS,
    CHANGE_DYING_VALUE,
    CHANGE_WOUNDED_VALUE,
    CHANGE_MAX_HITPOINTS,
    CHANGE_SHIELD,
    CHANGE_WORN_ARMOR,
    CHANGE_SPEED,
    CHANGE_PC_ACTIONS,
    CHANGE_SKILLS,
    CHANGE_SPELL_SLOTS,
    CHANGE_SPELLS,
    UPDATE_SPELL,
} from "../actions/PlayerCharacter/PlayerCharacterActionTypes";
import PlayerCharacter from "../../PF2eCoreLib/PlayerCharacter";
import { UpdateAbilityScore } from "../../PF2eCoreLib/AbilityScores";
import { ResolveHitPoints, HealthData } from "../../PF2eCoreLib/HealthData";
import {
    CHANGE_SAVE_PROFICIENCIES,
    CHANGE_PERCEPTION_PROFICIENCY,
    CHANGE_SPELL_PROFICIENCY,
} from "../actions/PlayerCharacter/ProficiencyActionTypes";
import _ from "lodash";
import { SpellList } from "../../scenes/CharacterSheet/Encounter/Spells/Components/Spell";

const defaultState: PlayerCharacter = examplePlayerCharacter;

const playerCharacterReducer = (
    state = defaultState,
    action: PlayerCharacterActionTypes
): PlayerCharacter => {
    let modifiedState: PlayerCharacter;
    let newHealthData: HealthData;
    switch (action.type) {
        case CHANGE_CHARACTER_NAME:
            modifiedState = {
                ...state,
                name: action.name,
            };
            return modifiedState;
        case CHANGE_PLAYER_NAME:
            modifiedState = {
                ...state,
                playerName: action.name,
            };
            return modifiedState;
        case CHANGE_ANCESTRY:
            modifiedState = {
                ...state,
                ancestry: {
                    ...state.ancestry,
                    name: action.ancestry,
                },
            };
            return modifiedState;
        case CHANGE_HERITAGE:
            modifiedState = {
                ...state,
                ancestry: {
                    ...state.ancestry,
                    heritage: action.heritage,
                },
            };
            return modifiedState;
        case CHANGE_BACKGROUND:
            modifiedState = {
                ...state,
                background: {
                    ...state.background,
                    name: action.Background,
                },
            };
            return modifiedState;
        case CHANGE_ALIGNMENT:
            modifiedState = {
                ...state,
                alignment: action.Alignment,
            };
            return modifiedState;
        case CHANGE_DEITY:
            modifiedState = {
                ...state,
                deity: action.Deity,
            };
            return modifiedState;
        case CHANGE_NOTES:
            modifiedState = {
                ...state,
                campaignNotesData: {
                    ...state.campaignNotesData,
                    notes: action.Notes,
                },
            };
            return modifiedState;
        case CHANGE_RESISTANCES:
            modifiedState = {
                ...state,
                resistances: action.Resistances,
            };
            return modifiedState;
        case CHANGE_IMMUNITIES:
            modifiedState = {
                ...state,
                immunities: action.Immunities,
            };
            return modifiedState;
        case CHANGE_WEAKNESSES:
            modifiedState = {
                ...state,
                weakness: action.Weaknesses,
            };
            return modifiedState;
        case CHANGE_CONDITIONS:
            modifiedState = {
                ...state,
                conditions: action.Conditions,
            };
            return modifiedState;
        case CHANGE_SENSES:
            modifiedState = {
                ...state,
                senses: action.Senses,
            };
            return modifiedState;
        case CHANGE_LEVEL:
            modifiedState = {
                ...state,
                level: action.Level,
            };
            return modifiedState;
        case CHANGE_EXPERIENCE_POINTS:
            modifiedState = {
                ...state,
                experiencePoints: action.ExperiencePoints,
            };
            return modifiedState;
        case CHANGE_ABILITY_SCORE:
            modifiedState = {
                ...state,
                abilityScores: UpdateAbilityScore(
                    action.AbilityScore,
                    state.abilityScores
                ),
            };
            return modifiedState;
        case CHANGE_CLASS_DC_PROFICIENCY:
            modifiedState = {
                ...state,
                pcClass: {
                    ...state.pcClass,
                    proficiency: action.Proficiency,
                },
            };
            return modifiedState;
        case CHANGE_HIT_POINTS:
            console.debug("CHANGE_HIT_POINTS");
            console.debug(`action: ${JSON.stringify(action, null, 1)}`);
            newHealthData = ResolveHitPoints(
                state.hitPoint,
                action.HitPointDelta,
                action.RemovesWounded
            );
            console.debug(
                `newHealthData: ${JSON.stringify(newHealthData, null, 1)}`
            );
            modifiedState = {
                ...state,
                hitPoint: newHealthData,
            };
            console.debug(
                `result: ${JSON.stringify(modifiedState.hitPoint, null, 1)}`
            );
            return modifiedState;
        case CHANGE_TEMPORARY_HITPOINTS:
            console.debug("CHANGE_TEMPORARY_HITPOINTS");
            modifiedState = {
                ...state,
                hitPoint: {
                    ...state.hitPoint,
                    temporaryHitPoints: action.TemporaryHitPoints,
                },
            };
            return modifiedState;
        case CHANGE_DYING_VALUE:
            console.debug(
                `CHANGE_DYING_VALUE in reducer. ${action.DyingValue}`
            );
            modifiedState = {
                ...state,
                hitPoint: {
                    ...state.hitPoint,
                    dying: action.DyingValue,
                },
            };
            return modifiedState;
        case CHANGE_WOUNDED_VALUE:
            console.debug(
                `CHANGE_WOUNDED_VALUE in reducer. ${action.WoundedValue}`
            );
            modifiedState = {
                ...state,
                hitPoint: {
                    ...state.hitPoint,
                    wounded: action.WoundedValue,
                },
            };
            return modifiedState;
        case CHANGE_MAX_HITPOINTS:
            console.debug(
                `CHANGE_MAX_HITPOINTS in reducer. ${action.MaxHitPoints}`
            );
            modifiedState = {
                ...state,
                hitPoint: {
                    ...state.hitPoint,
                    maxHitPoints: action.MaxHitPoints,
                },
            };
            return modifiedState;
        case CHANGE_SAVE_PROFICIENCIES:
            console.debug(
                `CHANGE_SAVE_PROFICIENCIES in reducer. ${JSON.stringify(
                    action.saves,
                    null,
                    1
                )}`
            );
            modifiedState = {
                ...state,
                saves: action.saves,
            };
            return modifiedState;
        case CHANGE_SHIELD:
            console.debug(
                `SHIELD in reducer. ${JSON.stringify(action.Shield, null, 1)}`
            );
            modifiedState = {
                ...state,
                shield: action.Shield,
            };
            return modifiedState;
        case CHANGE_WORN_ARMOR:
            console.debug(
                `CHANGE_WORN_ARMOR in reducer ${JSON.stringify(
                    action.WornArmor,
                    null,
                    1
                )}`
            );
            return {
                ...state,
                wornArmor: action.WornArmor,
            };
        case CHANGE_PERCEPTION_PROFICIENCY:
            console.debug(
                `CHANGE_PERCEPTION_PROFICIENCY in reducer ${JSON.stringify(
                    action,
                    null,
                    1
                )}`
            );
            return {
                ...state,
                perceptionProficiency: action.PerceptionProficiency,
            };
        case CHANGE_SPEED:
            console.debug(
                `CHANGE_SPEED in reducer ${JSON.stringify(action, null, 1)}`
            );
            return {
                ...state,
                movement: action.Movements,
            };
        case CHANGE_PC_ACTIONS:
            console.debug(
                `CHANGE_PF2ACTIONS in reducer ${JSON.stringify(
                    action,
                    null,
                    1
                )}`
            );
            return {
                ...state,
                actions: action.Actions,
            };
        case CHANGE_SKILLS:
            console.debug(
                `CHANGE_SKILLS in reducer ${JSON.stringify(action, null, 1)}`
            );
            return {
                ...state,
                skills: action.Skills,
            };
        case CHANGE_SPELL_PROFICIENCY:
            console.debug(
                `CHANGE_SPELL_PROFICIENCY in reducer ${JSON.stringify(
                    action,
                    null,
                    1
                )}`
            );
            return {
                ...state,
                spellAttackProficiency: action.SpellProficiency,
            };
        case CHANGE_SPELL_SLOTS:
            console.debug(
                `CHANGE_SPELL_SLOTS in reducer ${JSON.stringify(
                    action,
                    null,
                    1
                )}`
            );
            return {
                ...state,
                spellSlots: action.SpellSlots,
            };
        case UPDATE_SPELL:
            console.debug(
                `UPDATE_SPELL in reducer ${JSON.stringify(action, null, 1)}`
            );
            const spells = state.spells;
            spells[action.SpellType][action.index] = action.Spell;
            console.debug(`Spells will be: ${JSON.stringify(spells)}`);
            return {
                ...state,
                spells,
            };
        default:
            return state;
    }
};

export { playerCharacterReducer };
