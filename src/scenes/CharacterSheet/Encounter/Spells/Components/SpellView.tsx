import React, { Component, createRef, RefObject } from "react";
import { StyleSheet, Button, Animated } from "react-native";
import { Spell, SpellList } from "./Spell";
import { Layout, Text } from "@ui-kitten/components";
import { SpellViewNavigationProps } from "../SpellsPage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { EntireAppState } from "../../../../../store/Store";
import {
    startDeleteSpell,
    startUpdateSpell,
} from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton } from "react-native-gesture-handler";

const SpellView: React.FC<Props> = (props) => {
    if (props.spell === undefined) return <></>; //TODO: Make SpellView better
    return (
        <Layout style={styles.container}>
            <SwipeableSpellHeader {...props}></SwipeableSpellHeader>
            {props.spell.description ? (
                <Layout style={{ padding: 10 }}>
                    <Text category="h6">Description</Text>
                    <Text>{props.spell.description}</Text>
                </Layout>
            ) : (
                <></>
            )}
        </Layout>
    );
};

class SwipeableSpellHeader extends Component<Props> {
    private myRef = createRef<Swipeable>();
    close = () => {
        const swipeRef = this.myRef.current;
        swipeRef?.close();
    };
    renderRightAction = (
        text: string,
        color: string,
        x: number,
        progress: Animated.AnimatedInterpolation
    ) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
        });
        const handleEditButtonPress = () => {
            this.close();
            this.props.navigation.navigate("EditSpellView", {
                index: this.props.index,
                spellType: this.props.spellType,
            });
        };
        const handleDeleteButtonPress = () => {
            this.close();
            this.props.deleteSpell(this.props.index, this.props.spellType);
        };
        return (
            <Animated.View
                style={{ flex: 1, transform: [{ translateX: trans }] }}
            >
                <RectButton
                    style={[styles.rightAction, { backgroundColor: color }]}
                    onPress={
                        text === "Edit"
                            ? handleEditButtonPress
                            : handleDeleteButtonPress
                    }
                >
                    <Animated.Text style={styles.actionText}>
                        {text}
                    </Animated.Text>
                </RectButton>
            </Animated.View>
        );
    };
    renderRightActions = (progress: Animated.AnimatedInterpolation) => {
        return (
            <Layout style={{ width: 192, flexDirection: "row" }}>
                {this.renderRightAction("Edit", "#ffab00", 128, progress)}
                {this.renderRightAction("Delete", "#dd2c00", 64, progress)}
            </Layout>
        );
    };
    _swipeableRow:
        | string
        | React.RefObject<Swipeable>
        | ((instance: Swipeable | null) => void)
        | null
        | undefined;

    render() {
        const { children } = this.props;
        return (
            <Swipeable
                friction={2}
                renderRightActions={this.renderRightActions}
                ref={this.myRef}
            >
                {children}
                <Text style={styles.spellName} category="h4">
                    {" "}
                    {this.props.spell.name}{" "}
                </Text>
            </Swipeable>
        );
    }
}

interface OwnProps {
    navigation: SpellViewNavigationProps;
    index: number;
    spellType: keyof SpellList;
}
type Props = LinkDispatchProps & LinkStateProps & OwnProps;

interface LinkStateProps {
    spell: Spell;
}

interface LinkDispatchProps {
    updateSpell: (
        Spell: Spell,
        SpellType: keyof SpellList,
        index: number
    ) => void;
    deleteSpell: (index: number, spellType: keyof SpellList) => void;
}

const mapStateToProps = (
    state: EntireAppState,
    ownProps: OwnProps
): LinkStateProps => ({
    spell: state.playerCharacter.spells[ownProps.spellType][ownProps.index],
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
    updateSpell: bindActionCreators(startUpdateSpell, dispatch),
    deleteSpell: bindActionCreators(startDeleteSpell, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpellView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: "black",
        borderWidth: 0.5,
        marginVertical: 5,
    },
    spellName: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 5,
    },
    row: {
        flexDirection: "row",
    },
    leftAction: {
        flex: 1,
        backgroundColor: "#497AFC",
        justifyContent: "center",
    },
    actionText: {
        color: "white",
        fontSize: 16,
        backgroundColor: "transparent",
        padding: 10,
    },
    rightAction: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
});
