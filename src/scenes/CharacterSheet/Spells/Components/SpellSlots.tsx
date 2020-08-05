import React, { Component } from "react";
import { StyleSheet } from "react-native";
import SpellSlotView, { SpellSlotProps } from "./SpellSlotView";
import { Layout, Text, Divider } from "@ui-kitten/components";
import { ScrollView } from "react-native-gesture-handler";

interface Props {
    spellSlots: SpellSlotProps[];
}

interface State {}
/*TODO: Need to consider multiple spell casting sources. i.e. Wizard with Cleric dedication.*/
export default class SpellSlots extends Component<Props, State> {
    keyExtractor = (item: SpellSlotProps) => item.spellLevel;
    render() {
        return (
            <Layout style={styles.container}>
                <Layout style={styles.rowContainer}>
                    <ScrollView horizontal={true} alwaysBounceHorizontal={false} contentContainerStyle={{ flexGrow: 1, justifyContent: "center"}} >
                        <SpellSlotView
                        /* Focus Points */
                            spellLevel={this.props.spellSlots[0].spellLevel}
                            maximum={this.props.spellSlots[0].maximum}
                            current={this.props.spellSlots[0].current}
                            focus={true}
                        />
                        <Divider />
                        <SpellSlotView
                        /* 1st Level */
                            spellLevel={this.props.spellSlots[1].spellLevel}
                            maximum={this.props.spellSlots[1].maximum}
                            current={this.props.spellSlots[1].current}
                        />
                        <Divider />
                        <SpellSlotView
                        /* 2nd Level */
                            spellLevel={this.props.spellSlots[2].spellLevel}
                            maximum={this.props.spellSlots[2].maximum}
                            current={this.props.spellSlots[2].current}
                        />
                        <Divider />
                        <SpellSlotView
                        /* 3rd Level */
                            spellLevel={this.props.spellSlots[3].spellLevel}
                            maximum={this.props.spellSlots[3].maximum}
                            current={this.props.spellSlots[3].current}
                        />
                        <Divider />
                        <SpellSlotView
                        /* 4th Level */
                            spellLevel={this.props.spellSlots[4].spellLevel}
                            maximum={this.props.spellSlots[4].maximum}
                            current={this.props.spellSlots[4].current}
                        />
                        <Divider />
                        <SpellSlotView
                        /* 5th Level */
                            spellLevel={this.props.spellSlots[5].spellLevel}
                            maximum={this.props.spellSlots[5].maximum}
                            current={this.props.spellSlots[5].current}
                        />
                        <Divider />
                        <SpellSlotView
                        /* 6th Level */
                            spellLevel={this.props.spellSlots[6].spellLevel}
                            maximum={this.props.spellSlots[6].maximum}
                            current={this.props.spellSlots[6].current}
                        />
                        <Divider />
                        <SpellSlotView
                        /* 7th Level */
                            spellLevel={this.props.spellSlots[7].spellLevel}
                            maximum={this.props.spellSlots[7].maximum}
                            current={this.props.spellSlots[7].current}
                        />
                        <Divider />
                        <SpellSlotView
                        /* 8th Level */
                            spellLevel={this.props.spellSlots[8].spellLevel}
                            maximum={this.props.spellSlots[8].maximum}
                            current={this.props.spellSlots[8].current}
                        />
                        <Divider />
                        <SpellSlotView
                        /* 9th Level */
                            spellLevel={this.props.spellSlots[9].spellLevel}
                            maximum={this.props.spellSlots[9].maximum}
                            current={this.props.spellSlots[9].current}
                        />
                        <Divider />
                        <SpellSlotView
                        /* 10th Level */
                            spellLevel={this.props.spellSlots[10].spellLevel}
                            maximum={this.props.spellSlots[10].maximum}
                            current={this.props.spellSlots[10].current}
                        />
                    </ScrollView>
                </Layout>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: .5,
        padding: 5
    },
    flatContainer: {
        flex: 1,
        flexGrow: 1,
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
        padding: 5
    },
    text: {
        flex: 1,
    },
    header: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
});
