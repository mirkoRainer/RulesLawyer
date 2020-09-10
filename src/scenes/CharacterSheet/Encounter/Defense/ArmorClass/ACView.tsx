import React, { useState } from "react";
import {StyleSheet } from "react-native";
import { getWornArmorProficiency } from "./ArmorClassHelper";
import { AppState } from "../../../../../store/Store";
import { AbilityScore, CalculateAbilityScoreModifier } from "../../../../../PF2eCoreLib/AbilityScores";
import { ArmorProficiencies, WornArmor } from "../../../../../PF2eCoreLib/PlayerCharacter";
import { connect } from "react-redux";
import { GetProficiencyValue } from "../../../../../PF2eCoreLib/Proficiencies";
import ProficiencyArrayView from "../../../../Shared/ProficiencyArrayView";
import { Layout, Text } from "@ui-kitten/components";
import WornArmorEditModal from "./WornArmorEditModal";
import { TouchableOpacity } from "react-native-gesture-handler";


const ACView: React.FC<Props> = (props) => {
    const calculatedDexModifier = CalculateAbilityScoreModifier(props.dexterity.score);
    const modifier = props.wornArmor.DexCap >= calculatedDexModifier ? calculatedDexModifier : props.wornArmor.DexCap;
    const wornProficiency = getWornArmorProficiency(props.armorProficiencies, props.wornArmor.Category);
    const dexOrCap = () => {
        if (props.wornArmor.DexCap >= calculatedDexModifier){
            return (
                <Text style={styles.calculatorText}>DEX</Text>
            );
        } else { 
            return (
                <Text style={{...styles.calculatorText, flex: 1.85}}>DEX CAP</Text>
            );
        } 
    }; 
    const total =
            10 +
            modifier +
            props.level +
            props.wornArmor.ACBonus +
            GetProficiencyValue(wornProficiency, props.level);

    const [modalVisible, setModalVisible] = useState(false);
    const modalOn = () => { setModalVisible(true);};
    const modalOff = () => { setModalVisible(false);};

    return(
        <Layout style={styles.container}>
            <TouchableOpacity onPress={modalOn}>
                <Layout style={styles.horizontal}>
                    <Text style={{paddingLeft: 10}} category='h5'>AC</Text>
                    <Text style={{paddingRight: 10, alignSelf: "center"}} category='h3'>{total}</Text>
                    <Layout style={{ flex: 1}}>
                        <ProficiencyArrayView proficiency={wornProficiency} />
                        <Text category='h6' style={{textAlign: "center"}}>{props.wornArmor.Name}</Text>
                    </Layout>
                </Layout>
                <Layout style={{...styles.horizontal, alignItems: "center", paddingHorizontal:5}}>
                    <Text style={{...styles.calculatorNumber}} category='s1'>10</Text>
                    <Text style={styles.calculatorNumber}>+{modifier}</Text>
                    {dexOrCap()} 
                    <Text style={styles.calculatorNumber}>+{props.wornArmor.ACBonus}</Text>
                    <Text style={{...styles.calculatorText, flex: 1.3}}>Armor</Text>
                    <Text style={styles.calculatorNumber}>+{GetProficiencyValue(wornProficiency, props.level)}</Text>
                    <Text style={styles.calculatorText}>Prof</Text>
                    <Text style={{...styles.calculatorNumber, flex: .65}}>+{props.level}</Text>
                    <Text style={{...styles.calculatorText, flex: 1.1}}>Level</Text>
                </Layout>
            </TouchableOpacity>
            <WornArmorEditModal visible={modalVisible} toggleModal={modalOff} /> 
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        padding: 5,
        paddingVertical: 10
    },
    horizontal: {
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
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
    state: AppState): LinkStateProps => ({
    dexterity: state.playerCharacter.abilityScores.Dexterity,
    armorProficiencies: state.playerCharacter.armorProficiencies,
    wornArmor: state.playerCharacter.wornArmor,
    level: state.playerCharacter.level,

});

export default connect(mapStateToProps, mapDispatchToProps)(ACView);
