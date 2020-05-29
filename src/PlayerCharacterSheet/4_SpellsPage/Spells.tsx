import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList, SectionList } from "react-native";
import SpellView from "./SpellView";
import { Spell, SpellListEntry } from "./Spell";

interface Props {
    spells: SpellListEntry[];
}

interface State {}
export default class Spells extends Component<Props, State> {
    renderItem = ({ item }: { item: Spell }) => <SpellView spell={item} />;
    keyExtractor = (item: Spell) => item.name;
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}> Spells </Text>
                <SectionList
                    style={styles.flatContainer}
                    sections={this.props.spells}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: "flex-start",
                    }}
                    renderSectionHeader={({ section: { spellType } }) => (
                        <Text
                            style={{
                                ...styles.header,
                                ...styles.sectionHeader,
                            }}
                        >
                            {spellType}
                        </Text>
                    )}
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
    sectionHeader: {
        fontSize: 12,
    },
});
