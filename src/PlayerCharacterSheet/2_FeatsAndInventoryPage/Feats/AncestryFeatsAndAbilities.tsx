import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { FeatAndAbilityEntry } from "./FeatAndAbilityEntry";

interface Props {
    featsAndAbilities: string[];
}

interface State {}

export default class AncestryFeatsAndAbilities extends Component<Props, State> {
    public static defaultProps = {};
    renderItem = ({ item }: { item: FeatAndAbilityEntry }) => (
        <Text>
            {item.title}: {item.description}
        </Text>
    );
    keyExtractor = (item: FeatAndAbilityEntry) => item.title;
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> AncestryFeatsAndAbilities </Text>
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
    text: {
        flex: 1,
        width: 100,
        backgroundColor: "green",
    },
});
