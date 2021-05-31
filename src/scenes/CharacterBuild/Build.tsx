/* eslint-disable linebreak-style */
import React from "react";
import { StyleSheet } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { EntireAppState } from "../../store/Store";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../store/actions/AllActionTypesAggregated";
import { connect } from "react-redux";
import { CharacterBuildState } from "../../store/CharacterBuildState";
import { createStackNavigator } from "@react-navigation/stack";
import { AncestrySelectView } from "./Components/AncestrySelectView";
import { BuildOverview } from "./Components/BuildOverview";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Layout,
    Text,
    TopNavigation,
    TopNavigationAction,
    ViewPager,
} from "@ui-kitten/components";
import PlayerCharacterData from "../../PF2eCoreLib/PlayerCharacter/PlayerCharacter";
import { RootDrawerParamList } from "../../RootDrawerParamList";
import { MenuIcon, PermIdentityIcon } from "../Shared/IconButtons";
import { BackgroundSelectView } from "./Components/BackgroundSelectView";
import { ClassSelectView } from "./Components/ClassSelectView";

type BuildNavigationProps = DrawerNavigationProp<RootDrawerParamList, "Build">;

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
};

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

    const renderMenuAction = () => (
        <TopNavigationAction icon={MenuIcon} onPress={toggleNavigation} />
    );
    const renderSheetAction = () => (
        <TopNavigationAction
            icon={PermIdentityIcon}
            onPress={goToCharacterSheet}
        />
    );

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const shouldLoadComponent = (index: number) => index === selectedIndex;

    return (
        <SafeAreaView>
            <TopNavigation
                alignment="center"
                title={headerText()}
                accessoryLeft={renderMenuAction}
                accessoryRight={renderSheetAction}
            />
            <ViewPager
                selectedIndex={selectedIndex}
                shouldLoadComponent={shouldLoadComponent}
                onSelect={(index) => setSelectedIndex(index)}
            >
                <BuildOverview />
                <AncestrySelectView />
                <BackgroundSelectView />
                <ClassSelectView />
            </ViewPager>
        </SafeAreaView>
    );
};

interface LinkStateProps {
    buildState: CharacterBuildState;
    playerCharacter: PlayerCharacterData;
}
//all actions to be dispatched
interface LinkDispatchProps {}

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    buildState: state.characterBuild,
    playerCharacter: state.playerCharacter,
});

const mapDispatchToProps = (): LinkDispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Build);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    horizontal: {
        flexDirection: "row",
        flex: 1,
        alignSelf: "center",
    },
    button: {
        flex: 1,
    },
    centered: {
        justifyContent: "center",
        alignSelf: "center",
    },
});
