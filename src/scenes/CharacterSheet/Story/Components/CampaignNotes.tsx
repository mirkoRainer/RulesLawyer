import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { CampaignNotesData } from "../../../../PF2eCoreLib/PlayerCharacter";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CampaignNotesDataNavigationProp } from "../EditCampaignNotesView";
import { useNavigation } from "@react-navigation/native";

interface Props {
    campaignNotesData: CampaignNotesData;
}
const CampaignNotes: React.FC<Props> = (props) => {
    const navigation = useNavigation<CampaignNotesDataNavigationProp>();
    const goToCampaignNotesEditView = () => {
        console.debug("Navigation to EditCampaignNotesView");
        navigation.navigate("EditCampaignNotesView");
    };
    return (
        <Layout style={styles.container}>
            <TouchableOpacity onPress={goToCampaignNotesEditView}>
                <Text style={styles.header} category="h3">
                    {" "}
                    Campaign Notes{" "}
                </Text>
                <Layout style={styles.rowContainerFlex2}>
                    <Text style={styles.sectionLabel} category="h5">
                        Notes
                    </Text>
                    <Text style={styles.text}>
                        {" "}
                        {props.campaignNotesData.notes}{" "}
                    </Text>
                </Layout>
                <Layout style={styles.rowContainerFlex1}>
                    <Text style={styles.sectionLabel} category="h5">
                        Allies
                    </Text>
                    <Text style={styles.text}>
                        {" "}
                        {props.campaignNotesData.allies}{" "}
                    </Text>
                </Layout>
                <Layout style={styles.rowContainerFlex1}>
                    <Text style={styles.sectionLabel} category="h5">
                        Enemies
                    </Text>
                    <Text style={styles.text}>
                        {" "}
                        {props.campaignNotesData.enemies}{" "}
                    </Text>
                </Layout>
                <Layout style={styles.rowContainerFlex1}>
                    <Text style={styles.sectionLabel} category="h5">
                        Organizations
                    </Text>
                    <Text style={styles.text}>
                        {" "}
                        {props.campaignNotesData.organizations}{" "}
                    </Text>
                </Layout>
            </TouchableOpacity>
        </Layout>
    );
};

export default CampaignNotes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        padding: 5,
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
    },
    text: {
        flex: 1,
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
        padding: 5,
    },
    sectionLabel: {
        fontWeight: "bold",
        padding: 5,
        paddingBottom: 0,
    },
    rowContainerFlex3: {
        flex: 3,
    },
    rowContainerFlex2: {
        flex: 2,
    },
    rowContainerFlex1: {
        flex: 1,
    },
});
