import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import SpellSlotView, { SpellSlotProps } from "./SpellSlotView";

interface Props {
    SpellSlots: SpellSlotProps[];
}

interface State {}
/*TODO: Need to consider multiple spell casting sources. i.e. Wizard with Cleric dedication.*/
export default class SpellSlots extends Component<Props, State> {
    renderItem = ({ item }: { item: SpellSlotProps }) => (
        <SpellSlotView
            spellLevel={item.spellLevel}
            maximum={item.maximum}
            current={item.current}
        />
    );
    keyExtractor = (item: SpellSlotProps) => item.spellLevel;
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}> Spell Slots </Text>
                <View style={styles.rowContainer}>
                    <FlatList<SpellSlotProps>
                        data={this.props.SpellSlots}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                        horizontal={true}
                        contentContainerStyle={{
                            flexGrow: 1,
                            justifyContent: "space-evenly",
                        }}
                        scrollEnabled={false}
                    />
                </View>
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
    rowContainer: {
        flex: 1,
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "center",
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
