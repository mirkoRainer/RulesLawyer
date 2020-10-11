import React, { useState } from "react";
import { StyleSheet } from "react-native";
import SpellSlotView from "./SpellSlotView";
import { Layout } from "@ui-kitten/components";
import { ScrollView } from "react-native-gesture-handler";
import { EntireAppState } from "../../../../../store/Store";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { SpellSlot } from "../../../../../PF2eCoreLib/PlayerCharacter";
import { startChangeSpellSlots } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { prop } from "../../../../../PF2eCoreLib/TypescriptEvolution";
import { useFocusEffect } from "@react-navigation/native";

/*TODO: Need to consider multiple spell casting sources. i.e. Wizard with Cleric dedication.*/
const SpellSlotsView: React.FC<Props> = (props) => {
    // ensure the page refreshes data when it's navigated back to but setting state when the page is focus. React.useCallback prevents an infinite loop.
    const [state, setState] = useState({});
    useFocusEffect(
        React.useCallback(() => {
            setState({});
        }, [])
    );
    const increase = (index: number) => {
        const newSlots = props.spellSlots;
        const newCurrent = Math.min(
            props.spellSlots[index].current + 1,
            props.spellSlots[index].maximum
        );
        newSlots.splice(index, 1, {
            ...props.spellSlots[index],
            current: newCurrent,
        });
        props.updateSpellSlots(newSlots);
        setState({});
    };
    const decrease = (index: number) => {
        const newSlots = props.spellSlots;
        const newCurrent = Math.max(props.spellSlots[index].current - 1, 0);
        newSlots.splice(index, 1, {
            ...props.spellSlots[index],
            current: newCurrent,
        });
        console.log(props.spellSlots[index]);
        props.updateSpellSlots(newSlots);
        setState({});
    };

    return (
        <Layout style={styles.container}>
            <Layout style={styles.rowContainer}>
                <ScrollView
                    horizontal={true}
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: "center",
                    }}
                >
                    <SpellSlotView
                        /* Focus Points */
                        index={0}
                        spellSlot={props.spellSlots[0]}
                        increase={increase}
                        decrease={decrease}
                    />
                    <SpellSlotView
                        /* 1st Level */
                        index={1}
                        increase={increase}
                        decrease={decrease}
                        spellSlot={props.spellSlots[1]}
                    />
                    <SpellSlotView
                        /* 2nd Level */
                        index={2}
                        increase={increase}
                        decrease={decrease}
                        spellSlot={props.spellSlots[2]}
                    />
                    <SpellSlotView
                        /* 3rd Level */
                        index={3}
                        increase={increase}
                        decrease={decrease}
                        spellSlot={props.spellSlots[3]}
                    />
                    <SpellSlotView
                        /* 4th Level */
                        index={4}
                        increase={increase}
                        decrease={decrease}
                        spellSlot={props.spellSlots[4]}
                    />
                    <SpellSlotView
                        /* 5th Level */
                        index={5}
                        increase={increase}
                        decrease={decrease}
                        spellSlot={props.spellSlots[5]}
                    />
                    <SpellSlotView
                        /* 6th Level */
                        index={6}
                        increase={increase}
                        decrease={decrease}
                        spellSlot={props.spellSlots[6]}
                    />
                    <SpellSlotView
                        /* 7th Level */
                        index={7}
                        increase={increase}
                        decrease={decrease}
                        spellSlot={props.spellSlots[7]}
                    />
                    <SpellSlotView
                        /* 8th Level */
                        index={8}
                        increase={increase}
                        decrease={decrease}
                        spellSlot={props.spellSlots[8]}
                    />
                    <SpellSlotView
                        /* 9th Level */
                        index={9}
                        increase={increase}
                        decrease={decrease}
                        spellSlot={props.spellSlots[9]}
                    />
                    <SpellSlotView
                        /* 10th Level */
                        index={10}
                        increase={increase}
                        decrease={decrease}
                        spellSlot={props.spellSlots[10]}
                    />
                </ScrollView>
            </Layout>
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps;

// base state
interface LinkStateProps {
    spellSlots: SpellSlot[];
}
//all actions to be dispatched
interface LinkDispatchProps {
    updateSpellSlots: (newSlots: SpellSlot[]) => void;
}

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    spellSlots: state.playerCharacter.spellSlots,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
    updateSpellSlots: bindActionCreators(startChangeSpellSlots, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpellSlotsView);

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        padding: 5,
    },
    flatContainer: {
        flex: 1,
        flexGrow: 1,
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
        padding: 5,
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
