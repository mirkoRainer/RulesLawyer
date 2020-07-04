import { createStore, combineReducers, applyMiddleware } from "redux";
import { playerCharacterReducer } from "./reducers/PlayerCharacterReducer";
import { modalsReducer } from "./reducers/ModalsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    playerCharacter: playerCharacterReducer,
    modals: modalsReducer,
});

export type CharacterSheetState = ReturnType<typeof rootReducer>;

const Store = createStore(rootReducer, applyMiddleware(thunk));
export default Store;
