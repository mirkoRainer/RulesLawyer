import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startTextEditModal } from "../../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { CHANGE_NOTES } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";

export interface CampaignNotesData {
    notes: string;
    allies: string;
    enemies: string;
    organizations: string;
}

interface OwnProps {
    campaignNotesData: CampaignNotesData;
}
const CampaignNotes: React.FC<Props> = (props) => {
    const changeNotes = () => {
        props.startTextEditModal(CHANGE_NOTES);
    };
    return (
        <Layout style={styles.container}>
            <Text style={styles.header} category="h3">
                {" "}
                Campaign Notes{" "}
            </Text>
            <Layout style={styles.rowContainerFlex2}>
                <Text
                    style={styles.sectionLabel}
                    category="h5"
                    onPress={changeNotes}
                >
                    Notes
                </Text>
                <Text style={styles.text} onPress={changeNotes}>
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
        </Layout>
    );
};

type Props = OwnProps & LinkDispatchProps;

interface LinkDispatchProps {
    startTextEditModal: (propertyToChange: string) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {
        startTextEditModal: bindActionCreators(startTextEditModal, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(CampaignNotes);

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
