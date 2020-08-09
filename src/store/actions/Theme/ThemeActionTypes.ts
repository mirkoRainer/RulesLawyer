import { Action } from "redux";
import { DarkModeOptions } from "../../ThemeState";

export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export interface ToggleDarkMode extends Action<string> {
    type: typeof TOGGLE_DARK_MODE;
    newTheme: keyof DarkModeOptions;
} 

export type ThemeActionTypes = ToggleDarkMode; // | OtherActions