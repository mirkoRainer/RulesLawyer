import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import ProficiencyView, { ProficiencyProps } from "../../../../Shared/ProficiencyView";
import { getWornArmorProficiency } from "./ArmorClassHelper";
import { CharacterSheetState } from "../../../../../store/Store";
import { AbilityScore, CalculateAbilityScoreModifier } from "../../../../../PF2eCoreLib/AbilityScores";
import { ArmorProficiencies, WornArmor } from "../../../../../PF2eCoreLib/PlayerCharacter";
import { connect } from "react-redux";
import Shield, { ShieldProps } from "./Shield";
import { GetProficiencyValue } from "../../../../../PF2eCoreLib/Proficiencies";
import ProficiencyArrayView from "../../../../Shared/ProficiencyArrayView";
import ResistancesImmunitiesWeaknesses from "../ResistancesImmunitiesWeaknesses";


const ACView: React.FC<Props> = (props) => {
    const acProficiency = (): ProficiencyProps => {
        return {
            title: "AC",
            keyAbility: props.dexterity,
            proficiency: getWornArmorProficiency(props.armorProficiencies, props.wornArmor.Category),
            level: props.level,
            itemBonus: props.wornArmor.ACBonus,
            is10base: true,
            isACBase: true,
            dexCap: props.wornArmor.DexCap,
        };
    };

    const modifier = CalculateAbilityScoreModifier(props.dexterity.score);
    const wornProficiency = getWornArmorProficiency(props.armorProficiencies, props.wornArmor.Category);
    const total =
            10 +
            modifier +
            props.level +
            props.wornArmor.ACBonus +
            GetProficiencyValue(wornProficiency);

    return(
        <View style={{flex: 2}}>
            <View style={styles.horizontal}>
                <Text h3 style={{paddingLeft: 10}}>AC</Text>
                <Text h3 style={{paddingRight: 10}}>{total}</Text>
                <View style={{ flex: 1}}>
                    <Text style={{...styles.container, fontSize: 18}}> = 10 + DEX: {modifier} Cap: 
                        {props.wornArmor.DexCap !== undefined ? props.wornArmor.DexCap : 0} Armor: +{props.wornArmor.ACBonus}</Text>
                    <ProficiencyArrayView proficiency={wornProficiency} />
                </View>
            </View>
            <View style={{...styles.horizontal, flex: 2}}>
                <Shield
                    shieldProps={props.shield}
                />
                <ResistancesImmunitiesWeaknesses 
                    resistances={props.resistances}
                    immunities={props.immunities}
                    weaknesses={props.weaknesses}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    horizontal: {
        flex: 1,
        flexDirection: "row"
    },
    centered: {
        alignSelf: "center"
    }
});

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {

}

interface LinkStateProps {
    dexterity: AbilityScore;
    armorProficiencies: ArmorProficiencies;
    wornArmor: WornArmor;
    level: number;
    shield: ShieldProps;
    resistances: string;
    immunities: string;
    weaknesses: string;
}

const mapDispatchToProps = (
): LinkDispatchProps => {
    return {

    };
};

const mapStateToProps = (
    state: CharacterSheetState): LinkStateProps => ({
    dexterity: state.playerCharacter.abilityScores.Dexterity,
    armorProficiencies: state.playerCharacter.armorProficiencies,
    wornArmor: state.playerCharacter.wornArmor,
    level: state.playerCharacter.level,
    shield: state.playerCharacter.shield,
    resistances: state.playerCharacter.resistances,
    immunities: state.playerCharacter.immunities,
    weaknesses: state.playerCharacter.weakness
});

export default connect(mapStateToProps, mapDispatchToProps)(ACView);
