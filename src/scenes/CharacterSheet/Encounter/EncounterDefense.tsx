import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { PlayerCharacter } from "../../../PF2eCoreLib/PlayerCharacter";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { CharacterSheetState } from "../../../store/Store";
import { connect } from "react-redux";
import ProficiencyView, { ProficiencyProps } from "../../Shared/ProficiencyView";
import { Bonus } from "../../../PF2eCoreLib/Bonus";
import { BonusType } from "../../../PF2eCoreLib/BonusTypes";
import Shield from "./Components/ArmorClass/Shield";
import HitPoints from "./Components/HitPoints/HitPoints";
import ResistancesImmunitiesWeaknesses from "./Components/ResistancesImmunitiesWeaknesses";
import { ScrollView } from "react-native-gesture-handler";
import { wornArmorProficiency } from "./Components/ArmorClass/ArmorClassHelper";

const EncounterDefense: React.FC<Props> = (props) => {
    const acProficiency = (): ProficiencyProps => {
        return {
            title: "AC",
            keyAbility: props.playerCharacter.abilityScores.Dexterity,
            proficiency: wornArmorProficiency(props.playerCharacter.armorProficiencies, props.playerCharacter.wornArmor.Category),
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
        <View>
            <Text h2>Defense</Text>
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
        </View>
    );
};

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

