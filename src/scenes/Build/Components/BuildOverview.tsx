import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {};

export const BuildOverview: React.FC<Props> = (props) => {
    return(
        <View>
            <Text style={styles.centered}>BuildOverview</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center"
    }
});