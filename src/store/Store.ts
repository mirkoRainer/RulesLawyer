import { createStore, combineReducers } from "redux";
import { playerCharacterReducer } from "./reducers/PlayerCharacterReducer";

const rootReducer = combineReducers({
    playerCharacter: playerCharacterReducer
});

export type CharacterSheetState = ReturnType<typeof rootReducer>;

const Store = createStore(rootReducer);
export default Store;