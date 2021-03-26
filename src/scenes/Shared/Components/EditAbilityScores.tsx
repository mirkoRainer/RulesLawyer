import { Picker } from "@react-native-community/picker";
import { ItemValue } from "@react-native-community/picker/typings/Picker";
import { Layout, Text, useTheme, Button, Icon } from "@ui-kitten/components";
import React, { ReactText, useState } from "react";
import { StyleSheet } from "react-native";
import {
    AbilityScoreArray,
    GetAbilityScoreAbbreviation,
} from "../../../PF2eCoreLib/AbilityScores";

export const EditAbilityScores: React.FC<Props> = (props) => {
    const theme = useTheme();
    const [state, setState] = useState({
        scores: props.abilityScores,
        visible: false,
    });
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
                <Layout key={score} style={styles.pickerLayout}>
                    <Text style={styles.pickerTitle}>
                        {GetAbilityScoreAbbreviation(score)}
                    </Text>
                    <Picker
                        selectedValue={currentScoreValue}
                        onValueChange={updateScore}
                        itemStyle={{ color: theme["color-primary-500"] }}
                        prompt={score}
                    >
                        {items}
                    </Picker>
                </Layout>
            );
        }
    );
    const ArrowIcon = (props: any) => (
        <Icon
            {...props}
            name={
                state.visible
                    ? "arrow-ios-downward-outline"
                    : "arrow-ios-forward-outline"
            }
        />
    );
    return (
        <Layout>
            <Layout style={{ ...styles.wrapRow, paddingHorizontal: 10 }}>
                <Text category="h5" style={styles.centered}>
                    Ability Scores
                </Text>
                <Button
                    appearance="ghost"
                    accessoryRight={ArrowIcon}
                    onPress={() =>
                        setState({ ...state, visible: !state.visible })
                    }
                />
            </Layout>
            {state.visible ? (
                <Layout style={styles.wrapRow}>{renderPickers}</Layout>
            ) : (
                <></>
            )}
        </Layout>
    );
};

type Props = {
    scoreRanges: number[];
    onSelect: (newScores: AbilityScoreArray) => void;
    abilityScores: AbilityScoreArray;
};

const styles = StyleSheet.create({
    wrapRow: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    centered: {
        textAlign: "center",
        flex: 1,
        textAlignVertical: "center",
        alignSelf: "center",
    },
    pickerLayout: {
        flex: 1,
        marginVertical: 10,
        textAlignVertical: "center",
    },
    pickerTitle: {
        flex: 1,
        textAlign: "center",
        alignContent: "center",
        textAlignVertical: "center",
        justifyContent: "center",
        marginBottom: -25,
    },
    picker: {
        flex: 1,
    },
});
