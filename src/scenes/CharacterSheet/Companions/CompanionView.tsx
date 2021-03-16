import { Divider, Layout, Text } from "@ui-kitten/components";
import { Guid } from "guid-typescript";
import React from "react";
import { StyleSheet } from "react-native";
import { Companion, PF2Action } from "../../../PF2eCoreLib/PlayerCharacter";
import ACView from "../Encounter/Defense/ArmorClass/ACView";
import HitPoints from "../Encounter/Defense/HealthData/HitPoints";
import SavesView from "../Encounter/Defense/SavesView";
import ActionView from "../Encounter/Offense/ActionView";
import Movements from "../Encounter/Offense/Movements";
import PerceptionView from "../Encounter/Offense/PerceptionView";
import SkillsView from "../Encounter/Skills/SkillsView";
import AbilityScores from "../Story/Components/AbilityScores/AbilityScoresView";

type Props = { companion: Companion; index: number; level: number };

export const CompanionView: React.FC<Props> = (props) => {
    const renderItem = (item: PF2Action, actionIndex: number) => {
        return (
            <ActionView
                action={item}
                key={item.id.toString()}
                abilityScores={props.companion.abilityScores}
                level={props.level}
            />
        );
    };
    const actions: JSX.Element[] = [];
    props.companion.actions.forEach((action, index) => {
        actions.push(renderItem(action, index));
    });
    const advancedManuever: JSX.Element | undefined = props.companion
        .advancement.advancedManuever ? (
        <ActionView
            action={props.companion.advancement.advancedManuever}
            abilityScores={props.companion.abilityScores}
            level={props.level}
        />
    ) : undefined;
    const mature: string = props.companion.advancement.mature ? "Mature" : "";
    const nimble: string = props.companion.advancement.nimble ? "Nimble" : "";
    const savage: string = props.companion.advancement.savage ? "Savage" : "";
    const matureNimbleSavage: string = `${mature} ${nimble} ${savage}`;
    return (
        <Layout style={{ flex: 1 }}>
            <Text style={styles.centered} category="h2">
                {props.companion.name}
            </Text>
            {props.companion.advancement.mature ||
            props.companion.advancement.nimble ||
            props.companion.advancement.savage ? (
                <Text style={styles.centered} category="s2">
                    {matureNimbleSavage}
                </Text>
            ) : (
                <></>
            )}
            <Divider />
            <ACView isCompanion={true} companionIndex={props.index} />
            <Divider />
            <ActionView
                action={{
                    description: props.companion.supportBenefit,
                    name: "Support",
                    id: Guid.create(),
                    numberOfActions: 1,
                    source: "Companion Support Benefit",
                    traits: [],
                }}
                abilityScores={props.companion.abilityScores}
                level={props.level}
            />
            {advancedManuever}
            {actions}
            <HitPoints
                isCompanion={true}
                companionIndex={props.index}
                healthData={props.companion.hitPoints}
            />
            <Divider />
            <SavesView isCompanion={true} companionIndex={props.index} />
            <PerceptionView isCompanion={true} companionIndex={props.index} />
            <Divider />
            <Movements movements={props.companion.speed} isCompanion={true} />
            <Divider />
            <AbilityScores
                abilityScores={props.companion.abilityScores}
                companion={true}
            />
            <SkillsView isCompanion={true} companionIndex={props.index} />
            <Divider />
        </Layout>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
