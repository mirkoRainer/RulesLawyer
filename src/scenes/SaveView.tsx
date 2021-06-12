import React from "react";
import { Button, Layout, Text } from "@ui-kitten/components";
import { saveCharacterToLocalStorage } from "../storage/asyncStorage";
import Store from "../store/Store";

type Props = {};

const SaveView: React.FC<Props> = (props) => {
    return (
        <Layout>
            <Text>Save !!!!!!!!!</Text>
            <Button
                onPress={async () => {
                    await saveCharacterToLocalStorage(
                        Store.getState().playerCharacter
                    );
                }}
            >
                {"Save current character to local storage."}
            </Button>
        </Layout>
    );
};

export default SaveView;
