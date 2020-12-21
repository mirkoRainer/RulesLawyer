import React from "react";
import { RefreshControl, StyleSheet } from "react-native";
import PlayerCharacter, {
    PF2Action,
} from "../../../PF2eCoreLib/PlayerCharacter";
import { EntireAppState } from "../../../store/Store";
import { connect } from "react-redux";
import Movements from "./Offense/Movements";
import ActionsAndActivities from "./Offense/ActionsAndActivities";
import { ScrollView } from "react-native-gesture-handler";
import { Divider, Layout } from "@ui-kitten/components";
import ClassDC from "./Offense/ClassDC";
import PerceptionView from "./Offense/PerceptionView";
import { StackNavigationProp } from "@react-navigation/stack";
import {
    MainOffenseNavigationProps,
    OffenseStackParamList,
} from "./OffenseNavigation";

const EncounterOffense: React.FC<Props> = (props) => {
    return (
        <Layout style={styles.container}>
            <ScrollView>
                <ClassDC />
                <Divider />
                <PerceptionView />
                <Divider />
                <Movements movements={props.playerCharacter.movement} />
                <Divider />
                <ActionsAndActivities navigation={props.navigation} />
            </ScrollView>
        </Layout>
    );
};

type Props = OwnProps & LinkDispatchProps & LinkStateProps;

interface OwnProps {
    navigation: MainOffenseNavigationProps;
}

interface LinkDispatchProps {}

interface LinkStateProps {
    playerCharacter: PlayerCharacter;
    actions: PF2Action[];
}

const mapDispatchToProps = (): LinkDispatchProps => {
    return {};
};

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    playerCharacter: state.playerCharacter,
    actions: state.playerCharacter.actions,
});

export default connect(mapStateToProps, mapDispatchToProps)(EncounterOffense);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
    },
    header: {
        flex: 1,
        textAlign: "center",
        fontSize: 22,
    },
});
