import { AppActions } from "../AllActionTypesAggregated";
import { CHANGE_CHARACTER_NAME, CHANGE_PLAYER_NAME, PlayerCharacterActionTypes, CHANGE_ANCESTRY, CHANGE_HERITAGE, CHANGE_BACKGROUND, CHANGE_CLASS, CHANGE_SUBCLASS, CHANGE_ALIGNMENT, CHANGE_LANGUAGES, CHANGE_DEITY, CHANGE_TRAITS, CHANGE_NOTES, CHANGE_IMMUNITIES, CHANGE_WEAKNESSES, CHANGE_CONDITIONS, CHANGE_SENSES, CHANGE_SPEED, CHANGE_OTHERSPEEDS, CHANGE_RESISTANCES } from "./PlayerCharacterActionTypes";
import { ActionCreator, Dispatch } from "redux";

export const ChangeCharacterName: ActionCreator<PlayerCharacterActionTypes> = (name: string): PlayerCharacterActionTypes => ({  
    type: CHANGE_CHARACTER_NAME, 
    name 
});
export const startChangeCharacterName = (name: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeCharacterName(name));
    };
};

export const ChangePlayerName: ActionCreator<PlayerCharacterActionTypes> = (name: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_PLAYER_NAME, 
    name 
});
export const startChangePlayerName = (name: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangePlayerName(name));
    };
};

export const ChangeAncestry: ActionCreator<PlayerCharacterActionTypes> = (ancestry: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_ANCESTRY, 
    ancestry 
});
export const stateChangeAncestry = (ancestry: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeAncestry(ancestry));
    };
};

export const ChangeHeritage: ActionCreator<PlayerCharacterActionTypes> = (heritage: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_HERITAGE, 
    heritage 
});
export const stateChangeHeritage = (heritage: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeHeritage(heritage));
    };
};

export const ChangeBackground: ActionCreator<PlayerCharacterActionTypes> = (Background: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_BACKGROUND, 
    Background 
});
export const stateChangeBackground = (Background: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeBackground(Background));
    };
};

export const ChangeClass: ActionCreator<PlayerCharacterActionTypes> = (Class: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_CLASS, 
    Class 
});
export const stateChangeClass = (Class: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeClass(Class));
    };
};

export const ChangeSubClass: ActionCreator<PlayerCharacterActionTypes> = (SubClass: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_SUBCLASS, 
    SubClass 
});
export const stateChangeSubClass = (SubClass: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeSubClass(SubClass));
    };
};

export const ChangeAlignment: ActionCreator<PlayerCharacterActionTypes> = (Alignment: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_ALIGNMENT,
    Alignment 
});
export const stateChangeAlignment = (Alignment: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeAlignment(Alignment));
    };
};

export const ChangeDeity: ActionCreator<PlayerCharacterActionTypes> = (Deity: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_DEITY,
    Deity 
});
export const stateChangeDeity = (Deity: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeDeity(Deity));
    };
};

export const ChangeNotes: ActionCreator<PlayerCharacterActionTypes> = (Notes: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_NOTES,
    Notes 
});
export const stateChangeNotes = (Notes: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeNotes(Notes));
    };
};

export const ChangeResistances: ActionCreator<PlayerCharacterActionTypes> = (Resistances: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_RESISTANCES,
    Resistances 
});
export const stateChangeResistances = (Resistances: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeResistances(Resistances));
    };
};

export const ChangeImmunities: ActionCreator<PlayerCharacterActionTypes> = (Immunities: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_IMMUNITIES,
    Immunities 
});
export const stateChangeImmunities = (Immunities: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeImmunities(Immunities));
    };
};

export const ChangeWeaknesses: ActionCreator<PlayerCharacterActionTypes> = (Weaknesses: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_WEAKNESSES,
    Weaknesses 
});
export const stateChangeWeaknesses = (Weaknesses: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeWeaknesses(Weaknesses));
    };
};

export const ChangeConditions: ActionCreator<PlayerCharacterActionTypes> = (Conditions: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_CONDITIONS,
    Conditions 
});
export const stateChangeConditions = (Conditions: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeConditions(Conditions));
    };
};

export const ChangeSenses: ActionCreator<PlayerCharacterActionTypes> = (Senses: string): PlayerCharacterActionTypes => ({ 
    type: CHANGE_SENSES,
    Senses 
});
export const stateChangeSenses = (Senses: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppActions) => {
        dispatch(ChangeSenses(Senses));
    };
};

