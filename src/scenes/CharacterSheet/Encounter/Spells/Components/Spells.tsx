import React, { Component, useState } from "react";
import { StyleSheet, SectionList, SectionListData, Alert, AlertButton } from "react-native";
import SpellView from "./SpellView";
import { Spell, SpellList } from "./Spell";
import { Divider, Layout, Text, useTheme, Button } from "@ui-kitten/components";
import { StackNavigationProp } from "@react-navigation/stack";
import { SpellsStackParamList } from "../../SpellsNavigation";
import { SpellViewNavigationProps } from "../SpellsPage";
import { EntireAppState } from "../../../../../store/Store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { startAddSpell, startUpdateSpell } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { useFocusEffect } from "@react-navigation/native";

const Spells: React.FC<Props> = (props) => {
    // make sure the screen is always refreshed.
    const [ state, setState ] = useState({});
    useFocusEffect(
        React.useCallback(() => {
            setState({});
        }, [])
    );
    const sections = () => {
        return [
            {
                spellType: "Focus",
                data: props.spells.Focus,
            },
            {
                spellType: "First Level",
                data: props.spells.FirstLevel,
            },
            {
                spellType: "Second Level",
                data: props.spells.SecondLevel,
            },
            {
                spellType: "Third Level",
                data: props.spells.ThirdLevel,
            },
            {
                spellType: "Fourth Level",
                data: props.spells.FourthLevel,
            },
            {
                spellType: "Fifth Level",
                data: props.spells.FifthLevel,
            },
            {
                spellType: "Sixth Level",
                data: props.spells.SixthLevel,
            },
            {
                spellType: "Seventh Level",
                data: props.spells.SeventhLevel,
            },
            {
                spellType: "Eight Level",
                data: props.spells.EighthLevel,
            },
            {
                spellType: "Ninth Level",
                data: props.spells.NinthLevel,
            },
            {
                spellType: "Tenth Level",
                data: props.spells.TenthLevel,
            },
        ];
    };
    const renderItem = ({
        item,
        index,
        section,
    }: {
        item: Spell;
        index: number;
        section: SectionListData<Spell>;
    }) => (
        <SpellView
            spell={item}
            navigation={props.navigation}
            index={index}
            spellType={section.spellType.split(" ").join("")}
        />
    );
    const theme = useTheme();
    const keyExtractor = (item: Spell) => item.name;
    const handleAddButtonPress = () => {
        const buttons: AlertButton[] = [];
        Object.keys(props.spells).forEach(element => {
            buttons.push({
                text: element,
                onPress: () => { props.addSpell({ name: "New Spell" }, element as keyof SpellList); setState({}); },
            });
        });
        Alert.alert("What type of spell?", undefined, buttons);
    };
    return (
        <Layout style={styles.container}>
            <Layout style={{ flexDirection: "row", padding: 10 }}>
                <Text category="h3" style={{ textAlign: "center", flex: 1 }}>
                    Spells
                </Text>
                <Button onPress={handleAddButtonPress}>Add</Button>
            </Layout>
            <Divider />
            <SectionList
                style={styles.flatContainer}
                sections={sections()}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "flex-start",
                }}
                scrollEnabled={false}
                renderSectionHeader={({ section: { spellType, data } }) =>
                    data.length === 0 ? (
                        <></>
                    ) : (
                        <Text
                            category="h5"
                            style={{
                                ...styles.header,
                                color: theme["color-primary-400"],
                            }}
                        >
                            {spellType}
                        </Text>
                    )
                }
            />
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps & OwnProps;
interface OwnProps {
    spells: SpellList;
    navigation: SpellViewNavigationProps;
}

interface LinkStateProps {
}

interface LinkDispatchProps {
    addSpell: (newSpell: Spell, spellType: keyof SpellList) => void;
}

const mapStateToProps = (
    state: EntireAppState,
    props: OwnProps
): LinkStateProps => {
    return {};
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
    addSpell: bindActionCreators(startAddSpell, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Spells);

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