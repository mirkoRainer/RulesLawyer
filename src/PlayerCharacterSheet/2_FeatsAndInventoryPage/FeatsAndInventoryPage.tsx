import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

interface Props {
    ancestryFeatsAndAbilities: string[];
    skillFeats: string[];
    generalFeats: string[];
    classFeatsAndAbilities: string[];
    bonusFeats?: string[];
}

interface State {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        alignSelf: "stretch",
        alignContent: "stretch",
    },
    text: {},
});

export default class FeatsAndInventoryPage extends Component<Props, State> {
    public static defaultProps = {};

    render() {
        return (
            <View style={styles.container}>
                <AncestryFeatsAndAbilities
                    featsAndAbilities={this.props.ancestryFeatsAndAbilities}
                />
            </View>
        );
    }
}
