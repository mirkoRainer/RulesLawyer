import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {};

export const EditWeaponProficiencyView: React.FC<Props> = (props) => {
    // TODO: Finish this!
    return(
        <View>
            <Text style={styles.centered}>EditWeaponProficiencyView</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center"
    }
});