import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import ActionView from "../../Story/Components/ActionView";
import { Action } from "../../../Shared/PF2eCoreLib/PlayerCharacter";

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
