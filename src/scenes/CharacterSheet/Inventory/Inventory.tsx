import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {};

export const Inventory: React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <Text>Inventory Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});