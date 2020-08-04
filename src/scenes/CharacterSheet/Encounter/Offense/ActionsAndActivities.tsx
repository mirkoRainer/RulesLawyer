import React, { Component } from "react";
import {  StyleSheet, FlatList } from "react-native";
import ActionView from "./ActionView";
import { Action } from "../../../../PF2eCoreLib/PlayerCharacter";
import { Layout, Text, Divider } from "@ui-kitten/components";

interface Props {
    actions: Action[];
}
const ActionsAndActivities: React.FC<Props> = (props) => {
    const renderItem = (item: Action) => <ActionView action={item} />;

    const actions: JSX.Element[] = [];
    props.actions.forEach(action => {
        actions.push(renderItem(action));
    });

    return (
        <Layout style={styles.container}>
            <Text style={styles.header} category='h5'>
                    Actions // Activities // Reactions
            </Text>
            <Divider />
            {actions}
        </Layout>
    );
};

export default ActionsAndActivities;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5
    },
    text: {
        flex: 1,
        width: 100,
    },
    header: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        paddingBottom: 5
    },
});
