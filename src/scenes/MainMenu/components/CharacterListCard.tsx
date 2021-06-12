import { Layout, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import React from "react";

export interface CharacterListCardProps {
    uuid: string;
    name: string;
    ancestry: string;
    background: string;
    class: string;
    level: number;
}

const CharacterListCard: React.FC<CharacterListCardProps> = (props) => {
    return (
        <Layout style={styles.container}>
            <Text>
                {props.uuid} - {props.name} the {props.class}
            </Text>
            <Text>
                Level {props.level} {props.ancestry}
            </Text>
            <Text>{props.background}</Text>
        </Layout>
    );
};

export default CharacterListCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
        padding: 5,
    },
});
