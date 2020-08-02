import React from "react";
import { View, StyleSheet } from "react-native";
import { PlayerCharacter, Action } from "../../../PF2eCoreLib/PlayerCharacter";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { CharacterSheetState } from "../../../store/Store";
import { connect } from "react-redux";
import ProficiencyView, { ProficiencyProps } from "../../Shared/ProficiencyView";
import { Bonus } from "../../../PF2eCoreLib/Bonus";
import { BonusType } from "../../../PF2eCoreLib/BonusTypes";
import Movements from "./Offense/Movements";
import Weapons from "./Offense/Weapons/Weapons";
import { WeaponViewProps, GetProficiencyForWeapon } from "./Offense/Weapons/WeaponViewProps";
import { GetAbilityModifierFromScores } from "../../../PF2eCoreLib/AbilityScores";
import ActionsAndActivities from "./Offense/ActionsAndActivities";
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
): LinkDispatchProps => {
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