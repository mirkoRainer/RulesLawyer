import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Header } from "react-native-elements";
import { RootDrawerParamList } from "../../../App";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { connect } from "react-redux";
import { PlayerCharacter } from "../Shared/PF2eCoreLib/PlayerCharacter";
import { bindActionCreators } from "redux";
import { AppActions } from "../../store/actions/AllActionTypesAggregated";
import {
    startChangePlayerName,
    startChangeCharacterName,
} from "../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { CharacterSheetState } from "../../store/Store";
import { ThunkDispatch } from "redux-thunk";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Encounter from "./Encounter/Encounter";
import StoryPage from "./Story/StoryPage";
import { Exploration } from "./Exploration/Exploration";
import { Downtime } from "./Downtime/Downtime";
import { Inventory } from "./Inventory/Inventory";
import SpellsPage from "./Spells/SpellsPage";
import TextEditModal from "../Shared/Modals/TextEditModal";
import PickerModal from "../Shared/Modals/PickerModal";

type CharacterSheetNavigationProps = DrawerNavigationProp<
    RootDrawerParamList,
    "CharacterSheet"
>;

interface OwnProps {
    navigation: CharacterSheetNavigationProps;
}

type Props = OwnProps & LinkStateProps & LinkDispatchProps;

export type CharacterSheetTabParamList = {
    Story: undefined;
    Encounter: undefined;
    Exploration: undefined;
    Downtime: undefined;
    Inventory: undefined;
    Spells: undefined;
    Companions: undefined;
}

const CharacterSheet: React.FC<Props> = (props: Props) => {
    const headerText = () => {
        const pcClass = props.playerCharacter.pcClass;
        const name = props.playerCharacter.name;
        return (
            <View >
                <Text style={styles.headerText}>{name + " - " + pcClass.subClass + " " + pcClass.name + " Lvl:" + props.playerCharacter.level}</Text>
                <Text style={styles.headerText} >{props.playerCharacter.background.name + " " + props.playerCharacter.ancestry.heritage}</Text>
            </View>
        );
    };

    useEffect(() => {
        props.navigation.setOptions({ title: (props.playerCharacter.name + " the " + props.playerCharacter.ancestry.name + " " + props.playerCharacter.pcClass.name) });
    });

    const toggleNavigation = (): void => {
        props.navigation.toggleDrawer();
    };
    const goToBuildPage = (): void => {
        props.navigation.navigate("Build");
    };

    const Tab = createBottomTabNavigator<CharacterSheetTabParamList>();

    return (
        <View style={styles.container}>
            <Header
                leftComponent={{ icon: "menu", color: "#eee", onPress: toggleNavigation }}
                centerComponent={headerText()}
                rightComponent={{icon: "build", color: "#eee", onPress: goToBuildPage}}
            />
            <Tab.Navigator 
                tabBarOptions={{
                    activeTintColor: "tomato",
                    inactiveTintColor: "grey",
                    showLabel: true,
                    labelStyle: {
                        fontSize: 14
                    },
                    keyboardHidesTabBar: true,
                }} 
                initialRouteName={"Story"}
            >
                <Tab.Screen 
                    name="Story" 
                    component={StoryPage}
                    options={{ tabBarLabel: "Story" }}
                />
                <Tab.Screen 
                    name="Encounter" 
                    component={Encounter}
                    options={{ tabBarLabel: "Encounter" }}
                />
                <Tab.Screen 
                    name="Exploration" 
                    component={Exploration} 
                    options={{ tabBarLabel: "Exploration" }}
                />
                <Tab.Screen 
                    name="Downtime" 
                    component={Downtime} 
                    options={{ tabBarLabel: "Downtime" }}
                />
                <Tab.Screen 
                    name="Inventory" 
                    component={Inventory} 
                    options={{ tabBarLabel: "Inventory" }}
                />
                <Tab.Screen 
                    name="Spells" 
                    component={SpellsPage} 
                    options={{ tabBarLabel: "Spells" }}
                />
            </Tab.Navigator>
            <TextEditModal />
            <PickerModal />
        </View>
    );
};

// base state
interface LinkStateProps {
    playerCharacter: PlayerCharacter;
}
//all actions to be dispatched
interface LinkDispatchProps {
    startChangeCharacterName: (name: string) => void;
    startChangePlayerName: (name: string) => void;
}

const mapStateToProps = (
    state: CharacterSheetState): LinkStateProps => ({
    playerCharacter: state.playerCharacter,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
    startChangePlayerName: bindActionCreators(startChangePlayerName, dispatch),
    startChangeCharacterName: bindActionCreators(
        startChangeCharacterName,
        dispatch
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSheet);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
    },
    leftAction: {
        flex: 1,
        backgroundColor: "#497AFC",
        justifyContent: "center",
    },
    actionText: {
        color: "white",
        fontSize: 16,
        backgroundColor: "transparent",
        padding: 10,
    },
    headerText: {
        flex: 1,
        color: "#eee"
    }
});
