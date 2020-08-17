import React from "react";
import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";
import ProficiencyView, { ProficiencyProps } from "../../../Shared/ProficiencyView";
import { Bonus } from "../../../../PF2eCoreLib/Bonus";
import { BonusType } from "../../../../PF2eCoreLib/BonusTypes";
import PlayerCharacter from "../../../../PF2eCoreLib/PlayerCharacter";
import { Action } from "redux";
import { AppState } from "../../../../store/Store";
import { connect } from "react-redux";

const ClassDC: React.FC<Props> = (props) => {

    const classDCProficiency = (): ProficiencyProps => {
        return {
            title: "Class DC",
            keyAbility: props.playerCharacter.abilityScores[props.playerCharacter.pcClass.keyAbility],
            proficiency: props.playerCharacter.pcClass.proficiency,
            level: props.playerCharacter.level,
            itemBonus: Bonus.GetBonusFor(
                "classDc",
                BonusType.Item,
                props.playerCharacter.bonuses
            ),
            is10base: true,
        };
    };
    return (
        <Layout>
            <ProficiencyView
                title={"Class DC"}
                proficiency={classDCProficiency().proficiency}
                keyAbility={
                    classDCProficiency().keyAbility
                }
                is10base={classDCProficiency().is10base}
                itemBonus={classDCProficiency().itemBonus}
                level={props.playerCharacter.level}
            />
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {

}

interface LinkStateProps {
    playerCharacter: PlayerCharacter;
}

const mapDispatchToProps = (
): LinkDispatchProps => {
    return {

    };
};

const mapStateToProps = (
    state: AppState): LinkStateProps => ({
    playerCharacter: state.playerCharacter,
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassDC);

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