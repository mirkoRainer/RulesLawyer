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
    ADD_OR_REMOVE_BONUS,
    CHANGE_WEAPON_PROFICIENCIES,
    DELETE_COMPANION,
    ADD_COMPANION,
    CHANGE_COMPANION,
    CHANGE_COMPANION_TEMP_HP,
    CHANGE_COMPANION_HP,
} from "../actions/PlayerCharacter/PlayerCharacterActionTypes";
import PlayerCharacterData, {
    DEFAULT_COMPANION,
    PlayerCharacter,
} from "../../PF2eCoreLib/PlayerCharacter";
import { UpdateAbilityScore } from "../../PF2eCoreLib/AbilityScores";
import { ResolveHitPoints } from "../../PF2eCoreLib/HealthData";
import {
    CHANGE_SAVE_PROFICIENCIES,
    CHANGE_PERCEPTION_PROFICIENCY,
    CHANGE_SPELL_PROFICIENCY,
} from "../actions/PlayerCharacter/ProficiencyActionTypes";
import _ from "lodash";
import {
    InsertOrUpdateBonus,
    RemoveBonus,
    UpdateItemInInventory,
} from "./reducerHelper";
import { startDeleteSpell } from "../actions/PlayerCharacter/PlayerCharacterActions";

const defaultState: PlayerCharacterData = new PlayerCharacter().data;

const playerCharacterReducer = (
    state = defaultState,
    action: PlayerCharacterActionTypes
): PlayerCharacterData => {
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
            if (action.isCompanion && action.companionIndex !== undefined) {
                const newCompanion = state.companions[action.companionIndex];
                newCompanion.hitPoints = ResolveHitPoints(
                    newCompanion.hitPoints,
                    action.HitPointDelta,
                    action.RemovesWounded
                );
                const newCompanions = state.companions.map(
                    (companion, index) => {
                        if (action.companionIndex === index) {
                            return {
                                ...companion,
                                hitPoints: newCompanion.hitPoints,
                            };
                        }
                        return companion;
                    }
                );
                return {
                    ...state,
                    companions: newCompanions,
                };
            }
            if (action.isCompanion && !action.companionIndex) {
                console.error("No companion index found. Changing nothing.");
                return { ...state };
            }
            return {
                ...state,
                hitPoints: ResolveHitPoints(
                    state.hitPoints,
                    action.HitPointDelta,
                    action.RemovesWounded
                ),
            };
        case CHANGE_TEMPORARY_HITPOINTS:
            console.debug(
                `CHANGE_TEMPORARY_HITPOINTS in reducer ${JSON.stringify(
                    action,
                    null,
                    1
                )}`
            );
            if (action.isCompanion && action.companionIndex !== undefined) {
                const newCompanions = state.companions.map(
                    (companion, index) => {
                        if (action.companionIndex === index) {
                            return {
                                ...companion,
                                hitPoints: {
                                    ...companion.hitPoints,
                                    temporaryHitPoints:
                                        action.TemporaryHitPoints,
                                },
                            };
                        }
                        return companion;
                    }
                );
                return {
                    ...state,
                    companions: newCompanions,
                };
            }
            if (action.isCompanion && !action.companionIndex) {
                console.error("No companion index found. Changing nothing.");
                return { ...state };
            }
            return {
                ...state,
                hitPoints: {
                    ...state.hitPoints,
                    temporaryHitPoints: action.TemporaryHitPoints,
                },
            };
        case CHANGE_DYING_VALUE:
            console.debug(
                `CHANGE_DYING_VALUE in reducer. ${JSON.stringify(
                    action,
                    null,
                    1
                )}`
            );
            if (action.isCompanion && action.companionIndex !== undefined) {
                const newCompanions = state.companions.map(
                    (companion, index) => {
                        if (action.companionIndex === index) {
                            return {
                                ...companion,
                                hitPoints: {
                                    ...companion.hitPoints,
                                    dying: action.DyingValue,
                                },
                            };
                        }
                        return companion;
                    }
                );
                return {
                    ...state,
                    companions: newCompanions,
                };
            }
            return {
                ...state,
                hitPoints: {
                    ...state.hitPoints,
                    dying: action.DyingValue,
                },
            };
        case CHANGE_WOUNDED_VALUE:
            console.debug(
                `CHANGE_WOUNDED_VALUE in reducer. ${JSON.stringify(
                    action,
                    null,
                    1
                )}`
            );
            if (action.isCompanion && action.companionIndex !== undefined) {
                const newCompanions = state.companions.map(
                    (companion, index) => {
                        if (action.companionIndex === index) {
                            return {
                                ...companion,
                                hitPoints: {
                                    ...companion.hitPoints,
                                    wounded: action.WoundedValue,
                                },
                            };
                        }
                        return companion;
                    }
                );
                return {
                    ...state,
                    companions: newCompanions,
                };
            }
            return {
                ...state,
                hitPoints: {
                    ...state.hitPoints,
                    wounded: action.WoundedValue,
                },
            };
        case CHANGE_MAX_HITPOINTS:
            console.debug(
                `CHANGE_MAX_HITPOINTS in reducer. ${JSON.stringify(
                    action,
                    null,
                    1
                )}`
            );
            if (action.isCompanion && action.companionIndex !== undefined) {
                const newCompanions = state.companions.map(
                    (companion, index) => {
                        if (action.companionIndex === index) {
                            return {
                                ...companion,
                                hitPoints: {
                                    ...companion.hitPoints,
                                    maxHitPoints: action.MaxHitPoints,
                                },
                            };
                        }
                        return companion;
                    }
                );
                return {
                    ...state,
                    companions: newCompanions,
                };
            }
            return {
                ...state,
                hitPoints: {
                    ...state.hitPoints,
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
        case ADD_OR_REMOVE_BONUS:
            console.debug(
                `ADD_OR_REMOVE_BONUS in reducer ${JSON.stringify(
                    action,
                    null,
                    1
                )}`
            );
            return {
                ...state,
                bonuses: action.remove
                    ? RemoveBonus(action.bonus, state.bonuses)
                    : InsertOrUpdateBonus(action.bonus, state.bonuses),
            };
        case CHANGE_WEAPON_PROFICIENCIES:
            console.debug(
                `CHANGE_WEAPON_PROFICIENCIES in reducer ${JSON.stringify(
                    action,
                    null,
                    1
                )}`
            );
            return {
                ...state,
                weaponProficiencies: action.WeaponProficiencies,
            };
        case DELETE_COMPANION:
            console.debug(
                `DELETE_COMPANION in reducer ${JSON.stringify(action, null, 1)}`
            );
            return {
                ...state,
                companions: state.companions.filter((companion) => {
                    return (
                        companion.metaData.id.toString() !==
                        action.CompanionId.toString()
                    );
                }),
            };
        case ADD_COMPANION:
            console.debug(
                `ADD_COMPANION in reducer ${JSON.stringify(action, null, 1)}`
            );
            return {
                ...state,
                companions: _.concat(state.companions, {
                    ...DEFAULT_COMPANION,
                    metaData: { id: action.id },
                }),
            };
        case CHANGE_COMPANION:
            console.debug(
                `CHANGE_COMPANION in reducer ${JSON.stringify(action, null, 1)}`
            );
            return {
                ...state,
                companions: state.companions.map((companion) => {
                    if (
                        companion.metaData.id ===
                        action.NewCompanion.metaData.id
                    ) {
                        return action.NewCompanion;
                    } else {
                        return companion;
                    }
                }),
            };
        case CHANGE_COMPANION_TEMP_HP:
            console.debug(
                `CHANGE_COMPANION_TEMP_HP in reducer ${JSON.stringify(
                    action,
                    null,
                    1
                )}`
            );
            return {
                ...state,
                companions: state.companions.map((companion) => {
                    if (
                        companion.metaData.id ===
                        state.companions[action.companionIndex].metaData.id
                    ) {
                        return {
                            ...companion,
                            hitPoints: {
                                ...companion.hitPoints,
                                temporaryHitPoints: action.newTempHp,
                            },
                        };
                    } else {
                        return companion;
                    }
                }),
            };
        case CHANGE_COMPANION_HP:
            console.debug(
                `CHANGE_COMPANION_HP in reducer ${JSON.stringify(
                    action,
                    null,
                    1
                )}`
            );
            return {
                ...state,
                companions: state.companions.map((companion) => {
                    if (companion.metaData.id.equals(action.companionId)) {
                        return {
                            ...companion,
                            hitPoints: action.newHp,
                        };
                    } else {
                        return companion;
                    }
                }),
            };

        default:
            return state;
    }
};

export { playerCharacterReducer };
