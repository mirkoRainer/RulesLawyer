import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CharacterMetadata, { CharacterMetadataProps } from "./Components/CharacterMetadata";
import AbilityScores from "./Components/AbilityScores/AbilityScoresView";
import { Dimensions } from "react-native";
import { AbilityScoreArray } from "../../Shared/PF2eCoreLib/AbilityScores";
import ProficiencyView, { ProficiencyProps } from "../../Shared/ProficiencyView";
import ArmorProficiencies, {
    ArmorProficiencyProps,
} from "./Components/ArmorClass/ArmorProficiencies";
import Shield, { ShieldProps } from "./Components/ArmorClass/Shield";
import HitPoints, { HitPointProps } from "./Components/HitPoints/HitPoints";
import Skills from "./Components/Skills";
import { Skill } from "./Components/Skill";
import { MovementProps } from "./Components/MovementProps";
import { SavesProp } from "./Components/SavesProps";
import ResistancesImmunitiesWeaknesses from "./Components/ResistancesImmunitiesWeaknesses";
import Conditions from "./Components/Conditions";
import Movements from "./Components/Movements";
import WeaponProficiencies, { WeaponProficiencyProps } from "./Components/Weapons/WeaponProficiencies";
import { WeaponViewProps } from "./Components/Weapons/WeaponViewProps";
import Weapons from "./Components/Weapons/Weapons";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startStringPickerModalSelection } from "../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { startChangeClassDCProficiency } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { Proficiencies } from "../../Shared/PF2eCoreLib/Proficiencies";
import { CHANGE_CLASS_DC_PROFICIENCY } from "../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";

var width: number = Dimensions.get("window").width; //full width

interface OwnProps {
    skills: Skill[];
    languages: string[];
    scores: AbilityScoreArray;
    characterMetadata: CharacterMetadataProps;
    classDCProficiency: ProficiencyProps;
    acProficiency: ProficiencyProps;
    level: number;
    armorProficiency: ArmorProficiencyProps;
    shieldProps: ShieldProps;
    saves: SavesProp;
    hitPoints: HitPointProps;
    resistances: string;
    immunities: string;
    weaknesses: string;
    conditions: string;
    perception: ProficiencyProps;
    movements: MovementProps;
    weaponProficiencies: WeaponProficiencyProps;
    weapons: WeaponViewProps[];
}

const MainPage: React.FC<Props> = (props) => {
    const changeClassDCProficiency = () => {
        console.debug("changeClassDCProficiency on MainPage");
        props.startClassDCModal(props.classDCProficiency.proficiency);
        props.startStringPickerModal(CHANGE_CLASS_DC_PROFICIENCY, props.classDCProficiency.proficiency.toString());
    };
    
    return (
        <View style={styles.container}>
            <CharacterMetadata
                characterMetadata={props.characterMetadata}
            />
            <AbilityScores abilityScores={props.scores} />
            <ProficiencyView
                title={"Class DC"}
                proficiency={props.classDCProficiency.proficiency}
                keyAbility={
                    props.classDCProficiency.keyAbility
                }
                is10base={props.classDCProficiency.is10base}
                itemBonus={props.classDCProficiency.itemBonus}
                level={props.level}
                onProficiencyPress={changeClassDCProficiency}
            />
            <ProficiencyView
                title={"AC"}
                keyAbility={
                    props.acProficiency.keyAbility
                }
                proficiency={props.acProficiency.proficiency}
                level={props.level}
                itemBonus={props.acProficiency.itemBonus}
                is10base={props.acProficiency.is10base}
                isACBase={true}
                dexCap={props.acProficiency.dexCap}
                armorPenalty={props.acProficiency.armorPenalty}
                onProficiencyPress={()=>{}}
            />
            <ArmorProficiencies
                unarmored={
                    props.armorProficiency.unarmored
                }
                light={
                    props.armorProficiency.light
                }
                medium={
                    props.armorProficiency.medium
                }
                heavy={
                    props.armorProficiency.heavy
                }
                onProficiencyPress={()=>{}}
            />
            <Shield
                shieldProps={props.shieldProps}
            />
            <ProficiencyView
                title={"Fortitude"}
                keyAbility={
                    props.saves.fortitude.keyAbility
                }
                proficiency={props.saves.fortitude.proficiency}
                level={props.level}
                itemBonus={props.saves.fortitude.itemBonus}
                onProficiencyPress={()=>{}}
            />
            <ProficiencyView
                title={"Reflex"}
                keyAbility={
                    props.saves.reflex.keyAbility
                }
                proficiency={props.saves.reflex.proficiency}
                level={props.level}
                itemBonus={props.saves.reflex.itemBonus}
                onProficiencyPress={()=>{}}
            />
            <ProficiencyView
                title={"Will"}
                keyAbility={
                    props.saves.will.keyAbility
                }
                proficiency={props.saves.will.proficiency}
                level={props.level}
                itemBonus={props.saves.will.itemBonus}
                onProficiencyPress={()=>{}}
            />
            <HitPoints
                max={props.hitPoints.max}
                current={props.hitPoints.current}
                temporary={props.hitPoints.temporary}
                dying={props.hitPoints.dying}
                wounded={props.hitPoints.wounded}
            />
            <ResistancesImmunitiesWeaknesses 
                resistances={props.resistances}
                immunities={props.immunities}
                weaknesses={props.weaknesses}
            />
            <Conditions conditions={props.conditions} />
            <ProficiencyView
                title={"Perception"}
                keyAbility={
                    props.perception.keyAbility
                }
                proficiency={props.perception.proficiency}
                level={props.level}
                itemBonus={props.perception.itemBonus}
                descriptor={props.perception.descriptor}
                onProficiencyPress={() => {}}
            />
            <Movements 
                movements={props.movements}
            />
            <Text style={styles.text}>Weapon Proficiencies</Text>
            <WeaponProficiencies
                unarmed={props.weaponProficiencies.unarmed}
                simple={props.weaponProficiencies.simple}
                martial={props.weaponProficiencies.martial}
                others={
                    props.weaponProficiencies.others
                    /* Others should have a description and proficiency. */
                }
                onProficiencyPress={() => {}}
            />
            <Weapons
                weapons={props.weapons}
                level={props.level}
            />
            <Text style={styles.text}>Skillz</Text>
            <Skills skills={props.skills} level={1} onProficiencyPress={()=>{}}/>
            <Text style={styles.text}>
                    Languages: {props.languages.toString()}
            </Text>
        </View>
    );
};

type Props = OwnProps & LinkDispatchProps;

interface LinkDispatchProps {
    startClassDCModal: (newProficiency: Proficiencies) => void;
    startStringPickerModal: (type: string, value: string) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => {
    return {
        startClassDCModal: bindActionCreators(startChangeClassDCProficiency, dispatch),
        startStringPickerModal: bindActionCreators(startStringPickerModalSelection, dispatch)
    };
};

export default connect(null, mapDispatchToProps)(MainPage);

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
