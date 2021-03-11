import { Action } from "redux";
import { AbilityScore } from "../../../PF2eCoreLib/AbilityScores";
import { Proficiencies } from "../../../PF2eCoreLib/Proficiencies";
import { ProficiencyActionTypes } from "./ProficiencyActionTypes";
import {
    Shield,
    Armor,
    Movement,
    PF2Action,
    Skill,
    SpellSlot,
    BiographicalData,
    PersonalityData,
    CampaignNotesData,
    Item,
    Weapon,
    InventoryItem,
    WeaponProficiencies,
} from "../../../PF2eCoreLib/PlayerCharacter";
import {
    Spell,
    SpellList,
} from "../../../scenes/CharacterSheet/Encounter/Spells/Components/Spell";
import { Traits } from "../../../PF2eCoreLib/Traits";
import { iBonus } from "../../../PF2eCoreLib/Bonus";

export const CHANGE_CHARACTER_NAME = "CHANGE_CHARACTER_NAME";
export interface ChangeCharacterNameAction extends Action<string> {
    type: typeof CHANGE_CHARACTER_NAME;
    name: string;
}

export const CHANGE_PLAYER_NAME = "CHANGE_PLAYER_NAME";
export interface ChangePlayerNameAction extends Action<string> {
    type: typeof CHANGE_PLAYER_NAME;
    name: string;
}

export const CHANGE_ANCESTRY = "CHANGE_ANCESTRY";
export interface ChangeAncestryAction extends Action<string> {
    type: typeof CHANGE_ANCESTRY;
    ancestry: string;
}

export const CHANGE_HERITAGE = "CHANGE_HERITAGE";
export interface ChangeHeritageAction extends Action<string> {
    type: typeof CHANGE_HERITAGE;
    heritage: string;
}

export const CHANGE_BACKGROUND = "CHANGE_BACKGROUND";
export interface ChangeBackgroundAction extends Action<string> {
    type: typeof CHANGE_BACKGROUND;
    Background: string;
}

export const CHANGE_CLASS = "CHANGE_CLASS";
export interface ChangeClassAction extends Action<string> {
    type: typeof CHANGE_CLASS;
    Class: string;
}

export const CHANGE_SUBCLASS = "CHANGE_SUBCLASS";
export interface ChangeSubClassAction extends Action<string> {
    type: typeof CHANGE_SUBCLASS;
    SubClass: string;
}

export const CHANGE_ALIGNMENT = "CHANGE_ALIGNMENT";
export interface ChangeAlignmentAction extends Action<string> {
    type: typeof CHANGE_ALIGNMENT;
    Alignment: string;
}

export const CHANGE_DEITY = "CHANGE_DEITY";
export interface ChangeDeityAction extends Action<string> {
    type: typeof CHANGE_DEITY;
    Deity: string;
}

export const CHANGE_RESISTANCES = "CHANGE_RESISTANCES";
export interface ChangeResistancesAction extends Action<string> {
    type: typeof CHANGE_RESISTANCES;
    Resistances: string;
}

export const CHANGE_IMMUNITIES = "CHANGE_IMMUNITIES";
export interface ChangeImmunitiesAction extends Action<string> {
    type: typeof CHANGE_IMMUNITIES;
    Immunities: string;
}

export const CHANGE_WEAKNESSES = "CHANGE_WEAKNESSES";
export interface ChangeWeaknessesAction extends Action<string> {
    type: typeof CHANGE_WEAKNESSES;
    Weaknesses: string;
}

export const CHANGE_CONDITIONS = "CHANGE_CONDITIONS";
export interface ChangeConditionsAction extends Action<string> {
    type: typeof CHANGE_CONDITIONS;
    Conditions: string;
}

export const CHANGE_SENSES = "CHANGE_SENSES";
export interface ChangeSensesAction extends Action<string> {
    type: typeof CHANGE_SENSES;
    Senses: string;
}

export const CHANGE_LEVEL = "CHANGE_LEVEL";
export interface ChangeLevelAction extends Action<string> {
    type: typeof CHANGE_LEVEL;
    level: number;
}

export const CHANGE_EXPERIENCE_POINTS = "CHANGE_EXPERIENCE_POINTS";
export interface ChangeExperiencePointsAction extends Action<string> {
    type: typeof CHANGE_EXPERIENCE_POINTS;
    ExperiencePoints: number;
}

export const CHANGE_ABILITY_SCORE = "CHANGE_ABILITY_SCORE";
export interface ChangeAbilityScoreAction extends Action<string> {
    type: typeof CHANGE_ABILITY_SCORE;
    AbilityScore: AbilityScore;
}

export const CHANGE_CLASS_DC_PROFICIENCY = "CHANGE_CLASS_DC_PROFICIENCY";
export interface ChangeClassDCProficiency extends Action<string> {
    type: typeof CHANGE_CLASS_DC_PROFICIENCY;
    Proficiency: Proficiencies;
}

export const CHANGE_HIT_POINTS = "CHANGE_HIT_POINTS";
export interface ChangeHitPointsAction extends Action<string> {
    type: typeof CHANGE_HIT_POINTS;
    HitPointDelta: number;
    RemovesWounded: boolean;
    isCompanion?: boolean;
    companionIndex?: number;
}

export const CHANGE_TEMPORARY_HITPOINTS = "CHANGE_TEMPORARY_HITPOINTS";
export interface ChangeTemporaryHitPointsAction extends Action<string> {
    type: typeof CHANGE_TEMPORARY_HITPOINTS;
    TemporaryHitPoints: number;
}

export const CHANGE_DYING_VALUE = "CHANGE_DYING_VALUE";
export interface ChangeDyingValueAction extends Action<string> {
    type: typeof CHANGE_DYING_VALUE;
    DyingValue: number;
}

export const CHANGE_WOUNDED_VALUE = "CHANGE_WOUNDED_VALUE";
export interface ChangeWoundedAction extends Action<string> {
    type: typeof CHANGE_WOUNDED_VALUE;
    WoundedValue: number;
}

export const CHANGE_MAX_HITPOINTS = "CHANGE_MAX_HITPOINTS";
export interface ChangeMaxHitPointsAction extends Action<string> {
    type: typeof CHANGE_MAX_HITPOINTS;
    MaxHitPoints: number;
}

export const CHANGE_SHIELD = "CHANGE_SHIELD";
export interface ChangeShieldAction extends Action<string> {
    type: typeof CHANGE_SHIELD;
    Shield: Shield;
}

export const CHANGE_WORN_ARMOR = "CHANGE_WORN_ARMOR";
export interface ChangeWornArmorAction extends Action<string> {
    type: typeof CHANGE_WORN_ARMOR;
    WornArmor: Armor;
}

export const CHANGE_SPEED = "CHANGE_SPEED";
export interface ChangeSpeedAction extends Action<string> {
    type: typeof CHANGE_SPEED;
    Movements: Movement;
}

export const CHANGE_PC_ACTIONS = "CHANGE_PC_ACTIONS";
export interface ChangePF2ActionsAction extends Action<string> {
    type: typeof CHANGE_PC_ACTIONS;
    Actions: PF2Action[];
}

export const CHANGE_SKILLS = "CHANGE_SKILLS";
export interface ChangeSkillsAction extends Action<string> {
    type: typeof CHANGE_SKILLS;
    Skills: Skill[];
}

export const CHANGE_SPELL_SLOTS = "CHANGE_SPELL_SLOTS";
export interface ChangeSpellSlotsAction extends Action<string> {
    type: typeof CHANGE_SPELL_SLOTS;
    SpellSlots: SpellSlot[];
}

export const UPDATE_SPELL = "UPDATE_SPELL";
export interface UpdateSpellAction extends Action<string> {
    type: typeof UPDATE_SPELL;
    Spell: Spell;
    SpellType: keyof SpellList;
    index: number;
}

export const ADD_SPELL = "ADD_SPELL";
export interface AddSpellAction extends Action<string> {
    type: typeof ADD_SPELL;
    Spell: Spell;
    SpellType: keyof SpellList;
}

export const DELETE_SPELL = "DELETE_SPELL";
export interface DeleteSpellAction extends Action<string> {
    type: typeof DELETE_SPELL;
    index: number;
    spellType: keyof SpellList;
}

export const CHANGE_PC_TRAITS = "CHANGE_PC_TRAITS";
export interface ChangePCTraitsAction extends Action<string> {
    type: typeof CHANGE_PC_TRAITS;
    PCTraits: (keyof typeof Traits)[];
}

export const CHANGE_BIO_DATA = "CHANGE_BIO_DATA";
export interface ChangeBioDataAction extends Action<string> {
    type: typeof CHANGE_BIO_DATA;
    BioData: BiographicalData;
}

export const CHANGE_LANGUAGES = "CHANGE_LANGUAGES";
export interface ChangeLanguagesAction extends Action<string> {
    type: typeof CHANGE_LANGUAGES;
    Languages: string[];
}

export const CHANGE_PERSONALITY = "CHANGE_PERSONALITY";
export interface ChangePersonalityAction extends Action<string> {
    type: typeof CHANGE_PERSONALITY;
    Personality: PersonalityData;
}

export const CHANGE_CAMPAIGN_NOTES = "CHANGE_CAMPAIGN_NOTES";
export interface ChangeCampaignNotesAction extends Action<string> {
    type: typeof CHANGE_CAMPAIGN_NOTES;
    CampaignNotes: CampaignNotesData;
}

export const CHANGE_ITEM = "CHANGE_ITEM";
export interface ChangeItemAction extends Action<string> {
    type: typeof CHANGE_ITEM;
    Item: InventoryItem;
}

export const CHANGE_INVENTORY_ITEMS = "CHANGE_INVENTORY_ITEMS";
export interface ChangeInventoryAction extends Action<string> {
    type: typeof CHANGE_INVENTORY_ITEMS;
    InventoryItems: InventoryItem[];
}

export const ADD_OR_REMOVE_BONUS = "ADD_OR_REMOVE_BONUS";
export interface AddOrRemoveBonusAction extends Action<string> {
    type: typeof ADD_OR_REMOVE_BONUS;
    bonus: iBonus;
    remove: boolean;
}

export const CHANGE_WEAPON_PROFICIENCIES = "CHANGE_WEAPON_PROFICIENCIES";
export interface ChangeWeaponProficienciesAction extends Action<string> {
    type: typeof CHANGE_WEAPON_PROFICIENCIES;
    WeaponProficiencies: WeaponProficiencies;
}

export type PlayerCharacterActionTypes =
    | ChangeAlignmentAction
    | ChangeAncestryAction
    | ChangeBackgroundAction
    | ChangeCharacterNameAction
    | ChangeClassAction
    | ChangeConditionsAction
    | ChangeDeityAction
    | ChangeHeritageAction
    | ChangeImmunitiesAction
    | ChangePlayerNameAction
    | ChangeResistancesAction
    | ChangeSensesAction
    | ChangeSubClassAction
    | ChangeWeaknessesAction
    | ChangeLevelAction
    | ChangeExperiencePointsAction
    | ChangeAbilityScoreAction
    | ChangeClassDCProficiency
    | ChangeHitPointsAction
    | ChangeTemporaryHitPointsAction
    | ChangeDyingValueAction
    | ChangeWoundedAction
    | ChangeMaxHitPointsAction
    | ProficiencyActionTypes
    | ChangeShieldAction
    | ChangeWornArmorAction
    | ChangeSpeedAction
    | ChangePF2ActionsAction
    | ChangeSkillsAction
    | ChangeSpellSlotsAction
    | UpdateSpellAction
    | AddSpellAction
    | DeleteSpellAction
    | ChangePCTraitsAction
    | ChangeBioDataAction
    | ChangeLanguagesAction
    | ChangePersonalityAction
    | ChangeCampaignNotesAction
    | ChangeItemAction
    | ChangeInventoryAction
    | AddOrRemoveBonusAction
    | ChangeWeaponProficienciesAction; // | SomeOtherAction
