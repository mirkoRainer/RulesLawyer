import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

export interface BiographicalData {
    ethnicity: string;
    nationality: string;
    birthplace: string;
    age: number;
    gender: string;
    height: number;
    weight: number;
    appearance: string;
}

interface Props {
    bioData: BiographicalData;
}

interface State {}

export default class BiographicalView extends Component<Props, State> {
    public static defaultProps = {};

    render() {
        return (
            <Layout style={styles.rowContainer}>
                <Layout style={{ alignSelf: "center", padding: 5 }}>
                    <Text style={styles.sectionLabel} category="h6">
                        Ethnicity
                    </Text>
                    <Text style={styles.text}>
                        {" "}
                        {this.props.bioData.ethnicity}{" "}
                    </Text>
                </Layout>
                <Layout style={{ alignSelf: "center", padding: 5 }}>
                    <Text style={styles.sectionLabel} category="h6">
                        Nationality
                    </Text>
                    <Text style={styles.text}>
                        {" "}
                        {this.props.bioData.nationality}{" "}
                    </Text>
                </Layout>
                <Layout style={{ alignSelf: "center", padding: 5 }}>
                    <Text style={styles.sectionLabel} category="h6">
                        Birthplace
                    </Text>
                    <Text style={styles.text}>
                        {" "}
                        {this.props.bioData.birthplace}{" "}
                    </Text>
                </Layout>
                <Layout style={{ alignSelf: "center", padding: 5 }}>
                    <Text style={styles.sectionLabel} category="h6">
                        Age
                    </Text>
                    <Text style={styles.text}> {this.props.bioData.age} </Text>
                </Layout>
                <Layout style={{ alignSelf: "center", padding: 5 }}>
                    <Text style={styles.sectionLabel} category="h6">
                        Gender
                    </Text>
                    <Text style={styles.text}>
                        {" "}
                        {this.props.bioData.gender}{" "}
                    </Text>
                </Layout>
                <Layout style={{ alignSelf: "center", padding: 5 }}>
                    <Text style={styles.sectionLabel} category="h6">
                        HT
                    </Text>
                    <Text style={styles.text}>
                        {" "}
                        {this.props.bioData.height}{" "}
                    </Text>
                </Layout>
                <Layout style={{ alignSelf: "center", padding: 5 }}>
                    <Text style={styles.sectionLabel} category="h6">
                        WT
                    </Text>
                    <Text style={styles.text}>
                        {" "}
                        {this.props.bioData.weight}{" "}
                    </Text>
                </Layout>
                <Layout style={{ alignSelf: "center", padding: 5 }}>
                    <Text style={styles.sectionLabel} category="h6">
                        Appearance
                    </Text>
                    <Text style={styles.text}>
                        {this.props.bioData.appearance}
                    </Text>
                </Layout>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    rowContainer: {
        flex: 1,
        flexWrap: "wrap",
        padding: 10,
        flexDirection: "row",
    },
    text: {
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
    },
    sectionLabel: {
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
    },
});
