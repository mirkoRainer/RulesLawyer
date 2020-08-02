import React from "react";
import { View, StyleSheet } from "react-native";
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
import { Layout, Text } from "@ui-kitten/components";


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
    const calculatedDexModifier = CalculateAbilityScoreModifier(props.dexterity.score);
    const modifier = props.wornArmor.DexCap >= calculatedDexModifier ? calculatedDexModifier : props.wornArmor.DexCap;
    const wornProficiency = getWornArmorProficiency(props.armorProficiencies, props.wornArmor.Category);
    const dexOrCap = () => {
        if (props.wornArmor.DexCap >= calculatedDexModifier){
            return (
                <Text style={styles.calculatorText}>DEX:</Text>
            );
        } else { 
            return (
                <Text style={{...styles.calculatorText, flex: 1.85}}>DEX CAP:</Text>
            );
        } 
    }; 
    const total =
            10 +
            modifier +
            props.level +
            props.wornArmor.ACBonus +
            GetProficiencyValue(wornProficiency);

    return(
        <Layout style={{flex: 1}}>
            <Layout style={styles.horizontal}>
                <Text style={{paddingLeft: 10}} category='h5'>AC</Text>
                <Text style={{paddingRight: 10, alignSelf: "center"}} category='h3'>{total}</Text>
                <Layout style={{ flex: 1}}>
                    <ProficiencyArrayView proficiency={wornProficiency} />
                </Layout>
            </Layout>
            <Layout style={{...styles.horizontal, alignItems: "center", paddingHorizontal:5}}>
                <Text style={{...styles.calculatorNumber}}>10 + </Text>
                {dexOrCap()} 
                <Text style={styles.calculatorNumber}>{modifier} + </Text>
                <Text style={{...styles.calculatorText, flex: 1.3}}>Armor:</Text>
                <Text style={styles.calculatorNumber}>{props.wornArmor.ACBonus} + </Text>
                <Text style={styles.calculatorText}>Prof:</Text>
                <Text style={styles.calculatorNumber}>{GetProficiencyValue(wornProficiency)} + </Text>
                <Text style={{...styles.calculatorText, flex: 1.1}}>Level:</Text>
                <Text style={{...styles.calculatorNumber, flex: .65}}>{props.level}</Text>
            </Layout>
        </Layout>
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
    },
    calculatorText: {
        flex: 1,
        fontSize: 14,
        alignSelf: "center",
        textAlign: "center"
    },
    calculatorNumber: {
        flex: 1,
        fontSize: 18,
        alignSelf: "center",
        textAlign: "center",
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

});

export default connect(mapStateToProps, mapDispatchToProps)(ACView);
