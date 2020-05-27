import { RulebookEntry } from "../Shared/RulebookEntry";

import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Spell } from "./Spell";

interface Props {
    spell: Spell;
}

interface State {}

export default class SpellView extends Component<Props, State> {
    public static defaultProps = {};

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> {this.props.spell.name} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
    },
    text: {
        flex: 1,
    },
});
