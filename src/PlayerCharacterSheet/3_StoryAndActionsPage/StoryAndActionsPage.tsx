import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Image } from "react-native-elements";
import BiographicalView, { BiographicalData } from "./BiographicalView";
import Personality, { PersonalityData } from "./Personality";
import CampaignNotes, { CampaignNotesData } from "./CampaignNotes";
import ActionsAndActivities, { Action } from "./ActionsAndActivities";

interface Props {
    bioData: BiographicalData;
    personalityData: PersonalityData;
    campaignNotesData: CampaignNotesData;
    actions: Action[];
}

interface State {}

export default class StoryAndActionsPage extends Component<Props, State> {
    public static defaultProps = {};

    render() {
        return (
            <View style={styles.container}>
                <Text h4> Story and Actions Page </Text>
                {/*CharacterSketch placeholder*/}
                <BiographicalView bioData={this.props.bioData} />
                <Personality personalityData={this.props.personalityData} />
                <CampaignNotes
                    campaignNotesData={this.props.campaignNotesData}
                />
                <ActionsAndActivities actions={this.props.actions} />
            </View>
        );
    }
}

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
