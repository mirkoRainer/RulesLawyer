import React from "react";
import { StyleSheet, Button } from "react-native";
import { Spell, SpellList } from "./Spell";
import { Layout, Text } from "@ui-kitten/components";
import { SpellViewNavigationProps } from "../SpellsPage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { EntireAppState } from "../../../../../store/Store";
import { startUpdateSpell } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActions";

const SpellView: React.FC<Props> = (props) => {
    const handleEditButtonPress = () => {
        const updateSpell = (
            spell: Spell,
            spellType: keyof SpellList,
            index: number
        ) => {
            props.updateSpell(spell, spellType, index);
        };
        props.navigation.navigate("EditSpellView", {
            index: props.index,
            updateSpell,
        });
    };
    return (
        <Layout style={styles.container}>
            <Layout style={styles.row}>
                <Text style={styles.spellName} category="h4">
                    {" "}
                    {props.spell.name}{" "}
                </Text>
                <Button title="Edit" onPress={handleEditButtonPress} />
            </Layout>
            {props.spell.description ? (
                <Text category="h6">Description</Text>
            ) : (
                <></>
            )}
            {props.spell.description ? (
                <Text>{props.spell.description}</Text>
            ) : (
                <></>
            )}
        </Layout>
    );
};

interface OwnProps {
    spell: Spell;
    navigation: SpellViewNavigationProps;
    index: number;
    spellType: keyof SpellList;
}
type Props = LinkDispatchProps & LinkStateProps & OwnProps;

interface LinkStateProps {}

interface LinkDispatchProps {
    updateSpell: (
        Spell: Spell,
        SpellType: keyof SpellList,
        index: number
    ) => void;
}

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
    updateSpell: bindActionCreators(startUpdateSpell, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpellView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
    },
    spellName: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    row: {
        flexDirection: "row",
    },
});
