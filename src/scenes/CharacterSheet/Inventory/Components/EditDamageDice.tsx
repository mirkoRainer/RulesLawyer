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
        setDice(dice);
    };

    return (
        <Layout>
            <Text category="h5" style={{ textAlign: "center" }}>
                Dice
            </Text>
            <Button style={{ margin: 10 }} onPress={handleAddDie}>
                One Moar Die! +
            </Button>
            {dice.map((x, index) => {
                const setDie = (die: DamageDice, index: number) => {
                    props.damageDice[index] = die;
                    updateDiceInState(props.damageDice);
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
