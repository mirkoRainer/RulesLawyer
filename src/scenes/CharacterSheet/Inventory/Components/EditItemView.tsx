import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Item } from "../../../../PF2eCoreLib/PlayerCharacter";

type Props = {
    item: Item;
    index: number;
    inventory: Item[];
};

export const EditItemView: React.FC<Props> = (props) => {
    return (
        <View>
            <Text style={styles.centered}>EditItemView</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
