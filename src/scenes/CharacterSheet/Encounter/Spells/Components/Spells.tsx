import React, { Component } from "react";
import { StyleSheet, SectionList, SectionListData } from "react-native";
import SpellView from "./SpellView";
import { Spell, SpellList, SpellListEntry } from "./Spell";
import { Divider, Layout, Text, useTheme, Button } from "@ui-kitten/components";
import { StackNavigationProp } from "@react-navigation/stack";
import { SpellsStackParamList } from "../../SpellsNavigation";
import { SpellViewNavigationProps } from "../SpellsPage";

interface Props {
    spells: SpellList;
    navigation: SpellViewNavigationProps;
}

interface State {}

const Spells: React.FC<Props> = (props) => {
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
    const renderItem = ({ item, index }: { item: Spell; index: number }) => (
        <SpellView spell={item} navigation={props.navigation} index={index} />
    );
    const theme = useTheme();
    const keyExtractor = (item: Spell) => item.name;
    const handleAddButtonPress = () => {};
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
