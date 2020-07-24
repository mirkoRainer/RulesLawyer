import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Image } from "react-native-elements";
import BiographicalView, { BiographicalData } from "./Components/BiographicalView";
import Personality, { PersonalityData } from "./Components/Personality";
import CampaignNotes, { CampaignNotesData } from "./Components/CampaignNotes";
import ActionsAndActivities, { Action } from "./Components/ActionsAndActivities";
import { CharacterSheetState } from "../../../store/Store";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

const StoryAndActionsPage: React.FC<Props> = (props) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text h4> Story and Actions Page </Text>
                {/*CharacterSketch placeholder*/}
                <BiographicalView bioData={props.bioData} />
                <Personality personalityData={props.personalityData} />
                <CampaignNotes
                    campaignNotesData={props.campaignNotesData}
                />
                <ActionsAndActivities actions={props.actions} />
            </View>
        </ScrollView>
    );
};

interface LinkStateProps {
    bioData: BiographicalData;
    personalityData: PersonalityData;
    campaignNotesData: CampaignNotesData;
    actions: Action[];
}
 type Props = LinkStateProps;

const mapStateToProps = (
    state: CharacterSheetState
): LinkStateProps => ({
    bioData: state.playerCharacter.biographicalData,
    personalityData: state.playerCharacter.personalityData,
    campaignNotesData: state.playerCharacter.campaignNotesData,
    actions: state.playerCharacter.actions
});

export default connect(mapStateToProps, null)(StoryAndActionsPage);

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
