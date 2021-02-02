import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { EntireAppState } from "../../../../store/Store";
import { AbilityScore } from "../../../../PF2eCoreLib/AbilityScores";
import { Ability } from "../../../../PF2eCoreLib/Ability";
import { SavesProp } from "./SavesProps";
import ProficiencyView, {
    ProficiencyProps,
} from "../../../Shared/ProficiencyView";
import { GetBonusesFor, iBonus } from "../../../../PF2eCoreLib/Bonus";
import { BonusType } from "../../../../PF2eCoreLib/BonusTypes";
import { connect } from "react-redux";
import { Saves } from "../../../../PF2eCoreLib/PlayerCharacter";
import { TouchableOpacity } from "react-native-gesture-handler";
import { bindActionCreators } from "redux";
import {
    startChangeSaveProficiencies,
    ChangeSaveProficiencies,
} from "../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { ThunkDispatch } from "redux-thunk";
import {
    Proficiencies,
    DetermineNextProficiency,
} from "../../../../PF2eCoreLib/Proficiencies";
import { startTextEditModal } from "../../../../store/actions/Modals/ModalsActions";

const SavesView: React.FC<Props> = (props) => {
    const fortitudeSave = (): ProficiencyProps => {
        return {
            title: "Fortitude",
            keyAbility: props.constitution,
            proficiency: props.saves.fortitude,
            level: props.level,
            itemBonus: GetBonusesFor("fortitude", props.bonuses).item,
        };
    };
    const willSave = (): ProficiencyProps => {
        return {
            title: "Will",
            keyAbility: props.wisdom,
            proficiency: props.saves.will,
            level: props.level,
            itemBonus: GetBonusesFor("Wisdom", props.bonuses).item,
        };
    };
    const reflexSave = (): ProficiencyProps => {
        return {
            title: "Reflex",
            keyAbility: props.dexterity,
            proficiency: props.saves.reflex,
            level: props.level,
            itemBonus: GetBonusesFor("Dexterity", props.bonuses).item,
        };
    };

    const changeFort = () => {
        const fortProf = props.saves.fortitude;
        props.changeSaves({
            ...props.saves,
            fortitude: DetermineNextProficiency(fortProf),
        });
    };
    const changeReflex = () => {
        const reflexProf = props.saves.reflex;
        props.changeSaves({
            ...props.saves,
            reflex: DetermineNextProficiency(reflexProf),
        });
    };
    const changeWill = () => {
        const willProf = props.saves.will;
        props.changeSaves({
            ...props.saves,
            will: DetermineNextProficiency(willProf),
        });
    };

    return (
        <Layout style={{ flex: 1 }}>
            <TouchableOpacity onPress={changeFort}>
                <ProficiencyView
                    title={"Fortitude"}
                    keyAbility={props.constitution}
                    proficiency={props.saves.fortitude}
                    level={props.level}
                    itemBonus={fortitudeSave().itemBonus}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={changeReflex}>
                <ProficiencyView
                    title={"Reflex"}
                    keyAbility={props.dexterity}
                    proficiency={props.saves.reflex}
                    level={props.level}
                    itemBonus={reflexSave().itemBonus}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={changeWill}>
                <ProficiencyView
                    title={"Will"}
                    keyAbility={props.wisdom}
                    proficiency={props.saves.will}
                    level={props.level}
                    itemBonus={willSave().itemBonus}
                />
            </TouchableOpacity>
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {
    changeSaves: (saves: Saves) => void;
    startTextEditModal: (propertyToChange: string) => void;
}

interface LinkStateProps {
    constitution: AbilityScore;
    dexterity: AbilityScore;
    wisdom: AbilityScore;
    level: number;
    saves: Saves;
    bonuses: iBonus[];
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        changeSaves: bindActionCreators(startChangeSaveProficiencies, dispatch),
        startTextEditModal: bindActionCreators(startTextEditModal, dispatch),
    };
};

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    constitution: state.playerCharacter.abilityScores.Constitution,
    dexterity: state.playerCharacter.abilityScores.Dexterity,
    wisdom: state.playerCharacter.abilityScores.Wisdom,
    level: state.playerCharacter.level,
    saves: state.playerCharacter.saves,
    bonuses: state.playerCharacter.bonuses,
});

export default connect(mapStateToProps, mapDispatchToProps)(SavesView);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
