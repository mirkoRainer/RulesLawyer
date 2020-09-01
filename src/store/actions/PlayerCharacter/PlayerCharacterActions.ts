import { AppActions } from "../AllActionTypesAggregated";
import { CHANGE_CHARACTER_NAME, CHANGE_PLAYER_NAME, PlayerCharacterActionTypes, CHANGE_ANCESTRY, CHANGE_HERITAGE, CHANGE_BACKGROUND, CHANGE_CLASS, CHANGE_SUBCLASS, CHANGE_ALIGNMENT, CHANGE_DEITY, CHANGE_NOTES, CHANGE_IMMUNITIES, CHANGE_WEAKNESSES, CHANGE_CONDITIONS, CHANGE_SENSES, CHANGE_RESISTANCES, CHANGE_LEVEL, CHANGE_EXPERIENCE_POINTS, CHANGE_ABILITY_SCORE, CHANGE_CLASS_DC_PROFICIENCY, CHANGE_HIT_POINTS, CHANGE_TEMPORARY_HITPOINTS, CHANGE_DYING_VALUE, CHANGE_WOUNDED_VALUE, CHANGE_MAX_HITPOINTS, CHANGE_SHIELD, CHANGE_WORN_ARMOR, CHANGE_SPEED, CHANGE_OTHER_MOVEMENTS } from "./PlayerCharacterActionTypes";
import { ActionCreator, Dispatch } from "redux";
import { AbilityScore } from "../../../PF2eCoreLib/AbilityScores";
import { Proficiencies } from "../../../PF2eCoreLib/Proficiencies";
import { CHANGE_SAVE_PROFICIENCIES, CHANGE_PERCEPTION_PROFICIENCY } from "./ProficiencyActionTypes";
import { Saves, Shield, WornArmor, Movement } from "../../../PF2eCoreLib/PlayerCharacter";

export const ChangeCharacterName: ActionCreator<PlayerCharacterActionTypes> = (name: string): PlayerCharacterActionTypes => ({  
    type: CHANGE_CHARACTER_NAME, 
    name 
});
export const startChangeCharacterName = (name: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeCharacterName(name));
    };
};

export const ChangePlayerName: ActionCreator<PlayerCharacterActionTypes> = (name: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_PLAYER_NAME, 
    name 
});
export const startChangePlayerName = (name: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangePlayerName(name));
    };
};

export const ChangeAncestry: ActionCreator<PlayerCharacterActionTypes> = (ancestry: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_ANCESTRY, 
    ancestry 
});
export const startChangeAncestry = (ancestry: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeAncestry(ancestry));
    };
};

export const ChangeHeritage: ActionCreator<PlayerCharacterActionTypes> = (heritage: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_HERITAGE, 
    heritage 
});
export const startChangeHeritage = (heritage: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeHeritage(heritage));
    };
};

export const ChangeBackground: ActionCreator<PlayerCharacterActionTypes> = (Background: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_BACKGROUND, 
    Background 
});
export const startChangeBackground = (Background: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeBackground(Background));
    };
};

export const ChangeClass: ActionCreator<PlayerCharacterActionTypes> = (Class: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_CLASS, 
    Class 
});
export const startChangeClass = (Class: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeClass(Class));
    };
};

export const ChangeSubClass: ActionCreator<PlayerCharacterActionTypes> = (SubClass: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_SUBCLASS, 
    SubClass 
});
export const startChangeSubClass = (SubClass: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeSubClass(SubClass));
    };
};

export const ChangeAlignment: ActionCreator<PlayerCharacterActionTypes> = (Alignment: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_ALIGNMENT,
    Alignment 
});
export const startChangeAlignment = (Alignment: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeAlignment(Alignment));
    };
};

export const ChangeDeity: ActionCreator<PlayerCharacterActionTypes> = (Deity: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_DEITY,
    Deity 
});
export const startChangeDeity = (Deity: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeDeity(Deity));
    };
};

export const ChangeNotes: ActionCreator<PlayerCharacterActionTypes> = (Notes: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_NOTES,
    Notes 
});
export const startChangeNotes = (Notes: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeNotes(Notes));
    };
};

export const ChangeResistances: ActionCreator<PlayerCharacterActionTypes> = (Resistances: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_RESISTANCES,
    Resistances 
});
export const startChangeResistances = (Resistances: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeResistances(Resistances));
    };
};

export const ChangeImmunities: ActionCreator<PlayerCharacterActionTypes> = (Immunities: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_IMMUNITIES,
    Immunities 
});
export const startChangeImmunities = (Immunities: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeImmunities(Immunities));
    };
};

export const ChangeWeaknesses: ActionCreator<PlayerCharacterActionTypes> = (Weaknesses: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_WEAKNESSES,
    Weaknesses 
});
export const startChangeWeaknesses = (Weaknesses: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeWeaknesses(Weaknesses));
    };
};

export const ChangeConditions: ActionCreator<PlayerCharacterActionTypes> = (Conditions: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_CONDITIONS,
    Conditions 
});
export const startChangeConditions = (Conditions: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeConditions(Conditions));
    };
};

export const ChangeSenses: ActionCreator<PlayerCharacterActionTypes> = (Senses: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_SENSES,
    Senses 
});
export const startChangeSenses = (Senses: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeSenses(Senses));
    };
};

export const ChangeLevel: ActionCreator<PlayerCharacterActionTypes> = (Level: number): PlayerCharacterActionTypes => ({ 
    type: CHANGE_LEVEL,
    Level 
});
export const startChangeLevel = (Level: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeLevel(Level));
    };
};

export const ChangeExperiencePoints: ActionCreator<PlayerCharacterActionTypes> = (ExperiencePoints: number): PlayerCharacterActionTypes => ({ 
    type: CHANGE_EXPERIENCE_POINTS,
    ExperiencePoints 
});
export const startChangeExperiencePoints = (ExperiencePoints: number) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeExperiencePoints(ExperiencePoints));
    };
};

export const ChangeAbilityScore: ActionCreator<PlayerCharacterActionTypes> = (AbilityScore: AbilityScore): PlayerCharacterActionTypes => ({ 
    type: CHANGE_ABILITY_SCORE,
    AbilityScore 
});
export const startChangeAbilityScore = (AbilityScore: AbilityScore) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeAbilityScore(AbilityScore));
    };
};

export const ChangeClassDCProficiency: ActionCreator<PlayerCharacterActionTypes> = (ClassDCProficiency: Proficiencies): PlayerCharacterActionTypes => ({ 
    type: CHANGE_CLASS_DC_PROFICIENCY,
    Proficiency: ClassDCProficiency 
});
export const startChangeClassDCProficiency = (ClassDCProficiency: Proficiencies) => {
    console.debug("startChangeClassDCProficiency");
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeClassDCProficiency(ClassDCProficiency));
    };
};

export const ChangeHitPoints: ActionCreator<PlayerCharacterActionTypes> = (HitPointDelta: number, RemovesWounded: boolean): PlayerCharacterActionTypes => ({ 
    type: CHANGE_HIT_POINTS,
    HitPointDelta,
    RemovesWounded
});
export const startChangeHitPoints = (HitPointDelta: number, RemovesWounded: boolean) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeHitPoints(HitPointDelta, RemovesWounded));
    };
};

export const ChangeTemporaryHitPoints: ActionCreator<PlayerCharacterActionTypes> = (TemporaryHitPoints: number): PlayerCharacterActionTypes => ({ 
    type: CHANGE_TEMPORARY_HITPOINTS,
    TemporaryHitPoints
});
export const startChangeTemporaryHitPoints = (delta: number) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeTemporaryHitPoints(delta));
    };
};

export const ChangeDyingValue: ActionCreator<PlayerCharacterActionTypes> = (DyingValue: number): PlayerCharacterActionTypes => ({ 
    type: CHANGE_DYING_VALUE,
    DyingValue 
});
export const startChangeDyingValue = (DyingValue: number) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeDyingValue(DyingValue));
    };
};

export const ChangeWoundedValue: ActionCreator<PlayerCharacterActionTypes> = (WoundedValue: number): PlayerCharacterActionTypes => ({ 
    type: CHANGE_WOUNDED_VALUE,
    WoundedValue 
});
export const startChangeWoundedValue = (WoundedValue: number) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeWoundedValue(WoundedValue));
    };
};

export const ChangeMaxHitPoints: ActionCreator<PlayerCharacterActionTypes> = (MaxHitPoints: number): PlayerCharacterActionTypes => ({ 
    type: CHANGE_MAX_HITPOINTS,
    MaxHitPoints 
});
export const startChangeMaxHitPoints = (MaxHitPoints: number) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeMaxHitPoints(MaxHitPoints));
    };
};

export const ChangeSaveProficiencies: ActionCreator<PlayerCharacterActionTypes> = (saves: Saves): PlayerCharacterActionTypes => ({ 
    type: CHANGE_SAVE_PROFICIENCIES,
    saves 
});
export const startChangeSaveProficiencies = (saves: Saves) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeSaveProficiencies(saves));
    };
};

export const ChangeShield: ActionCreator<PlayerCharacterActionTypes> = (Shield: Shield): PlayerCharacterActionTypes => ({ 
    type: CHANGE_SHIELD,
    Shield 
});
export const startChangeShield = (Shield: Shield) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeShield(Shield));
    };
};

export const ChangeWornArmor: ActionCreator<PlayerCharacterActionTypes> = (WornArmor: WornArmor): PlayerCharacterActionTypes => ({ 
    type: CHANGE_WORN_ARMOR,
    WornArmor 
});
export const startChangeWornArmor = (WornArmor: WornArmor) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeWornArmor(WornArmor));
    };
};

export const ChangePerceptionProficiency: ActionCreator<PlayerCharacterActionTypes> = (PerceptionProficiency: Proficiencies): PlayerCharacterActionTypes => ({ 
    type: CHANGE_PERCEPTION_PROFICIENCY,
    PerceptionProficiency 
});
export const startChangePerceptionProficiency = (PerceptionProficiency: Proficiencies) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangePerceptionProficiency(PerceptionProficiency));
    };
};

export const ChangeSpeed: ActionCreator<PlayerCharacterActionTypes> = (Movements: Movement): PlayerCharacterActionTypes => ({ 
    type: CHANGE_SPEED,
    Movements 
});
export const startChangeSpeed = (Movements: Movement) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeSpeed(Movements));
    };
};

