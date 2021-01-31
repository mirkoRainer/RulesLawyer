import React, { useState } from "react";
import { StyleSheet } from "react-native";
import ProficiencyView from "../../../Shared/ProficiencyView";
import { Skill } from "../../../../PF2eCoreLib/PlayerCharacter";
import { AbilityScoreArray } from "../../../../PF2eCoreLib/AbilityScores";
import { EntireAppState } from "../../../../store/Store";
import { connect } from "react-redux";
import { Layout, Divider } from "@ui-kitten/components";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { indexOf } from "lodash";
import { DetermineNextProficiency } from "../../../../PF2eCoreLib/Proficiencies";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { startChangeSkills } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { useFocusEffect } from "@react-navigation/native";
import { Bonus, GetCurrentPCBonuses } from "../../../../PF2eCoreLib/Bonus";
import { BonusType } from "../../../../PF2eCoreLib/BonusTypes";

interface OwnProps {}

type Props = OwnProps & LinkStateProps & LinkDispatchProps;

const SkillsView: React.FC<Props> = (props) => {
    // ensure the page refreshes data when it's navigated back to but setting state when the page is focus. React.useCallback prevents an infinite loop.
    const [state, setState] = useState({});
    useFocusEffect(
        React.useCallback(() => {
            setState({});
        }, [])
    );
    const renderItem = (item: Skill) => {
        const index = indexOf(props.skills, item);
        const handleSkillTouch = () => {
            const newProficiency = DetermineNextProficiency(item.proficiency);
            const newSkills = props.skills;
            newSkills.splice(index, 1, {
                ...item,
                proficiency: newProficiency,
            });
            props.updateSkills(newSkills);
            setState({});
        };
        const itemBonus = Bonus.GetBonusFor(
            item.name,
            BonusType.Item,
            GetCurrentPCBonuses()
        );
        return (
            <Layout key={item.name}>
                <TouchableOpacity onPress={handleSkillTouch}>
                    <ProficiencyView
                        title={item.name.toString()}
                        keyAbility={props.abilityScores[item.ability]}
                        proficiency={item.proficiency}
                        level={props.level}
                        itemBonus={itemBonus}
                        armorPenalty={
                            item.hasArmorPenalty ? item.armorPenalty : 0
                        }
                    />
                </TouchableOpacity>
                <Divider />
            </Layout>
        );
    };
    const skills: JSX.Element[] = [];
    props.skills.forEach((skill) => {
        skills.push(renderItem(skill));
    });

    return (
        <Layout style={styles.container}>
            <Divider />
            <ScrollView>{skills}</ScrollView>
        </Layout>
    );
};

interface LinkStateProps {
    abilityScores: AbilityScoreArray;
    skills: Skill[];
    level: number;
}

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    abilityScores: state.playerCharacter.abilityScores,
    skills: state.playerCharacter.skills,
    level: state.playerCharacter.level,
});

interface LinkDispatchProps {
    updateSkills: (skills: Skill[]) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
    updateSkills: bindActionCreators(startChangeSkills, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        flex: 1,
        width: 100,
    },
});
