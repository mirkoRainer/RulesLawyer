import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import PlayerCharacter, { Shield } from "../../../PF2eCoreLib/PlayerCharacter";
import { EntireAppState } from "../../../store/Store";
import { connect } from "react-redux";
import HitPoints from "./Defense/HealthData/HitPoints";
import ResistancesImmunitiesWeaknesses from "./Defense/ResistancesImmunitiesWeaknesses";
import ACView from "./Defense/ArmorClass/ACView";
import { Layout, Divider } from "@ui-kitten/components";
import ShieldView from "./Defense/Shield/ShieldView";
import SavesView from "./Defense/SavesView";
import { MainDefenseNavigationProps } from "./DefenseNavigation";

interface OwnProps {
    navigation: MainDefenseNavigationProps;
}

const EncounterDefense: React.FC<Props> = (props) => {
    return (
        <Layout style={styles.container}>
            <ScrollView>
                <Divider />
                <HitPoints
                    max={props.playerCharacter.hitPoint.maxHitPoints}
                    current={props.playerCharacter.hitPoint.currentHitPoints}
                    temporary={
                        props.playerCharacter.hitPoint.temporaryHitPoints
                    }
                    dying={props.playerCharacter.hitPoint.dying}
                    wounded={props.playerCharacter.hitPoint.wounded}
                />
                <Divider />
                <ACView navigation={props.navigation} />
                <Divider />
                <ShieldView />
                <Divider />
                <SavesView />
                <Divider />
                <ResistancesImmunitiesWeaknesses />
                <Divider />
            </ScrollView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

type Props = LinkDispatchProps & LinkStateProps & OwnProps;

interface LinkDispatchProps {}

interface LinkStateProps {
    playerCharacter: PlayerCharacter;
    shield: Shield;
    resistances: string;
    immunities: string;
    weaknesses: string;
}

const mapDispatchToProps = (): LinkDispatchProps => {
    return {};
};

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    playerCharacter: state.playerCharacter,
    shield: state.playerCharacter.shield,
    resistances: state.playerCharacter.resistances,
    immunities: state.playerCharacter.immunities,
    weaknesses: state.playerCharacter.weakness,
});

export default connect(mapStateToProps, mapDispatchToProps)(EncounterDefense);
