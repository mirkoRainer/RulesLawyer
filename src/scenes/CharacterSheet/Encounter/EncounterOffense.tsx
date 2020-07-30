import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Proficiencies } from "../../../PF2eCoreLib/Proficiencies";
import { PlayerCharacter, Action } from "../../../PF2eCoreLib/PlayerCharacter";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { startChangeClassDCProficiency } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { startStringPickerModalSelection } from "../../../store/actions/Modals/ModalsActions";
import { CharacterSheetState } from "../../../store/Store";
import { connect } from "react-redux";
import ProficiencyView, { ProficiencyProps } from "../../Shared/ProficiencyView";
import { Bonus } from "../../../PF2eCoreLib/Bonus";
import { BonusType } from "../../../PF2eCoreLib/BonusTypes";
import Movements from "./Components/Movements";
import WeaponProficienciesView from "./Components/Weapons/WeaponProficienciesView";
import Weapons from "./Components/Weapons/Weapons";
import { WeaponViewProps, GetProficiencyForWeapon } from "./Components/Weapons/WeaponViewProps";
import { GetAbilityModifierFromScores } from "../../../PF2eCoreLib/AbilityScores";
import ActionsAndActivities from "./Components/ActionsAndActivities";
import { ScrollView } from "react-native-gesture-handler";

const EncounterOffense: React.FC<Props> = (props) => {
    const perception = (): ProficiencyProps => {
        return {
            title: "Perception",
            keyAbility: props.playerCharacter.abilityScores.Wisdom,
            proficiency: props.playerCharacter.perceptionProficiency,
            level: props.playerCharacter.level,
            itemBonus: Bonus.GetBonusFor(
                "perception",
                BonusType.Item,
                props.playerCharacter.bonuses
            ),
            descriptor: props.playerCharacter.senses,
        };
    };
    const weapons = (): WeaponViewProps[] => {
        const weapon0 = props.playerCharacter.weapons[0];
        return [
            {
                title: weapon0.title,
                abilityModifier: props.playerCharacter.abilityScores[weapon0.ability],
                proficiency: GetProficiencyForWeapon(
                    weapon0,
                    props.playerCharacter.weaponProficiencies
                ),
                itemBonus: weapon0.toHitBonus,
                damageDice: weapon0.damageDice,
                damageAbilityModifier: GetAbilityModifierFromScores(
                    weapon0.damageAbilityModifier,
                    props.playerCharacter.abilityScores
                ),
                damageType: weapon0.damageType,
                weaponTraits: weapon0.weaponTraits,
            },
        ];
    };
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <ProficiencyView
                    title={"Perception"}
                    keyAbility={
                        props.playerCharacter.abilityScores.Wisdom
                    }
                    proficiency={props.playerCharacter.perceptionProficiency}
                    level={props.playerCharacter.level}
                    itemBonus={perception().itemBonus}
                    descriptor={perception().descriptor}
                />
                <Movements 
                    movements={props.playerCharacter.movement}
                />
                <ActionsAndActivities actions={props.actions} />
                <Text style={styles.header}>Weapon Proficiencies</Text>
                <WeaponProficienciesView
                    Unarmed={props.playerCharacter.weaponProficiencies.Unarmed}
                    Simple={props.playerCharacter.weaponProficiencies.Simple}
                    Martial={props.playerCharacter.weaponProficiencies.Martial}
                    Others={
                        props.playerCharacter.weaponProficiencies.Others
                    /* Others should have a description and proficiency. */
                    }
                />
                <Weapons
                    weapons={weapons()}
                    level={props.playerCharacter.level}
                />
            </ScrollView>
        </View>
    );
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {

}

interface LinkStateProps {
    playerCharacter: PlayerCharacter;
    actions: Action[];
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
    return {

    };
};

const mapStateToProps = (
    state: CharacterSheetState): LinkStateProps => ({
    playerCharacter: state.playerCharacter,
    actions: state.playerCharacter.actions
});

export default connect(mapStateToProps, mapDispatchToProps)(EncounterOffense);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
    },
    header: {
        flex: 1,
        textAlign: "center",
        fontSize: 22
    }
});