import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { OtherWeaponProficiency } from "../../Encounter/Offense/Weapons/OtherWeaponProficiency";
import { Proficiencies } from "../../../../PF2eCoreLib/Proficiencies";
import ProficiencyArrayView from "../../../Shared/ProficiencyArrayView";
import { WeaponProficiencies } from "../../../../PF2eCoreLib/PlayerCharacter";
import { Layout, Text } from "@ui-kitten/components";

export default class WeaponProficienciesView extends Component<
    WeaponProficiencies
> {
    public static defaultProps = {};

    render() {
        return (
            <Layout style={styles.container}>
                <Layout style={styles.weaponProf}>
                    <Text style={styles.text} category="h6">
                        Unarmed
                    </Text>
                    <ProficiencyArrayView proficiency={this.props.Unarmed} />
                </Layout>
                <Layout style={styles.weaponProf}>
                    <Text style={styles.text} category="h6">
                        Simple
                    </Text>
                    <ProficiencyArrayView proficiency={this.props.Simple} />
                </Layout>
                <Layout style={styles.weaponProf}>
                    <Text style={styles.text} category="h6">
                        Martial
                    </Text>
                    <ProficiencyArrayView proficiency={this.props.Martial} />
                </Layout>
                <Layout style={styles.weaponProf}>
                    <Text style={styles.text} category="h6">
                        Other
                    </Text>
                    {/* 
                    TODO: Need to convert an array of "others" into a flat list. 
                    */}
                    <ProficiencyArrayView
                        proficiency={
                            this.props.Others[0]
                                ? this.props.Others[0].proficiency
                                : Proficiencies.Untrained
                        }
                    />
                </Layout>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingBottom: 10,
        flexWrap: "wrap",
        justifyContent: "center",
    },
    weaponProf: {
        width: 100,
        justifyContent: "center",
        padding: 5,
    },
    text: {
        alignSelf: "center",
        justifyContent: "center",
    },
});
