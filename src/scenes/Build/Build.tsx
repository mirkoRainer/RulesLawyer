/* eslint-disable linebreak-style */
import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import { RootDrawerParamList } from "../../../App";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { PlayerCharacter } from "../../PF2eCoreLib/PlayerCharacter";
import { CharacterSheetState } from "../../store/Store";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startChangePlayerName, startChangeCharacterName } from "../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import { CharacterBuildState } from "../../store/CharacterBuildState";

type BuildNavigationProps = DrawerNavigationProp<
    RootDrawerParamList,
    "Build"
>;

interface OwnProps {
    navigation: BuildNavigationProps;
}

type Props = OwnProps & LinkStateProps & LinkDispatchProps;

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

    const openAncestrySelectionView = (): void => {
        console.log("openAncestrySelectionView");
    };

    return(
        <>
            <Header
                leftComponent={{ icon: "menu", color: "#eee", onPress: toggleNavigation }}
                centerComponent={{
                    text: headerText(),
                    style: { color: "#eee" },
                }}
                rightComponent={{icon: "perm-identity", color: "#eee", onPress: goToCharacterSheet}}
            />
            <ScrollView>
                <Text>Build Page</Text>
                <View style={styles.horizontal}>
                    <Text style={styles.centered}>Ancestry:</Text>
                    <Button title={props.buildState.Ancestry.toString()} onPress={openAncestrySelectionView}/>
                </View>
            </ScrollView>
        </>
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
    state: CharacterSheetState,
    ownProps: OwnProps
): LinkStateProps => ({
    buildState: state.characterBuild,
    playerCharacter: state.playerCharacter 
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
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