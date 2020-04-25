import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import ProficiencyArrayView from "../../Shared/ProficiencyArrayView";

interface Props {
    simple: string;
    martial: string;
    others: string[];
}

interface State {}

export default class WeaponProficiencies extends Component<Props, State> {
    public static defaultProps = {};

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.weaponProf}>
                    <Text style={styles.text}>Simple</Text>
                    <ProficiencyArrayView proficiency={this.props.simple} />
                </View>
                <View style={styles.weaponProf}>
                    <Text style={styles.text}>Martial</Text>
                    <ProficiencyArrayView proficiency={this.props.martial} />
                </View>
                <View style={styles.weaponProf}>
                    <Text style={styles.text}>Other</Text>
                    {/* 
                    Need to convert an array of "others" into a flat list. 
                    Others should have a description and proficiency. 
                    */}
                    <ProficiencyArrayView proficiency={this.props.simple} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 2,
    },
    weaponProf: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        alignSelf: "center",
        justifyContent: "center",
    },
});
