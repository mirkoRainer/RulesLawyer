import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import ActionView from "./ActionView";

export interface Action {
    name: string;
    numberOfActions: number; // 0 is a free action; 0.5 is a reaction;
    traits: string[];
    bookAbbreviation: string;
    pageNumber: number;
    description: string;
    trigger?: string;
}

interface Props {
    actions: Action[];
}

interface State {}

export default class ActionsAndActivities extends Component<Props, State> {
    renderItem = ({ item }: { item: Action }) => <ActionView action={item} />;
    keyExtractor = (item: Action) => item.name;

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Actions // Activities // Reactions
                </Text>
                <FlatList<Action>
                    data={this.props.actions}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                ></FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
    },
    text: {
        flex: 1,
        width: 100,
        backgroundColor: "green",
    },
    header: {
        flex: 1,
        fontSize: 16,
        fontWeight: "bold",
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
});
