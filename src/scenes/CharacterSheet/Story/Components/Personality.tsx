import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

export interface PersonalityData {
    attitude: string;
    beliefs: string;
    likes: string;
    dislikes: string;
    catchphrases: string;
}

interface Props {
    personalityData: PersonalityData;
}

export default class Personality extends Component<Props> {
    public static defaultProps = {};

    render() {
        return (
            <Layout style={styles.container}>
                <Text style={styles.header} category="h3">
                    Personality
                </Text>
                <Layout style={styles.rowContainerFlex3}>
                    <Text style={styles.sectionLabel} category="h5">
                        Attitude
                    </Text>
                    <Text style={styles.text}>
                        {" "}
                        {this.props.personalityData.attitude}{" "}
                    </Text>
                </Layout>
                <Layout style={styles.rowContainerFlex3}>
                    <Text style={styles.sectionLabel} category="h5">
                        Beliefs
                    </Text>
                    <Text style={styles.text}>
                        {" "}
                        {this.props.personalityData.beliefs}{" "}
                    </Text>
                </Layout>
                <Layout style={styles.rowContainerFlex3}>
                    <Text style={styles.sectionLabel} category="h5">
                        Likes
                    </Text>
                    <Text style={styles.text}>
                        {" "}
                        {this.props.personalityData.likes}{" "}
                    </Text>
                </Layout>
                <Layout style={styles.rowContainerFlex3}>
                    <Text style={styles.sectionLabel} category="h5">
                        Dislikes
                    </Text>
                    <Text style={styles.text}>
                        {" "}
                        {this.props.personalityData.dislikes}{" "}
                    </Text>
                </Layout>
                <Layout style={styles.rowContainerFlex3}>
                    <Text style={styles.sectionLabel} category="h5">
                        Catchphrases
                    </Text>
                    <Text style={styles.text}>
                        {" "}
                        {this.props.personalityData.catchphrases}{" "}
                    </Text>
                </Layout>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    container: {
        flex: 1,
    },
    text: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        padding: 10,
    },
    sectionLabel: {
        justifyContent: "center",
        alignSelf: "flex-start",
        fontWeight: "bold",
        padding: 5,
        paddingBottom: 0,
    },
    rowContainerFlex3: {
        flex: 3,
    },
});
