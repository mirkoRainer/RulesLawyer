import React, { useState } from "react";
import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

type Props = {};

const TreatDiseaseActivity: React.FC<Props> = (props) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const toggleDescription = () => {
        setDescriptionVisible(!descriptionVisible);
    };

    const description = (
        <Layout>
            <Text category="p1" style={styles.text}>
                You spend at least 8 hours caring for a diseased creature.
                Attempt a Medicine check against the disease’s DC. After you
                attempt to Treat a Disease for a creature, you can’t try again
                until after that creature’s next save against the disease.
                Critical Success You grant the creature a +4 circumstance bonus
                to its next saving throw against the disease. Success You grant
                the creature a +2 circumstance bonus to its next saving throw
                against the disease. Critical Failure Your efforts cause the
                creature to take a –2 circumstance penalty to its next save
                against the disease.
            </Text>
        </Layout>
    );

    const descriptionText = descriptionVisible ? (
        description
    ) : (
        <Layout></Layout>
    );

    return (
        <Layout style={styles.container}>
            <Layout style={styles.row}>
                <Text category="h3">Treat Disease</Text>
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

export default TreatDiseaseActivity;

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
