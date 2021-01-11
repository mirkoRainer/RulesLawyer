import React, { useState } from "react";
import {
    Layout,
    Text,
    Input,
    Icon,
    Card,
    Button,
    Modal,
} from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { startChangeShield } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { EntireAppState } from "../../../../../store/Store";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import {
    DEFAULT_SHIELD,
    IsShield,
    Shield,
} from "../../../../../PF2eCoreLib/PlayerCharacter";

type OwnProps = {
    visible: boolean;
    toggleModal: () => void;
};

type Props = LinkStateProps & LinkDispatchProps & OwnProps;

const ShieldEditModal: React.FC<Props> = (props) => {
    const CheckIcon = (props: any) => (
        <Icon {...props} name="checkmark-circle-outline" />
    );
    const [input, setInput] = useState({
        maxHp: props.shield.maxHP.toString(),
        acBonus: props.shield.acBonus.toString(),
        BT: props.shield.breakThreshold.toString(),
        hardness: props.shield.hardness.toString(),
    });

    const changeBonusText = (value: string) => {
        setInput({
            ...input,
            acBonus: value,
        });
    };

    const changeMaxHPText = (value: string) => {
        setInput({
            ...input,
            maxHp: value,
        });
    };
    const changeBTText = (value: string) => {
        setInput({
            ...input,
            BT: value,
        });
    };
    const changeHardnessText = (value: string) => {
        setInput({
            ...input,
            hardness: value,
        });
    };

    const changeShield = () => {
        const acBonus = input.acBonus ? parseInt(input.acBonus) : 0;
        const breakThreshold = input.BT ? parseInt(input.BT) : 0;
        const hardness = input.hardness ? parseInt(input.hardness) : 0;
        const maxHP = input.maxHp ? parseInt(input.maxHp) : 0;
        let newShield: Shield;
        if (maxHP < props.shield.currentHP) {
            const currentHP = maxHP;
            newShield = {
                ...props.shield,
                currentHP,
                acBonus,
                breakThreshold,
                maxHP,
                hardness,
            };
        } else {
            newShield = {
                ...props.shield,
                acBonus,
                breakThreshold,
                maxHP,
                hardness,
            };
        }
        props.toggleModal();
        props.updateShield(newShield);
    };

    return (
        <Modal
            visible={props.visible}
            style={styles.modal}
            backdropStyle={styles.backdrop}
        >
            <Card>
                <Layout style={styles.header}>
                    <Text>{"Shield:"}</Text>
                    <Button
                        appearance="ghost"
                        accessoryLeft={CheckIcon}
                        onPress={changeShield}
                    />
                </Layout>
                <Layout>
                    <Text>Max HP:</Text>
                    <Input
                        placeholder="Max HP"
                        keyboardType="numeric"
                        value={input.maxHp}
                        size="medium"
                        onChangeText={changeMaxHPText}
                    />
                    <Text>Bonus:</Text>
                    <Input
                        placeholder="Shield AC Bonus"
                        keyboardType="numeric"
                        value={input.acBonus}
                        size="medium"
                        onChangeText={changeBonusText}
                    />
                    <Text>Break Threshold:</Text>
                    <Input
                        placeholder="Break Threshold"
                        keyboardType="numeric"
                        value={input.BT}
                        size="medium"
                        onChangeText={changeBTText}
                    />
                    <Text>Hardness:</Text>
                    <Input
                        placeholder="Hardness"
                        keyboardType="numeric"
                        value={input.hardness}
                        size="medium"
                        onChangeText={changeHardnessText}
                    />
                </Layout>
            </Card>
        </Modal>
    );
};

interface LinkDispatchProps {
    updateShield: (Shield: Shield) => void;
}

interface LinkStateProps {
    shield: Shield;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {
        updateShield: bindActionCreators(startChangeShield, dispatch),
    };
};

const mapStateToProps = (
    state: EntireAppState,
    ownProps: OwnProps
): LinkStateProps => {
    const shields: Shield[] = state.playerCharacter.inventory.items.filter<Shield>(
        IsShield
    );
    const wornShield: Shield | undefined = shields.find(
        (shield) => shield.worn
    );
    return {
        shield: wornShield ? wornShield : DEFAULT_SHIELD,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShieldEditModal);

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    backdrop: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    pickerContainer: {
        justifyContent: "center",
    },
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    text: {
        alignSelf: "center",
    },
    modal: {
        overflow: "scroll",
    },
    modalInput: {
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        padding: 10,
    },
});
