import React from "react";
import { StyleSheet } from "react-native";
import PlayerCharacter, { PF2Action } from "../../../PF2eCoreLib/PlayerCharacter";
import { AppState } from "../../../store/Store";
import { connect } from "react-redux";
import ProficiencyView, { ProficiencyProps } from "../../Shared/ProficiencyView";
import { Bonus } from "../../../PF2eCoreLib/Bonus";
import { BonusType } from "../../../PF2eCoreLib/BonusTypes";
import Movements from "./Offense/Movements";
import StrikesView from "./Offense/Weapons/StrikesView";
import { WeaponViewProps, GetProficiencyForWeapon } from "./Offense/Weapons/WeaponViewProps";
import { GetAbilityModifierFromScores } from "../../../PF2eCoreLib/AbilityScores";
import ActionsAndActivities from "./Offense/ActionsAndActivities";
import { ScrollView } from "react-native-gesture-handler";
import { Divider, Layout } from "@ui-kitten/components";
import ClassDC from "./Offense/ClassDC";
import PerceptionView from "./Offense/PerceptionView";

const EncounterOffense: React.FC<Props> = (props) => {

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
        <Layout style={styles.container}>
            <ScrollView>
                <ClassDC />
                <Divider />
                <PerceptionView />
                <Divider />
                <Movements 
                    movements={props.playerCharacter.movement}
                />
                <Divider />
                <ActionsAndActivities actions={props.actions} />
                <StrikesView
                    weapons={weapons()}
                    level={props.playerCharacter.level}
                />
            </ScrollView>
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {

}

interface LinkStateProps {
    playerCharacter: PlayerCharacter;
    actions: PF2Action[];
}

const mapDispatchToProps = (
): LinkDispatchProps => {
    return {

    };
};

const mapStateToProps = (
    state: AppState): LinkStateProps => ({
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