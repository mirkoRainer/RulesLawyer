import React from "react";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startStringPickerModalSelection } from "../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { startChangeClassDCProficiency } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { Proficiencies } from "../../../PF2eCoreLib/Proficiencies";
import { PlayerCharacter } from "../../../PF2eCoreLib/PlayerCharacter";
import { CharacterSheetState } from "../../../store/Store";
import EncounterDefense from "./EncounterDefense";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EncounterOffense from "./EncounterOffense";
import EncounterSkills from "./EncounterSkills";
import { NavigationContainer } from "@react-navigation/native";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import SpellsPage from "../Spells/SpellsPage";
import { Layout } from "@ui-kitten/components";
import Conditions from "../Conditions";

var width: number = Dimensions.get("window").width; //full width

export type EncounterTabParamList = {
    Attack: undefined;
    Defend: undefined;
    Skills: undefined;
    Other: undefined;
}

const Encounter: React.FC<Props> = (props) => {
    const Tab = createBottomTabNavigator<EncounterTabParamList>();
    const BottomTabBar = ({ navigation, state }) => (
        <BottomNavigation
            selectedIndex={state.index}
            onSelect={index => navigation.navigate(state.routeNames[index])}>
            <BottomNavigationTab title='Your Turn'/>
            <BottomNavigationTab title='Their Turn'/>
            <BottomNavigationTab title='Skillz'/>
            <BottomNavigationTab title='Spells'/>
        </BottomNavigation>
    );
    return (
        <Layout style={{flex:1}}>
            <Conditions conditions={props.playerCharacter.conditions} />
            <NavigationContainer independent={true}>
                <Tab.Navigator 
                    tabBar={props => <BottomTabBar {...props}/>}
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
                        component={SpellsPage}
                        options={{ tabBarLabel: "Spells" }}
                    />
                </Tab.Navigator>
            </ NavigationContainer>
        </Layout>
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
