import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CharacterMetadata, { CharacterMetadataProps } from "./Components/CharacterMetadata";
import AbilityScores from "./Components/AbilityScores/AbilityScoresView";
import { Dimensions } from "react-native";
import { GetAbilityModifierFromScores } from "../../Shared/PF2eCoreLib/AbilityScores";
import ProficiencyView, { ProficiencyProps } from "../../Shared/ProficiencyView";
import ArmorProficiencies from "./Components/ArmorClass/ArmorProficiencies";
import Shield from "./Components/ArmorClass/Shield";
import ResistancesImmunitiesWeaknesses from "./Components/ResistancesImmunitiesWeaknesses";
import Conditions from "./Components/Conditions";
import Movements from "./Components/Movements";
import { WeaponViewProps, GetProficiencyForWeapon } from "./Components/Weapons/WeaponViewProps";
import Weapons from "./Components/Weapons/Weapons";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startStringPickerModalSelection } from "../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { startChangeClassDCProficiency } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { Proficiencies } from "../../Shared/PF2eCoreLib/Proficiencies";
import { PlayerCharacter } from "../../Shared/PF2eCoreLib/PlayerCharacter";
import WeaponProficienciesView from "./Components/Weapons/WeaponProficienciesView";
import SkillsView from "./Components/SkillsView";
import { CharacterSheetState } from "../../../store/Store";
import { OwnProps } from "./Components/CharacterMetadata/ClassView";
import { Bonus } from "../../Shared/PF2eCoreLib/Bonus";
import { BonusType } from "../../Shared/PF2eCoreLib/BonusTypes";
import { ArmorCategory } from "../../Shared/PF2eCoreLib/ArmorCategory";
import { prop } from "../../Shared/PF2eCoreLib/TypescriptEvolution";
import HitPoints from "./Components/HitPoints/HitPoints";
import { ScrollView } from "react-native-gesture-handler";

var width: number = Dimensions.get("window").width; //full width

const MainPage: React.FC<Props> = (props) => {
    const characterMetadata = (): CharacterMetadataProps => {
        return {
            characterName: props.playerCharacter.name,
            playerName: props.playerCharacter.playerName,
            ancestry: props.playerCharacter.ancestry.name,
            heritage: props.playerCharacter.ancestry.heritage,
            level: props.playerCharacter.level,
            experiencePoints: props.playerCharacter.experiencePoints,
            background: props.playerCharacter.background,
            pcClass: props.playerCharacter.pcClass.name,
            subclass: props.playerCharacter.pcClass.subClass,
            classKeyAbility: props.playerCharacter.pcClass.keyAbility,
            classProficiency: props.playerCharacter.pcClass.proficiency,
            alignment: props.playerCharacter.alignment,
            deity: props.playerCharacter.deity,
            traits: props.playerCharacter.traits,
        };
    };
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

                <CharacterMetadata
                    characterMetadata={characterMetadata()}
                />
                <AbilityScores abilityScores={props.playerCharacter.abilityScores} />
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
                <ArmorProficiencies
                    unarmored={
                        props.playerCharacter.armorProficiencies.unarmored
                    }
                    light={
                        props.playerCharacter.armorProficiencies.light
                    }
                    medium={
                        props.playerCharacter.armorProficiencies.medium
                    }
                    heavy={
                        props.playerCharacter.armorProficiencies.heavy
                    }
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
                <Conditions conditions={props.playerCharacter.conditions} />
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
                <Text style={styles.text}>Weapon Proficiencies</Text>
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
                <Text style={styles.text}>Skillz</Text>
                <SkillsView skills={props.playerCharacter.skills} level={1} />
                <Text style={styles.text}>
                    Languages: {props.playerCharacter.languages.toString()}
                </Text>
            </ScrollView>
        </View>
    );
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {
    startClassDCModal: (newProficiency: Proficiencies) => void;
    startStringPickerModal: (type: string, value: string) => void;
}

interface LinkStateProps {
    playerCharacter: PlayerCharacter;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
    return {
        startClassDCModal: bindActionCreators(startChangeClassDCProficiency, dispatch),
        startStringPickerModal: bindActionCreators(startStringPickerModalSelection, dispatch)
    };
};

const mapStateToProps = (
    state: CharacterSheetState): LinkStateProps => ({
    playerCharacter: state.playerCharacter,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        width: width,
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
    },
    notes: {
        flex: 1,
    },
    text: {
        alignSelf: "center",
        flex: 1,
    },
});
