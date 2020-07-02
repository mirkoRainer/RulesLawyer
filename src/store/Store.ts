import { createStore, combineReducers } from "redux";
import { playerCharacterReducer } from "./reducers/PlayerCharacterReducer";
import { modalsReducer } from "./reducers/ModalsReducer";

const rootReducer = combineReducers({
    playerCharacter: playerCharacterReducer,
    modals: modalsReducer
});

export type CharacterSheetState = ReturnType<typeof rootReducer>;

const Store = createStore(rootReducer);
export default Store;