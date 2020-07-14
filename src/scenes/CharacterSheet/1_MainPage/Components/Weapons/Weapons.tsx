import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import WeaponDamageSection from "./WeaponDamageSection";
import { WeaponViewProps } from "./WeaponViewProps";
import ProficiencyView from "../../../../Shared/ProficiencyView";

interface Props {
    weapons: WeaponViewProps[];
    level: number;
}

interface State {}

export default class Weapons extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                {/* Need to use a SectionList of Strikes and SpellAttack here. */}
                <ProficiencyView
                    title={this.props.weapons[0].title}
                    keyAbility={this.props.weapons[0].abilityModifier}
                    proficiency={this.props.weapons[0].proficiency}
                    level={this.props.level}
                    itemBonus={this.props.weapons[0].itemBonus}
                    onProficiencyPress={()=>{}}
                />
                <WeaponDamageSection
                    damageDice={this.props.weapons[0].damageDice}
                    abilityModifier={
                        this.props.weapons[0].damageAbilityModifier
                    }
                    damageType={this.props.weapons[0].damageType}
                    other={""}
                    traits={this.props.weapons[0].weaponTraits}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
    },
    text: {
        flex: 1,
        width: 100,
    },
});
