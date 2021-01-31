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
    UPDATE_SPELL,
    ADD_SPELL,
    DELETE_SPELL,
    CHANGE_PC_TRAITS,
    CHANGE_BIO_DATA,
    CHANGE_CAMPAIGN_NOTES,
    CHANGE_LANGUAGES,
    CHANGE_PERSONALITY,
    CHANGE_ITEM,
    CHANGE_INVENTORY_ITEMS,
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
import { InsertOrUpdateBonus, UpdateItemInInventory } from "./reducerHelper";
import { iBonus } from "../../PF2eCoreLib/Bonus";

const defaultState: PlayerCharacter = examplePlayerCharacter;

const playerCharacterReducer = (
    state = defaultState,
    action: PlayerCharacterActionTypes
): PlayerCharacter => {
    switch (action.type) {
        case CHANGE_CHARACTER_NAME:
            return {
                ...state,
                name: action.name,
            };
        case CHANGE_PLAYER_NAME:
            return {
                ...state,
                playerName: action.name,
            };
        case CHANGE_ANCESTRY:
            return {
                ...state,
                ancestry: {
                    ...state.ancestry,
                    name: action.ancestry,
                },
            };
        case CHANGE_HERITAGE:
            return {
                ...state,
                ancestry: {
                    ...state.ancestry,
                    heritage: action.heritage,
                },
            };
        case CHANGE_BACKGROUND:
            return {
                ...state,
                background: {
                    ...state.background,
                    name: action.Background,
                },
            };
        case CHANGE_ALIGNMENT:
            return {
                ...state,
                alignment: action.Alignment,
            };
        case CHANGE_DEITY:
            return {
                ...state,
                deity: action.Deity,
            };
        case CHANGE_RESISTANCES:
            return {
                ...state,
                resistances: action.Resistances,
            };
        case CHANGE_IMMUNITIES:
            return {
                ...state,
                immunities: action.Immunities,
            };
        case CHANGE_WEAKNESSES:
            return {
                ...state,
                weakness: action.Weaknesses,
            };
        case CHANGE_CONDITIONS:
            return {
                ...state,
                conditions: action.Conditions,
            };
        case CHANGE_SENSES:
            return {
                ...state,
                senses: action.Senses,
            };
        case CHANGE_LEVEL:
            return {
                ...state,
                level: action.level,
            };
        case CHANGE_EXPERIENCE_POINTS:
            return {
                ...state,
                experiencePoints: action.ExperiencePoints,
            };
        case CHANGE_ABILITY_SCORE:
            return {
                ...state,
                abilityScores: UpdateAbilityScore(
                    action.AbilityScore,
                    state.abilityScores
                ),
            };
        case CHANGE_CLASS_DC_PROFICIENCY:
            return {
                ...state,
                pcClass: {
                    ...state.pcClass,
                    proficiency: action.Proficiency,
                },
            };
        case CHANGE_HIT_POINTS:
            console.debug("CHANGE_HIT_POINTS");
            console.debug(`action: ${JSON.stringify(action, null, 1)}`);
            return {
                ...state,
                hitPoint: ResolveHitPoints(
                    state.hitPoint,
                    action.HitPointDelta,
                    action.RemovesWounded
                ),
            };
        case CHANGE_TEMPORARY_HITPOINTS:
            console.debug("CHANGE_TEMPORARY_HITPOINTS");
            return {
                ...state,
                hitPoint: {
                    ...state.hitPoint,
                    temporaryHitPoints: action.TemporaryHitPoints,
                },
            };
        case CHANGE_DYING_VALUE:
            console.debug(
                `CHANGE_DYING_VALUE in reducer. ${action.DyingValue}`
            );
            return {
                ...state,
                hitPoint: {
                    ...state.hitPoint,
                    dying: action.DyingValue,
                },
            };
        case CHANGE_WOUNDED_VALUE:
            console.debug(
                `CHANGE_WOUNDED_VALUE in reducer. ${action.WoundedValue}`
            );
            return {
                ...state,
                hitPoint: {
                    ...state.hitPoint,
                    wounded: action.WoundedValue,
                },
            };
        case CHANGE_MAX_HITPOINTS:
            console.debug(
                `CHANGE_MAX_HITPOINTS in reducer. ${action.MaxHitPoints}`
            );
            return {
                ...state,
                hitPoint: {
                    ...state.hitPoint,
                    maxHitPoints: action.MaxHitPoints,
                },
            };
        case CHANGE_SAVE_PROFICIENCIES:
            console.debug(
                `CHANGE_SAVE_PROFICIENCIES in reducer. ${JSON.stringify(
                    action.saves,
                    null,
                    1
                )}`
            );
            return {
                ...state,
                saves: action.saves,
            };
        case CHANGE_SHIELD:
            console.debug(
                `SHIELD in reducer. ${JSON.stringify(action.Shield, null, 1)}`
            );
            return {
                ...state,
                inventory: {
                    ...state.inventory,
                    items: UpdateItemInInventory(
                        action.Shield,
                        state.inventory.items
                    ),
                },
            };
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
                bonuses: InsertOrUpdateBonus(
                    action.WornArmor.acBonus,
                    state.bonuses
                ),
                inventory: {
                    ...state.inventory,
                    items: UpdateItemInInventory(
                        action.WornArmor,
                        state.inventory.items
                    ),
                },
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
            state.spells[action.SpellType][action.index] = action.Spell;
            console.debug(`Spells will be: ${JSON.stringify(state.spells)}`);
            return {
                ...state,
                spells: state.spells,
            };
        case ADD_SPELL:
            console.debug(
                `ADD_SPELL in reducer ${JSON.stringify(action, null, 1)}`
            );
            state.spells[action.SpellType].push(action.Spell);
            return {
                ...state,
                spells: state.spells,
            };
        case DELETE_SPELL:
            console.debug(
                `DELETE_SPELL in reducer ${JSON.stringify(action, null, 1)}`
            );
            state.spells[action.spellType].splice(action.index, 1);
            return {
                ...state,
                spells: state.spells,
            };
        case CHANGE_PC_TRAITS:
            console.debug(
                `CHANGE_PC_TRAITS in reducer ${JSON.stringify(action, null, 1)}`
            );
            return {
                ...state,
                traits: action.PCTraits,
            };
        case CHANGE_BIO_DATA:
            console.debug(
                `CHANGE_BIO_DATA in reducer ${JSON.stringify(action, null, 1)}`
            );
            return {
                ...state,
                biographicalData: action.BioData,
            };
        case CHANGE_LANGUAGES:
            console.debug(
                `CHANGE_LANGUAGES in reducer ${JSON.stringify(action, null, 1)}`
            );
            return {
                ...state,
                languages: action.Languages,
            };
        case CHANGE_PERSONALITY:
            console.debug(
                `CHANGE_PERSONALITY in reducer ${JSON.stringify(
                    action,
                    null,
                    1
                )}`
            );
            return {
                ...state,
                personalityData: action.Personality,
            };
        case CHANGE_CAMPAIGN_NOTES:
            console.debug(
                `CHANGE_CAMPAIGN_NOTES in reducer ${JSON.stringify(
                    action,
                    null,
                    1
                )}`
            );
            return {
                ...state,
                campaignNotesData: action.CampaignNotes,
            };
        case CHANGE_ITEM:
            console.debug(
                `CHANGE_ITEM in reducer ${JSON.stringify(action, null, 1)}`
            );
            return {
                ...state,
                inventory: {
                    ...state.inventory,
                    items: UpdateItemInInventory(
                        action.Item,
                        state.inventory.items
                    ),
                },
            };
        case CHANGE_INVENTORY_ITEMS:
            console.debug(
                `CHANGE_INVENTORY in reducer ${JSON.stringify(action, null, 1)}`
            );
            return {
                ...state,
                inventory: {
                    ...state.inventory,
                    items: action.InventoryItems,
                },
            };

        default:
            return state;
    }
};

export { playerCharacterReducer };
