import React from "react";
import { Button, Layout, Text } from "@ui-kitten/components";
import { saveCharacterToLocalStorage } from "../storage/asyncStorage";
import Store from "../store/Store";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {};

const SaveView: React.FC<Props> = (props) => {
    return (
        <Layout style={{ flex: 1 }}>
            <Text>Save !!!!!!!!!</Text>
            <Button
                style={{ flex: 1 }}
                onPress={async () => {
                    await saveCharacterToLocalStorage(
                        Store.getState().playerCharacter
                    );
                }}
            >
                {"Save current character to local storage."}
            </Button>
            <Button
                style={{ flex: 1 }}
                onPress={async () => {
                    await AsyncStorage.clear();
                }}
            >
                {"Delete all."}
            </Button>
        </Layout>
    );
};

export default SaveView;
