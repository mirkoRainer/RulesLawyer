import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { connect } from "react-redux";
import PlayerCharacterData from "../../PF2eCoreLib/PlayerCharacter/PlayerCharacter";
import { bindActionCreators } from "redux";
import { AppActions } from "../../store/actions/AllActionTypesAggregated";
import {
    startChangePlayerName,
    startChangeCharacterName,
} from "../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { EntireAppState } from "../../store/Store";
import { ThunkDispatch } from "redux-thunk";
import {
    BottomTabBarProps,
    BottomTabNavigationProp,
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import EncounterNavigator, {
    EncounterTabParamList,
} from "./Encounter/EncounterNavigator";
import Exploration from "./Exploration/Exploration";
import { Downtime } from "./Downtime/Downtime";
import TextEditModal from "../Shared/Modals/TextEditModal";
import PickerModal from "../Shared/Modals/PickerModal";
import {
    BottomNavigation,
    BottomNavigationTab,
    Layout,
    Text,
    TopNavigation,
    Icon,
    TopNavigationAction,
    BottomNavigationProps,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootDrawerParamList } from "../../RootDrawerParamList";
import { StoryNavigator, StoryStackParamList } from "./Story/StoryNavigation";
import {
    InventoryNavigator,
    InventoryStackParamList,
} from "./Inventory/InventoryNavigation";
import InventoryView from "./Inventory/InventoryView";
import { NavigatorScreenParams } from "@react-navigation/core";
import { CompanionsNavigator } from "./Companions/CompanionsNavigator";
import {
    NavigationHelpers,
    ParamListBase,
    TabNavigationState,
} from "@react-navigation/native";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { InfoIcon, MenuIcon } from "../Shared/IconButtons";

type CharacterSheetNavigationProps = DrawerNavigationProp<
    RootDrawerParamList,
    "CharacterSheet"
>;

interface OwnProps {
    navigation: CharacterSheetNavigationProps;
}

type Props = OwnProps & LinkStateProps & LinkDispatchProps;

export type CharacterSheetTabParamList = {
    Story: NavigatorScreenParams<StoryStackParamList>;
    Encounter: NavigatorScreenParams<EncounterTabParamList>;
    Exploration: undefined;
    Downtime: undefined;
    Inventory: NavigatorScreenParams<InventoryStackParamList>;
    Spells: undefined;
    Companions: undefined;
};

export type CharacterSheetEncounterTabNavigationProps = BottomTabNavigationProp<
    CharacterSheetTabParamList,
    "Encounter"
>;

export type CharacterSheetInventoryTabNavigationProps = BottomTabNavigationProp<
    CharacterSheetTabParamList,
    "Inventory"
>;

const CharacterSheet: React.FC<Props> = (props: Props) => {
    const pcClass = props.playerCharacter.pcClass;
    const name = props.playerCharacter.name;
    const headerSubText = () => {
        return (
            <Layout>
                <Text category="p2">
                    {pcClass.subClass +
                        " " +
                        pcClass.name +
                        " Lvl:" +
                        props.playerCharacter.level}
                </Text>
                <Text category="p2">
                    {props.playerCharacter.background.name +
                        " " +
                        props.playerCharacter.ancestry.heritage}
                </Text>
            </Layout>
        );
    };

    useEffect(() => {
        props.navigation.setOptions({
            title:
                props.playerCharacter.name +
                " the " +
                props.playerCharacter.ancestry.name +
                " " +
                props.playerCharacter.pcClass.name,
        });
    });

    const toggleNavigation = (): void => {
        props.navigation.toggleDrawer();
    };
    const goToBuildPage = (): void => {
        props.navigation.navigate("Build");
    };

    const Tab = createBottomTabNavigator<CharacterSheetTabParamList>();
    // @ts-ignore
    const companion: boolean =
        props.playerCharacter.companions.length > 0 ? true : false;
    const BottomTabBar = ({
        navigation,
        state,
    }: {
        navigation: NavigationHelpers<
            ParamListBase,
            BottomTabNavigationEventMap
        >;
        state: TabNavigationState<ParamListBase>;
    }) => {
        return (
            <BottomNavigation
                selectedIndex={state.index}
                onSelect={(index) =>
                    navigation.navigate(state.routeNames[index])
                }
            >
                <BottomNavigationTab title="⚔️" />
                <BottomNavigationTab title="🌳" />
                <BottomNavigationTab title="⛺️" />
                <BottomNavigationTab title="🧰" />
                <BottomNavigationTab title="📖" />
                <BottomNavigationTab title="🐺" />
            </BottomNavigation>
        );
    };

    const renderMenuAction = () => (
        <TopNavigationAction icon={MenuIcon} onPress={toggleNavigation} />
    );
    const renderBuildAction = () => (
        <TopNavigationAction icon={InfoIcon} onPress={goToBuildPage} />
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={styles.container}>
                <TopNavigation
                    alignment="center"
                    title={name}
                    subtitle={headerSubText}
                    accessoryRight={renderBuildAction}
                    accessoryLeft={renderMenuAction}
                />
                <Divider />
                <Tab.Navigator
                    tabBar={(props: BottomTabBarProps) => (
                        <BottomTabBar {...props} />
                    )}
                    tabBarOptions={{
                        activeTintColor: "tomato",
                        inactiveTintColor: "grey",
                        showLabel: true,
                        labelStyle: {
                            fontSize: 14,
                        },
                        keyboardHidesTabBar: true,
                    }}
                    initialRouteName={"Encounter"}
                >
                    <Tab.Screen
                        name="Encounter"
                        component={EncounterNavigator}
                    />
                    <Tab.Screen name="Exploration" component={Exploration} />
                    <Tab.Screen name="Downtime" component={Downtime} />
                    <Tab.Screen
                        name="Inventory"
                        component={InventoryNavigator}
                    />
                    <Tab.Screen name="Story" component={StoryNavigator} />
                    <Tab.Screen
                        name="Companions"
                        component={CompanionsNavigator}
                    />
                </Tab.Navigator>
                <TextEditModal />
                <PickerModal />
            </Layout>
        </SafeAreaView>
    );
};

// base state
interface LinkStateProps {
    playerCharacter: PlayerCharacterData;
}
//all actions to be dispatched
interface LinkDispatchProps {
    startChangeCharacterName: (name: string) => void;
    startChangePlayerName: (name: string) => void;
}

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    playerCharacter: state.playerCharacter,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
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
        // alignItems: "center",
        // justifyContent: "center",
    },
    leftAction: {
        flex: 1,
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
    },
});
