import React, { Component, useState } from "react";
import { StyleSheet } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import {
    Layout,
    Text,
    Button,
    TopNavigation,
    TopNavigationAction,
} from "@ui-kitten/components";
import { RootDrawerParamList } from "../../RootDrawerParamList";
import { MenuIcon } from "../Shared/IconButtons";
import {
    getArrayOfAllKeysFromLocalStorage,
    loadCharacterByGuid,
    saveCharacterToLocalStorage,
} from "../../storage/asyncStorage";
import { SafeAreaView } from "react-native-safe-area-context";
import Store from "../../store/Store";

type MainMenuNavigationProps = DrawerNavigationProp<
    RootDrawerParamList,
    "MainMenu"
>;
interface Props {
    navigation: MainMenuNavigationProps;
}

export const MainMenu: React.FC<Props> = (props) => {
    const toggleNavigation = (): void => {
        props.navigation.toggleDrawer();
    };
    const renderMenuAction = () => (
        <TopNavigationAction icon={MenuIcon} onPress={toggleNavigation} />
    );
    const [charcoal, setCharcoal] = useState({ char: "", iteration: 1 });
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation
                accessoryLeft={renderMenuAction}
                title="Rules Lawyer 2e"
            />
            <Layout style={styles.container}>
                <Layout style={styles.button}>
                    <Button
                        onPress={async () => {
                            setCharcoal({
                                char: JSON.stringify(
                                    await getArrayOfAllKeysFromLocalStorage()
                                ),
                                iteration: charcoal.iteration + 1,
                            });
                        }}
                    >
                        {"Read from local storage."}
                    </Button>
                    <Button
                        onPress={async () => {
                            await saveCharacterToLocalStorage(
                                Store.getState().playerCharacter
                            );
                        }}
                    >
                        {"Save to local storage."}
                    </Button>
                    <Button
                        onPress={async () => {
                            const loaded = await loadCharacterByGuid(
                                Store.getState().playerCharacter.metadata.id
                            );
                            setCharcoal({
                                iteration: charcoal.iteration + 1,
                                char: JSON.stringify(loaded),
                            });
                        }}
                    >
                        {"Read one from local storage."}
                    </Button>
                    <Text style={styles.text}>
                        Charcoal: {JSON.stringify(charcoal)}
                    </Text>
                </Layout>
            </Layout>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
    },
    text: {
        flex: 1,
        alignSelf: "auto",
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
