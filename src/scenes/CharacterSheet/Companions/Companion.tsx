import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Companion } from "../../../PF2eCoreLib/PlayerCharacter";
import AbilityScores from "../Story/Components/AbilityScores/AbilityScoresView";

type Props = { companion: Companion };

export const CompanionView: React.FC<Props> = (props) => {
    return (
        <View>
            <Text style={styles.centered}>{props.companion.name}</Text>
            <AbilityScores
                abilityScores={props.companion.abilityScores}
                companion={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
