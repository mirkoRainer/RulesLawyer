import React from "react";
import { StyleSheet } from "react-native";
import ProficiencyView from "../../../Shared/ProficiencyView";
import { Skill } from "../../../../PF2eCoreLib/PlayerCharacter";
import { AbilityScoreArray } from "../../../../PF2eCoreLib/AbilityScores";
import { AppState } from "../../../../store/Store";
import { connect } from "react-redux";
import { Layout, Divider } from "@ui-kitten/components";
import { ScrollView } from "react-native-gesture-handler";

interface OwnProps {
    skills: Skill[];
    level: number;
}

type Props = OwnProps & LinkStateProps;

const SkillsView: React.FC<Props> = (props) => {
    const renderItem = (item: Skill) => (
        <Layout key={item.name}>
            <ProficiencyView
                title={item.name.toString()}
                keyAbility={props.abilityScores[item.ability]}
                proficiency={item.proficiency}
                level={props.level}
                itemBonus={item.itemBonus}
                armorPenalty={item.hasArmorPenalty ? item.armorPenalty : 0}
            />
            <Divider />
        </Layout>
    );
    const skills: JSX.Element[] = [];
    props.skills.forEach(skill => {
        skills.push(renderItem(skill));
    });

    return (
        <Layout style={styles.container}>
            <Divider />
            <ScrollView>
                {skills}
            </ScrollView>
        </Layout>
    );
};

interface LinkStateProps {
    abilityScores: AbilityScoreArray;
}

const mapStateToProps = (
    state: AppState): LinkStateProps => ({
    abilityScores: state.playerCharacter.abilityScores,
});

export default connect(mapStateToProps, null)(SkillsView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        flex: 1,
        width: 100,
    },
});
