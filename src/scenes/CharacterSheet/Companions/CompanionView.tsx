import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Companion } from "../../../PF2eCoreLib/PlayerCharacter";
import ACView from "../Encounter/Defense/ArmorClass/ACView";
import HitPoints from "../Encounter/Defense/HealthData/HitPoints";
import SavesView from "../Encounter/Defense/SavesView";
import AbilityScores from "../Story/Components/AbilityScores/AbilityScoresView";

type Props = { companion: Companion; index: number };

export const CompanionView: React.FC<Props> = (props) => {
    return (
        <Layout style={{ flex: 1 }}>
            <Text style={styles.centered}>{props.companion.name}</Text>
            <ScrollView>
                <AbilityScores
                    abilityScores={props.companion.abilityScores}
                    companion={true}
                />
                <ACView isCompanion={true} companionIndex={props.index} />
                <SavesView isCompanion={true} companionIndex={props.index} />
                <HitPoints
                    isCompanion={true}
                    companionIndex={props.index}
                    healthData={props.companion.hitPoints}
                />
            </ScrollView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
