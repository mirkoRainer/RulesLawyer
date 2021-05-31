import React, { useState } from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const FollowTheExpertActivity: React.FC<Props> = (props) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const toggleDescription = () => {
        setDescriptionVisible(!descriptionVisible);
    };

    const description = (
        <Text category="p1" style={styles.text}>
            Choose an ally attempting a recurring skill check while exploring,
            such as climbing, or performing a different exploration tactic that
            requires a skill check (like Avoiding Notice). The ally must be at
            least an expert in that skill and must be willing to provide
            assistance. While Following the Expert, you match their tactic or
            attempt similar skill checks. Thanks to your ally’s assistance, you
            can add your level as a proficiency bonus to the associated skill
            check, even if you’re untrained. Additionally, you gain a
            circumstance bonus to your skill check based on your ally’s
            proficiency (+2 for expert, +3 for master, and +4 for legendary).
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
                <Text category="h3" style={{ paddingLeft: 5 }}>
                    Follow the Expert
                </Text>
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

export default FollowTheExpertActivity;

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
