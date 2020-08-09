import React, { useState } from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const HustleActivity: React.FC<Props> = (props) => {

    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const toggleDescription = () => {
        setDescriptionVisible(!descriptionVisible);
    };

    const description = (<Text category='p1' style={styles.text}>You strain yourself to move at double your travel speed. You can Hustle only for a number of minutes equal to your Constitution modifier × 10 (minimum 10 minutes). If you are in a group that is Hustling, use the lowest Constitution modifier among everyone to determine how fast the group can Hustle together.</Text>);

    const descriptionText = descriptionVisible ? description : (<Layout></ Layout>);

    return (
        <Layout style={styles.container}>
            <Layout style={styles.row}>
                <Text category='h3'>Hustle</Text>
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

export default HustleActivity;

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