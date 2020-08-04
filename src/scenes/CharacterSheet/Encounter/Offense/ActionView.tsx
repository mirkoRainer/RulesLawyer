import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Action } from "../../../../PF2eCoreLib/PlayerCharacter";
import { Layout, Text, Divider } from "@ui-kitten/components";

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
                <Layout style={styles.text}></Layout>
            ) : (
                <Text style={styles.text}>
                    <Text style={styles.header}>Traits: </Text>
                    <Text style={styles.text}>
                        {this.props.action.traits.join(", ")}
                    </Text>
                </Text>
            );

        const trigger = this.props.action.trigger ? (
            <Layout style={styles.rowContainer}>
                <Text>
                    <Text style={styles.header}>{"Trigger: "}</Text>
                    <Text style={styles.text}>{this.props.action.trigger}</Text>
                </Text>
            </Layout>
        ) : (
            <Layout></Layout>
        );

        return (
            <Layout style={styles.container}>
                <Layout style={styles.rowContainer}>
                    <Text style={styles.header}>{this.props.action.name}</Text>
                    <Text style={styles.header}>
                        Actions: {actionTypeIndicator}
                    </Text>
                </Layout>
                <Layout style={styles.rowContainer}>
                    <Text style={styles.text}></Text>
                    {traits}
                </Layout>
                {trigger}
                <Text>
                    <Text style={styles.header}>Description: </Text>
                    <Text style={styles.text}>
                        {this.props.action.description}
                    </Text>
                </Text>
                <Layout style={styles.rulebook}>
                    <Text style={styles.headerJustifyRight}>
                        {this.props.action.bookAbbreviation}:
                    </Text>
                    <Text> pg. {this.props.action.pageNumber}</Text>
                </Layout>
                <Divider />
            </Layout>
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
        padding: 5
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
