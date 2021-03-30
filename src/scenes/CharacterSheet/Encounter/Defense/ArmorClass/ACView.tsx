import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
    getArmorProficiencyForAnimalCompanion,
    getArmorProficiencyForCurrentPC,
} from "./ArmorClassHelper";
import { EntireAppState } from "../../../../../store/Store";
import {
    AbilityScore,
    CalculateAbilityScoreModifier,
} from "../../../../../PF2eCoreLib/AbilityScores";
import {
    ArmorProficiencies,
    Armor,
    IsArmor,
    DEFAULT_ARMOR,
    Companion,
    DEFAULT_COMPANION_ARMOR,
} from "../../../../../PF2eCoreLib/PlayerCharacter/PlayerCharacter";
import { connect } from "react-redux";
import {
    GetProficiencyTotalWithLevel,
    GetProficiencyTotalWithoutLevel,
} from "../../../../../PF2eCoreLib/Proficiencies";
import ProficiencyArrayView from "../../../../Shared/ProficiencyArrayView";
import { Layout, Text } from "@ui-kitten/components";
import EditWornArmor from "./EditWornArmor";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MainDefenseNavigationProps } from "../../DefenseNavigation";
import {
    GetBonusesFor,
    GetCompanionBonuses,
    GetCurrentPCBonuses,
    iBonus,
} from "../../../../../PF2eCoreLib/Bonus";

const ACView: React.FC<Props> = (props) => {
    const calculatedDexModifier = CalculateAbilityScoreModifier(
        props.dexterity.score
    );
    const modifier =
        props.wornArmor.dexCap >= calculatedDexModifier
            ? calculatedDexModifier
            : props.wornArmor.dexCap;
    const wornProficiency = props.isCompanion
        ? getArmorProficiencyForAnimalCompanion(
              props.companionIndex!,
              props.wornArmor.category
          )
        : getArmorProficiencyForCurrentPC(props.wornArmor.category);
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
    const currentBonuses = props.isCompanion
        ? GetCompanionBonuses(props.companionIndex!)
        : GetCurrentPCBonuses();
    const bonusesForAc = props.isCompanion
        ? GetBonusesFor("ac", currentBonuses)
        : GetBonusesFor("ac", currentBonuses);
    const total =
        10 +
        modifier +
        bonusesForAc.circumstance +
        bonusesForAc.item +
        bonusesForAc.status +
        GetProficiencyTotalWithLevel(wornProficiency, props.level);

    const navigateToWornArmorEditor = () => {
        if (props.isCompanion) {
            return;
        }
        props.navigation!.navigate("EditWornArmor");
    };

    return (
        <Layout style={styles.container}>
            <TouchableOpacity
                onPress={navigateToWornArmorEditor}
                disabled={props.isCompanion}
            >
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
                        +{GetProficiencyTotalWithoutLevel(wornProficiency)}
                    </Text>
                    <Text style={styles.calculatorText}>Prof</Text>
                    <Text style={{ ...styles.calculatorNumber, flex: 0.65 }}>
                        +{props.level}
                    </Text>
                    <Text style={{ ...styles.calculatorText, flex: 1.1 }}>
                        Level
                    </Text>
                </Layout>
            </TouchableOpacity>
        </Layout>
    );
};

interface OwnProps {
    navigation?: MainDefenseNavigationProps;
    isCompanion?: boolean;
    companionIndex?: number;
}

type Props = LinkDispatchProps & LinkStateProps & OwnProps;

interface LinkDispatchProps {}

interface LinkStateProps {
    dexterity: AbilityScore;
    wornArmor: Armor;
    level: number;
    bonuses: iBonus[];
}

const mapDispatchToProps = (): LinkDispatchProps => {
    return {};
};

const mapStateToProps = (
    state: EntireAppState,
    ownProps: OwnProps
): LinkStateProps => {
    if (ownProps.isCompanion) {
        const companion: Companion =
            state.playerCharacter.companions[ownProps.companionIndex!];
        const armors: Armor[] = companion.inventory.items.filter<Armor>(
            IsArmor
        );
        const wornCompanionArmor: Armor | undefined = armors.find(
            (armor) => armor.worn
        );
        const wornArmor = wornCompanionArmor
            ? wornCompanionArmor
            : DEFAULT_COMPANION_ARMOR;
        return {
            dexterity: companion.abilityScores.Dexterity,
            level: state.playerCharacter.level,
            wornArmor: wornArmor,
            bonuses: state.playerCharacter.bonuses.filter(
                (x) => x.appliesTo === "ac"
            ),
        };
    } else {
        const armors: Armor[] = state.playerCharacter.inventory.items.filter<Armor>(
            IsArmor
        );
        const wornArmor: Armor | undefined = armors.find((armor) => armor.worn);

        return {
            dexterity: state.playerCharacter.abilityScores.Dexterity,
            level: state.playerCharacter.level,
            wornArmor: wornArmor ? wornArmor : DEFAULT_ARMOR,
            bonuses: state.playerCharacter.bonuses.filter(
                (x) => x.appliesTo === "ac"
            ),
        };
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ACView);

const styles = StyleSheet.create({
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
