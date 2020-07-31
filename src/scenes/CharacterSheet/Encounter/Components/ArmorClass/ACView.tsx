import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProficiencyView, { ProficiencyProps } from "../../../../Shared/ProficiencyView";
import { wornArmorProficiency } from "./ArmorClassHelper";
import { CharacterSheetState } from "../../../../../store/Store";
import { AbilityScore } from "../../../../../PF2eCoreLib/AbilityScores";
import { ArmorProficiencies, WornArmor } from "../../../../../PF2eCoreLib/PlayerCharacter";
import { connect } from "react-redux";
import Shield, { ShieldProps } from "./Shield";


const ACView: React.FC<Props> = (props) => {
    const acProficiency = (): ProficiencyProps => {
        return {
            title: "AC",
            keyAbility: props.dexterity,
            proficiency: wornArmorProficiency(props.armorProficiencies, props.wornArmor.Category),
            level: props.level,
            itemBonus: props.wornArmor.ACBonus,
            is10base: true,
            isACBase: true,
            dexCap: props.wornArmor.DexCap,
        };
    };

    return(
        <View>
            <ProficiencyView
                title={"AC"}
                keyAbility={
                    acProficiency().keyAbility
                }
                proficiency={acProficiency().proficiency}
                level={props.level}
                itemBonus={acProficiency().itemBonus}
                is10base={acProficiency().is10base}
                isACBase={true}
                dexCap={acProficiency().dexCap}
                armorPenalty={acProficiency().armorPenalty}
            />
            <Shield
                shieldProps={props.shield}
            />
        </View>
    );
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {

}

interface LinkStateProps {
    dexterity: AbilityScore;
    armorProficiencies: ArmorProficiencies;
    wornArmor: WornArmor;
    level: number;
    shield: ShieldProps;
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
    shield: state.playerCharacter.shield
});

export default connect(mapStateToProps, mapDispatchToProps)(ACView);


const styles = StyleSheet.create({
    centered: {
        alignSelf: "center"
    }
});