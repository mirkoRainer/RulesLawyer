import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CharacterMetadata, { CharacterMetadataProps } from "../Story/Components/CharacterMetadata";
import AbilityScores from "./Components/AbilityScores/AbilityScoresView";
import { Dimensions } from "react-native";
import { GetAbilityModifierFromScores } from "../../../PF2eCoreLib/AbilityScores";
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
import { Proficiencies } from "../../../PF2eCoreLib/Proficiencies";
import { PlayerCharacter, Action } from "../../../PF2eCoreLib/PlayerCharacter";
import WeaponProficienciesView from "./Components/Weapons/WeaponProficienciesView";
import SkillsView from "./Components/SkillsView";
import { CharacterSheetState } from "../../../store/Store";
import { Bonus } from "../../../PF2eCoreLib/Bonus";
import { BonusType } from "../../../PF2eCoreLib/BonusTypes";
import { ArmorCategory } from "../../../PF2eCoreLib/ArmorCategory";
import { prop } from "../../../PF2eCoreLib/TypescriptEvolution";
import HitPoints from "./Components/HitPoints/HitPoints";
import { ScrollView } from "react-native-gesture-handler";
import ActionsAndActivities from "./Components/ActionsAndActivities";
import EncounterDefense from "./EncounterDefense";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EncounterOffense from "./EncounterOffense";
import EncounterSkills from "./EncounterSkills";
import EncounterMisc from "./EncounterMisc";
import { NavigationContainer } from "@react-navigation/native";

var width: number = Dimensions.get("window").width; //full width

export type EncounterTabParamList = {
    Attack: undefined;
    Defend: undefined;
    Skills: undefined;
    Other: undefined;
}

const Encounter: React.FC<Props> = (props) => {
    const Tab = createBottomTabNavigator<EncounterTabParamList>();

    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator 
                tabBarOptions={{
                    activeTintColor: "tomato",
                    inactiveTintColor: "grey",
                    showLabel: true,
                    labelStyle: {
                        fontSize: 14
                    },
                    keyboardHidesTabBar: true, 
                    tabStyle: styles.tab,
                }} 
                initialRouteName={"Attack"}
            >
                <Tab.Screen 
                    name="Attack" 
                    component={EncounterOffense}
                    options={{ tabBarLabel: "Your Turn" }}
                />
                <Tab.Screen 
                    name="Defend" 
                    component={EncounterDefense}
                    options={{ tabBarLabel: "Their Turn" }}
                />
                <Tab.Screen 
                    name="Skills" 
                    component={EncounterSkills}
                    options={{ tabBarLabel: "Skillz" }}
                />
                <Tab.Screen 
                    name="Other" 
                    component={EncounterMisc}
                    options={{ tabBarLabel: "Other" }}
                />
            </Tab.Navigator>
        </ NavigationContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Encounter);

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
    header: {
        flex: 1,
        textAlign: "center",
        fontSize: 22
    },
    tab: {
        flex: 1,
        alignSelf: "flex-end",
        height: 30,
    }
});
