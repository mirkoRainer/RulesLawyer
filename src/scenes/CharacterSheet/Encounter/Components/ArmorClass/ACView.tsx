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
        <View style={styles.container}>
            <View style={styles.horizontal}>
                <Text h4>AC</Text>
                <Text h4>{total}</Text>
                <Text> = 10 + DEX:{modifier} Cap:
                    {props.wornArmor.DexCap !== undefined ? props.wornArmor.DexCap : 0}</Text>
                <Text>Armor: +{props.wornArmor.ACBonus}</Text>
                <ProficiencyArrayView proficiency={wornProficiency} />
            </View>
            <Shield
                shieldProps={props.shield}
            />
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
