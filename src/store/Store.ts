import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "@reduxjs/toolkit";
import { playerCharacterReducer } from "./reducers/PlayerCharacterReducer";
import { modalsReducer } from "./reducers/ModalsReducer";
import thunk from "redux-thunk";
import { characterBuildReducer } from "./reducers/CharacterBuildReducer";
import { themeReducer } from "./reducers/ThemeReducer";

const rootReducer = combineReducers({
    playerCharacter: playerCharacterReducer,
    modals: modalsReducer,
    characterBuild: characterBuildReducer,
    theme: themeReducer,
});

export type EntireAppState = ReturnType<typeof rootReducer>;

const Store = createStore(rootReducer, applyMiddleware(thunk));
export default Store;
