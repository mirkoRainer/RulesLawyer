import { RulebookEntry } from "../../../../PF2eCoreLib/RulebookEntry";

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Spell } from "./Spell";
import { Layout, Text } from "@ui-kitten/components";

interface Props {
    spell: Spell;
}

interface State {}


export default class SpellView extends Component<Props, State> {
    public static defaultProps = {};

    render() {
        return (
            <Layout style={styles.container}>
                <Text style={styles.spellName} category='h4'> {this.props.spell.name} </Text>
                {this.props.spell.description ? <Text category="h6">Description</Text> : <></>}
                {this.props.spell.description ? <Text >{this.props.spell.description}</Text> : <></> }
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
        padding: 10
    },
    spellName: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
});
