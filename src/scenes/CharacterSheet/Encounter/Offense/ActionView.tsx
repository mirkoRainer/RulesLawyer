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

    const [ editing, setEditing ] = React.useState(false);
    const [ action, setAction ] = React.useState<PF2Action>(props.action);
    const [ selectedActionCost, setSelectedActionCost ] = React.useState(action.numberOfActions);

    const traits = () => {
        const renderTraitPill = (trait: string) => {
            return (
                <Pill key={trait} text={trait} onPress={() => {}}/>
            );
        };
        const traitsRendered: JSX.Element[] = []; 
        action.traits.forEach(trait => {
            traitsRendered.push(renderTraitPill(trait));
        });
        const render = action.traits.length === 0 ? (
            <Layout></Layout>
        ) : (
            <Layout style={{...styles.rowContainer}}>
                <Text style={{...styles.header, flex: .25}} category='h6'>Traits: </Text>
                <Layout style={{flex: 1, flexDirection: "row", flexWrap: "wrap"}}>
                    {traitsRendered}
                </Layout>
            </Layout>
        );
        const onTraitSelect = (traits: (keyof typeof Traits)[]) => { 
            setAction({...action, traits});
            // props.updateAction({...action, traits});
            // Traits not updating on select/deselect
        };
        return !editing ? render : <TraitSelector currentTraits={action.traits} onSelection={onTraitSelect}/>;
    };

    const trigger = action.trigger ? (
        <Layout style={styles.rowContainer}>
            <Text>
                <Text style={styles.header}>{"Trigger: "}</Text>
                <Text style={styles.text}>{action.trigger}</Text>
            </Text>
        </Layout>
    ) : (
        <Layout></Layout>
    );

    const actionName = <Text category='h4' style={{...styles.text, flex: 1, textAlign: "center"}}>{action.name}</Text>;


    const handleActionCostOnSelect = (index: IndexPath | IndexPath[]) => {
        const trueIndex = index as IndexPath;
        const selectedAction = MapIndexToAction(trueIndex.row);
        setSelectedActionCost(selectedAction);
    };

    const actionCostSelector = (
        <Select
            selectedIndex={MapActionToIndexPath(selectedActionCost) as IndexPath}
            value={DetermineActionSymbol(selectedActionCost)}
            onSelect={handleActionCostOnSelect}
            style={{flex: .7}}
            label={"Action Cost"}
            size='small'
        >
            <SelectItem title={freeActionSymbol} />
            <SelectItem title={reactionSymbol} />
            <SelectItem title={actionSymbol.repeat(1)} />
            <SelectItem title={actionSymbol.repeat(2)} />
            <SelectItem title={actionSymbol.repeat(3)} />
        </Select>
    );

    const actionCost = editing ? actionCostSelector : <Text style={{ fontWeight: "bold", padding: 5, flex: .25}} category='h5'>
        {DetermineActionSymbol(action.numberOfActions)}
    </Text>;

    const actionDescription = editing ? <Input style={styles.text}></Input> : <Text style={styles.text}>
        {action.description}
    </Text>;

    const InfoIcon = (props : any) => (
        <Icon {...props} name='info'/>
    );
    const handleEditButtonPress = () => {
        if (editing) {
            props.updateAction({ 
                ...action, 
                numberOfActions: selectedActionCost 
            });
        }
        setEditing(!editing);
    };
    const EditButton = () => (
        <Button onPress={handleEditButtonPress} appearance='ghost' accessoryRight={InfoIcon} style={{flex: .05}}/>
    );

    return (
        <Layout style={styles.container}>
            <Layout style={styles.rowContainer}>
                {EditButton()}
                {actionName}
                {actionCost}
            </Layout>
            {trigger}
            <Layout style={styles.container}>
                <Text style={styles.header} category='h6'>Description: </Text>
                {actionDescription}
            </Layout>
            {traits()}
            <Layout style={styles.rulebook}>
                <Text style={styles.headerJustifyRight}>
                    {action.bookAbbreviation}:
                </Text>
                <Text style={{flex: .25, alignSelf: "flex-end", padding: 5}}> pg. {action.pageNumber}</Text>
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
