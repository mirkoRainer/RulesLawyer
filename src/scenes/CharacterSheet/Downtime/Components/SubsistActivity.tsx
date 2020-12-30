import React, { useState } from "react";
import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

type Props = {};

const SubsistActivity: React.FC<Props> = (props) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const toggleDescription = () => {
        setDescriptionVisible(!descriptionVisible);
    };

    const description = (
        <Layout>
            <Text category="p1" style={styles.text}>
                You try to provide food and shelter for yourself, and possibly
                others as well, with a standard of living. The GM determines the
                DC based on the nature of the place where you're trying to
                Subsist. You might need a minimum proficiency rank to Subsist in
                particularly strange environments. Unlike most downtime
                activities, you can Subsist after 8 hours or less of
                exploration, but if you do, you take a –5 penalty. Critical
                Success You either provide a subsistence living for yourself and
                one additional creature, or you improve your own food and
                shelter, granting yourself a comfortable living. Success You
                find enough food and shelter with basic protection from the
                elements to provide you a subsistence living. Failure You’re
                exposed to the elements and don’t get enough food, becoming
                fatigued until you attain sufficient food and shelter. Critical
                Failure You attract trouble, eat something you shouldn’t, or
                otherwise worsen your situation. You take a –2 circumstance
                penalty to checks to Subsist for 1 week. You don’t find any food
                at all; if you don’t have any stored up, you’re in danger of
                starving or dying of thirst if you continue failing. Sample
                Subsist Tasks Untrained lush forest with calm weather or large
                city with plentiful resources Trained typical hillside or
                village Expert typical mountains or insular hamlet Master
                typical desert or city under siege Legendary barren wasteland or
                city of undead
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
                <Text category="h3">Subsist</Text>
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

export default SubsistActivity;

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
