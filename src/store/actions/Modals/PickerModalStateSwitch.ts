import { PickerModalState } from "../../ModalsState";
import { EntireAppState } from "../../Store";
import { Dispatch, ReactText } from "react";
import { AppActions } from "../AllActionTypesAggregated";
import {
    CHANGE_LEVEL,
    CHANGE_EXPERIENCE_POINTS,
    CHANGE_ABILITY_SCORE,
    CHANGE_CLASS_DC_PROFICIENCY,
    CHANGE_TEMPORARY_HITPOINTS,
    CHANGE_MAX_HITPOINTS,
    CHANGE_SPEED,
} from "../PlayerCharacter/PlayerCharacterActionTypes";
import {
    ChangeLevel,
    ChangeExperiencePoints,
    ChangeClassDCProficiency,
    ChangeTemporaryHitPoints,
    ChangeMaxHitPoints,
    ChangeSpeed,
} from "../PlayerCharacter/PlayerCharacterActions";
import { ChangePickerSelection } from "./ModalsActions";
import { Proficiencies } from "../../../PF2eCoreLib/Proficiencies";
import { Movement } from "../../../PF2eCoreLib/PlayerCharacter/Movement";

export const PickerModalStateSwitch = (
    actionType: string,
    state: EntireAppState,
    dispatch: Dispatch<AppActions>
): PickerModalState => {
    console.debug(
        `PickerModalStateSwitch Entered with ${JSON.stringify(
            actionType,
            null,
            1
        )}`
    );
    switch (actionType) {
        case CHANGE_LEVEL:
            return {
                title: "Level",
                items: Array.from(new Array(20), (x, i) => i + 1),
                currentSelection: state.modals.pickerModal.currentSelection,
                onSelect: (value: ReactText, index: number) => {
                    dispatch(ChangeLevel(value));
                    dispatch(ChangePickerSelection(value));
                },
            };
        case CHANGE_EXPERIENCE_POINTS:
            return {
                title: "Experience Points",
                items: Array.from(new Array(100), (x, i) => i * 10),
                currentSelection: state.modals.pickerModal.currentSelection,
                onSelect: (value: ReactText, index: number) => {
                    dispatch(ChangeExperiencePoints(value));
                    dispatch(ChangePickerSelection(value));
                },
            };
        case CHANGE_CLASS_DC_PROFICIENCY:
            console.debug(
                "PickerModalStateSwitch for CHANGE_CLASS_DC_PROFICIENCY"
            );
            return {
                title: "Class DC",
                items: [
                    Proficiencies.Untrained.toString(),
                    Proficiencies.Trained.toString(),
                    Proficiencies.Expert.toString(),
                    Proficiencies.Master.toString(),
                    Proficiencies.Legendary.toString(),
                ],
                currentSelection: state.modals.pickerModal.currentSelection,
                onSelect: (value: ReactText, index: number) => {
                    console.debug("onSelect in PickerModalStateSwitch");
                    dispatch(ChangeClassDCProficiency(<Proficiencies>value));
                    dispatch(ChangePickerSelection(value));
                },
            };
        case CHANGE_TEMPORARY_HITPOINTS:
            console.debug(
                "PickerModalStateSwitch for CHANGE_TEMPORARY_HITPOINTS"
            );
            return {
                title: "Temp HP",
                items: Array.from(new Array(50), (x, i) => i + 1),
                currentSelection: state.modals.pickerModal.currentSelection,
                onSelect: (value: ReactText, index: number) => {
                    dispatch(ChangeTemporaryHitPoints(value));
                    dispatch(ChangePickerSelection(value));
                },
            };
        case CHANGE_MAX_HITPOINTS:
            console.debug("PickerModalStateSwitch for CHANGE_MAX_HITPOINTS");
            return {
                title: "Max HP",
                items: Array.from(new Array(300), (x, i) => i + 1),
                currentSelection: state.modals.pickerModal.currentSelection,
                onSelect: (value: ReactText, index: number) => {
                    dispatch(ChangeMaxHitPoints(value));
                    dispatch(ChangePickerSelection(value));
                },
            };
        case CHANGE_SPEED:
            console.debug("PickerModalStateSwitch for CHANGE_SPEED");
            return {
                title: "Land Speed",
                items: Array.from(new Array(30), (x, i) => i * 5),
                currentSelection: state.modals.pickerModal.currentSelection,
                onSelect: (value: ReactText, index: number) => {
                    const newMovements: Movement = {
                        ...state.playerCharacter.movement,
                        landSpeed: parseInt(value.toString()),
                    };
                    dispatch(ChangeSpeed(newMovements));
                    dispatch(ChangePickerSelection(value));
                },
            };
        default:
            return state.modals.pickerModal;
    }
};
