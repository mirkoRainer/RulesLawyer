import { AppActions } from "../AllActionTypesAggregated";
import * as ActionTypes from "./PlayerCharacterActionTypes";
import { ActionCreator, Dispatch } from "redux";
import { AbilityScore } from "../../../PF2eCoreLib/AbilityScores";
import { Proficiencies } from "../../../PF2eCoreLib/Proficiencies";
import {
    CHANGE_SAVE_PROFICIENCIES,
    CHANGE_PERCEPTION_PROFICIENCY,
    CHANGE_SPELL_PROFICIENCY,
} from "./ProficiencyActionTypes";
import {
    Saves,
    Shield,
    Armor,
    Movement,
    PF2Action,
    Skill,
    SpellSlot,
    BiographicalData,
    PersonalityData,
    CampaignNotesData,
    Weapon,
    Item,
    InventoryItem,
    WeaponProficiencies,
} from "../../../PF2eCoreLib/PlayerCharacter";
import {
    Spell,
    SpellList,
} from "../../../scenes/CharacterSheet/Encounter/Spells/Components/Spell";
import { Traits } from "../../../PF2eCoreLib/Traits";
import { PlayerCharacterActionTypes } from "./PlayerCharacterActionTypes";
import { iBonus } from "../../../PF2eCoreLib/Bonus";

export const ChangeCharacterName: ActionCreator<PlayerCharacterActionTypes> = (
    name: string
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_CHARACTER_NAME,
    name,
});
export const startChangeCharacterName = (name: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeCharacterName(name));
    };
};

export const ChangePlayerName: ActionCreator<PlayerCharacterActionTypes> = (
    name: string
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_PLAYER_NAME,
    name,
});
export const startChangePlayerName = (name: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangePlayerName(name));
    };
};

export const ChangeAncestry: ActionCreator<PlayerCharacterActionTypes> = (
    ancestry: string
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_ANCESTRY,
    ancestry,
});
export const startChangeAncestry = (ancestry: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeAncestry(ancestry));
    };
};

export const ChangeHeritage: ActionCreator<PlayerCharacterActionTypes> = (
    heritage: string
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_HERITAGE,
    heritage,
});
export const startChangeHeritage = (heritage: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeHeritage(heritage));
    };
};

export const ChangeBackground: ActionCreator<PlayerCharacterActionTypes> = (
    Background: string
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_BACKGROUND,
    Background,
});
export const startChangeBackground = (Background: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeBackground(Background));
    };
};

export const ChangeClass: ActionCreator<PlayerCharacterActionTypes> = (
    Class: string
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_CLASS,
    Class,
});
export const startChangeClass = (Class: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeClass(Class));
    };
};

export const ChangeSubClass: ActionCreator<PlayerCharacterActionTypes> = (
    SubClass: string
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_SUBCLASS,
    SubClass,
});
export const startChangeSubClass = (SubClass: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeSubClass(SubClass));
    };
};

export const ChangeAlignment: ActionCreator<PlayerCharacterActionTypes> = (
    Alignment: string
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_ALIGNMENT,
    Alignment,
});
export const startChangeAlignment = (Alignment: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeAlignment(Alignment));
    };
};

export const ChangeDeity: ActionCreator<PlayerCharacterActionTypes> = (
    Deity: string
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_DEITY,
    Deity,
});
export const startChangeDeity = (Deity: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeDeity(Deity));
    };
};

export const ChangeResistances: ActionCreator<PlayerCharacterActionTypes> = (
    Resistances: string
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_RESISTANCES,
    Resistances,
});
export const startChangeResistances = (Resistances: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeResistances(Resistances));
    };
};

export const ChangeImmunities: ActionCreator<PlayerCharacterActionTypes> = (
    Immunities: string
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_IMMUNITIES,
    Immunities,
});
export const startChangeImmunities = (Immunities: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeImmunities(Immunities));
    };
};

export const ChangeWeaknesses: ActionCreator<PlayerCharacterActionTypes> = (
    Weaknesses: string
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_WEAKNESSES,
    Weaknesses,
});
export const startChangeWeaknesses = (Weaknesses: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeWeaknesses(Weaknesses));
    };
};

export const ChangeConditions: ActionCreator<PlayerCharacterActionTypes> = (
    Conditions: string
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_CONDITIONS,
    Conditions,
});
export const startChangeConditions = (Conditions: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeConditions(Conditions));
    };
};

export const ChangeSenses: ActionCreator<PlayerCharacterActionTypes> = (
    Senses: string
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_SENSES,
    Senses,
});
export const startChangeSenses = (Senses: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeSenses(Senses));
    };
};

export const ChangeLevel: ActionCreator<PlayerCharacterActionTypes> = (
    level: number
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_LEVEL,
    level,
});
export const startChangeLevel = (Level: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeLevel(Level));
    };
};

export const ChangeExperiencePoints: ActionCreator<PlayerCharacterActionTypes> = (
    ExperiencePoints: number
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_EXPERIENCE_POINTS,
    ExperiencePoints,
});
export const startChangeExperiencePoints = (ExperiencePoints: number) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeExperiencePoints(ExperiencePoints));
    };
};

export const ChangeAbilityScore: ActionCreator<PlayerCharacterActionTypes> = (
    AbilityScore: AbilityScore
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_ABILITY_SCORE,
    AbilityScore,
});
export const startChangeAbilityScore = (AbilityScore: AbilityScore) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeAbilityScore(AbilityScore));
    };
};

export const ChangeClassDCProficiency: ActionCreator<PlayerCharacterActionTypes> = (
    ClassDCProficiency: Proficiencies
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_CLASS_DC_PROFICIENCY,
    Proficiency: ClassDCProficiency,
});
export const startChangeClassDCProficiency = (
    ClassDCProficiency: Proficiencies
) => {
    console.debug("startChangeClassDCProficiency");
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeClassDCProficiency(ClassDCProficiency));
    };
};

export const ChangeHitPoints: ActionCreator<PlayerCharacterActionTypes> = (
    HitPointDelta: number,
    RemovesWounded: boolean,
    isCompanion?: boolean,
    companionIndex?: number
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_HIT_POINTS,
    HitPointDelta,
    RemovesWounded,
    isCompanion,
    companionIndex,
});
export const startChangeHitPoints = (
    HitPointDelta: number,
    RemovesWounded: boolean,
    isCompanion?: boolean,
    companionIndex?: number
) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(
            ChangeHitPoints(
                HitPointDelta,
                RemovesWounded,
                isCompanion,
                companionIndex
            )
        );
    };
};

export const ChangeTemporaryHitPoints: ActionCreator<PlayerCharacterActionTypes> = (
    TemporaryHitPoints: number
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_TEMPORARY_HITPOINTS,
    TemporaryHitPoints,
});
export const startChangeTemporaryHitPoints = (delta: number) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeTemporaryHitPoints(delta));
    };
};

export const ChangeDyingValue: ActionCreator<PlayerCharacterActionTypes> = (
    DyingValue: number
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_DYING_VALUE,
    DyingValue,
});
export const startChangeDyingValue = (DyingValue: number) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeDyingValue(DyingValue));
    };
};

export const ChangeWoundedValue: ActionCreator<PlayerCharacterActionTypes> = (
    WoundedValue: number
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_WOUNDED_VALUE,
    WoundedValue,
});
export const startChangeWoundedValue = (WoundedValue: number) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeWoundedValue(WoundedValue));
    };
};

export const ChangeMaxHitPoints: ActionCreator<PlayerCharacterActionTypes> = (
    MaxHitPoints: number
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_MAX_HITPOINTS,
    MaxHitPoints,
});
export const startChangeMaxHitPoints = (MaxHitPoints: number) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeMaxHitPoints(MaxHitPoints));
    };
};

export const ChangeSaveProficiencies: ActionCreator<PlayerCharacterActionTypes> = (
    saves: Saves
): PlayerCharacterActionTypes => ({
    type: CHANGE_SAVE_PROFICIENCIES,
    saves,
});
export const startChangeSaveProficiencies = (saves: Saves) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeSaveProficiencies(saves));
    };
};

export const ChangeShield: ActionCreator<PlayerCharacterActionTypes> = (
    Shield: Shield
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_SHIELD,
    Shield,
});
export const startChangeShield = (Shield: Shield) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeShield(Shield));
    };
};

export const ChangeWornArmor: ActionCreator<PlayerCharacterActionTypes> = (
    WornArmor: Armor
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_WORN_ARMOR,
    WornArmor,
});
export const startChangeWornArmor = (WornArmor: Armor) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeWornArmor(WornArmor));
    };
};

export const ChangePerceptionProficiency: ActionCreator<PlayerCharacterActionTypes> = (
    PerceptionProficiency: Proficiencies
): PlayerCharacterActionTypes => ({
    type: CHANGE_PERCEPTION_PROFICIENCY,
    PerceptionProficiency,
});
export const startChangePerceptionProficiency = (
    PerceptionProficiency: Proficiencies
) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangePerceptionProficiency(PerceptionProficiency));
    };
};

export const ChangeSpeed: ActionCreator<PlayerCharacterActionTypes> = (
    Movements: Movement
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_SPEED,
    Movements,
});
export const startChangeSpeed = (Movements: Movement) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeSpeed(Movements));
    };
};

export const ChangePF2Actions: ActionCreator<PlayerCharacterActionTypes> = (
    PF2Actions: PF2Action[]
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_PC_ACTIONS,
    Actions: PF2Actions,
});
export const startChangePF2Actions = (PF2Actions: PF2Action[]) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangePF2Actions(PF2Actions));
    };
};

export const ChangeSkills: ActionCreator<PlayerCharacterActionTypes> = (
    Skills: Skill[]
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_SKILLS,
    Skills,
});
export const startChangeSkills = (Skills: Skill[]) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeSkills(Skills));
    };
};

export const ChangeSpellProficiency: ActionCreator<PlayerCharacterActionTypes> = (
    SpellProficiency: Proficiencies
): PlayerCharacterActionTypes => ({
    type: CHANGE_SPELL_PROFICIENCY,
    SpellProficiency,
});
export const startChangeSpellProficiency = (
    SpellProficiency: Proficiencies
) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeSpellProficiency(SpellProficiency));
    };
};

export const ChangeSpellSlots: ActionCreator<PlayerCharacterActionTypes> = (
    SpellSlots: SpellSlot[]
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_SPELL_SLOTS,
    SpellSlots,
});
export const startChangeSpellSlots = (SpellSlots: SpellSlot[]) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeSpellSlots(SpellSlots));
    };
};

export const UpdateSpell: ActionCreator<PlayerCharacterActionTypes> = (
    Spell: Spell,
    SpellType: keyof SpellList,
    index: number
): PlayerCharacterActionTypes => ({
    type: ActionTypes.UPDATE_SPELL,
    Spell,
    SpellType,
    index,
});
export const startUpdateSpell = (
    Spell: Spell,
    SpellType: keyof SpellList,
    index: number
) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(UpdateSpell(Spell, SpellType, index));
    };
};

export const AddSpell: ActionCreator<PlayerCharacterActionTypes> = (
    Spell: Spell,
    SpellType: keyof SpellList
): PlayerCharacterActionTypes => ({
    type: ActionTypes.ADD_SPELL,
    Spell,
    SpellType,
});
export const startAddSpell = (Spell: Spell, SpellType: keyof SpellList) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(AddSpell(Spell, SpellType));
    };
};

export const DeleteSpell: ActionCreator<PlayerCharacterActionTypes> = (
    index: number,
    spellType: keyof SpellList
): PlayerCharacterActionTypes => ({
    type: ActionTypes.DELETE_SPELL,
    index,
    spellType,
});
export const startDeleteSpell = (index: number, spellType: keyof SpellList) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(DeleteSpell(index, spellType));
    };
};

export const ChangePCTraits: ActionCreator<PlayerCharacterActionTypes> = (
    PCTraits: (keyof typeof Traits)[]
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_PC_TRAITS,
    PCTraits,
});
export const startChangePCTraits = (PC_TRAITS: (keyof typeof Traits)[]) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangePCTraits(PC_TRAITS));
    };
};

export const ChangeBioData: ActionCreator<PlayerCharacterActionTypes> = (
    BioData: BiographicalData
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_BIO_DATA,
    BioData,
});
export const startChangeBioData = (BioData: BiographicalData) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeBioData(BioData));
    };
};

export const ChangeLanguages: ActionCreator<PlayerCharacterActionTypes> = (
    Languages: string[]
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_LANGUAGES,
    Languages,
});
export const startChangeLanguages = (Languages: string[]) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeLanguages(Languages));
    };
};

export const ChangePersonality: ActionCreator<PlayerCharacterActionTypes> = (
    Personality: PersonalityData
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_PERSONALITY,
    Personality,
});
export const startChangePersonality = (Personality: PersonalityData) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangePersonality(Personality));
    };
};

export const ChangeCampaignNotes: ActionCreator<PlayerCharacterActionTypes> = (
    CampaignNotes: CampaignNotesData
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_CAMPAIGN_NOTES,
    CampaignNotes,
});
export const startChangeCampaignNotes = (CampaignNotes: CampaignNotesData) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeCampaignNotes(CampaignNotes));
    };
};

export const ChangeItem: ActionCreator<PlayerCharacterActionTypes> = (
    NewItem: InventoryItem
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_ITEM,
    Item: NewItem,
});
export const startChangeItem = (Item: InventoryItem) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeItem(Item));
    };
};

export const ChangeInventory: ActionCreator<PlayerCharacterActionTypes> = (
    InventoryItems: InventoryItem[]
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_INVENTORY_ITEMS,
    InventoryItems,
});
export const startChangeInventory = (InventoryItems: InventoryItem[]) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeInventory(InventoryItems));
    };
};

export const AddOrRemoveBonus: ActionCreator<PlayerCharacterActionTypes> = (
    bonus: iBonus,
    remove: boolean
): PlayerCharacterActionTypes => ({
    type: ActionTypes.ADD_OR_REMOVE_BONUS,
    bonus,
    remove,
});
export const startAddOrRemoveBonus = (bonus: iBonus, remove: boolean) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(AddOrRemoveBonus(bonus, remove));
    };
};

export const ChangeWeaponProficiencies: ActionCreator<PlayerCharacterActionTypes> = (
    WeaponProficiencies: WeaponProficiencies
): PlayerCharacterActionTypes => ({
    type: ActionTypes.CHANGE_WEAPON_PROFICIENCIES,
    WeaponProficiencies,
});
export const startChangeWeaponProficiencies = (
    WeaponProficiencies: WeaponProficiencies
) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeWeaponProficiencies(WeaponProficiencies));
    };
};
