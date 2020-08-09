import React, { useState } from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const DetectMagicActivity: React.FC<Props> = (props) => {

    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const toggleDescription = () => {
        setDescriptionVisible(!descriptionVisible);
    };

    const description = (<Text category='p1' style={styles.text}>You cast detect magic at regular intervals. You move at half your travel speed or slower. You have no chance of accidentally overlooking a magic aura at a travel speed up to 300 feet per minute, but must be traveling no more than 150 feet per minute to detect magic auras before the party moves into them.</Text>);

    const descriptionText = descriptionVisible ? description : (<Layout></ Layout>);

    return (
        <Layout style={styles.container}>
            <Layout style={styles.row}>
                <Text category='h3'>Detect Magic</Text>
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

export default DetectMagicActivity;

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