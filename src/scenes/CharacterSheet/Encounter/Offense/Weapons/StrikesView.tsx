import React, { Component } from "react";
import { StyleSheet } from "react-native";
import WeaponDamageSection from "./WeaponDamageSection";
import ProficiencyView from "../../../../Shared/ProficiencyView";
import { Layout, Text } from "@ui-kitten/components";
import { Weapon } from "../../../../../PF2eCoreLib/PlayerCharacter";

export interface WeaponViewProps {
    weapon: Weapon
}
interface Props {
    weapons: WeaponViewProps[];
    level: number;
}

interface State {}

export default class StrikesView extends Component<Props, State> {
    render() {
        return (
            <Layout style={styles.container}>
                <Text category='h4' style={styles.title}>Strikes</Text>
                {/* Need to use a SectionList of Strikes and SpellAttack here. */}
                <ProficiencyView
                    title={this.props.weapons[0].weapon.title}
                    keyAbility={this.props.weapons[0].weapon.ability}
                    proficiency={this.props.weapons[0].proficiency}
                    level={this.props.level}
                    itemBonus={this.props.weapons[0].itemBonus}
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
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        flex: 1,
        textAlign: "center"
    }
});
