import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Proficiencies } from "../../Shared/PF2eCoreLib/Proficiencies";
import { PlayerCharacter } from "../../Shared/PF2eCoreLib/PlayerCharacter";
import { Action, bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { startChangeClassDCProficiency } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { startStringPickerModalSelection } from "../../../store/actions/Modals/ModalsActions";
import { CharacterSheetState } from "../../../store/Store";
import { connect } from "react-redux";
import Encounter from "./Encounter";
import ProficiencyView, { ProficiencyProps } from "../../Shared/ProficiencyView";
import { Bonus } from "../../Shared/PF2eCoreLib/Bonus";
import { BonusType } from "../../Shared/PF2eCoreLib/BonusTypes";
import ArmorProficiencies from "./Components/ArmorClass/ArmorProficiencies";
import Shield from "./Components/ArmorClass/Shield";
import { ArmorCategory } from "../../Shared/PF2eCoreLib/ArmorCategory";
import { prop } from "../../Shared/PF2eCoreLib/TypescriptEvolution";
import HitPoints from "./Components/HitPoints/HitPoints";
import ResistancesImmunitiesWeaknesses from "./Components/ResistancesImmunitiesWeaknesses";
import { ScrollView } from "react-native-gesture-handler";

const EncounterDefense: React.FC<Props> = (props) => {
    const wornArmorProficiency = (): Proficiencies => {
        switch (props.playerCharacter.wornArmor.Category) {
        case ArmorCategory.Unarmored: {
            return prop(
                props.playerCharacter.armorProficiencies,
                "unarmored"
            );
            break;
        }
        case ArmorCategory.Light: {
            return prop(props.playerCharacter.armorProficiencies, "light");
            break;
        }
        case ArmorCategory.Medium: {
            return prop(props.playerCharacter.armorProficiencies, "medium");
        }
        case ArmorCategory.Heavy: {
            return prop(props.playerCharacter.armorProficiencies, "heavy");
        }
        default: {
            return Proficiencies.Untrained;
        }
        }
    };
    const acProficiency = (): ProficiencyProps => {
        return {
            title: "AC",
            keyAbility: props.playerCharacter.abilityScores.Dexterity,
            proficiency: wornArmorProficiency(),
            level: props.playerCharacter.level,
            itemBonus: props.playerCharacter.wornArmor.ACBonus,
            is10base: true,
            isACBase: true,
            dexCap: props.playerCharacter.wornArmor.DexCap,
        };
    };
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
        <ScrollView>
            <Text style={styles.header}>Defense</Text>
            <ProficiencyView
                title={"AC"}
                keyAbility={
                    acProficiency().keyAbility
                }
                proficiency={acProficiency().proficiency}
                level={props.playerCharacter.level}
                itemBonus={acProficiency().itemBonus}
                is10base={acProficiency().is10base}
                isACBase={true}
                dexCap={acProficiency().dexCap}
                armorPenalty={acProficiency().armorPenalty}
            />
            <Shield
                shieldProps={props.playerCharacter.shield}
            />
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
            <HitPoints
                max={props.playerCharacter.hitPoint.max}
                current={props.playerCharacter.hitPoint.current}
                temporary={props.playerCharacter.hitPoint.temporary}
                dying={props.playerCharacter.hitPoint.dying}
                wounded={props.playerCharacter.hitPoint.wounded}
            />
            <ResistancesImmunitiesWeaknesses 
                resistances={props.playerCharacter.resistances}
                immunities={props.playerCharacter.immunities}
                weaknesses={props.playerCharacter.weakness}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(EncounterDefense);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
    },
    header: {
        flex: .1,
        textAlign: "center",
        fontSize: 22
    }
});