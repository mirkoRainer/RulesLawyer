import React, { useState } from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const InvestigateActivity: React.FC<Props> = (props) => {

    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const toggleDescription = () => {
        setDescriptionVisible(!descriptionVisible);
    };

    const description = (<Text category='p1' style={styles.text}>You seek out information about your surroundings while traveling at half speed. You use Recall Knowledge as a secret check to discover clues among the various things you can see and engage with as you journey along. You can use any skill that has a Recall Knowledge action while Investigating, but the GM determines whether the skill is relevant to the clues you could find.</Text>);

    const descriptionText = descriptionVisible ? description : (<Layout></ Layout>);

    return (
        <Layout style={styles.container}>
            <Layout style={styles.row}>
                <Text category='h3'>Investigate</Text>
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

export default InvestigateActivity;

type Props = {}


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