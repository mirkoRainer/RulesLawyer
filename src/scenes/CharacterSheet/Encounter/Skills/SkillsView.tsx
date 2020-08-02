import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import ProficiencyView from "../../../Shared/ProficiencyView";
import { Skill, PlayerCharacter } from "../../../../PF2eCoreLib/PlayerCharacter";
import { AbilityScoreArray } from "../../../../PF2eCoreLib/AbilityScores";
import { CharacterSheetState } from "../../../../store/Store";
import { connect } from "react-redux";

interface OwnProps {
    skills: Skill[];
    level: number;
}

type Props = OwnProps & LinkStateProps;

const SkillsView: React.FC<Props> = (props) => {
    const renderItem = (item: Skill) => (
        <ProficiencyView
            title={item.name.toString()}
            keyAbility={props.abilityScores[item.ability]}
            proficiency={item.proficiency}
            level={props.level}
            itemBonus={item.itemBonus}
            armorPenalty={item.hasArmorPenalty ? item.armorPenalty : 0}
        />
    );
    const skills: JSX.Element[] = [];
    props.skills.forEach(skill => {
        skills.push(renderItem(skill));
    });

    return (
        <View style={styles.container}>
            {skills}
        </View>
    );
};

interface LinkStateProps {
    abilityScores: AbilityScoreArray;
}

const mapStateToProps = (
    state: CharacterSheetState,
    ownProps: OwnProps
): LinkStateProps => ({
    abilityScores: state.playerCharacter.abilityScores,
});

export default connect(mapStateToProps, null)(SkillsView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
    },
    text: {
        flex: 1,
        width: 100,
    },
});
