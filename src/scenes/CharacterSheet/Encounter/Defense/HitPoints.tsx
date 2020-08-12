import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Button, ButtonGroup } from "@ui-kitten/components";
import { floor } from "react-native-reanimated";
import { bindActionCreators } from "redux";
import { startChangeHitPoints } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";

export interface HitPointProps {
    max: number;
    current: number;
    temporary: number;
    dying: number;
    wounded: number;
}

const HitPoints: React.FC<Props> = (props) => {
    const PlusButton = (amount: number) => (<Button onPress={() => {props.AdjustHitPoints(amount, false);}} style={styles.plus}>+{amount.toString()}</Button>);
    const MinusButton = (amount: number) => (<Button onPress={() => {props.AdjustHitPoints(-amount, false);}} style={styles.minus}>-{amount.toString()}</Button>);

    return (
        <Layout>
            <Layout style={styles.rowContainer}>
                <ButtonGroup style={styles.container} size="tiny" status='danger'>
                    {MinusButton(1)}
                    {MinusButton(5)}
                    {MinusButton(10)}
                </ButtonGroup>
                <Layout>
                    <Text style={styles.subHeader} category='p1'> HP: </Text>
                    <Text category='h4' style={styles.text}> {props.current}/{props.max} </Text>
                </Layout>
                <ButtonGroup style={styles.container} size="tiny" status='info'>
                    {PlusButton(10)}
                    {PlusButton(5)}
                    {PlusButton(1)}
                </ButtonGroup>
            </Layout>
            <Layout style={{ padding: 10, flex: 0.65 }}>
                <Layout style={styles.rowContainer}>
                    <Text style={styles.subHeader} category='p1'> Temp: </Text>
                    <Text style={styles.subHeader} category='p1'>Dying:</Text>
                    <Text style={styles.subHeader} category='p1'>Wounded:</Text>
                </Layout>
                <Layout style={styles.rowContainer}>
                    <Text category='h4' style={styles.text}> {props.temporary} </Text>
                    <Text category='h4' style={styles.text}>{props.dying}</Text>
                    <Text category='h4' style={styles.text}>{props.wounded}</Text>
                </Layout>
            </Layout>
        </Layout>
    );
};

type Props = HitPointProps & LinkDispatchProps;
    

// base state
//all actions to be dispatched
interface LinkDispatchProps {
    AdjustHitPoints: (delta: number, removesWounded: boolean) => void;
}


const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
    AdjustHitPoints: bindActionCreators(startChangeHitPoints, dispatch)
});

export default connect(null, mapDispatchToProps)(HitPoints);


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowContainer: {
        flex: 0.5,
        flexDirection: "row",
    },
    text: {
        flex: 1,
        textAlign: "center",
        alignSelf: "center",
        justifyContent: "flex-start",
    },
    subHeader: {
        flex: 2,
        justifyContent: "flex-end",
        textAlign: "center",
        alignSelf: "center"
    },
    plus: {
        flex: 1,
        justifyContent: "center"
    },
    minus: {
        flex: 1
    }
});
