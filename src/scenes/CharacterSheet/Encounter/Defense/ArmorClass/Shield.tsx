import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text, Layout } from "@ui-kitten/components";
import { AbilityScore } from "../../../../../PF2eCoreLib/AbilityScores";
import { ArmorProficiencies, WornArmor } from "../../../../../PF2eCoreLib/PlayerCharacter";
import { AppState } from "../../../../../store/Store";
import { connect } from "react-redux";

export interface ShieldProps {
    hasShield: boolean;
    acBonus?: number;
    hardness?: number;
    maxHP?: number;
    breakThreshold?: number;
    currentHP?: number;
}


const Shield: React.FC<Props> = (props) => {
    const shieldView = props.shield.hasShield ? (
        <Layout style={styles.container}>
            <Text style={styles.title} category='h6'>Shield</Text>
            <Layout style={styles.column}>
                <Text style={styles.text}>Bonus:</Text>
                <Text style={styles.number}>+{props.shield.acBonus!}</Text>
            </Layout>
            <Layout style={styles.column}>
                <Text style={styles.text}>Shield HP:</Text>
                <Text style={styles.number}>{props.shield.currentHP!}/{props.shield.maxHP!}</Text>
            </Layout>
            <Layout style={styles.column}>
                <Text style={styles.text}>BT:</Text>
                <Text style={styles.number}>{props.shield.breakThreshold!}</Text>
            </Layout>
            <Layout style={styles.column}>
                <Text style={styles.text}>Hardness:</Text>
                <Text style={styles.number}> {props.shield.hardness!}</Text>
            </Layout>
        </Layout>
    ) : (
        <Layout></Layout>
    );

    return shieldView;
};

const styles = StyleSheet.create({
    container: {
        flex: .75,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    title: {
        flex: 1,
        textAlign: "center",
        alignSelf: "center",
    },
    text: {
        flex: 1,
        fontSize: 14,
        alignSelf: "center",
        alignContent: "flex-end"
        // justifyContent: "flex-end"
    },
    number: {
        flex: 1.5,
        fontSize: 18,
        alignSelf: "center"
    },
    column: { 
        flex: 1, 
        justifyContent: "space-around", 
        paddingVertical: 5 
    }
});

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {

}

interface LinkStateProps {
    shield: ShieldProps;
}

const mapDispatchToProps = (
): LinkDispatchProps => {
    return {

    };
};

const mapStateToProps = (
    state: AppState): LinkStateProps => ({
    shield: state.playerCharacter.shield
});

export default connect(mapStateToProps, mapDispatchToProps)(Shield);
