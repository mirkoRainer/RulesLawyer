import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import SpellView from "./SpellView";
import { Spell } from "./Spell";

interface Props {
    spells: Spell[];
}

interface State {}
export default class Spells extends Component<Props, State> {
    renderItem = ({ item }: { item: Spell }) => <SpellView spell={item} />;
    keyExtractor = (item: Spell) => item.name;
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}> Spell Slots </Text>
                <FlatList<Spell>
                    style={styles.flatContainer}
                    data={this.props.spells}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    horizontal={true}
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: "center",
                    }}
                    scrollEnabled={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
    },
    flatContainer: {
        flex: 1,
        flexGrow: 1,
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 1,
    },
    text: {
        flex: 1,
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
