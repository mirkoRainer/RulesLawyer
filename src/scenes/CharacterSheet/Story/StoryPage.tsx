import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import BiographicalView, { BiographicalData } from "./Components/BiographicalView";
import Personality, { PersonalityData } from "./Components/Personality";
import CampaignNotes, { CampaignNotesData } from "./Components/CampaignNotes";
import { EntireAppState } from "../../../store/Store";
import { connect } from "react-redux";
import { Background, Weapon, WeaponProficiencies } from "../../../PF2eCoreLib/PlayerCharacter";
import CharacterMetadata, { CharacterMetadataProps } from "./Components/CharacterMetadata";
import { AbilityScoreArray } from "../../../PF2eCoreLib/AbilityScores";
import { Proficiencies } from "../../../PF2eCoreLib/Proficiencies";
import AbilityScores from "./Components/AbilityScores/AbilityScoresView";
import { Ability } from "../../../PF2eCoreLib/Ability";
import WeaponProficienciesView from "./Components/WeaponProficienciesView";
import { Layout, Text } from "@ui-kitten/components";

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
        <Layout>
            <ScrollView>
                <Layout style={styles.container}>
                    <Text category='h3'>{titleText}</Text>
                    <CharacterMetadata
                        characterMetadata={characterMetadata()}
                    />
                    <AbilityScores abilityScores={props.abilityScores} />
                    <Text category='h4'>Weapon Proficiencies</Text>
                    <WeaponProficienciesView
                        Unarmed={props.weaponProficiencies.Unarmed}
                        Simple={props.weaponProficiencies.Simple}
                        Martial={props.weaponProficiencies.Martial}
                        Others={
                            props.weaponProficiencies.Others
                            /* Others should have a description and proficiency. */
                        }
                    />
                    {/*CharacterSketch placeholder*/}
                    <BiographicalView bioData={props.bioData} />
                    <Text style={styles.text}>
                    Languages: {props.languages.toString()}
                    </Text>
                    <Personality personalityData={props.personalityData} />
                    <CampaignNotes
                        campaignNotesData={props.campaignNotesData}
                    />
                </Layout>
            </ScrollView>
        </Layout>

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
    weaponProficiencies: WeaponProficiencies;
}
 type Props = LinkStateProps;

const mapStateToProps = (
    state: EntireAppState
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
    abilityScores: state.playerCharacter.abilityScores,
    weaponProficiencies: state.playerCharacter.weaponProficiencies
});

export default connect(mapStateToProps, null)(StoryPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        alignContent: "stretch",
    },
    text: {
        backgroundColor: "orange",
    },
});
