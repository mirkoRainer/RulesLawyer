import React, { Component, useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Layout } from "@ui-kitten/components";
import { AppState } from "../../../../../store/Store";
import { connect } from "react-redux";
import ShieldEditModal from "./ShieldEditModal";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Shield } from "../../../../../PF2eCoreLib/PlayerCharacter";


const ShieldView: React.FC<Props> = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const modalOn = () => { setModalVisible(true);};
    const modalOff = () => { setModalVisible(false);};

    const shieldView = props.shield.hasShield ? (
        <Layout>
            <TouchableOpacity onPress={modalOn} style={styles.container}>
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
            </TouchableOpacity>
            <ShieldEditModal visible={modalVisible} toggleModal={modalOff} />
        </Layout>
    ) : (
        <Layout></Layout>
    );

    return shieldView;
};


type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {
    
}

interface LinkStateProps {
    shield: Shield;
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
        
export default connect(mapStateToProps, mapDispatchToProps)(ShieldView);
        
const styles = StyleSheet.create({
    container: {
        flex: .75,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    title: {
        flex: 1.5,
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