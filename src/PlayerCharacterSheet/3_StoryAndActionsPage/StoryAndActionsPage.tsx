import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Image } from "react-native-elements";
import BiographicalData, { BiographicalDataProps } from "./BiographicalData";
import Personality from "./Personality";

interface Props {
    bioData: BiographicalDataProps;
}

interface State {}

export default class StoryAndActionsPage extends Component<Props, State> {
    public static defaultProps = {};

    render() {
        return (
            <View style={styles.container}>
                <Text h4> Story and Actions Page </Text>
                {/*CharacterSketch placeholder*/}
                <BiographicalData bioData={this.props.bioData} />
                <Personality />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        alignSelf: "stretch",
        alignContent: "stretch",
    },
    text: {
        backgroundColor: "orange",
    },
});
