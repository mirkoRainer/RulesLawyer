import React, { useState } from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const DefendActivity: React.FC<Props> = (props) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const toggleDescription = () => {
        setDescriptionVisible(!descriptionVisible);
    };

    const description = (
        <Text category="p1" style={styles.text}>
            You move at half your travel speed with your shield raised. If
            combat breaks out, you gain the benefits of Raising a Shield before
            your first turn begins.
        </Text>
    );

    const descriptionText = descriptionVisible ? (
        description
    ) : (
        <Layout></Layout>
    );

    return (
        <Layout style={styles.container}>
            <Layout style={styles.row}>
                <Text category="h3">Defend</Text>
                <Button
                    appearance="ghost"
                    status="basic"
                    onPress={toggleDescription}
                >
                    Description
                </Button>
            </Layout>
            {descriptionText}
        </Layout>
    );
};

export default DefendActivity;

type Props = {};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    row: {
        flex: 1,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
    },
    text: {
        padding: 10,
    },
});
