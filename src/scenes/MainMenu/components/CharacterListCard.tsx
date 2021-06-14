import { Layout, Text, Icon, Button } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import React, { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import { VerticalEllipseIcon } from "../../Shared/IconButtons";

export interface CharacterListCardProps {
    uuid: string;
    name: string;
    ancestry: string;
    background: string;
    class: string;
    level: number;
}

const CharacterListCard: React.FC<CharacterListCardProps> = (props) => {
    const [edit, setEdit] = useState(false);
    return (
        <Layout style={{ flexDirection: "row", height: 100 }}>
            <Layout style={{ ...styles.container, flex: 2 }}>
                <Text category="s2">{props.uuid}</Text>
                <Text>
                    {props.name} the {props.class}
                </Text>
                <Text>
                    Level {props.level} {props.ancestry}
                </Text>
                <Text>{props.background}</Text>
            </Layout>
            {edit ? (
                <Layout style={{ flexDirection: "row", flex: 5 }}>
                    <Button
                        style={{ flex: 1 }}
                        appearance="ghost"
                        accessoryLeft={VerticalEllipseIcon}
                        onPress={() => setEdit(!edit)}
                    ></Button>
                    <ButtonGroup />
                </Layout>
            ) : (
                <Button
                    style={{ flex: 0.5 }}
                    appearance="ghost"
                    size="large"
                    accessoryLeft={VerticalEllipseIcon}
                    onPress={() => setEdit(!edit)}
                ></Button>
            )}
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
