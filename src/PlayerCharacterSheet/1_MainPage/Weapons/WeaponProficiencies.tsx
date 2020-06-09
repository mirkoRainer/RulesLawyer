import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import ProficiencyArrayView from "../../Shared/ProficiencyArrayView";
import { Proficiencies } from "../../Shared/PF2eCoreLib/Proficiencies";
import { OtherWeaponProficiency } from "./OtherWeaponProficiency";

export interface WeaponProficiencyProps {
    unarmed: Proficiencies;
    simple: Proficiencies;
    martial: Proficiencies;
    others: OtherWeaponProficiency[];
}

interface State {}

export default class WeaponProficiencies extends Component<
    WeaponProficiencyProps,
    State
> {
    public static defaultProps = {};

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.weaponProf}>
                    <Text style={styles.text}>Unarmed</Text>
                    <ProficiencyArrayView proficiency={this.props.unarmed} />
                </View>
                <View style={styles.weaponProf}>
                    <Text style={styles.text}>Simple</Text>
                    <ProficiencyArrayView proficiency={this.props.simple} />
                </View>
                <View style={styles.weaponProf}>
                    <Text style={styles.text}>Martial</Text>
                    <ProficiencyArrayView proficiency={this.props.martial} />
                </View>
                <View style={styles.weaponProf}>
                    <Text style={styles.text}>Other</Text>
                    {/* 
                    TODO: Need to convert an array of "others" into a flat list. 
                    */}
                    <ProficiencyArrayView
                        proficiency={this.props.others[0].proficiency}
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
        borderColor: "black",
        borderWidth: 2,
    },
    weaponProf: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        alignSelf: "center",
        justifyContent: "center",
    },
});
