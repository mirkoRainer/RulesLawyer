import React, { Component } from "react";
import { View, StyleSheet, Text, Virtualiz } from "react-native";
import SpellSlotView, { SpellSlotProps } from "./SpellSlotView";

interface Props {
    spellSlots: SpellSlotProps[];
}

interface State {}
/*TODO: Need to consider multiple spell casting sources. i.e. Wizard with Cleric dedication.*/
export default class SpellSlots extends Component<Props, State> {
    keyExtractor = (item: SpellSlotProps) => item.spellLevel;
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}> Spell Slots </Text>
                <View style={styles.rowContainer}>
                    <SpellSlotView
                        /* Focus Points */
                        spellLevel={this.props.spellSlots[0].spellLevel}
                        maximum={this.props.spellSlots[0].maximum}
                        current={this.props.spellSlots[0].current}
                    />
                    <SpellSlotView
                        /* 1st Level */
                        spellLevel={this.props.spellSlots[1].spellLevel}
                        maximum={this.props.spellSlots[1].maximum}
                        current={this.props.spellSlots[1].current}
                    />
                    <SpellSlotView
                        /* 2nd Level */
                        spellLevel={this.props.spellSlots[2].spellLevel}
                        maximum={this.props.spellSlots[2].maximum}
                        current={this.props.spellSlots[2].current}
                    />
                    <SpellSlotView
                        /* 3rd Level */
                        spellLevel={this.props.spellSlots[3].spellLevel}
                        maximum={this.props.spellSlots[3].maximum}
                        current={this.props.spellSlots[3].current}
                    />
                    <SpellSlotView
                        /* 4th Level */
                        spellLevel={this.props.spellSlots[4].spellLevel}
                        maximum={this.props.spellSlots[4].maximum}
                        current={this.props.spellSlots[4].current}
                    />
                    <SpellSlotView
                        /* 5th Level */
                        spellLevel={this.props.spellSlots[5].spellLevel}
                        maximum={this.props.spellSlots[5].maximum}
                        current={this.props.spellSlots[5].current}
                    />
                    <SpellSlotView
                        /* 6th Level */
                        spellLevel={this.props.spellSlots[6].spellLevel}
                        maximum={this.props.spellSlots[6].maximum}
                        current={this.props.spellSlots[6].current}
                    />
                    <SpellSlotView
                        /* 7th Level */
                        spellLevel={this.props.spellSlots[7].spellLevel}
                        maximum={this.props.spellSlots[7].maximum}
                        current={this.props.spellSlots[7].current}
                    />
                    <SpellSlotView
                        /* 8th Level */
                        spellLevel={this.props.spellSlots[8].spellLevel}
                        maximum={this.props.spellSlots[8].maximum}
                        current={this.props.spellSlots[8].current}
                    />
                    <SpellSlotView
                        /* 9th Level */
                        spellLevel={this.props.spellSlots[9].spellLevel}
                        maximum={this.props.spellSlots[9].maximum}
                        current={this.props.spellSlots[9].current}
                    />
                    <SpellSlotView
                        /* 10th Level */
                        spellLevel={this.props.spellSlots[10].spellLevel}
                        maximum={this.props.spellSlots[10].maximum}
                        current={this.props.spellSlots[10].current}
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
