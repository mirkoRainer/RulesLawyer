import React from "react";
import { StyleSheet } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";
import { MainCompanionNavigationProps } from "./CompanionsNavigator";

type Props = {
    navigation: MainCompanionNavigationProps;
};

export const EditCompanions: React.FC<Props> = ({ navigation }) => {
    return (
        <Layout>
            <Text style={styles.centered}>EditCompanions</Text>
            <Button onPress={() => navigation.navigate("MainCompanionView")}>
                edit
            </Button>
        </Layout>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
