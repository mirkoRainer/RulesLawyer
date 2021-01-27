import React, { useState } from "react";
import {
    NativeSyntheticEvent,
    StyleSheet,
    TextInputFocusEventData,
} from "react-native";
import { Input, Layout, Text } from "@ui-kitten/components";
import { DamageDice } from "../../../../PF2eCoreLib/PlayerCharacter";
import { EditItemState } from "./EditItemView";

type Props = {
    die: DamageDice;
    index: number;
    setDie: (die: DamageDice, index: number) => void;
};

export const EditDie: React.FC<Props> = (props) => {
    const [die, setDie] = useState(props.die);
    const onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        e.preventDefault();
        props.setDie(die, props.index);
    };
    return (
        <Layout>
            <Input
                label={"Dice Formula"}
                placeholder="Enter Dice Formula Here"
                value={die.formula}
                size="medium"
                onChangeText={(text) => {
                    // TODO: Validate DiceFormula
                    setDie({ ...die, formula: text });
                }}
                onBlur={onBlur}
                style={{
                    flex: 1,
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                }}
            />
            <Input
                label={"DamageType"}
                placeholder="Enter Damage Type Here"
                value={die.damageType}
                size="medium"
                onChangeText={(text) => {
                    // TODO: Validate Damage type
                    setDie({ ...die, damageType: text });
                }}
                onBlur={onBlur}
                style={{
                    flex: 1,
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                }}
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
