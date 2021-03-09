import React from "react";
import { Button, Layout, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { Companion } from "../../../PF2eCoreLib/PlayerCharacter";
import { useNavigation } from "@react-navigation/native";
import { MainCompanionNavigationProps } from "./CompanionsNavigator";
import AbilityScores from "../Story/Components/AbilityScores/AbilityScoresView";
import ActionsAndActivities from "../Encounter/Offense/ActionsAndActivities";
import ActionView from "../Encounter/Offense/ActionView";
import ProficiencyView from "../../Shared/ProficiencyView";
import ACView from "../Encounter/Defense/ArmorClass/ACView";
import SavesView from "../Encounter/Defense/SavesView";
import SaveView from "../../SaveView";
import { CalculateAbilityScoreModifier } from "../../../PF2eCoreLib/AbilityScores";

type Props = {
    companion: Companion;
    level: number;
    index: number;
};

export const CompanionView: React.FC<Props> = (props) => {
    {
        /* TODO [#43]: Finish Companion View 
            Need to lay out something similar to the companion sheet from the APG. */
    }
    const navigation = useNavigation<MainCompanionNavigationProps>();
    let actions: JSX.Element[] = [];
    props.companion.actions.forEach((x, index) => {
        actions.push(
            <ActionView
                action={x}
                abilityScores={props.companion.abilityScores}
                level={props.level}
                key={index}
            />
        );
    });
    const calculatedDexModifier = CalculateAbilityScoreModifier(
        props.companion.abilityScores.Dexterity.score
    );
    const modifier =
        props.wornArmor.dexCap >= calculatedDexModifier
            ? calculatedDexModifier
            : props.wornArmor.dexCap;
    const wornProficiency = getArmorProficiencyForCurrentPC(
        props.wornArmor.category
    );
    const dexOrCap = () => {
        if (props.wornArmor.dexCap >= calculatedDexModifier) {
            return <Text style={styles.calculatorText}>DEX</Text>;
        } else {
            return (
                <Text style={{ ...styles.calculatorText, flex: 1.85 }}>
                    DEX CAP
                </Text>
            );
        }
    };
    const currentBonuses = GetCurrentPCBonuses();
    const bonusesForAc = GetBonusesFor("ac", currentBonuses);
    const total =
        10 +
        modifier +
        props.level +
        bonusesForAc.circumstance +
        bonusesForAc.item +
        bonusesForAc.status +
        GetProficiencyTotalWithLevel(wornProficiency, props.level);
    return (
        <Layout style={{ flex: 1 }}>
            <Layout
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Text
                    style={{ flex: 1, textAlign: "right", padding: 10 }}
                    category="h3"
                >
                    {props.companion.name}
                </Text>
                <Layout style={{ flex: 1 }}>
                    <Text>
                        Level: {props.level} {props.companion.type}
                    </Text>
                    <Text>Size: {props.companion.size}</Text>
                </Layout>
            </Layout>

            <AbilityScores abilityScores={props.companion.abilityScores} />
            {actions}
            <ProficiencyView
                proficiency={props.companion.attackProficiencies}
                keyAbility={props.companion.abilityScores.Strength}
                level={props.level}
                title={"Attack Proficiency"}
            />

            <ProficiencyView
                proficiency={props.companion.saves.fortitude}
                keyAbility={props.companion.abilityScores.Constitution}
                level={props.level}
                title={"Fortitude"}
            />

            <ProficiencyView
                proficiency={props.companion.saves.reflex}
                keyAbility={props.companion.abilityScores.Dexterity}
                level={props.level}
                title={"Reflex"}
            />

            <ProficiencyView
                proficiency={props.companion.saves.will}
                keyAbility={props.companion.abilityScores.Wisdom}
                level={props.level}
                title={"Will"}
            />
            <Layout style={styles.horizontal}>
                <Text style={{ paddingLeft: 10 }} category="h5">
                    AC
                </Text>
                <Text
                    style={{ paddingRight: 10, alignSelf: "center" }}
                    category="h3"
                >
                    {total}
                </Text>
                <Layout style={{ flex: 1 }}>
                    <ProficiencyArrayView proficiency={wornProficiency} />
                    <Text category="h6" style={{ textAlign: "center" }}>
                        {props.wornArmor.name}
                    </Text>
                </Layout>
            </Layout>
            <Layout
                style={{
                    ...styles.horizontal,
                    alignItems: "center",
                    paddingHorizontal: 5,
                }}
            >
                <Text style={{ ...styles.calculatorNumber }} category="s1">
                    10
                </Text>
                <Text
                    style={{
                        ...styles.calculatorNumber,
                    }}
                >
                    +{modifier}
                </Text>
                {dexOrCap()}
                <Text style={styles.calculatorNumber}>
                    +{props.wornArmor.acBonus.amount}
                </Text>
                <Text style={{ ...styles.calculatorText, flex: 1.3 }}>
                    Armor
                </Text>
                <Text style={styles.calculatorNumber}>
                    +
                    {GetProficiencyTotalWithLevel(wornProficiency, props.level)}
                </Text>
                <Text style={styles.calculatorText}>Prof</Text>
                <Text style={{ ...styles.calculatorNumber, flex: 0.65 }}>
                    +{props.level}
                </Text>
                <Text style={{ ...styles.calculatorText, flex: 1.1 }}>
                    Level
                </Text>
            </Layout>
            <Button
                onPress={() =>
                    navigation.navigate("EditCompanionView", {
                        companionGuid: props.companion.metaData.id,
                    })
                }
            >
                Edit
            </Button>
        </Layout>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
    container: {
        flex: 1,
        justifyContent: "space-around",
        padding: 5,
        paddingVertical: 10,
    },
    horizontal: {
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
    },
    centered: {
        alignSelf: "center",
    },
    calculatorText: {
        flex: 1,
        fontSize: 14,
        alignSelf: "center",
        textAlign: "center",
    },
    calculatorNumber: {
        flex: 1,
        alignSelf: "center",
        textAlign: "right",
    },
});
