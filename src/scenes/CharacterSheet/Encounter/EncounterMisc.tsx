import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Proficiencies } from "../../Shared/PF2eCoreLib/Proficiencies";
import { PlayerCharacter } from "../../Shared/PF2eCoreLib/PlayerCharacter";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { startChangeClassDCProficiency } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { startStringPickerModalSelection } from "../../../store/actions/Modals/ModalsActions";
import { CharacterSheetState } from "../../../store/Store";
import { connect } from "react-redux";
import ProficiencyView, { ProficiencyProps } from "../../Shared/ProficiencyView";
import { Bonus } from "../../Shared/PF2eCoreLib/Bonus";
import { BonusType } from "../../Shared/PF2eCoreLib/BonusTypes";
import Conditions from "./Components/Conditions";

const EncounterMisc: React.FC<Props> = (props) => {
    const classDCProficiency = (): ProficiencyProps => {
        return {
            title: "Class DC",
            keyAbility: props.playerCharacter.abilityScores[props.playerCharacter.pcClass.keyAbility],
            proficiency: props.playerCharacter.pcClass.proficiency,
            level: props.playerCharacter.level,
            itemBonus: Bonus.GetBonusFor(
                "classDc",
                BonusType.Item,
                props.playerCharacter.bonuses
            ),
            is10base: true,
        };
    };
    
    return (
        <ScrollView>
            <ProficiencyView
                title={"Class DC"}
                proficiency={classDCProficiency().proficiency}
                keyAbility={
                    classDCProficiency().keyAbility
                }
                is10base={classDCProficiency().is10base}
                itemBonus={classDCProficiency().itemBonus}
                level={props.playerCharacter.level}
            />
            <Conditions conditions={props.playerCharacter.conditions} />
        </ScrollView>
    );
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {

}

interface LinkStateProps {
    playerCharacter: PlayerCharacter;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
    return {

    };
};

const mapStateToProps = (
    state: CharacterSheetState): LinkStateProps => ({
    playerCharacter: state.playerCharacter,
});

export default connect(mapStateToProps, mapDispatchToProps)(EncounterMisc);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
    }
});