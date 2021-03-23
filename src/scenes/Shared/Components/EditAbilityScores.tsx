import { Picker } from "@react-native-community/picker";
import { ItemValue } from "@react-native-community/picker/typings/Picker";
import { Layout, Text, useTheme } from "@ui-kitten/components";
import React, { ReactText, useState } from "react";
import { StyleSheet } from "react-native";
import { AbilityScoreArray } from "../../../PF2eCoreLib/AbilityScores";

export const EditAbilityScores: React.FC<Props> = (props) => {
    const theme = useTheme();
    const [state, setState] = useState({ scores: props.abilityScores });
    const items = props.scoreRanges.map((value, index) => {
        return (
            <Picker.Item value={value} key={value} label={value.toString()} />
        );
    });
    const renderPickers = Object.keys(props.abilityScores).map(
        (score, index) => {
            const currentScoreValue: number = props.abilityScores[score].score;
            const updateScore: (value: ItemValue, index: number) => void = (
                value,
                index
            ) => {
                props.abilityScores[score] = {
                    ...props.abilityScores[score],
                    score: value as number,
                };
                setState({ ...state, scores: props.abilityScores });
            };
            return (
                <Picker
                    selectedValue={currentScoreValue}
                    onValueChange={updateScore}
                    itemStyle={{ color: theme["color-primary-500"] }}
                    key={score}
                >
                    {items}
                </Picker>
            );
        }
    );
    return <Layout>{renderPickers}</Layout>;
};

type Props = {
    scoreRanges: number[];
    onSelect: (newScores: AbilityScoreArray) => void;
    abilityScores: AbilityScoreArray;
};

const styles = StyleSheet.create({});
