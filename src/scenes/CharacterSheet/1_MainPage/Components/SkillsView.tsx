import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import ProficiencyView from "../../../Shared/ProficiencyView";
import { Skill, PlayerCharacter } from "../../../Shared/PF2eCoreLib/PlayerCharacter";
import { AbilityScoreArray } from "../../../Shared/PF2eCoreLib/AbilityScores";
import { CharacterSheetState } from "../../../../store/Store";
import { connect } from "react-redux";

interface OwnProps {
    skills: Skill[];
    level: number;
}

type Props = OwnProps & LinkStateProps;

const SkillsView: React.FC<Props> = (props) => {
    const renderItem = ({ item }: { item: Skill }) => (
        <ProficiencyView
            title={item.name}
            keyAbility={props.abilityScores[item.ability]}
            proficiency={item.proficiency}
            level={props.level}
            itemBonus={item.itemBonus}
            armorPenalty={item.hasArmorPenalty ? item.armorPenalty : 0}
        />
    );
    const keyExtractor = (item: Skill) => item.name;

    return (
        <View style={styles.container}>
            <FlatList<Skill>
                data={props.skills}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            ></FlatList>
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
