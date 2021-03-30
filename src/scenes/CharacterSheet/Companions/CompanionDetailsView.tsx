import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { CompanionDetails } from "../../../PF2eCoreLib/PlayerCharacter/CompanionDetails";

type Props = {
    details: CompanionDetails;
};

export const CompanionDetailsView: React.FC<Props> = ({ details }) => {
    return (
        <Layout>
            <Text style={styles.centered} category="h5">
                Details
            </Text>
            <Layout style={styles.containerRow}>
                <Text category="h6" style={styles.title}>
                    Variety:
                </Text>
                <Text style={styles.detail}>{details.variety}</Text>
            </Layout>
            <Layout style={styles.containerRow}>
                <Text category="h6" style={styles.title}>
                    Age:
                </Text>
                <Text style={styles.detail}>{details.age}</Text>
            </Layout>
            <Layout style={styles.containerRow}>
                <Text category="h6" style={styles.title}>
                    Height:
                </Text>
                <Text style={styles.detail}>{details.height}</Text>
                <Text category="h6" style={styles.title}>
                    Weight:
                </Text>
                <Text style={styles.detail}>{details.weight}</Text>
            </Layout>
            <Layout style={styles.containerRow}>
                <Text category="h6" style={styles.title}>
                    Attitude:
                </Text>
                <Text style={styles.detail}>{details.attitude}</Text>
            </Layout>
            <Layout style={styles.containerRow}>
                <Text category="h6" style={styles.title}>
                    Likes:
                </Text>
                <Text style={styles.detail}>{details.likes}</Text>
            </Layout>
            <Layout style={styles.containerRow}>
                <Text category="h6" style={styles.title}>
                    Dislikes:
                </Text>
                <Text style={styles.detail}>{details.dislikes}</Text>
            </Layout>
            <Layout style={styles.containerRow}>
                <Text category="h6" style={styles.title}>
                    Notes:
                </Text>
                <Text style={styles.detail}>{details.notes}</Text>
            </Layout>
        </Layout>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
        paddingTop: 10,
    },
    containerRow: {
        flexDirection: "row",
        paddingVertical: 5,
    },
    title: {
        flex: 1,
        textAlign: "right",
        paddingHorizontal: 5,
    },
    detail: {
        textAlign: "left",
        paddingHorizontal: 5,
        flex: 1,
    },
});
