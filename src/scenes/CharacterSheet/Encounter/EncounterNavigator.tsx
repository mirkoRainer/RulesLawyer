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
import PlayerCharacterData from "../../../PF2eCoreLib/PlayerCharacter/PlayerCharacter";
import { EntireAppState } from "../../../store/Store";
import {
    BottomTabNavigationProp,
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import EncounterSkills from "./EncounterSkills";
import { NavigatorScreenParams } from "@react-navigation/native";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import { Layout } from "@ui-kitten/components";
import Conditions from "../Conditions";
import { OffenseNavigator } from "./OffenseNavigation";
import { DefenseNavigator, DefenseStackParamList } from "./DefenseNavigation";
import { SpellsNavigator } from "./SpellsNavigation";

var width: number = Dimensions.get("window").width; //full width

export type EncounterTabParamList = {
    Offense: undefined;
    Defense: NavigatorScreenParams<DefenseStackParamList>;
    Skills: undefined;
    Spells: undefined;
};

export type EncounterDefenseNavigationProps = BottomTabNavigationProp<
    EncounterTabParamList,
    "Defense"
>;
export type EncounterOffenseNavigationProps = BottomTabNavigationProp<
    EncounterTabParamList,
    "Offense"
>;

const EncounterNavigator: React.FC<Props> = (props) => {
    // TODO [#30]: Convert bottom tab to swipeable carousel
    const Tab = createBottomTabNavigator<EncounterTabParamList>();
    // @ts-ignore
    const BottomTabBar = ({ navigation, state }) => {
        return (
            <BottomNavigation
                selectedIndex={state.index}
                onSelect={(index) =>
                    navigation.navigate(state.routeNames[index])
                }
            >
                <BottomNavigationTab title="Your Turn" />
                <BottomNavigationTab title="Their Turn" />
                <BottomNavigationTab title="Skillz" />
                <BottomNavigationTab title="Spells" />
            </BottomNavigation>
        );
    };
    return (
        <Layout style={{ flex: 1 }}>
            <Conditions conditions={props.playerCharacter.conditions} />
            <Tab.Navigator
                tabBar={(props) => <BottomTabBar {...props} />}
                tabBarOptions={{
                    activeTintColor: "tomato",
                    inactiveTintColor: "grey",
                    showLabel: true,
                    labelStyle: {
                        fontSize: 14,
                    },
                    keyboardHidesTabBar: true,
                    tabStyle: styles.tab,
                }}
                initialRouteName={"Offense"}
            >
                <Tab.Screen
                    name="Offense"
                    component={OffenseNavigator}
                    options={{ tabBarLabel: "Your Turn" }}
                />
                <Tab.Screen
                    name="Defense"
                    component={DefenseNavigator}
                    options={{ tabBarLabel: "Their Turn" }}
                />
                <Tab.Screen
                    name="Skills"
                    component={EncounterSkills}
                    options={{ tabBarLabel: "Skillz" }}
                />
                <Tab.Screen
                    name="Spells"
                    component={SpellsNavigator}
                    options={{ tabBarLabel: "Spells" }}
                />
            </Tab.Navigator>
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {
    startClassDCModal: (newProficiency: Proficiencies) => void;
    startStringPickerModal: (type: string, value: string) => void;
}

interface LinkStateProps {
    playerCharacter: PlayerCharacterData;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        startClassDCModal: bindActionCreators(
            startChangeClassDCProficiency,
            dispatch
        ),
        startStringPickerModal: bindActionCreators(
            startStringPickerModalSelection,
            dispatch
        ),
    };
};

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    playerCharacter: state.playerCharacter,
});

export default connect(mapStateToProps, mapDispatchToProps)(EncounterNavigator);

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
        fontSize: 22,
    },
    tab: {
        flex: 1,
        alignSelf: "flex-end",
        height: 30,
    },
});
