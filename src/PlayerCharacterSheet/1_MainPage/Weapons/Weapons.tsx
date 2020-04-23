import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import ProficiencyView from "../../Shared/ProficiencyView";
import WeaponDamageSection from "./WeaponDamageSection";

interface Props {}

interface State {}

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

export default class Weapons extends Component<Props, State> {
    public static defaultProps = {};

    render() {
        return (
            <View style={styles.container}>
                {/* Need to use a FlatList of Strikes here. */}
                <ProficiencyView
                    title={"Morning Star"}
                    keyAbilityModifier={3}
                    proficiency={"Trained"}
                    level={1}
                    itemBonus={0}
                />
                <WeaponDamageSection
                    damageDice={"1d6"}
                    abilityModifier={3}
                    damageType={"P/B"}
                    other={""}
                    traits={["simple", "club"]}
                />
            </View>
        );
    }
}
