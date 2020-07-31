import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

type Props = {}

export const Downtime: React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <Text h4>
                Downtime!
            </Text>
            <Text>Cost of Living</Text>
            <Text>Buying and Selling</Text>
            <Text>long-term rest</Text>
            <Text>Retraining</Text>
            <Text>Craft</Text>
            <Text>Earn income (Crafting Lore Performance)</Text>
            <Text>Treat Disease</Text>
            <Text>Create Forgery</Text>
            <Text>Subsist</Text>
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