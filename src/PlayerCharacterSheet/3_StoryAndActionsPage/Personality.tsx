import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

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

interface State {}

export default class Personality extends Component<Props, State> {
    public static defaultProps = {};

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Personality</Text>
                <View style={styles.rowContainerFlex3}>
                    <Text style={styles.sectionLabel}>Attitude</Text>
                    <Text style={styles.text}>
                        {" "}
                        {this.props.personalityData.attitude}{" "}
                    </Text>
                </View>
                <View style={styles.rowContainerFlex3}>
                    <Text style={styles.sectionLabel}>Beliefs</Text>
                    <Text style={styles.text}>
                        {" "}
                        {this.props.personalityData.beliefs}{" "}
                    </Text>
                </View>
                <View style={styles.rowContainerFlex3}>
                    <Text style={styles.sectionLabel}>Likes</Text>
                    <Text style={styles.text}>
                        {" "}
                        {this.props.personalityData.likes}{" "}
                    </Text>
                </View>
                <View style={styles.rowContainerFlex3}>
                    <Text style={styles.sectionLabel}>Dislikes</Text>
                    <Text style={styles.text}>
                        {" "}
                        {this.props.personalityData.dislikes}{" "}
                    </Text>
                </View>
                <View style={styles.rowContainerFlex3}>
                    <Text style={styles.sectionLabel}>Catchphrases</Text>
                    <Text style={styles.text}>
                        {" "}
                        {this.props.personalityData.catchphrases}{" "}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        fontSize: 16,
        fontWeight: "bold",
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
    },
    sectionLabel: {
        fontWeight: "bold",
    },
    rowContainerFlex3: {
        flex: 3,
        borderColor: "black",
        borderWidth: 1,
    },
});
