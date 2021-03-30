import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { OtherWeaponProficiency } from "../../Encounter/Offense/Weapons/OtherWeaponProficiency";
import { Proficiencies } from "../../../../PF2eCoreLib/Proficiencies";
import ProficiencyArrayView from "../../../Shared/ProficiencyArrayView";
import { WeaponProficiencies } from "../../../../PF2eCoreLib/PlayerCharacter/PlayerCharacter";
import { Layout, Text } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StoryStackParamList } from "../StoryNavigation";

type WeaponProfNavigationProp = StackNavigationProp<
    StoryStackParamList,
    "EditWeaponProficiencyView"
>;

export const WeaponProficienciesView: React.FC<WeaponProficiencies> = (
    props
) => {
    const navigation = useNavigation<WeaponProfNavigationProp>();
    const goToEditWeaponProficiencyView = () => {
        console.debug("Navigating to EditWeaponProficiencyView");
        navigation.navigate("EditWeaponProficiencyView");
    };
    const otherProfs = props.Other;
    let renderOthers: JSX.Element[] = [];
    otherProfs.forEach((proficiency, index) => {
        renderOthers.push(
            <Layout
                style={styles.weaponProf}
                key={proficiency.description + index}
            >
                <Text style={styles.text} category="h6">
                    {proficiency.description}
                </Text>
                <ProficiencyArrayView proficiency={proficiency.proficiency} />
            </Layout>
        );
    });
    return (
        <TouchableOpacity onPress={goToEditWeaponProficiencyView}>
            <Layout style={styles.container}>
                <Layout style={styles.weaponProf}>
                    <Text style={styles.text} category="h6">
                        Unarmed
                    </Text>
                    <ProficiencyArrayView proficiency={props.Unarmed} />
                </Layout>
                <Layout style={styles.weaponProf}>
                    <Text style={styles.text} category="h6">
                        Simple
                    </Text>
                    <ProficiencyArrayView proficiency={props.Simple} />
                </Layout>
                <Layout style={styles.weaponProf}>
                    <Text style={styles.text} category="h6">
                        Martial
                    </Text>
                    <ProficiencyArrayView proficiency={props.Martial} />
                </Layout>
                {renderOthers}
            </Layout>
        </TouchableOpacity>
    );
};

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
