import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import {
    Layout,
    TopNavigation,
    TopNavigationAction,
    Text,
} from "@ui-kitten/components";
import { RootDrawerParamList } from "../../RootDrawerParamList";
import { MenuIcon } from "../Shared/IconButtons";
import {
    getArrayOfAllKeysFromLocalStorage,
    loadCharacterByUuid,
} from "../../storage/asyncStorage";
import "react-native-get-random-values";
import { validate as uuidValidate } from "uuid";
import { SafeAreaView } from "react-native-safe-area-context";
import CharacterList from "./components/CharacterList";
import PlayerCharacterData from "../../PF2eCoreLib/PlayerCharacter/PlayerCharacter";
import { useFocusEffect } from "@react-navigation/core";

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
    const [charactersToDisplay, setCharactersToDisplay] = useState<
        PlayerCharacterData[]
    >([]);
    useEffect(() => {
        const unsubscribe = props.navigation.addListener("focus", () => {
            if (!charactersToDisplay.length) {
                loadData();
            }
        });
        return unsubscribe;
    }, [props.navigation]);
    const loadData = async () => {
        const ids = await getArrayOfAllKeysFromLocalStorage();
        console.log(JSON.stringify(ids));
        let list: PlayerCharacterData[] = [];
        ids.forEach(async (id) => {
            if (uuidValidate(id)) {
                loadCharacterByUuid(id).then((x) => {
                    console.log(JSON.stringify(x?.metadata.id.toString()));
                    if (x) {
                        charactersToDisplay.push(x);
                        setCharactersToDisplay(charactersToDisplay);
                    }
                });
            }
        });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation
                accessoryLeft={renderMenuAction}
                title="Rules Lawyer 2e"
            />
            <Layout style={styles.container}>
                {charactersToDisplay ? (
                    <CharacterList playerCharacters={charactersToDisplay} />
                ) : (
                    <Text>Loading</Text>
                )}
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
