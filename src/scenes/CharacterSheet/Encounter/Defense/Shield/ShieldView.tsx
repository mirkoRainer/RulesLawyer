import React, { Component, useState } from "react";
import { StyleSheet } from "react-native";
import {
    Text,
    Layout,
    Button,
    ButtonGroup,
    Toggle,
    Icon,
} from "@ui-kitten/components";
import { EntireAppState } from "../../../../../store/Store";
import { connect } from "react-redux";
import ShieldEditModal from "./ShieldEditModal";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    DEFAULT_SHIELD,
    IsShield,
    Shield,
} from "../../../../../PF2eCoreLib/PlayerCharacter";
import { bindActionCreators } from "redux";
import {
    startAddOrRemoveBonus,
    startChangeShield,
} from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { iBonus } from "../../../../../PF2eCoreLib/Bonus";

// TODO: Equip Shield selector. DropDown?
// TODO: Raise Shield button
// TODO: Multiple Shields
const ShieldView: React.FC<Props> = (props) => {
    if (props.wornShields === undefined) {
        return <></>;
    }
    let shields: JSX.Element[] = [];
    props.wornShields.forEach((shield) => {
        // TODO: Long press to EditShield
        const editShield = () => {};
        const adjustShieldHP = (amount: number) => {
            const adjustedHP = shield.currentHP + amount;
            if (adjustedHP <= 0) {
                props.updateShield({ ...shield, currentHP: 0 });
                return;
            }
            if (adjustedHP > shield.maxHP) {
                props.updateShield({
                    ...shield,
                    currentHP: shield.maxHP,
                });
                return;
            }
            props.updateShield({ ...shield, currentHP: adjustedHP });
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
            if (shield.currentHP > shield.breakThreshold) {
                return (
                    <>
                        <Layout style={styles.column}>
                            <Text style={styles.text}>Bonus:</Text>
                            <Text style={styles.number}>
                                +{shield.acBonus.amount}
                            </Text>
                        </Layout>
                        <Layout style={styles.column}>
                            <Text style={styles.text}>BT:</Text>
                            <Text style={styles.number}>
                                {shield.breakThreshold!}
                            </Text>
                        </Layout>
                        <Layout style={styles.column}>
                            <Text style={styles.text}>Hardness:</Text>
                            <Text style={styles.number}>
                                {" "}
                                {shield.hardness!}
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
        const ShieldRaisedIcon = (props: any) => (
            <Icon
                {...props}
                style={[props.style, { width: 32, height: 32 }]}
                name="shield"
            />
        );
        const ShieldDownIcon = (props: any) => (
            <Icon
                {...props}
                style={[props.style, { width: 32, height: 32 }]}
                name="shield-off"
            />
        );
        const ShieldIcon = shield.isRaised ? ShieldRaisedIcon : ShieldDownIcon;
        const handleShieldPress = () => {
            props.raiseShield(shield.acBonus, shield.isRaised);
            props.updateShield({ ...shield, isRaised: !shield.isRaised });
        };
        shields.push(
            <Layout key={shield.id.toString()}>
                <Text category="h5" style={{ textAlign: "center" }}>
                    Shield
                </Text>
                <Layout style={{ flexDirection: "row" }}>
                    {
                        // TODO: Finish Raise shield Logic}
                    }
                    {shield.currentHP > shield.breakThreshold ? (
                        <Button
                            accessoryRight={ShieldIcon}
                            appearance="ghost"
                            onPress={handleShieldPress}
                        />
                    ) : (
                        <></>
                    )}
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
                            <TouchableOpacity
                                onLongPress={editShield}
                                style={styles.hpNumber}
                            >
                                <Text category="h6">
                                    HP: {shield.currentHP!}/{shield.maxHP!}
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
                        <TouchableOpacity
                            onLongPress={editShield}
                            style={styles.container}
                        >
                            <Layout style={styles.horizontal}>
                                {shieldData()}
                            </Layout>
                        </TouchableOpacity>
                    </Layout>
                </Layout>
            </Layout>
        );
    });
    return <Layout style={styles.container}>{shields}</Layout>;
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {
    updateShield: (Shield: Shield) => void;
    raiseShield: (bonus: iBonus, remove: boolean) => void;
}

interface LinkStateProps {
    wornShields: Shield[] | undefined;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        updateShield: bindActionCreators(startChangeShield, dispatch),
        raiseShield: bindActionCreators(startAddOrRemoveBonus, dispatch),
    };
};

const mapStateToProps = (state: EntireAppState): LinkStateProps => {
    const shields: Shield[] = state.playerCharacter.inventory.items.filter<Shield>(
        IsShield
    );
    const wornShield: Shield[] | undefined = shields.filter(
        (shield) => shield.worn
    );
    return {
        wornShields: wornShield,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShieldView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: "center",
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
