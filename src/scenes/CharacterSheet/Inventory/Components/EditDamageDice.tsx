import React, { useEffect, useState } from "react";
import {
    NativeSyntheticEvent,
    StyleSheet,
    TextInputFocusEventData,
} from "react-native";
import { Button, Divider, Input, Layout, Text } from "@ui-kitten/components";
import { DamageDice } from "../../../../PF2eCoreLib/PlayerCharacter";
import { EditItemState } from "./EditItemView";
import { prop } from "../../../../PF2eCoreLib/TypescriptEvolution";
import { EditDie } from "./EditDie";

type Props = {
    damageDice: DamageDice[];
    state: EditItemState;
    setState: React.Dispatch<React.SetStateAction<EditItemState>>;
};

export const EditDamageDice: React.FC<Props> = (props) => {
    const [dice, setDice] = useState(props.damageDice);
    const updateDiceInState = (newDice: DamageDice[]) => {
        props.setState({
            ...props.state,
            item: {
                ...props.state.item,
                damageDice: newDice,
            },
        });
    };
    const handleAddDie = () => {
        dice.push({ damageType: "", formula: "1d4" });
        updateDiceInState(dice);
    };

    return (
        <Layout>
            <Text category="h5" style={{ textAlign: "center" }}>
                Dice
            </Text>
            <Button style={{ margin: 10 }} onPress={handleAddDie}>
                Moar Dice! +++
            </Button>
            {dice.map((x, index) => {
                const setDie = (die: DamageDice, index: number) => {
                    updateDiceInState([
                        ...props.damageDice.splice(0, index),
                        die,
                        ...props.damageDice.splice(index + 1),
                    ]);
                };
                return (
                    <Layout key={JSON.stringify(x) + index}>
                        <EditDie die={x} index={index} setDie={setDie} />
                        <Divider />
                    </Layout>
                );
            })}
        </Layout>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
