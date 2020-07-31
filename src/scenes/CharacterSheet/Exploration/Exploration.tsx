import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";


type Props = {}

export const Exploration: React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <Text h4>
                Exploration!
            </Text>
            <Text>Avoid Notice</Text>
            <Text>Defend</Text>
            <Text>Detect Magic</Text>
            <Text>Follow the Expert</Text>
            <Text>Hustle</Text>
            <Text>Investigate</Text>
            <Text>Repeat a Spell</Text>
            <Text>Scout</Text>
            <Text>Search</Text>
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