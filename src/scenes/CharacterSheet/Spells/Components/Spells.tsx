import React, { Component } from "react";
import { StyleSheet, SectionList } from "react-native";
import SpellView from "./SpellView";
import { Spell, SpellListEntry } from "./Spell";
import { Layout, Text, useTheme } from "@ui-kitten/components";

interface Props {
    spells: SpellListEntry[];
}

interface State {}

const Spells: React.FC<Props> = (props) => {
    const renderItem = ({ item }: { item: Spell }) => <SpellView spell={item} />;
    const theme = useTheme();
    const keyExtractor = (item: Spell) => item.name;
        return (
            <Layout style={styles.container}>
                <SectionList
                    style={styles.flatContainer}
                    sections={props.spells}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: "flex-start",
                    }}
                    scrollEnabled={false}
                    renderSectionHeader={({ section: { spellType, data } }) => (
                        data.length === 0 ? <></> :
                        <Text
                            category="h5"
                            style={{
                                ...styles.header,
                                color: theme["color-primary-400"],
                            }}
                        >
                            {spellType}
                        </Text>
                    )}
                />
            </Layout>
        );
}

export default Spells;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatContainer: {
        flex: 1,
        flexGrow: 1,
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
    },
    text: {
        flex: 1,
    },
    header: {
        flex: 1,
        fontWeight: "bold",
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
});
