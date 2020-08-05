/* eslint-disable linebreak-style */
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { RootDrawerParamList } from "../../../App";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { PlayerCharacter } from "../Shared/PF2eCoreLib/PlayerCharacter";
import { CharacterSheetState } from "../../store/Store";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../store/actions/AllActionTypesAggregated";
import { connect } from "react-redux";
import { CharacterBuildState } from "../../store/CharacterBuildState";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "react-native-elements";
import { AncestrySelectView } from "./Components/AncestrySelectView";
import { BuildOverview } from "./Components/BuildOverview";
import { SafeAreaView } from "react-native-safe-area-context";

type BuildNavigationProps = DrawerNavigationProp<
    RootDrawerParamList,
    "Build"
>;

interface OwnProps {
    navigation: BuildNavigationProps;
}

type Props = OwnProps & LinkStateProps & LinkDispatchProps;

export type BuildStackParamList = {
    BuildOverview: undefined;
    AncestrySelect: undefined;
    BackgroundSelect: undefined;
    ClassSelect: undefined;
    Level1: undefined;
    Level2: undefined;
    Level3: undefined;
    Level4: undefined;
    Level5: undefined;
    Level6: undefined;
    Level7: undefined;
    Level8: undefined;
    Level9: undefined;
    Level10: undefined;
    Level11: undefined;
    Level12: undefined;
    Level13: undefined;
    Level14: undefined;
    Level15: undefined;
    Level16: undefined;
    Level17: undefined;
    Level18: undefined;
    Level19: undefined;
    Level20: undefined;
}

export const Build: React.FC<Props> = (props) => {
    const toggleNavigation = (): void => {
        props.navigation.toggleDrawer();
    };

    const goToCharacterSheet = (): void => {
        props.navigation.navigate("CharacterSheet");
    };

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

    const Stack = createStackNavigator<BuildStackParamList>();

    return(
        <SafeAreaView>
            <Header
                leftComponent={{ icon: "menu", color: "#eee", onPress: toggleNavigation }}
                centerComponent={{
                    text: headerText(),
                    style: { color: "#eee" },
                }}
                rightComponent={{icon: "perm-identity", color: "#eee", onPress: goToCharacterSheet}}
            />
            <View style={styles.horizontal}>
                <NavigationContainer independent={true} >
                    <Stack.Navigator initialRouteName={"BuildOverview"}>
                        <Stack.Screen name="BuildOverview" component={BuildOverview} />
                        <Stack.Screen name="AncestrySelect" component={AncestrySelectView} />
                    </Stack.Navigator>
                    <View>
                        {
                            //create a side navigator that indicates build step and status
                        }
                        <Text>ABC's</Text>
                        <Text>Lvl 1</Text>
                    </View>
                </NavigationContainer>

            </View>
        </SafeAreaView>
    );
};

interface LinkStateProps {
    buildState: CharacterBuildState;
    playerCharacter: PlayerCharacter;
}
//all actions to be dispatched
interface LinkDispatchProps {
}

const mapStateToProps = (
    state: CharacterSheetState): LinkStateProps => ({
    buildState: state.characterBuild,
    playerCharacter: state.playerCharacter 
});

const mapDispatchToProps = (
): LinkDispatchProps => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Build);

const styles = StyleSheet.create({
    horizontal: {
        flexDirection: "row",
        flex: 1,
        alignSelf: "center"
    },
    button: {
        flex: 1
    },
    centered: {
        justifyContent: "center",
        alignSelf: "center"
    }
});