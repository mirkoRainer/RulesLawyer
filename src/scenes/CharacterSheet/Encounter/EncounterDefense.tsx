import React from "react";
import { StyleSheet } from "react-native";
import { PlayerCharacter } from "../../../PF2eCoreLib/PlayerCharacter";
import { CharacterSheetState } from "../../../store/Store";
import { connect } from "react-redux";
import ProficiencyView, { ProficiencyProps } from "../../Shared/ProficiencyView";
import { Bonus } from "../../../PF2eCoreLib/Bonus";
import { BonusType } from "../../../PF2eCoreLib/BonusTypes";
import HitPoints from "./Defense/HitPoints";
import ResistancesImmunitiesWeaknesses from "./Defense/ResistancesImmunitiesWeaknesses";
import ACView from "./Defense/ArmorClass/ACView";
import { Layout, Text, Divider } from "@ui-kitten/components";
import Shield, { ShieldProps } from "./Defense/ArmorClass/Shield";
import SavesView from "./Defense/SavesView";
import { ScrollView } from "react-native-gesture-handler";


const EncounterDefense: React.FC<Props> = (props) => {

    
    return (
        <ScrollView>
            <Layout style={styles.container}>
                <Text style={{ alignSelf: "center"}} category='h2'>Defense</Text>
                <Divider />
                <HitPoints
                    max={props.playerCharacter.hitPoint.max}
                    current={props.playerCharacter.hitPoint.current}
                    temporary={props.playerCharacter.hitPoint.temporary}
                    dying={props.playerCharacter.hitPoint.dying}
                    wounded={props.playerCharacter.hitPoint.wounded}
                />
                <Divider />
                <ACView />
                <Divider />
                <Shield />
                <Divider />
                <SavesView />
                <Divider />
                <ResistancesImmunitiesWeaknesses />
                <Divider />
            </Layout>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
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
    state: CharacterSheetState): LinkStateProps => ({
    playerCharacter: state.playerCharacter,
    shield: state.playerCharacter.shield,
    resistances: state.playerCharacter.resistances,
    immunities: state.playerCharacter.immunities,
    weaknesses: state.playerCharacter.weakness
});

export default connect(mapStateToProps, mapDispatchToProps)(EncounterDefense);

