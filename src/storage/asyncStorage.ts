import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-get-random-values";
import { validate as uuidValidate } from "uuid";
import PlayerCharacterData from "../PF2eCoreLib/PlayerCharacter/PlayerCharacter";

export const getArrayOfAllKeysFromLocalStorage = async (): Promise<
    string[]
> => {
    console.log("Getting all keys.");
    return await AsyncStorage.getAllKeys();
};

export const loadCharacterByUuid = async (
    uuid: string
): Promise<PlayerCharacterData | undefined> => {
    try {
        const jsonValue = await AsyncStorage.getItem(uuid);
        return jsonValue != null
            ? (JSON.parse(jsonValue) as PlayerCharacterData)
            : undefined;
    } catch (e) {
        console.error(`Error loading character: ${uuid}`);
    }
};

export const saveCharacterToLocalStorage = async (
    playerCharacter: PlayerCharacterData
) => {
    try {
        const jsonValue = JSON.stringify(playerCharacter);
        await AsyncStorage.setItem(
            playerCharacter.metadata.id.toString(),
            jsonValue
        );
    } catch (e) {
        console.error("Error saving character");
    }
    console.log(
        `Done saving character: ${
            playerCharacter.name
        } with id: ${playerCharacter.metadata.id.toString()}`
    );
};

export const deleteCharacterByUuid = async (uuid: string) => {
    try {
        await AsyncStorage.removeItem(uuid);
    } catch (e) {
        console.error(`Error deleting character: ${uuid}`);
    }
};
