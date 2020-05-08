import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export interface BiographicalDataProps {
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
    bioData: BiographicalDataProps;
}

interface State {}

export default class BiographicalData extends Component<Props, State> {
    public static defaultProps = {};

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.rowContainerFlex3}>
                        <Text style={styles.sectionLabel}>Ethnicity</Text>
                        <Text style={styles.text}>
                            {" "}
                            {this.props.bioData.ethnicity}{" "}
                        </Text>
                    </View>
                    <View style={styles.rowContainerFlex3}>
                        <Text style={styles.sectionLabel}>Nationality</Text>
                        <Text style={styles.text}>
                            {" "}
                            {this.props.bioData.nationality}{" "}
                        </Text>
                    </View>
                    <View style={styles.rowContainerFlex3}>
                        <Text style={styles.sectionLabel}>Birthplace</Text>
                        <Text style={styles.text}>
                            {" "}
                            {this.props.bioData.birthplace}{" "}
                        </Text>
                    </View>
                    <View style={styles.rowContainerFlex1}>
                        <Text style={styles.sectionLabel}>Age</Text>
                        <Text style={styles.text}>
                            {" "}
                            {this.props.bioData.age}{" "}
                        </Text>
                    </View>
                    <View style={styles.rowContainerFlex2}>
                        <Text style={styles.sectionLabel}>Gender</Text>
                        <Text style={styles.text}>
                            {" "}
                            {this.props.bioData.gender}{" "}
                        </Text>
                    </View>
                    <View style={styles.rowContainerFlex1}>
                        <Text style={styles.sectionLabel}>HT</Text>
                        <Text style={styles.text}>
                            {" "}
                            {this.props.bioData.height}{" "}
                        </Text>
                    </View>
                    <View style={styles.rowContainerFlex1}>
                        <Text style={styles.sectionLabel}>WT</Text>
                        <Text style={styles.text}>
                            {" "}
                            {this.props.bioData.weight}{" "}
                        </Text>
                    </View>
                </View>
                <Text style={styles.sectionLabel}>Appearance</Text>
                <Text style={styles.text}>{this.props.bioData.appearance}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 2,
    },
    text: {
        flex: 1,
        alignSelf: "center",
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
