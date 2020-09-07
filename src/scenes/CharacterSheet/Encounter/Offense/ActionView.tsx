import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { PF2Action } from "../../../../PF2eCoreLib/PlayerCharacter";
import { Layout, Text, Divider, Icon, Button, Input, Select, SelectItem, IndexPath } from "@ui-kitten/components";
import { Pill } from "../../../Shared/Pill";
import ActionsAndActivities from "./ActionsAndActivities";
import { DetermineActionSymbol, freeActionSymbol, reactionSymbol, actionSymbol, MapIndexToAction, MapActionToIndexPath } from "./ActionHelper";
import { TraitSelector } from "../../../Shared/TraitSelector";
import { Traits } from "../../../../PF2eCoreLib/Traits";

interface Props {
    action: PF2Action;
    updateAction: (action: PF2Action) => void;
}

const ActionView: React.FC<Props> = (props) => {

    const actionName = () => {
        return <Text category='h4' style={{...styles.text, textAlign: "center"}}>{props.action.name}</Text>;
    };

    const actionCost = (
        <Text style={{ paddingRight: 5, paddingTop: 10, flex: .324, textAlign: "right"}} category='h5'>
            {DetermineActionSymbol(props.action.numberOfActions)}
        </Text>
    );

    const actionDescription = () => {
        return (
            <>
                <Text style={styles.header} category='h6'>Description: </Text>
                <Text style={styles.text}>
                    {props.action.description}
                </Text>
            </>
        );
    }; 

    const trigger = props.action.trigger ? (
        <Layout style={styles.rowContainer}>
            <Text>
                <Text style={styles.header}>{"Trigger: "}</Text>
                <Text style={styles.text}>{props.action.trigger}</Text>
            </Text>
        </Layout>
    ) : (
        <Layout></Layout>
    );

    const traits = () => {
        const renderTraitPill = (trait: string) => {
            return (
                <Pill key={trait} text={trait} onPress={() => {}}/>
            );
        };
        const traitsRendered: JSX.Element[] = []; 
        props.action.traits.forEach(trait => {
            traitsRendered.push(renderTraitPill(trait));
        });
        const render = props.action.traits.length === 0 ? (
            <Layout></Layout>
        ) : (
            <Layout style={{...styles.rowContainer}}>
                <Text style={{...styles.header, flex: .25}} category='h6'>Traits: </Text>
                <Layout style={{flex: 1, flexDirection: "row", flexWrap: "wrap"}}>
                    {traitsRendered}
                </Layout>
            </Layout>
        );

        return render;
    };

    return (
        <Layout style={styles.container}>
            <Layout style={styles.rowContainer}>
                {actionName()}
                {actionCost}
            </Layout>
            {trigger}
            <Layout style={styles.container}>
                {actionDescription()}
            </Layout>
            {traits()}
            <Layout style={styles.rulebook}>
                <Text style={styles.headerJustifyRight}>
                    {props.action.bookAbbreviation}:
                </Text>
                <Text style={{flex: .25, alignSelf: "flex-end", padding: 5}}> pg. {props.action.pageNumber}</Text>
            </Layout>
            <Divider />
        </Layout>
    );
};

export default ActionView;

const styles = StyleSheet.create({
    rulebook: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        padding: 5
    },
    container: {
        flex: 1,
        padding: 10
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
        padding: 5
    },
    text: {
        flex: 1,
        padding: 5
    },
    header: {
        flex: 1,
        fontWeight: "bold",
        padding: 5
    },
    headerJustifyRight: {
        flex: 1,
        fontWeight: "bold",
        textAlign: "right",
        padding: 5
    },
});
