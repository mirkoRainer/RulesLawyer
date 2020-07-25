import React, { Component } from "react";
import { View, StyleSheet, Text, ViewPropTypes } from "react-native";
import { Action } from "../../Encounter/Components/ActionsAndActivities";

interface Props {
    action: Action;
}

interface State {}

export default class ActionView extends Component<Props, State> {
    render() {
        const actionSymbol = "◆";
        const freeActionSymbol = "◇";
        const reactionSymbol = "↺";
        let actionTypeIndicator = "";
        switch (this.props.action.numberOfActions) {
        case 0:
            actionTypeIndicator = freeActionSymbol;
            break;
        case 0.5:
            actionTypeIndicator = reactionSymbol;
            break;
        default:
            actionTypeIndicator = actionSymbol.repeat(
                this.props.action.numberOfActions
            );
            break;
        }

        const traits =
            this.props.action.traits.length === 0 ? (
                <View style={styles.text}></View>
            ) : (
                <Text style={styles.text}>
                    <Text style={styles.header}>Traits: </Text>
                    <Text style={styles.text}>
                        {this.props.action.traits.join(", ")}
                    </Text>
                </Text>
            );

        const trigger = this.props.action.trigger ? (
            <View style={styles.rowContainer}>
                <Text>
                    <Text style={styles.header}>{"Trigger: "}</Text>
                    <Text style={styles.text}>{this.props.action.trigger}</Text>
                </Text>
            </View>
        ) : (
            <View></View>
        );

        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Text style={styles.header}>{this.props.action.name}</Text>
                    <Text style={styles.header}>
                        Actions: {actionTypeIndicator}
                    </Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.text}></Text>
                    {traits}
                </View>
                {trigger}
                <Text>
                    <Text style={styles.header}>Description: </Text>
                    <Text style={styles.text}>
                        {this.props.action.description}
                    </Text>
                </Text>
                <View style={styles.rulebook}>
                    <Text style={styles.headerJustifyRight}>
                        {this.props.action.bookAbbreviation}:
                    </Text>
                    <Text> pg. {this.props.action.pageNumber}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rulebook: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignSelf: "flex-end",
    },
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
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
    },
    headerJustifyRight: {
        flex: 1,
        fontWeight: "bold",
        justifyContent: "flex-end",
        textAlign: "right",
        alignSelf: "flex-end",
        alignContent: "flex-end",
    },
});
