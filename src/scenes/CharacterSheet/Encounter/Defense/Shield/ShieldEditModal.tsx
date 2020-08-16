import React, { useState } from "react";
import { Layout, Text, Modal, Input, Icon, Card, Button } from "@ui-kitten/components";
import {
    StyleSheet,
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { startChangeShield } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { AppState } from "../../../../../store/Store";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";

interface Shield {
    hasShield:      boolean;
    acBonus:        number;
    hardness:       number;
    maxHP:          number;
    currentHP:      number;
    breakThreshold: number;
}

type OwnProps = {
    visible: boolean
    toggleModal: () => void
};

type Props = LinkStateProps & LinkDispatchProps & OwnProps;

const ShieldEditModal: React.FC<Props> = (props) => {
    const CheckIcon = (props: any) => (
        <Icon {...props} name="checkmark-circle-outline" />
    );
    const [input, setInput] = useState(props.shield.acBonus.toString());
    const changeText = (value: string) => {
        setInput(value);
    };

    const changeBonus = () => {
        const acBonus = input ? parseInt(input) : 0;
        const newShield: Shield = {
            ...props.shield,
            acBonus
        };
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
                    <Button appearance='ghost' accessoryLeft={CheckIcon} onPress={changeBonus}/>
                </Layout>
                <Layout>
                    <Text>Bonus:</Text>
                    <Input 
                        placeholder='Shield AC Bonus'
                        keyboardType='numeric'
                        value={input}
                        size='medium'
                        onChangeText={changeText}
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
    shield: Shield
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {
        updateShield: bindActionCreators(startChangeShield, dispatch)
    };
};

const mapStateToProps = (
    state: AppState,
    ownProps: OwnProps
): LinkStateProps => ({
    shield: state.playerCharacter.shield
});

export default connect(mapStateToProps, mapDispatchToProps)(ShieldEditModal);

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    backdrop: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    pickerContainer: {
        justifyContent: "center"
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
        overflow: "scroll"
    },
    modalInput: {
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        padding: 10,
    },
});
