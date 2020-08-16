import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { AppState } from "../../../../store/Store";
import { AbilityScore } from "../../../../PF2eCoreLib/AbilityScores";
import { Ability } from "../../../../PF2eCoreLib/Ability";
import { SavesProp } from "./SavesProps";
import ProficiencyView, { ProficiencyProps } from "../../../Shared/ProficiencyView";
import { Bonus, iBonus } from "../../../../PF2eCoreLib/Bonus";
import { BonusType } from "../../../../PF2eCoreLib/BonusTypes";
import { connect } from "react-redux";
import { Saves } from "../../../../PF2eCoreLib/PlayerCharacter";

const SavesView: React.FC<Props> = (props) => {

    const fortitudeSave = (): ProficiencyProps => {
        return {
            title: "Fortitude",
            keyAbility: props.constitution,
            proficiency: props.saves.fortitude,
            level: props.level,
            itemBonus: Bonus.GetBonusFor(
                "fortitude",
                BonusType.Item,
                props.bonuses
            ),
        };
    };
    const willSave = (): ProficiencyProps => {
        return {
            title: "Will",
            keyAbility: props.wisdom,
            proficiency: props.saves.will,
            level: props.level,
            itemBonus: Bonus.GetBonusFor(
                "Wisdom",
                BonusType.Item,
                props.bonuses
            ),
        };
    };
    const reflexSave = (): ProficiencyProps => {
        return {
            title: "Reflex",
            keyAbility: props.dexterity,
            proficiency: props.saves.reflex,
            level: props.level,
            itemBonus: Bonus.GetBonusFor(
                "Dexterity",
                BonusType.Item,
                props.bonuses
            ),
        };
    }; 
    
    return(
        <Layout style={{flex:1}}>
            <ProficiencyView
                title={"Fortitude"}
                keyAbility={
                    props.constitution
                }
                proficiency={props.saves.fortitude}
                level={props.level}
                itemBonus={fortitudeSave().itemBonus}
            />
            <ProficiencyView
                title={"Reflex"}
                keyAbility={
                    props.dexterity
                }
                proficiency={props.saves.reflex}
                level={props.level}
                itemBonus={reflexSave().itemBonus}
            />
            <ProficiencyView
                title={"Will"}
                keyAbility={
                    props.wisdom
                }
                proficiency={props.saves.will}
                level={props.level}
                itemBonus={willSave().itemBonus}
            />
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {

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
): LinkDispatchProps => {
    return {

    };
};

const mapStateToProps = (
    state: AppState): LinkStateProps => ({
    constitution: state.playerCharacter.abilityScores.Constitution,
    dexterity: state.playerCharacter.abilityScores.Dexterity,
    wisdom: state.playerCharacter.abilityScores.Wisdom,
    level: state.playerCharacter.level,
    saves: state.playerCharacter.saves,
    bonuses: state.playerCharacter.bonuses
});

export default connect(mapStateToProps, mapDispatchToProps)(SavesView);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center"
    }
});