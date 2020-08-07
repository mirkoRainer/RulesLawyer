import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

interface Props {
    damageDice: string; // should be a dice class
    abilityModifier: number;
    damageType: string;
    other: string;
    traits: string;
}


const WeaponDamageSection: React.FC<Props> = (props) => {
    const damageText = props.abilityModifier >= 0 ? `${props.damageDice}+${props.abilityModifier}` : `${props.damageDice}-${props.abilityModifier}`;

    return (
        <Layout style={styles.container}>
            <Text style={styles.text}> {props.other} </Text>
            <Text style={styles.text}> {props.traits} </Text>
            <Layout style={styles.damageContainer}>
                <Text style={styles.text} category='h6'>Damage</Text>
                <Layout style={styles.damageText}>
                    <Text style={styles.text}> {damageText} </Text>
                    <Text style={styles.text}> {props.damageType} </Text>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default WeaponDamageSection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 10
    },
    damageContainer: {
        flex: 3,
    },
    damageText: {
        flex: 1,
        flexDirection: "row"
    },
    text: {
        flex: 1,
        textAlign: "center"
    },
});
