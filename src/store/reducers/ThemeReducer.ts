import {
    TOGGLE_DARK_MODE,
    ThemeActionTypes,
} from "../actions/Theme/ThemeActionTypes";
import { ThemeState } from "../ThemeState";

const defaultState: ThemeState = {
    mode: "dark",
};

const themeReducer = (
    state = defaultState,
    action: ThemeActionTypes
): ThemeState => {
    let newState: ThemeState;
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            newState = {
                mode: action.newTheme,
            };
            console.debug(`newState for Theme set to ${newState.mode}`);
            return newState;
        default:
            return state;
    }
};

export { themeReducer };
