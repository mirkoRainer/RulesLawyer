import React, { Component } from "react";
import {  StyleSheet, FlatList } from "react-native";
import ActionView from "./ActionView";
import { PF2Action } from "../../../../PF2eCoreLib/PlayerCharacter";
import { Layout, Text, Divider, Icon, Button } from "@ui-kitten/components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { startChangePF2Actions } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { AppState } from "../../../../store/Store";
import { StackNavigationProp } from "@react-navigation/stack";
import { OffenseStackParamList } from "./OffenseNavigation";
import { MainOffenseNavigationProps } from "../EncounterOffense";
import { useFocusEffect } from "@react-navigation/native";
import { useState } from "react";
import { AbilityScoreArray } from "../../../../PF2eCoreLib/AbilityScores";


interface OwnProps {
    navigation: MainOffenseNavigationProps
}

const ActionsAndActivities: React.FC<Props> = (props) => {
    const [ state, setState ] = useState({});

    useFocusEffect(
        React.useCallback(() => {
            setState({});
        }, [])
    );

    const renderItem = (item: PF2Action, actionIndex: number) => {
        return <ActionView action={item} key={item.id.toString()} abilityScores={props.abilityScores} level={props.level}/>;
    };

    const actions: JSX.Element[] = [];
    props.actions.forEach((action, index) => {
        actions.push(renderItem(action, index));
    });

    const InfoIcon = (props : any) => (
        <Icon {...props} name='info'/>
    );
    const handleEditButtonPress = () => {
        props.navigation.navigate("EditActionsView");
    };
    const EditButton = () => (
        <Button onPress={handleEditButtonPress} appearance='ghost' accessoryLeft={InfoIcon} style={{flex: .05, paddingLeft: 5}}/>
    );

    return (
        <Layout style={styles.container}>
            <Layout style={{flex:1, flexDirection: "row"}}>
                <Text style={styles.header} category='h3'>
                    Actions
                </Text>
                {EditButton()}
            </Layout>
            <Divider />
            {actions}
        </Layout>
    );
};

type Props = OwnProps & LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {
    updateActions: (action: PF2Action[]) => void;
}

interface LinkStateProps {
    actions: PF2Action[];
    abilityScores: AbilityScoreArray;
    level: number;
}

const mapStateToProps = (
    state: AppState,
): LinkStateProps => ({
    actions: state.playerCharacter.actions,
    abilityScores: state.playerCharacter.abilityScores,
    level: state.playerCharacter.level
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
    updateActions: bindActionCreators(startChangePF2Actions, dispatch),

});

export default connect(mapStateToProps, mapDispatchToProps)(ActionsAndActivities);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5
    },
    text: {
        flex: 1,
        width: 100,
    },
    header: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        textAlign: "center",
        paddingBottom: 5,
    },
});
