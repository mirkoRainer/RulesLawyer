import { Text, Tooltip, Layout, Button } from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

interface IProps {
    text: string | number;
    status?: string;
    onPress: (trait: string) => void;
}

export const Pill: React.FC<IProps> = (props): JSX.Element => {
    const handlePress = (value: any) => {
        props.onPress(value);
    };

    return (
        <Layout>
            <Button
                status={props.status || "basic"}
                style={styles.pill}
                size="small"
                onPress={handlePress}
                testID={props.text.toString()}
            >
                {props.text}
            </Button>
        </Layout>
    );
};

const styles = StyleSheet.create({
    pill: {
        alignSelf: "flex-start",
        borderColor: "#000",
        borderRadius: 5,
        borderWidth: 1,
        flexShrink: 1,
        fontSize: 12,
        marginRight: 5,
        overflow: "hidden",
        paddingLeft: 5,
        paddingRight: 5,
    },
});
