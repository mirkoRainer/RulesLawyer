import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export interface CampaignNotesData {
    notes: string;
    allies: string;
    enemies: string;
    organizations: string;
}

interface Props {
    campaignNotesData: CampaignNotesData;
}

interface State {}

export default class CampaignNotes extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}> Campaign Notes </Text>
                <View style={styles.rowContainerFlex2}>
                    <Text style={styles.sectionLabel}>Notes</Text>
                    <Text style={styles.text}>
                        {" "}
                        {this.props.campaignNotesData.notes}{" "}
                    </Text>
                </View>
                <View style={styles.rowContainerFlex1}>
                    <Text style={styles.sectionLabel}>Allies</Text>
                    <Text style={styles.text}>
                        {" "}
                        {this.props.campaignNotesData.allies}{" "}
                    </Text>
                </View>
                <View style={styles.rowContainerFlex1}>
                    <Text style={styles.sectionLabel}>Enemies</Text>
                    <Text style={styles.text}>
                        {" "}
                        {this.props.campaignNotesData.enemies}{" "}
                    </Text>
                </View>
                <View style={styles.rowContainerFlex1}>
                    <Text style={styles.sectionLabel}>Organizations</Text>
                    <Text style={styles.text}>
                        {" "}
                        {this.props.campaignNotesData.organizations}{" "}
                    </Text>
                </View>
            </View>
        );
    }
}

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
