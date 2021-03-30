import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { GetDiceStringPretty } from "../../../../PF2eCoreLib/PlayerCharacter/Dice";
import { PF2Action } from "../../../../PF2eCoreLib/PlayerCharacter/PF2Action";
import {
    Layout,
    Text,
    Divider,
    Icon,
    Button,
    Input,
    Select,
    SelectItem,
    IndexPath,
} from "@ui-kitten/components";
import { Pill } from "../../../Shared/Pill";
import ActionsAndActivities from "./ActionsAndActivities";
import {
    DetermineActionSymbol,
    freeActionSymbol,
    reactionSymbol,
    actionSymbol,
    MapIndexToAction,
    MapActionToIndexPath,
} from "./ActionHelper";
import {
    AbilityScore,
    AbilityScoreArray,
    CalculateAbilityScoreModifier,
    GetAbilityModifierFromScores,
    GetAbilityScoreAbbreviation,
} from "../../../../PF2eCoreLib/AbilityScores";
import {
    GetProficiencyTotalWithLevel,
    Proficiencies,
} from "../../../../PF2eCoreLib/Proficiencies";
import WeaponDamageSection from "./Weapons/WeaponDamageSection";
import { GetProficiencyForWeapon } from "./Weapons/WeaponHelper";
import {
    GetBonusesFor,
    GetCurrentPCBonuses,
} from "../../../../PF2eCoreLib/Bonus";
import { BonusType } from "../../../../PF2eCoreLib/BonusTypes";
import Store from "../../../../store/Store";

interface Props {
    action: PF2Action;
    abilityScores: AbilityScoreArray;
    level: number;
}

const ActionView: React.FC<Props> = (props) => {
    const actionName = () => {
        return (
            <Text category="h4" style={{ ...styles.text, textAlign: "center" }}>
                {props.action.name}
            </Text>
        );
    };

    const actionCost = () => (
        <Text
            style={{
                paddingRight: 5,
                paddingTop: 10,
                flex: 0.324,
                textAlign: "right",
            }}
            category="h5"
        >
            {DetermineActionSymbol(props.action.numberOfActions)}
        </Text>
    );

    const actionDescription = () => {
        return (
            <>
                <Text style={styles.header} category="h6">
                    Description:{" "}
                </Text>
                <Text style={styles.text}>{props.action.description}</Text>
            </>
        );
    };

    const trigger = () => {
        props.action.trigger ? (
            <Layout style={styles.rowContainer}>
                <Text>
                    <Text style={styles.header}>{"Trigger: "}</Text>
                    <Text style={styles.text}>{props.action.trigger}</Text>
                </Text>
            </Layout>
        ) : (
            <></>
        );
    };

    const traits = () => {
        const renderTraitPill = (trait: string) => {
            return (
                <Text
                    style={{ textAlign: "center", alignSelf: "center" }}
                    key={trait}
                    category="p2"
                >
                    {trait},{" "}
                </Text>
            );
        };
        const traitsRendered: JSX.Element[] = [];
        props.action.traits.forEach((trait) => {
            traitsRendered.push(renderTraitPill(trait));
        });
        const render =
            props.action.traits.length === 0 ? (
                <></>
            ) : (
                <Layout style={{ ...styles.rowContainer }}>
                    <Text
                        style={{ ...styles.header, flex: 0.25 }}
                        category="h6"
                    >
                        Traits:{" "}
                    </Text>
                    <Layout
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            flexWrap: "wrap",
                            alignContent: "center",
                        }}
                    >
                        {traitsRendered}
                    </Layout>
                </Layout>
            );
        return render;
    };

    const bookAbbr = () =>
        props.action.bookAbbreviation ? (
            <Text style={styles.book}>{props.action.bookAbbreviation}:</Text>
        ) : (
            <></>
        );
    const bookPage = () =>
        props.action.pageNumber ? (
            <Text style={styles.bookPage}> pg. {props.action.pageNumber}</Text>
        ) : (
            <></>
        );

    const skill = () => {
        const currentSkill = Store.getState().playerCharacter.skills.find(
            (x) => x.name === props.action.skill
        );
        if (props.action.skill) {
            const skillAbilityScore: AbilityScore =
                props.abilityScores[currentSkill!.ability];
            const total =
                CalculateAbilityScoreModifier(skillAbilityScore.score) +
                GetBonusesFor(props.action.skill, GetCurrentPCBonuses()).item +
                GetProficiencyTotalWithLevel(
                    currentSkill!.proficiency,
                    props.level
                );
            return (
                <Layout style={{ flexDirection: "row" }}>
                    <Text style={{ flex: 1, textAlign: "right" }}>
                        {props.action.skill} +{total}
                    </Text>
                </Layout>
            );
        } else {
            return <></>;
        }
    };

    const weapon = () => {
        if (!props.action.weapon) {
            return <></>;
        }
        const toHitFromWeapon: number = GetBonusesFor(
            "toHit",
            GetCurrentPCBonuses()
        ).item;
        const proficiencyWithWeapon: Proficiencies = GetProficiencyForWeapon(
            props.action.weapon
        );
        const toHitFromProf: number = GetProficiencyTotalWithLevel(
            proficiencyWithWeapon,
            props.level
        );
        const toHitFromAbility: number = GetAbilityModifierFromScores(
            props.action.weapon.ability,
            props.abilityScores
        );
        const toHitTotal = toHitFromWeapon + toHitFromProf + toHitFromAbility;
        const bonusToDamageFromAbility = GetAbilityModifierFromScores(
            props.action.weapon.ability,
            props.abilityScores
        );
        const damageDice = `${GetDiceStringPretty(
            props.action.weapon.damageDice
        )}+${bonusToDamageFromAbility}`;
        return (
            <Layout style={{ flexDirection: "row" }}>
                <Text style={{ flex: 1, textAlign: "right" }}>
                    {props.action.weapon.name}: +{toHitTotal.toString()}{" "}
                    {damageDice}
                </Text>
            </Layout>
        );
    };

    const requirements = () => {
        return props.action.requirements ? (
            <>
                <Text style={styles.header} category="h6">
                    Requirements:{" "}
                </Text>
                <Text style={styles.text}>{props.action.requirements}</Text>
            </>
        ) : (
            <></>
        );
    };
    const criticalSuccess = () => {
        return props.action.critSuccess ? (
            <>
                <Text style={styles.header} category="h6">
                    Crit Success:{" "}
                </Text>
                <Text style={styles.text}>{props.action.critSuccess}</Text>
            </>
        ) : (
            <></>
        );
    };
    const success = () => {
        return props.action.success ? (
            <>
                <Text style={styles.header} category="h6">
                    Success:{" "}
                </Text>
                <Text style={styles.text}>{props.action.success}</Text>
            </>
        ) : (
            <></>
        );
    };
    const failure = () => {
        return props.action.failure ? (
            <>
                <Text style={styles.header} category="h6">
                    Failure:{" "}
                </Text>
                <Text style={styles.text}>{props.action.failure}</Text>
            </>
        ) : (
            <></>
        );
    };
    const criticalFailure = () => {
        return props.action.critFailure ? (
            <>
                <Text style={styles.header} category="h6">
                    Crit Failure:{" "}
                </Text>
                <Text style={styles.text}>{props.action.critFailure}</Text>
            </>
        ) : (
            <></>
        );
    };

    const detailedView = () => {
        return (
            <Layout>
                {trigger()}
                {skill()}
                {weapon()}
                <Layout style={styles.container}>
                    {actionDescription()}
                    {requirements()}
                    {criticalSuccess()}
                    {success()}
                    {failure()}
                    {criticalFailure()}
                </Layout>
                {traits()}
                <Layout style={styles.ruleBook}>
                    <Text style={styles.sourceOfAction}>
                        Source: {props.action.source}
                    </Text>
                    {bookAbbr()}
                    {bookPage()}
                </Layout>
            </Layout>
        );
    };
    const [showDetails, setShowDetails] = React.useState(false);

    const ArrowIcon = (props: any) => (
        <Icon
            {...props}
            name={
                showDetails
                    ? "arrow-ios-downward-outline"
                    : "arrow-ios-forward-outline"
            }
        />
    );
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <Layout style={styles.container}>
            <Layout style={styles.rowContainer}>
                <Button
                    appearance="ghost"
                    accessoryLeft={ArrowIcon}
                    onPress={toggleDetails}
                />
                {actionName()}
                {actionCost()}
            </Layout>
            {showDetails ? detailedView() : <></>}
            <Divider />
        </Layout>
    );
};

export default ActionView;

const styles = StyleSheet.create({
    ruleBook: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        padding: 5,
        paddingBottom: 10,
    },
    container: {
        flex: 1,
        padding: 10,
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
        padding: 5,
    },
    text: {
        flex: 1,
        padding: 5,
    },
    header: {
        flex: 1,
        fontWeight: "bold",
        padding: 5,
    },
    sourceOfAction: {
        flex: 6,
    },
    book: {
        flex: 1,
        fontWeight: "bold",
        textAlign: "right",
    },
    bookPage: {
        flex: 2,
        textAlign: "center",
    },
});
