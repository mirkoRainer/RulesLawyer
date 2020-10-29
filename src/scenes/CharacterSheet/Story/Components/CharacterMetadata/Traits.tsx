import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import styles from "./CharacterMetadata.styles";

interface Props {
    traits: string[];
}

interface State {}

export default class TraitsView extends Component<Props, State> {
    render() {
        return (
            <Layout style={styles.rowContainer}>
                <Text style={styles.header} category="h5">
                    {" "}
                    Traits:
                </Text>
                <Text style={styles.text} category="h5">
                    {this.props.traits.join(",")}{" "}
                </Text>
            </Layout>
        );
    }
}
