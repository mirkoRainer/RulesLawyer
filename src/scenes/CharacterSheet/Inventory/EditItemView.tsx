import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {};

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
