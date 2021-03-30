import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import PlayerCharacterData, {
    Shield,
} from "../../../PF2eCoreLib/PlayerCharacter/PlayerCharacter";
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
                <HitPoints healthData={props.playerCharacter.hitPoints} />
                <Divider />
                <ACView navigation={props.navigation} />
                <Divider />
                <ShieldView navigation={props.navigation} />
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
    playerCharacter: PlayerCharacterData;
    resistances: string;
    immunities: string;
    weaknesses: string;
}

const mapDispatchToProps = (): LinkDispatchProps => {
    return {};
};

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    playerCharacter: state.playerCharacter,
    resistances: state.playerCharacter.resistances,
    immunities: state.playerCharacter.immunities,
    weaknesses: state.playerCharacter.weakness,
});

export default connect(mapStateToProps, mapDispatchToProps)(EncounterDefense);
