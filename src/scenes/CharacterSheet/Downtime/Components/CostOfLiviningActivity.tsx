import React, { useState } from "react";
import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

type Props = {};

type State = {
    descriptionVisible: boolean;
};

const CostOfLivingActivity: React.FC<Props> = (props) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const toggleDescription = () => {
        setDescriptionVisible(!descriptionVisible);
    };

    const description = (
        <Layout>
            <Text category="p1" style={styles.text}>
                For short periods of downtime, characters are usually just
                passing through a settlement or spending a bit of time there.
                They can use the prices for inn stays and meals found here. For
                long stretches of downtime, use the values on Table 6–16: Cost
                of Living. Deduct these costs from a character’s funds after
                they gain any money from their other downtime activities. Table
                6-16: Cost of Living Standard of Living Week Month Year
                Subsistence* 4 sp 2 gp 24 gp Comfortable 1 gp 4 gp 52 gp Fine 30
                gp 130 gp 1,600 gp Extravagant 100 gp 430 gp 5,200 gp * You can
                attempt to Subsist using Society or Survival for free. A
                character can live off the land instead, but each day they do,
                they typically use the Subsist activity to the exclusion of any
                other downtime activity.
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
                <Text category="h3">Cost of Living</Text>
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

export default CostOfLivingActivity;

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
