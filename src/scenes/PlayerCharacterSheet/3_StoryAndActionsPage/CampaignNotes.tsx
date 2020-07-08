import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startTextEditModal } from "../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { CHANGE_NOTES } from "../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";

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
        <View style={styles.container}>
            <Text style={styles.header}> Campaign Notes </Text>
            <View style={styles.rowContainerFlex2}>
                <Text style={styles.sectionLabel} onPress={changeNotes}>Notes</Text>
                <Text style={styles.text} onPress={changeNotes}>
                    {" "}
                    {props.campaignNotesData.notes}{" "}
                </Text>
            </View>
            <View style={styles.rowContainerFlex1}>
                <Text style={styles.sectionLabel}>Allies</Text>
                <Text style={styles.text}>
                    {" "}
                    {props.campaignNotesData.allies}{" "}
                </Text>
            </View>
            <View style={styles.rowContainerFlex1}>
                <Text style={styles.sectionLabel}>Enemies</Text>
                <Text style={styles.text}>
                    {" "}
                    {props.campaignNotesData.enemies}{" "}
                </Text>
            </View>
            <View style={styles.rowContainerFlex1}>
                <Text style={styles.sectionLabel}>Organizations</Text>
                <Text style={styles.text}>
                    {" "}
                    {props.campaignNotesData.organizations}{" "}
                </Text>
            </View>
        </View>
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
        borderColor: "black",
        borderWidth: 2,
    },
    header: {
        flex: 1,
        fontSize: 16,
        fontWeight: "bold",
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 2,
    },
    text: {
        flex: 1,
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
    },
    sectionLabel: {
        fontWeight: "bold",
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
