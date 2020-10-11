import { RulebookEntry } from "../../../../../PF2eCoreLib/RulebookEntry";

import React, { Component } from "react";
import { StyleSheet, Button } from "react-native";
import { Spell } from "./Spell";
import { Layout, Text } from "@ui-kitten/components";
import { StackNavigationProp } from "@react-navigation/stack";
import { SpellsStackParamList } from "../../SpellsNavigation";
import { SpellViewNavigationProps } from "./Spells";

interface Props {
    spell: Spell;
    navigation: SpellViewNavigationProps;
    index: number;
    spellType: string;
}

const SpellView: React.FC<Props> = (props) => {
    const handleEditButtonPress = () => {
        const updateSpell = (spell: Spell) => {};
        props.navigation.navigate("EditSpellView", {
            index: props.index,
            updateSpell,
        });
    };
    return (
        <Layout style={styles.container}>
            <Layout style={styles.row}>
                <Text style={styles.spellName} category="h4">
                    {" "}
                    {props.spell.name}{" "}
                </Text>
                <Button title="Edit" onPress={handleEditButtonPress} />
            </Layout>
            {props.spell.description ? (
                <Text category="h6">Description</Text>
            ) : (
                <></>
            )}
            {props.spell.description ? (
                <Text>{props.spell.description}</Text>
            ) : (
                <></>
            )}
        </Layout>
    );
};

export default SpellView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
    },
    spellName: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    row: {
        flexDirection: "row",
    },
});
