import AsyncStorage from "@react-native-async-storage/async-storage";
import { Guid } from "guid-typescript";
import PlayerCharacterData, {
    PlayerCharacter,
} from "../PF2eCoreLib/PlayerCharacter/PlayerCharacter";

export const getArrayOfAllKeysFromLocalStorage = async (): Promise<
    string[]
> => {
    console.log("Getting all keys.");
    return await AsyncStorage.getAllKeys();
};

export const loadCharacterByGuid = async (
    guid: Guid
): Promise<PlayerCharacterData | undefined> => {
    try {
        const jsonValue = await AsyncStorage.getItem(guid.toString());
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error(`Error loading character: ${guid.toString()}`);
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
