import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { OtherWeaponProficiency } from "../../Encounter/Offense/Weapons/OtherWeaponProficiency";
import { Proficiencies } from "../../../../PF2eCoreLib/Proficiencies";
import ProficiencyArrayView from "../../../Shared/ProficiencyArrayView";
import { WeaponProficiencies } from "../../../../PF2eCoreLib/PlayerCharacter";

export default class WeaponProficienciesView extends Component<
    WeaponProficiencies
> {
    public static defaultProps = {};

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.weaponProf}>
                    <Text style={styles.text}>Unarmed</Text>
                    <ProficiencyArrayView proficiency={this.props.Unarmed}/>
                </View>
                <View style={styles.weaponProf}>
                    <Text style={styles.text}>Simple</Text>
                    <ProficiencyArrayView proficiency={this.props.Simple}/>
                </View>
                <View style={styles.weaponProf}>
                    <Text style={styles.text}>Martial</Text>
                    <ProficiencyArrayView proficiency={this.props.Martial}/>
                </View>
                <View style={styles.weaponProf}>
                    <Text style={styles.text}>Other</Text>
                    {/* 
                    TODO: Need to convert an array of "others" into a flat list. 
                    */}
                    <ProficiencyArrayView
                        proficiency={this.props.Others[0] ? this.props.Others[0].proficiency : Proficiencies.Untrained }
                    
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
    weaponProf: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "center",
    },
    text: {
        alignSelf: "center",
        justifyContent: "center",
    },
});
