import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import ProficiencyArrayView from "../../Shared/ProficiencyArrayView";
import { Proficiencies } from "../../Shared/PF2eCoreLib/Proficiencies";

export interface ArmorProficiencyProps {
    unarmoredProficiency: Proficiencies;
    lightArmorProficiency: Proficiencies;
    mediumArmorProficiency: Proficiencies;
    heavyArmorProficiency: Proficiencies;
}

export interface State {}

export default class ArmorProficiencies extends Component<
    ArmorProficiencyProps,
    State
> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.armorEntry}>
                    <Text style={styles.text}>Unarmored</Text>
                    <ProficiencyArrayView
                        proficiency={this.props.unarmoredProficiency}
                    />
                </View>
                <View style={styles.armorEntry}>
                    <Text style={styles.text}>Light Armor</Text>
                    <ProficiencyArrayView
                        proficiency={this.props.lightArmorProficiency}
                    />
                </View>
                <View style={styles.armorEntry}>
                    <Text style={styles.text}>Medium Armor</Text>
                    <ProficiencyArrayView
                        proficiency={this.props.mediumArmorProficiency}
                    />
                </View>
                <View style={styles.armorEntry}>
                    <Text style={styles.text}>Heavy Armor</Text>
                    <ProficiencyArrayView
                        proficiency={this.props.heavyArmorProficiency}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    armorEntry: {
        flex: 1,
    },
    text: {
        flex: 1,
        alignSelf: "stretch",
        textAlign: "center",
        borderWidth: 1,
        borderStartWidth: 2,
        borderStartColor: "black",
    },
});
