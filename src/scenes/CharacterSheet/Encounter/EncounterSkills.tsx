import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Skill } from "../../../PF2eCoreLib/PlayerCharacter";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { CharacterSheetState } from "../../../store/Store";
import { connect } from "react-redux";
import SkillsView from "./Components/SkillsView";
import { AbilityScoreArray } from "../../../PF2eCoreLib/AbilityScores";
import { ScrollView } from "react-native-gesture-handler";

const EncounterSkills: React.FC<Props> = (props) => {
    
    return (
        <ScrollView>
            <Text style={styles.header}>Skillz</Text>
            <SkillsView skills={props.skills} level={props.level} abilityScores={props.abilityScores} />
        </ScrollView>
    );
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {

}

interface LinkStateProps {
    skills: Skill[];
    level: number;
    abilityScores: AbilityScoreArray
}

const mapDispatchToProps = (
): LinkDispatchProps => {
    return {

    };
};

const mapStateToProps = (
    state: CharacterSheetState): LinkStateProps => ({
    skills: state.playerCharacter.skills,
    level: state.playerCharacter.level,
    abilityScores: state.playerCharacter.abilityScores
});

export default connect(mapStateToProps, mapDispatchToProps)(EncounterSkills);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
    },
    header: {
        flex: 1,
        textAlign: "center",
        fontSize: 22
    }
});