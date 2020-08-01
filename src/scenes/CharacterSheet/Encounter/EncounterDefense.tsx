import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { PlayerCharacter } from "../../../PF2eCoreLib/PlayerCharacter";
import { CharacterSheetState } from "../../../store/Store";
import { connect } from "react-redux";
import ProficiencyView, { ProficiencyProps } from "../../Shared/ProficiencyView";
import { Bonus } from "../../../PF2eCoreLib/Bonus";
import { BonusType } from "../../../PF2eCoreLib/BonusTypes";
import HitPoints from "./Components/HitPoints/HitPoints";
import ResistancesImmunitiesWeaknesses from "./Components/ResistancesImmunitiesWeaknesses";
import ACView from "./Components/ArmorClass/ACView";

const EncounterDefense: React.FC<Props> = (props) => {
    const fortitudeSave = (): ProficiencyProps => {
        return {
            title: "Fortitude",
            keyAbility: props.playerCharacter.abilityScores.Constitution,
            proficiency: props.playerCharacter.saves.fortitude,
            level: props.playerCharacter.level,
            itemBonus: Bonus.GetBonusFor(
                "fortitude",
                BonusType.Item,
                props.playerCharacter.bonuses
            ),
        };
    };
    const willSave = (): ProficiencyProps => {
        return {
            title: "Will",
            keyAbility: props.playerCharacter.abilityScores.Wisdom,
            proficiency: props.playerCharacter.saves.will,
            level: props.playerCharacter.level,
            itemBonus: Bonus.GetBonusFor(
                "Wisdom",
                BonusType.Item,
                props.playerCharacter.bonuses
            ),
        };
    };
    const reflexSave = (): ProficiencyProps => {
        return {
            title: "Reflex",
            keyAbility: props.playerCharacter.abilityScores.Dexterity,
            proficiency: props.playerCharacter.saves.reflex,
            level: props.playerCharacter.level,
            itemBonus: Bonus.GetBonusFor(
                "Dexterity",
                BonusType.Item,
                props.playerCharacter.bonuses
            ),
        };
    }; 
    
    return (
        <View style={styles.container}>
            <Text h2 style={{ alignSelf: "center"}}>Defense</Text>
            <HitPoints
                max={props.playerCharacter.hitPoint.max}
                current={props.playerCharacter.hitPoint.current}
                temporary={props.playerCharacter.hitPoint.temporary}
                dying={props.playerCharacter.hitPoint.dying}
                wounded={props.playerCharacter.hitPoint.wounded}
            />
            <ACView />
            <ProficiencyView
                title={"Fortitude"}
                keyAbility={
                    props.playerCharacter.abilityScores.Constitution
                }
                proficiency={props.playerCharacter.saves.fortitude}
                level={props.playerCharacter.level}
                itemBonus={fortitudeSave().itemBonus}
            />
            <ProficiencyView
                title={"Reflex"}
                keyAbility={
                    props.playerCharacter.abilityScores.Dexterity
                }
                proficiency={props.playerCharacter.saves.reflex}
                level={props.playerCharacter.level}
                itemBonus={reflexSave().itemBonus}
            />
            <ProficiencyView
                title={"Will"}
                keyAbility={
                    props.playerCharacter.abilityScores.Wisdom
                }
                proficiency={props.playerCharacter.saves.will}
                level={props.playerCharacter.level}
                itemBonus={willSave().itemBonus}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        alignContent: "stretch",
        alignSelf: "stretch",
    },
});

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {

}

interface LinkStateProps {
    playerCharacter: PlayerCharacter;
}

const mapDispatchToProps = (
): LinkDispatchProps => {
    return {

    };
};

const mapStateToProps = (
    state: CharacterSheetState): LinkStateProps => ({
    playerCharacter: state.playerCharacter,
});

export default connect(mapStateToProps, mapDispatchToProps)(EncounterDefense);

