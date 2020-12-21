import React, { useState } from "react";
import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

type Props = {};

type State = {
    descriptionVisible: boolean;
};

const BribeAContactActivity: React.FC<Props> = (props) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const toggleDescription = () => {
        setDescriptionVisible(!descriptionVisible);
    };

    const description = (
        <Layout>
            <Text category="p1" style={styles.text}>
                Cost A bribe worth at least one-tenth of the Currency per
                Additional PC listed on Table 10–9: Party Treasure by Level.
                Doubling this amount grants a +2 circumstance bonus to the
                check. Requirements You’ve successfully Gained a Contact (see
                below). You offer a bribe to your contact to help the heist in
                some way. Attempt a hard or very hard Deception or Diplomacy
                check. Success The contact accepts the bribe and you gain 1 EP.
                Failure You believe you successfully Bribed your Contact and
                gained 1 EP, but in fact the contact informs the opposition of
                the attempted bribery, adding 1 AP to the infiltration. The GM
                can reveal that this Edge Point grants no benefit at any point
                during the infiltration, as befits the story. Critical Failure
                As failure, but adding 2 AP to the infiltration.
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
                <Text category="h3">Bribe a Contact</Text>
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

export default BribeAContactActivity;

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
