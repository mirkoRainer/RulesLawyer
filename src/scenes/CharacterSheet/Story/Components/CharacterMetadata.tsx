import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import CharacterName from "../../Encounter/Components/CharacterMetadata/CharacterName";
import PlayerName from "../../Encounter/Components/CharacterMetadata/PlayerName";
import AncestryAndHeritage from "../../Encounter/Components/CharacterMetadata/AncestryAndHeritage";
import Level from "../../Encounter/Components/CharacterMetadata/Level";
import ExperiencePoints from "../../Encounter/Components/CharacterMetadata/ExperiencePoints";
import Traits from "../../Encounter/Components/CharacterMetadata/Traits";
import Alignment from "../../Encounter/Components/CharacterMetadata/Alignment";
import Deity from "../../Encounter/Components/CharacterMetadata/Deity";
import { AbilityScoreArray } from "../../../Shared/PF2eCoreLib/AbilityScores";
import { Proficiencies } from "../../../Shared/PF2eCoreLib/Proficiencies";
import { Background } from "../../../Shared/PF2eCoreLib/PlayerCharacter";
import BackgroundView from "../../Encounter/Components/CharacterMetadata/BackgroundView";
import ClassView from "../../Encounter/Components/CharacterMetadata/ClassView";


export interface CharacterMetadataProps {
    characterName: string;
    playerName: string;
    ancestry: string;
    heritage: string;
    level: number;
    experiencePoints: number;
    background: Background;
    pcClass: string;
    subclass: string;
    classKeyAbility: keyof AbilityScoreArray;
    classProficiency: Proficiencies;
    alignment: string;
    deity: string;
    traits: string[];
}

interface Props {
    characterMetadata: CharacterMetadataProps;
}

const CharacterMetadata: React.FC<Props> = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <CharacterName
                    characterName={
                        props.characterMetadata.characterName
                    }
                />
                <PlayerName
                    playerName={props.characterMetadata.playerName}
                />
            </View>
            <View style={styles.rowContainer}>
                <AncestryAndHeritage
                    ancestry={props.characterMetadata.ancestry}
                    heritage={props.characterMetadata.heritage}
                />
                <View style={styles.container}>
                    <Level level={props.characterMetadata.level} />
                    <ExperiencePoints
                        experiencePoints={
                            props.characterMetadata.experiencePoints
                        }
                    />
                </View>
            </View>
            <View style={styles.rowContainer}>
                <BackgroundView
                    background={props.characterMetadata.background}
                />
                <ClassView
                    name={props.characterMetadata.pcClass}
                    subClass={props.characterMetadata.subclass}
                    keyAbility={
                        props.characterMetadata.classKeyAbility
                    }
                    proficiency={
                        props.characterMetadata.classProficiency
                    }
                />
            </View>
            <View style={styles.rowContainer}>
                <Alignment
                    alignment={props.characterMetadata.alignment}
                />
                <Deity deity={props.characterMetadata.deity} />
            </View>
            <Traits traits={props.characterMetadata.traits} />
        </View>
    );
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowContainer: {
        flexDirection: "row",
    },
    header: {
        alignContent: "stretch",
        alignSelf: "stretch",
    },
});

export default CharacterMetadata;