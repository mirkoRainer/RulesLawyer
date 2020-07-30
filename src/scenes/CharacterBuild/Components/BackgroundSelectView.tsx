import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {};

export const BackgroundSelectView: React.FC<Props> = (props) => {
    return(
        <View>
            <Text style={styles.centered}>BackgroundSelectView</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center"
    }
});