import React, { useState } from "react";
import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

type Props = {}

type State = {
    descriptionVisible: boolean
}

const AvoidNoticeActivity: React.FC<Props> = (props) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const toggleDescription = () => {
        setDescriptionVisible(!descriptionVisible);
    };

    const description = (<Text category='p1' style={styles.text}>You attempt a Stealth check to avoid notice while traveling at half speed. If you have the Swift Sneak feat, you can move at full Speed rather than half, but you still can’t use another exploration activity while you do so. If you have the Legendary Sneak feat, you can move at full Speed and use a second exploration activity. If you’re Avoiding Notice at the start of an encounter, you usually roll a Stealth check instead of a Perception check both to determine your initiative and to see if the enemies notice you (based on their Perception DCs, as normal for Sneak, regardless of their initiative check results).</Text>);

    const descriptionText = descriptionVisible ? description : (<Layout></ Layout>);

    return (
        <Layout style={styles.container}>
            <Layout style={styles.row}>
                <Text category='h3'>Avoid Notice</Text>
                <Button 
                    appearance='ghost' 
                    status='basic' 
                    onPress={toggleDescription}
                >
                    Description
                </Button>
            </Layout>
            {descriptionText}
        </Layout>
    );
};

export default AvoidNoticeActivity;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    row: {
        flex: 1,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center"
    },
    text: {
        padding: 10
    }
});