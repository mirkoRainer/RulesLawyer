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

    const modifier = CalculateAbilityScoreModifier(props.dexterity.score);
    const wornProficiency = getWornArmorProficiency(props.armorProficiencies, props.wornArmor.Category);
    const dexOrCap: string = props.wornArmor.DexCap >= modifier ? `DEX:${modifier}` : `DEX CAP:${props.wornArmor.DexCap}`;
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
            <Text style={{...styles.container, fontSize: 18}}> 10 + {dexOrCap} + Armor:{props.wornArmor.ACBonus} + Prof:{GetProficiencyValue(wornProficiency)} + Level:{props.level}</Text>
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
