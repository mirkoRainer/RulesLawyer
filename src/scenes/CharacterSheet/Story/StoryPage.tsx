import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Image } from "react-native-elements";
import BiographicalView, { BiographicalData } from "./Components/BiographicalView";
import Personality, { PersonalityData } from "./Components/Personality";
import CampaignNotes, { CampaignNotesData } from "./Components/CampaignNotes";
import { CharacterSheetState } from "../../../store/Store";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import { Background } from "../../Shared/PF2eCoreLib/PlayerCharacter";
import CharacterMetadata, { CharacterMetadataProps } from "./Components/CharacterMetadata";
import { AbilityScoreArray } from "../../Shared/PF2eCoreLib/AbilityScores";
import { Proficiencies } from "../../Shared/PF2eCoreLib/Proficiencies";
import AbilityScores from "../Encounter/Components/AbilityScores/AbilityScoresView";
import { Ability } from "../../Shared/PF2eCoreLib/Ability";

const StoryPage: React.FC<Props> = (props) => {
    const titleText = "The Story of " + props.characterName;
    const characterMetadata = (): CharacterMetadataProps => {
        return {
            characterName: props.characterName,
            playerName: props.playerName,
            ancestry: props.ancestry,
            heritage: props.heritage,
            level: props.level,
            experiencePoints: props.experiencePoints,
            background: props.background,
            pcClass: props.pcClass,
            subclass: props.subclass,
            classKeyAbility: props.classKeyAbility,
            classProficiency: props.classProficiency,
            alignment: props.alignment,
            deity: props.deity,
            traits: props.traits,
        };
    };
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text h4>{titleText}</Text>
                <CharacterMetadata
                    characterMetadata={characterMetadata()}
                />
                <AbilityScores abilityScores={props.abilityScores} />
                {/*CharacterSketch placeholder*/}
                <BiographicalView bioData={props.bioData} />
                <Text style={styles.text}>
                    Languages: {props.languages.toString()}
                </Text>
                <Personality personalityData={props.personalityData} />
                <CampaignNotes
                    campaignNotesData={props.campaignNotesData}
                />
            </View>
        </ScrollView>
    );
};

interface LinkStateProps {
    bioData: BiographicalData;
    personalityData: PersonalityData;
    campaignNotesData: CampaignNotesData;
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
    languages: string[];
    abilityScores: AbilityScoreArray;
}
 type Props = LinkStateProps;

const mapStateToProps = (
    state: CharacterSheetState
): LinkStateProps => ({
    characterName: state.playerCharacter.name,
    playerName: state.playerCharacter.playerName,
    ancestry: state.playerCharacter.ancestry.name,
    heritage: state.playerCharacter.ancestry.heritage,
    level: state.playerCharacter.level,
    experiencePoints: state.playerCharacter.experiencePoints,
    background: state.playerCharacter.background,
    pcClass: state.playerCharacter.pcClass.name,
    subclass: state.playerCharacter.pcClass.subClass,
    classKeyAbility: state.playerCharacter.pcClass.keyAbility,
    classProficiency: state.playerCharacter.pcClass.proficiency,
    alignment: state.playerCharacter.alignment,
    deity: state.playerCharacter.deity,
    traits: state.playerCharacter.traits,
    bioData: state.playerCharacter.biographicalData,
    personalityData: state.playerCharacter.personalityData,
    campaignNotesData: state.playerCharacter.campaignNotesData,
    languages: state.playerCharacter.languages,
    abilityScores: state.playerCharacter.abilityScores
});

export default connect(mapStateToProps, null)(StoryPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        alignSelf: "stretch",
        alignContent: "stretch",
    },
    text: {
        backgroundColor: "orange",
    },
});
