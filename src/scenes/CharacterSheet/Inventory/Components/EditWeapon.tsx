import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { Weapon } from "../../../../PF2eCoreLib/PlayerCharacter";
import { EditItemState } from "./EditItemView";

type Props = {
    armor: Weapon;
    state: EditItemState;
    setState: React.Dispatch<React.SetStateAction<EditItemState>>;
};

export const EditWeapon: React.FC<Props> = (props) => {
    return (
        <Layout>
            <Text style={styles.centered}>EditWeapon</Text>
        </Layout>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
