import React, { useState } from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const RepeatASpellActivity: React.FC<Props> = (props) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const toggleDescription = () => {
        setDescriptionVisible(!descriptionVisible);
    };

    const description = (
        <Text category="p1" style={styles.text}>
            You repeatedly cast the same spell while moving at half speed.
            Typically, this spell is a cantrip that you want to have in effect
            in the event a combat breaks out, and it must be one you can cast in
            2 actions or fewer. In order to prevent fatigue due to repeated
            casting, you’ll likely use this activity only when something out of
            the ordinary occurs. You can instead use this activity to continue
            Sustaining a Spell or Activation with a sustained duration. Most
            such spells or item effects can be sustained for 10 minutes, though
            some specify they can be sustained for a different duration.
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
                <Text category="h3">Repeat A Spell</Text>
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

export default RepeatASpellActivity;

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
