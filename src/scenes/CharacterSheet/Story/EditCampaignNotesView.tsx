import React, { useState } from "react";
import { Button, Icon, Input, Layout, Text } from "@ui-kitten/components";
import { ScrollView, StyleSheet } from "react-native";
import { CampaignNotesData } from "../../../PF2eCoreLib/PlayerCharacter/CampaignNotesData";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { EntireAppState } from "../../../store/Store";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StoryStackParamList } from "./StoryNavigation";
import { StackNavigationProp } from "@react-navigation/stack";
import {
    startChangeCampaignNotes,
    startChangePersonality,
} from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";

export type CampaignNotesDataNavigationProp = StackNavigationProp<
    StoryStackParamList,
    "EditCampaignNotesView"
>;

const EditCampaignNotesView: React.FC<Props> = (props) => {
    const navigation = useNavigation<CampaignNotesDataNavigationProp>();
    const goToMainStoryView = () => {
        console.debug("Navigation to StoryPage");
        navigation.navigate("MainStoryView");
    };
    const CheckIcon = (props: any) => (
        <Icon {...props} name="checkmark-circle-outline" />
    );
    const [input, setInput] = useState(props.CampaignNotesData);

    const updateCampaignNotesData = () => {
        props.startChangeCampaignNotesData(input);
        goToMainStoryView();
    };
    return (
        <Layout style={{ flex: 1 }}>
            <ScrollView>
                <Layout style={styles.header}>
                    <Text>{"Campaign Data:"}</Text>
                    <Button
                        appearance="ghost"
                        accessoryLeft={CheckIcon}
                        onPress={updateCampaignNotesData}
                    />
                </Layout>
                <Layout style={{ flex: 1, marginHorizontal: 20 }}>
                    <Input
                        label={"Notes"}
                        placeholder="Notes"
                        value={input.notes}
                        size="medium"
                        onChangeText={(notes) => setInput({ ...input, notes })}
                        multiline={true}
                    />
                    <Input
                        label={"Allies"}
                        placeholder="Allies"
                        value={input.allies}
                        size="medium"
                        onChangeText={(allies) =>
                            setInput({ ...input, allies })
                        }
                        multiline={true}
                    />
                    <Input
                        label={"Enemies"}
                        placeholder="Enemies"
                        value={input.enemies}
                        size="medium"
                        onChangeText={(enemies) =>
                            setInput({ ...input, enemies })
                        }
                        multiline={true}
                    />
                    <Input
                        label={"Organizations"}
                        placeholder="Organizations"
                        value={input.organizations}
                        size="medium"
                        onChangeText={(organizations) =>
                            setInput({ ...input, organizations })
                        }
                        multiline={true}
                    />
                </Layout>
            </ScrollView>
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {
    startChangeCampaignNotesData: (
        CampaignNotesData: CampaignNotesData
    ) => void;
}

interface LinkStateProps {
    CampaignNotesData: CampaignNotesData;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        startChangeCampaignNotesData: bindActionCreators(
            startChangeCampaignNotes,
            dispatch
        ),
    };
};

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    CampaignNotesData: state.playerCharacter.campaignNotesData,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditCampaignNotesView);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
});
