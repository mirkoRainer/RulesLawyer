import React, { Component, useState } from "react";
import { StyleSheet } from "react-native";
import {
    Text,
    Layout,
    Button,
    ButtonGroup,
    Toggle,
} from "@ui-kitten/components";
import { EntireAppState } from "../../../../../store/Store";
import { connect } from "react-redux";
import ShieldEditModal from "./ShieldEditModal";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Shield } from "../../../../../PF2eCoreLib/PlayerCharacter";
import { bindActionCreators } from "redux";
import { startChangeShield } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";

const ShieldView: React.FC<Props> = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const modalOn = () => {
        setModalVisible(true);
    };
    const modalOff = () => {
        setModalVisible(false);
    };

    const adjustShieldHP = (amount: number) => {
        const adjustedHP = props.shield.currentHP + amount;
        if (adjustedHP <= 0) {
            props.updateShield({ ...props.shield, currentHP: 0 });
            return;
        }
        if (adjustedHP > props.shield.maxHP) {
            props.updateShield({
                ...props.shield,
                currentHP: props.shield.maxHP,
            });
            return;
        }
        props.updateShield({ ...props.shield, currentHP: adjustedHP });
    };

    const PlusHPButton = (amount: number) => (
        //@ts-ignore
        <Button
            onPress={() => {
                adjustShieldHP(amount);
            }}
            style={styles.plus}
        >
            +{amount.toString()}
        </Button>
    );
    const MinusHPButton = (amount: number) => (
        <Button
            onPress={() => {
                adjustShieldHP(amount);
            }}
            style={styles.minus}
        >
            {amount.toString()}
        </Button>
    );

    const shieldData = () => {
        if (props.shield.currentHP > props.shield.breakThreshold) {
            return (
                <>
                    <Layout style={styles.column}>
                        <Text style={styles.text}>Bonus:</Text>
                        <Text style={styles.number}>
                            +{props.shield.acBonus!}
                        </Text>
                    </Layout>
                    <Layout style={styles.column}>
                        <Text style={styles.text}>BT:</Text>
                        <Text style={styles.number}>
                            {props.shield.breakThreshold!}
                        </Text>
                    </Layout>
                    <Layout style={styles.column}>
                        <Text style={styles.text}>Hardness:</Text>
                        <Text style={styles.number}>
                            {" "}
                            {props.shield.hardness!}
                        </Text>
                    </Layout>
                </>
            );
        } else {
            return (
                <>
                    <Text
                        category="h6"
                        status="warning"
                        style={{
                            flex: 1,
                            alignSelf: "stretch",
                            textAlign: "center",
                        }}
                    >
                        Broken
                    </Text>
                </>
            );
        }
    };

    const onShieldToggle = (isChecked: boolean) => {
        props.updateShield({ ...props.shield, hasShield: isChecked });
    };

    const shieldView = props.shield.hasShield ? (
        <Layout style={styles.container}>
            <Layout style={{ flex: 0.25, justifyContent: "center" }}>
                <Text style={styles.title} category="h6">
                    Shield
                </Text>
                <Toggle
                    checked={props.shield.hasShield}
                    onChange={onShieldToggle}
                ></Toggle>
            </Layout>
            <Layout style={styles.shield}>
                <Layout style={styles.horizontal}>
                    <ButtonGroup
                        style={styles.buttonGroup}
                        size="tiny"
                        status="danger"
                    >
                        {MinusHPButton(-1)}
                        {MinusHPButton(-5)}
                    </ButtonGroup>
                    <TouchableOpacity onPress={modalOn} style={styles.hpNumber}>
                        <Text category="h6">
                            HP: {props.shield.currentHP!}/{props.shield.maxHP!}
                        </Text>
                    </TouchableOpacity>
                    <ButtonGroup
                        style={styles.buttonGroup}
                        size="tiny"
                        status="info"
                    >
                        {PlusHPButton(5)}
                        {PlusHPButton(1)}
                    </ButtonGroup>
                </Layout>
                <TouchableOpacity onPress={modalOn} style={styles.container}>
                    <Layout style={styles.horizontal}>{shieldData()}</Layout>
                </TouchableOpacity>
            </Layout>
            <ShieldEditModal visible={modalVisible} toggleModal={modalOff} />
        </Layout>
    ) : (
        <Layout style={{ paddingVertical: 5 }}>
            <Toggle checked={props.shield.hasShield} onChange={onShieldToggle}>
                {"Equip Shield"}
            </Toggle>
        </Layout>
    );

    return shieldView;
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {
    updateShield: (Shield: Shield) => void;
}

interface LinkStateProps {
    shield: Shield;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        updateShield: bindActionCreators(startChangeShield, dispatch),
    };
};

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    shield: state.playerCharacter.shield,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShieldView);

const styles = StyleSheet.create({
    container: {
        flex: 0.75,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    buttonGroup: {
        flex: 1,
    },
    horizontal: {
        flex: 1,
        flexDirection: "row",
    },
    title: {
        flex: 0.25,
        textAlign: "center",
        alignSelf: "center",
    },
    text: {
        flex: 1,
        fontSize: 14,
        alignSelf: "center",
        alignContent: "flex-end",
        // justifyContent: "flex-end"
    },
    number: {
        flex: 1.5,
        fontSize: 18,
        alignSelf: "center",
    },
    hpNumber: {
        flex: 1,
        alignSelf: "center",
        textAlign: "center",
        paddingHorizontal: 5,
    },
    column: {
        flex: 1,
        justifyContent: "space-around",
        paddingVertical: 5,
    },
    shield: {
        flex: 1,
    },
    plus: {
        flex: 1,
        justifyContent: "center",
    },
    minus: {
        flex: 1,
        justifyContent: "center",
    },
});
