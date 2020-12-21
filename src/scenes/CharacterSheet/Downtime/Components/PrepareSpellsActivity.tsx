import React, { useState } from "react";
import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

type Props = {};

type State = {
    descriptionVisible: boolean;
};

const PrepareSpellsActivity: React.FC<Props> = (props) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const toggleDescription = () => {
        setDescriptionVisible(!descriptionVisible);
    };

    const description = (
        <Layout>
            <Text category="p1" style={styles.text}>
                If you’re a prepared spellcaster—such as a cleric, druid, or
                wizard—you must spend time each day preparing spells for that
                day. At the start of your daily preparations, you select a
                number of spells of different spell levels determined by your
                character level and class. Your spells remain prepared until you
                cast them or until you prepare spells again.
            </Text>
            <Text category="p1" style={styles.text}>
                Each prepared spell is expended after a single casting, so if
                you want to cast a particular spell more than once in a day, you
                need to prepare that spell multiple times. The exceptions to
                this rule are spells with the cantrip trait; once you prepare a
                cantrip, you can cast it as many times as you want until the
                next time you prepare spells. See page 300 for more information
                on cantrips.
            </Text>
            <Text category="p1" style={styles.text}>
                You might gain an ability that allows you to swap prepared
                spells or perform other aspects of preparing spells at different
                times throughout the day, but only your daily preparation counts
                for the purpose of effects that last until the next time you
                prepare spells.
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
                <Text category="h3">Prepare Spells</Text>
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

export default PrepareSpellsActivity;

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
