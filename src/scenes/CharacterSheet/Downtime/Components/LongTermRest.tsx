import React, { useState } from "react";
import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

type Props = {};

type State = {
    descriptionVisible: boolean;
};

const LongTermRestActivity: React.FC<Props> = (props) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const toggleDescription = () => {
        setDescriptionVisible(!descriptionVisible);
    };

    const description = (
        <Layout>
            <Text category="p1" style={styles.text}>
                Each full 24-hour period a character spends resting during
                downtime allows them to recover double what they would for an
                8-hour rest (as listed on page 499). They must spend this time
                resting in a comfortable and secure location, typically in bed.
                If they spend significantly longer in bed rest—usually from a
                few days to a week of downtime—they recover from all damage and
                most nonpermanent conditions. Characters affected by diseases,
                long-lasting poisons, or similar afflictions might need to
                continue attempting saves during downtime. Some curses,
                permanent injuries, and other situations that require magic or
                special care to remove don’t end automatically during long-term
                rest.
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
                <Text category="h3">Long Term Rest</Text>
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

export default LongTermRestActivity;

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
