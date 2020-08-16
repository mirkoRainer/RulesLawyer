import React from "react";
import { StyleSheet } from "react-native";
import { PlayerCharacter } from "../../../PF2eCoreLib/PlayerCharacter";
import { AppState } from "../../../store/Store";
import { connect } from "react-redux";
import ProficiencyView, { ProficiencyProps } from "../../Shared/ProficiencyView";
import { Bonus } from "../../../PF2eCoreLib/Bonus";
import { BonusType } from "../../../PF2eCoreLib/BonusTypes";
import HitPoints from "./Defense/HealthData/HitPoints";
import ResistancesImmunitiesWeaknesses from "./Defense/ResistancesImmunitiesWeaknesses";
import ACView from "./Defense/ArmorClass/ACView";
import { Layout, Text, Divider } from "@ui-kitten/components";
import ShieldView, { ShieldProps } from "./Defense/Shield/ShieldView";
import SavesView from "./Defense/SavesView";
import { ScrollView } from "react-native-gesture-handler";


const EncounterDefense: React.FC<Props> = (props) => {

    
    return (
        <Layout style={styles.container}>
            <ScrollView>
                <Divider />
                <HitPoints
                    max={props.playerCharacter.hitPoint.maxHitPoints}
                    current={props.playerCharacter.hitPoint.currentHitPoints}
                    temporary={props.playerCharacter.hitPoint.temporaryHitPoints}
                    dying={props.playerCharacter.hitPoint.dying}
                    wounded={props.playerCharacter.hitPoint.wounded}
                />
                <Divider />
                <ACView />
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
        flex: 1
    },
});

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {

}

interface LinkStateProps {
    playerCharacter: PlayerCharacter;
    shield: ShieldProps;
    resistances: string;
    immunities: string;
    weaknesses: string;
}

const mapDispatchToProps = (
): LinkDispatchProps => {
    return {

    };
};

const mapStateToProps = (
    state: AppState): LinkStateProps => ({
    playerCharacter: state.playerCharacter,
    shield: state.playerCharacter.shield,
    resistances: state.playerCharacter.resistances,
    immunities: state.playerCharacter.immunities,
    weaknesses: state.playerCharacter.weakness
});

export default connect(mapStateToProps, mapDispatchToProps)(EncounterDefense);

