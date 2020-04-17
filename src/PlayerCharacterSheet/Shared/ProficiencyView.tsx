import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

interface Props {
    title: string;
    keyAbilityModifier: number;
    proficiency: string;
    itemBonus?: number;
    is10base?: boolean;
    isACbase?: boolean;
    descriptor?: string;
    armorPenatly?: number;
}

interface State {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 2,
        alignContent: "stretch",
        alignSelf: "stretch",
    },
    text: {
        flex: 1,
        width: 100,
    },
});

export default class ProficiencyView extends Component<Props, State> {
    public static defaultProps = {
        is10base: false,
    };

    render() {
        const tenBase = this.props.is10base ? (
            <Text style={styles.text}>= 10</Text>
        ) : (
            <Text style={styles.text}>=</Text>
        );
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.title}</Text>
                <Text style={styles.text}>16</Text>
                {tenBase}
            </View>
        );
    }
}
