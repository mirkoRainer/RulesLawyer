import React, { Component } from "react";
import {StyleSheet } from "react-native";
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
            <Layout style={styles.container}>
                <Layout style={styles.rowContainer}>
                    <Layout style={styles.rowContainerFlex3}>
                        <Text style={styles.sectionLabel}>Ethnicity</Text>
                        <Text style={styles.text}>
                            {" "}
                            {this.props.bioData.ethnicity}{" "}
                        </Text>
                    </Layout>
                    <Layout style={styles.rowContainerFlex3}>
                        <Text style={styles.sectionLabel}>Nationality</Text>
                        <Text style={styles.text}>
                            {" "}
                            {this.props.bioData.nationality}{" "}
                        </Text>
                    </Layout>
                    <Layout style={styles.rowContainerFlex3}>
                        <Text style={styles.sectionLabel}>Birthplace</Text>
                        <Text style={styles.text}>
                            {" "}
                            {this.props.bioData.birthplace}{" "}
                        </Text>
                    </Layout>
                    <Layout style={styles.rowContainerFlex1}>
                        <Text style={styles.sectionLabel}>Age</Text>
                        <Text style={styles.text}>
                            {" "}
                            {this.props.bioData.age}{" "}
                        </Text>
                    </Layout>
                    <Layout style={styles.rowContainerFlex2}>
                        <Text style={styles.sectionLabel}>Gender</Text>
                        <Text style={styles.text}>
                            {" "}
                            {this.props.bioData.gender}{" "}
                        </Text>
                    </Layout>
                    <Layout style={styles.rowContainerFlex1}>
                        <Text style={styles.sectionLabel}>HT</Text>
                        <Text style={styles.text}>
                            {" "}
                            {this.props.bioData.height}{" "}
                        </Text>
                    </Layout>
                    <Layout style={styles.rowContainerFlex1}>
                        <Text style={styles.sectionLabel}>WT</Text>
                        <Text style={styles.text}>
                            {" "}
                            {this.props.bioData.weight}{" "}
                        </Text>
                    </Layout>
                </Layout>
                <Layout style={styles.rowContainerFlex1}>
                    <Text style={styles.sectionLabel}>Appearance</Text>
                    <Text style={styles.text}>
                        {this.props.bioData.appearance}
                    </Text>
                </Layout>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
