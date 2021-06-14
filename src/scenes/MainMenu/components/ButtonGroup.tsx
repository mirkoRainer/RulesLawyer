import { Layout, Button } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import React from "react";

export interface ButtonGroupProps {}

const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
    return (
        <Layout style={{ flexDirection: "row", flex: 6 }}>
            <Button style={styles.button}>Activate</Button>
            <Button style={styles.button} status="danger">
                Delete
            </Button>
        </Layout>
    );
};

export default ButtonGroup;

const styles = StyleSheet.create({
    button: {
        flex: 1,
    },
});
