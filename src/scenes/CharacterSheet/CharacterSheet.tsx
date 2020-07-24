import React, { useEffect } from "react";
import { StyleSheet, View, ScrollView, Platform } from "react-native";
import { Header } from "react-native-elements";
import MainPage from "./1_MainPage/MainPage";
import FeatsAndInventoryPage from "./2_FeatsAndInventoryPage/FeatsAndInventoryPage";
import StoryAndActionsPage from "./3_StoryAndActionsPage/StoryAndActionsPage";
import SpellsPage from "./4_SpellsPage/SpellsPage";
import { CharacterMetadataProps } from "./1_MainPage/Components/CharacterMetadata";
import { ProficiencyProps } from "../Shared/ProficiencyView";
import { GetAbilityModifierFromScores } from "../Shared/PF2eCoreLib/AbilityScores";
import { Bonus } from "../Shared/PF2eCoreLib/Bonus";
import { BonusType } from "../Shared/PF2eCoreLib/BonusTypes";
import { prop } from "../Shared/PF2eCoreLib/TypescriptEvolution";
import { Proficiencies } from "../Shared/PF2eCoreLib/Proficiencies";
import { ArmorCategory } from "../Shared/PF2eCoreLib/ArmorCategory";
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
import TextEditModal from "../Shared/Modals/TextEditModal";
import { WeaponViewProps, GetProficiencyForWeapon } from "./1_MainPage/Components/Weapons/WeaponViewProps";
import NumberPickerModal from "../Shared/Modals/PickerModal";
import { createBottomTabNavigator, BottomTabBarOptions, BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

type CharacterSheetNavigationProps = DrawerNavigationProp<
    RootDrawerParamList,
    "CharacterSheet"
>;

interface OwnProps {
    navigation: CharacterSheetNavigationProps;
}

interface OwnState {}

type Props = OwnProps & LinkStateProps & LinkDispatchProps;

export type CharacterSheetTabParamList = {
    About: undefined;
    Encounter: undefined;
    Exploration: undefined;
    Downtime: undefined;
    Inventory: undefined;
    Spells: undefined;
    Companions: undefined;
}

const CharacterSheet: React.FC<Props> = (props: Props) => {
    const headerText = (): string => {
        const pcClass = props.playerCharacter.pcClass;
        const name = props.playerCharacter.name;
        return (
            name +
            " - " +
            pcClass.subClass +
            " " +
            pcClass.name +
            " Lvl:" +
            props.playerCharacter.level
        );
    };

    useEffect(() => {
        props.navigation.setOptions({ title: (props.playerCharacter.name + " the " + props.playerCharacter.pcClass.name) });
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
                centerComponent={{
                    text: headerText(),
                    style: { color: "#eee" },
                }}
                rightComponent={{icon: "build", color: "#eee"}}
            />
            <Tab.Navigator 
                tabBarOptions={{
                    activeTintColor: "tomato",
                    inactiveTintColor: "grey",
                    showLabel: (Platform.OS !== "android"),
                    labelStyle: {
                        fontSize: 14
                    },
                    keyboardHidesTabBar: true,
                }} 
                initialRouteName={"About"}
            >
                <Tab.Screen 
                    name="About" 
                    component={StoryAndActionsPage}
                    options={{ tabBarLabel: "Story" }}
                />
                <Tab.Screen 
                    name="Encounter" 
                    component={StoryAndActionsPage}
                    options={{ tabBarLabel: "Encounter" }}
                />
                <Tab.Screen 
                    name="Exploration" 
                    component={SpellsPage} 
                    options={{ tabBarLabel: "Exploration" }}
                />
                <Tab.Screen 
                    name="Downtime" 
                    component={SpellsPage} 
                    options={{ tabBarLabel: "Downtime" }}
                />
                <Tab.Screen 
                    name="Inventory" 
                    component={SpellsPage} 
                    options={{ tabBarLabel: "Inventory" }}
                />
                <Tab.Screen 
                    name="Spells" 
                    component={SpellsPage} 
                    options={{ tabBarLabel: "Spells" }}
                />
            </Tab.Navigator>
            <TextEditModal />
            <NumberPickerModal />
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
    state: CharacterSheetState,
    ownProps: OwnProps
): LinkStateProps => ({
    playerCharacter: state.playerCharacter,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => ({
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
});
