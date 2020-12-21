import { ThemeActionTypes, TOGGLE_DARK_MODE } from "./ThemeActionTypes";
import { ActionCreator } from "redux";
import { Dispatch } from "react";
import { AppActions } from "../AllActionTypesAggregated";
import { DarkModeOptions } from "../../ThemeState";

export const ToggleDarkMode: ActionCreator<ThemeActionTypes> = (
    newTheme: keyof DarkModeOptions
): ThemeActionTypes => ({
    type: TOGGLE_DARK_MODE,
    newTheme: newTheme,
});
export const startToggleDarkMode = (currentMode: keyof DarkModeOptions) => {
    console.debug("startToggleDarkMode");
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ToggleDarkMode(currentMode));
    };
};
