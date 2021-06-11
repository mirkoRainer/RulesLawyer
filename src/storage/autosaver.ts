import AsyncStorage from "@react-native-async-storage/async-storage";
import Store from "../store/Store";

export const autoSaver = async () => {
    const playerCharacterState = Store.getState().playerCharacter;

    try {
        const jsonValue = JSON.stringify(playerCharacterState);
        await AsyncStorage.setItem(
            playerCharacterState.metadata.id.toString(),
            jsonValue
        );
    } catch (e) {
        console.error("Couldn't autosave...");
    }
};
