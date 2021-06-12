import { Layout, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import React from "react";
import PlayerCharacterData from "../../../PF2eCoreLib/PlayerCharacter/PlayerCharacter";
import CharacterListCard from "./CharacterListCard";
import { ScrollView } from "react-native-gesture-handler";

export interface CharacterListProps {
    playerCharacters: PlayerCharacterData[];
}

const CharacterList: React.FC<CharacterListProps> = (props) => {
    const renderItems: JSX.Element[] = [];
    props.playerCharacters.forEach((pc) => {
        const renderElement = (
            <CharacterListCard
                ancestry={pc.ancestry.heritage + " " + pc.ancestry.name}
                background={pc.background.name}
                class={pc.pcClass.name}
                level={pc.level}
                uuid={pc.metadata.id}
                name={pc.name}
                key={pc.metadata.id}
            />
        );
        renderItems.push(renderElement);
    });
    return (
        <Layout style={styles.container}>
            <ScrollView style={{ flex: 1 }}>{renderItems}</ScrollView>
        </Layout>
    );
};

export default CharacterList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
        padding: 5,
    },
});
