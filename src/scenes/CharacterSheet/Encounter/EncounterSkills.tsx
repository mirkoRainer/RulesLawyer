import React from "react";
import { StyleSheet } from "react-native";
import { Skill } from "../../../PF2eCoreLib/PlayerCharacter";
import { EntireAppState } from "../../../store/Store";
import { connect } from "react-redux";
import SkillsView from "./Skills/SkillsView";
import { AbilityScoreArray } from "../../../PF2eCoreLib/AbilityScores";
import { ScrollView } from "react-native-gesture-handler";
import { Layout, Text } from "@ui-kitten/components";

const EncounterSkills: React.FC<Props> = (props) => {
    return (
        <Layout style={styles.container}>
            <SkillsView />
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {}

interface LinkStateProps {
    skills: Skill[];
    level: number;
    abilityScores: AbilityScoreArray;
}

const mapDispatchToProps = (): LinkDispatchProps => {
    return {};
};

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    skills: state.playerCharacter.skills,
    level: state.playerCharacter.level,
    abilityScores: state.playerCharacter.abilityScores,
});

export default connect(mapStateToProps, mapDispatchToProps)(EncounterSkills);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.1,
        textAlign: "center",
    },
});
