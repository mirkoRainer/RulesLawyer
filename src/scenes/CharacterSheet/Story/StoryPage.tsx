import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Personality from "./Components/Personality";
import CampaignNotes from "./Components/CampaignNotes";
import { EntireAppState } from "../../../store/Store";
import { connect } from "react-redux";
import { Background } from "../../../PF2eCoreLib/PlayerCharacter/PlayerCharacter";
import { WeaponProficiencies } from "../../../PF2eCoreLib/PlayerCharacter/WeaponProficiencies";
import { PersonalityData } from "../../../PF2eCoreLib/PlayerCharacter/PersonalityData";
import { CampaignNotesData } from "../../../PF2eCoreLib/PlayerCharacter/CampaignNotesData";
import CharacterMetadata, {
    CharacterMetadataProps,
} from "./Components/CharacterMetadata";
import { AbilityScoreArray } from "../../../PF2eCoreLib/AbilityScores";
import { Proficiencies } from "../../../PF2eCoreLib/Proficiencies";
import AbilityScores from "./Components/AbilityScores/AbilityScoresView";
import { WeaponProficienciesView } from "./Components/WeaponProficienciesView";
import { Divider, Layout, Text } from "@ui-kitten/components";
import { StoryNavigationProps } from "./StoryNavigation";
import { useFocusEffect } from "@react-navigation/native";
import BiographicalView from "./Components/BiographicalView";
import LanguagesView from "./Components/Languages";

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
    // make sure the screen is always refreshed.
    const [state, setState] = useState({});
    useFocusEffect(
        React.useCallback(() => {
            setState({});
        }, [])
    );
    return (
        <Layout>
            <ScrollView>
                <Layout style={styles.container}>
                    <Text
                        category="h3"
                        style={{ textAlign: "center", padding: 5 }}
                    >
                        {titleText}
                    </Text>
                    <Divider />
                    <CharacterMetadata
                        characterMetadata={characterMetadata()}
                    />
                    <Divider />
                    <AbilityScores abilityScores={props.abilityScores} />
                    <Divider />
                    <Text
                        category="h4"
                        style={{ textAlign: "center", paddingTop: 10 }}
                    >
                        Weapon Proficiencies
                    </Text>
                    <WeaponProficienciesView
                        Unarmed={props.weaponProficiencies.Unarmed}
                        Simple={props.weaponProficiencies.Simple}
                        Martial={props.weaponProficiencies.Martial}
                        Other={props.weaponProficiencies.Other}
                    />
                    <Divider />
                    {/*CharacterSketch placeholder*/}
                    <BiographicalView />
                    <Divider />
                    <LanguagesView languages={[]} />
                    <Divider />
                    <Personality personalityData={props.personalityData} />
                    <Divider />
                    <CampaignNotes
                        campaignNotesData={props.campaignNotesData}
                    />
                </Layout>
            </ScrollView>
        </Layout>
    );
};

interface OwnProps {
    navigation: StoryNavigationProps;
}

interface LinkStateProps {
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
    abilityScores: AbilityScoreArray;
    weaponProficiencies: WeaponProficiencies;
}
const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
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
    personalityData: state.playerCharacter.personalityData,
    campaignNotesData: state.playerCharacter.campaignNotesData,
    abilityScores: state.playerCharacter.abilityScores,
    weaponProficiencies: state.playerCharacter.weaponProficiencies,
});

type Props = LinkStateProps & OwnProps;

export default connect(mapStateToProps, null)(StoryPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        alignContent: "stretch",
    },
    text: {
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
    },
    sectionLabel: {
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
    },
});
