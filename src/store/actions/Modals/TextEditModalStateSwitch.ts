import { AppState } from "../../Store";
import { CHANGE_CHARACTER_NAME, CHANGE_PLAYER_NAME, CHANGE_ANCESTRY, CHANGE_HERITAGE, CHANGE_BACKGROUND, CHANGE_CLASS, CHANGE_SUBCLASS, CHANGE_ALIGNMENT, CHANGE_DEITY, CHANGE_NOTES, CHANGE_RESISTANCES, CHANGE_IMMUNITIES, CHANGE_WEAKNESSES, CHANGE_CONDITIONS, CHANGE_SENSES } from "../PlayerCharacter/PlayerCharacterActionTypes";
import { ChangeCharacterName, ChangePlayerName, ChangeAncestry, ChangeHeritage, ChangeBackground, ChangeClass, ChangeSubClass, ChangeAlignment, ChangeDeity, ChangeNotes, ChangeResistances, ChangeImmunities, ChangeWeaknesses, ChangeConditions, ChangeSenses } from "../PlayerCharacter/PlayerCharacterActions";
import { Dispatch } from "react";
import { AppActions } from "../AllActionTypesAggregated";
import { TextEditModalState } from "../../ModalsState";

export const TextEditModalStateSwitch = (actionType: string, state: AppState, dispatch: Dispatch<AppActions>): TextEditModalState => {
    switch (actionType) {
    case CHANGE_CHARACTER_NAME:
        return {
            title: "Character Name:",
            value: state.playerCharacter.name,
            onSelect: () => {},
            onTextChange: (value: string) => { 
                dispatch(ChangeCharacterName(value));
            }
        };
    case CHANGE_PLAYER_NAME:
        return {
            title: "Player Name:",
            value: state.playerCharacter.playerName,
            onSelect: () => {},
            onTextChange: (value: string) => {
                dispatch(ChangePlayerName(value));
            }
        };
    case CHANGE_ANCESTRY:
        return {
            title: "Ancestry:",
            value: state.playerCharacter.ancestry.name,
            onSelect: () => {},
            onTextChange: (value: string) => {
                dispatch(ChangeAncestry(value));
            }
        };
    case CHANGE_HERITAGE:
        return {
            title: "Heritage:",
            value: state.playerCharacter.ancestry.heritage,
            onSelect: () => {},
            onTextChange: (value: string) => {
                dispatch(ChangeHeritage(value));
            }
        };
    case CHANGE_BACKGROUND:
        return {
            title: "Background:",
            value: state.playerCharacter.background.name,
            onSelect: () => {},
            onTextChange: (value: string) => {
                dispatch(ChangeBackground(value));
            }
        };
    case CHANGE_CLASS:
        return {
            title: "Class:",
            value: state.playerCharacter.pcClass.name,
            onSelect: () => {},
            onTextChange: (value: string) => {
                dispatch(ChangeClass(value));
            }
        };
    case CHANGE_SUBCLASS:
        return {
            title: "SubClass:",
            value: state.playerCharacter.pcClass.subClass,
            onSelect: () => {},
            onTextChange: (value: string) => {
                dispatch(ChangeSubClass(value));
            }
        };
    case CHANGE_ALIGNMENT:
        return {
            title: "Alignment:",
            value: state.playerCharacter.alignment,
            onSelect: () => {},
            onTextChange: (value: string) => {
                dispatch(ChangeAlignment(value));
            }
        };
    case CHANGE_DEITY:
        return {
            title: "Deity:",
            value: state.playerCharacter.deity,
            onSelect: () => {},
            onTextChange: (value: string) => {
                dispatch(ChangeDeity(value));
            }
        };
    case CHANGE_NOTES:
        return {
            title: "Notes:",
            value: state.playerCharacter.campaignNotesData.notes,
            onSelect: () => {},
            onTextChange: (value: string) => {
                dispatch(ChangeNotes(value));
            }
        };
    case CHANGE_RESISTANCES:
        return {
            title: "Resistances:",
            value: state.playerCharacter.resistances,
            onSelect: () => {},
            onTextChange: (value: string) => {
                dispatch(ChangeResistances(value));
            }
        };
    case CHANGE_IMMUNITIES:
        return {
            title: "Immunities:",
            value: state.playerCharacter.immunities,
            onSelect: () => {},
            onTextChange: (value: string) => {
                dispatch(ChangeImmunities(value));
            }
        };
    case CHANGE_WEAKNESSES:
        return {
            title: "Weaknesses:",
            value: state.playerCharacter.weakness,
            onSelect: () => {},
            onTextChange: (value: string) => {
                dispatch(ChangeWeaknesses(value));
            }
        };
    case CHANGE_CONDITIONS:
        return {
            title: "Conditions:",
            value: state.playerCharacter.conditions,
            onSelect: () => {},
            onTextChange: (value: string) => {
                dispatch(ChangeConditions(value));
            }
        };
    case CHANGE_SENSES:
        return {
            title: "Senses:",
            value: state.playerCharacter.senses,
            onSelect: () => {},
            onTextChange: (value: string) => {
                dispatch(ChangeSenses(value));
            }
        };
    default:
        return state.modals.textEditModal;       
    }
};