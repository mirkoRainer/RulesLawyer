import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import ProficiencyView from "../Shared/ProficiencyView";
import { Skill } from "./Skill";

interface Props {
    skills: Skill[];
    level: number;
}

interface State {}

export default class Skills extends Component<Props, State> {
    renderItem = ({ item }: { item: Skill }) => (
        <ProficiencyView
            title={item.name}
            keyAbilityModifier={item.abilityModifier}
            proficiency={item.proficiency}
            level={this.props.level}
            itemBonus={item.itemBonus}
            armorPenatly={item.hasArmorPenalty ? item.armorPenalty : undefined}
        />
    );
    keyExtractor = (item: Skill) => item.name;

    render() {
        return (
            <View style={styles.container}>
                <FlatList<Skill>
                    data={this.props.skills}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                ></FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
    },
    text: {
        flex: 1,
        width: 100,
        backgroundColor: "green",
    },
});
