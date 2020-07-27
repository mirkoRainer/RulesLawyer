import { createStore, combineReducers, applyMiddleware } from "redux";
import { playerCharacterReducer } from "./reducers/PlayerCharacterReducer";
import { modalsReducer } from "./reducers/ModalsReducer";
import thunk from "redux-thunk";
import { characterBuildReducer } from "./reducers/CharacterBuildReducer";

const rootReducer = combineReducers({
    playerCharacter: playerCharacterReducer,
    modals: modalsReducer,
    characterBuild: characterBuildReducer
});

export type CharacterSheetState = ReturnType<typeof rootReducer>;

const Store = createStore(rootReducer, 
    applyMiddleware(thunk));
export default Store;
