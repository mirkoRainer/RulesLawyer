import React from "react";
import { StyleSheet, Button, Animated } from "react-native";
import { Spell, SpellList } from "./Spell";
import { Layout, Text } from "@ui-kitten/components";
import { SpellViewNavigationProps } from "../SpellsPage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { EntireAppState } from "../../../../../store/Store";
import { startUpdateSpell } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton } from "react-native-gesture-handler";

const SpellView: React.FC<Props> = (props) => {
    const handleEditButtonPress = () => {
        props.navigation.navigate("EditSpellView", {
            index: props.index,
            spellType: props.spellType,
        });
    };
    const renderRightAction = (
        text: string,
        color: string,
        x: number,
        progress: Animated.AnimatedInterpolation
    ) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
        });
        const pressHandler = () => {
            alert(text);
        };
        return (
            <Animated.View
                style={{ flex: 1, transform: [{ translateX: trans }] }}
            >
                <RectButton
                    style={[styles.rightAction, { backgroundColor: color }]}
                    onPress={pressHandler}
                >
                    <Animated.Text style={styles.actionText}>
                        {text}
                    </Animated.Text>
                </RectButton>
            </Animated.View>
        );
    };
    const renderRightActions = (progress: Animated.AnimatedInterpolation) => (
        <Layout style={{ width: 192, flexDirection: "row" }}>
            {renderRightAction("More", "#C8C7CD", 192, progress)}
            {renderRightAction("Flag", "#ffab00", 128, progress)}
            {renderRightAction("More", "#dd2c00", 64, progress)}
        </Layout>
    );
    <Button title="Edit" onPress={handleEditButtonPress} />;
    return (
        <Layout style={styles.container}>
            <Swipeable friction={2} renderRightActions={renderRightActions}>
                <Text style={styles.spellName} category="h4">
                    {" "}
                    {props.spell.name}{" "}
                </Text>
            </Swipeable>
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

interface OwnProps {
    spell: Spell;
    navigation: SpellViewNavigationProps;
    index: number;
    spellType: keyof SpellList;
}
type Props = LinkDispatchProps & LinkStateProps & OwnProps;

interface LinkStateProps {}

interface LinkDispatchProps {
    updateSpell: (
        Spell: Spell,
        SpellType: keyof SpellList,
        index: number
    ) => void;
}

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
    updateSpell: bindActionCreators(startUpdateSpell, dispatch),
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
