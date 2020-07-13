import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Header } from "react-native-elements";
import MainPage from "./1_MainPage/MainPage";
import FeatsAndInventoryPage from "./2_FeatsAndInventoryPage/FeatsAndInventoryPage";
import StoryAndActionsPage from "./3_StoryAndActionsPage/StoryAndActionsPage";
import SpellsPage from "./4_SpellsPage/SpellsPage";
import { CharacterMetadataProps } from "./1_MainPage/Components/CharacterMetadata";
import { ProficiencyProps } from "../Shared/ProficiencyView";
import { GetAbilityModifierFromScores } from "../Shared/PF2eCoreLib/AbilityScores";
import { Bonus } from "../Shared/PF2eCoreLib/Bonus";
import { BonusType } from "../Shared/PF2eCoreLib/BonusTypes";
import { prop } from "../Shared/PF2eCoreLib/TypescriptEvolution";
import { Proficiencies } from "../Shared/PF2eCoreLib/Proficiencies";
import { ArmorCategory } from "../Shared/PF2eCoreLib/ArmorCategory";
import { RootDrawerParamList } from "../../../App";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { connect } from "react-redux";
import { PlayerCharacterDTO } from "../Shared/PF2eCoreLib/PlayerCharacter";
import { bindActionCreators } from "redux";
import { AppActions } from "../../store/actions/AllActionTypesAggregated";
import {
    startChangePlayerName,
    startChangeCharacterName,
} from "../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { CharacterSheetState } from "../../store/Store";
import { ThunkDispatch } from "redux-thunk";
import TextEditModal from "../Shared/Modals/TextEditModal";
import { WeaponViewProps, GetProficiencyForWeapon } from "./1_MainPage/Components/Weapons/WeaponViewProps";
import NumberPickerModal from "../Shared/Modals/PickerModal";

type CharacterSheetNavigationProps = DrawerNavigationProp<
    RootDrawerParamList,
    "CharacterSheet"
>;

interface OwnProps {
    navigation: CharacterSheetNavigationProps;
}

interface OwnState {}

type Props = OwnProps & LinkStateProps & LinkDispatchProps;

const CharacterSheet: React.FC<Props> = (props: Props) => {
    const characterMetadata = (): CharacterMetadataProps => {
        return {
            characterName: props.playerCharacter.name,
            playerName: props.playerCharacter.playerName,
            ancestry: props.playerCharacter.ancestry.name,
            heritage: props.playerCharacter.ancestry.heritage,
            level: props.playerCharacter.level,
            experiencePoints: props.playerCharacter.experiencePoints,
            background: props.playerCharacter.background,
            pcClass: props.playerCharacter.class.name,
            subclass: props.playerCharacter.class.subClass,
            classKeyAbility: props.playerCharacter.class.keyAbility,
            classProficiency: props.playerCharacter.class.proficiency,
            alignment: props.playerCharacter.alignment,
            deity: props.playerCharacter.deity,
            traits: props.playerCharacter.traits,
        };
    };
    const classDCProficiency = (): ProficiencyProps => {
        return {
            title: "Class DC",
            keyAbility: GetAbilityModifierFromScores(
                props.playerCharacter.class.keyAbility,
                props.playerCharacter.abilityScores
            ),
            proficiency: props.playerCharacter.class.proficiency,
            level: props.playerCharacter.level,
            itemBonus: Bonus.GetBonusFor(
                "classDc",
                BonusType.Item,
                props.playerCharacter.bonuses
            ),
            is10base: true,
        };
    };
    const wornArmorProficiency = (): Proficiencies => {
        switch (props.playerCharacter.wornArmor.Category) {
        case ArmorCategory.Unarmored: {
            return prop(
                props.playerCharacter.armorProficiencies,
                "unarmored"
            );
            break;
        }
        case ArmorCategory.Light: {
            return prop(props.playerCharacter.armorProficiencies, "light");
            break;
        }
        case ArmorCategory.Medium: {
            return prop(props.playerCharacter.armorProficiencies, "medium");
        }
        case ArmorCategory.Heavy: {
            return prop(props.playerCharacter.armorProficiencies, "heavy");
        }
        default: {
            return Proficiencies.Untrained;
        }
        }
    };
    const acProficiency = (): ProficiencyProps => {
        return {
            title: "AC",
            keyAbility: GetAbilityModifierFromScores(
                "Dexterity",
                props.playerCharacter.abilityScores
            ),
            proficiency: wornArmorProficiency(),
            level: props.playerCharacter.level,
            itemBonus: props.playerCharacter.wornArmor.ACBonus,
            is10base: true,
            isACBase: true,
            dexCap: props.playerCharacter.wornArmor.DexCap,
        };
    };
    const fortitudeSave = (): ProficiencyProps => {
        return {
            title: "Fortitude",
            keyAbility: GetAbilityModifierFromScores(
                "Constitution",
                props.playerCharacter.abilityScores
            ),
            proficiency: props.playerCharacter.saves.fortitude,
            level: props.playerCharacter.level,
            itemBonus: Bonus.GetBonusFor(
                "fortitude",
                BonusType.Item,
                props.playerCharacter.bonuses
            ),
        };
    };
    const willSave = (): ProficiencyProps => {
        return {
            title: "Will",
            keyAbility: GetAbilityModifierFromScores(
                "Wisdom",
                props.playerCharacter.abilityScores
            ),
            proficiency: props.playerCharacter.saves.will,
            level: props.playerCharacter.level,
            itemBonus: Bonus.GetBonusFor(
                "Wisdom",
                BonusType.Item,
                props.playerCharacter.bonuses
            ),
        };
    };
    const reflexSave = (): ProficiencyProps => {
        return {
            title: "Reflex",
            keyAbility: GetAbilityModifierFromScores(
                "Dexterity",
                props.playerCharacter.abilityScores
            ),
            proficiency: props.playerCharacter.saves.reflex,
            level: props.playerCharacter.level,
            itemBonus: Bonus.GetBonusFor(
                "Dexterity",
                BonusType.Item,
                props.playerCharacter.bonuses
            ),
        };
    };
    const perception = (): ProficiencyProps => {
        return {
            title: "Perception",
            keyAbility: GetAbilityModifierFromScores(
                "Wisdom",
                props.playerCharacter.abilityScores
            ),
            proficiency: props.playerCharacter.perceptionProficiency,
            level: props.playerCharacter.level,
            itemBonus: Bonus.GetBonusFor(
                "perception",
                BonusType.Item,
                props.playerCharacter.bonuses
            ),
            descriptor: props.playerCharacter.senses,
        };
    };
    const weapons = (): WeaponViewProps[] => {
        const weapon0 = props.playerCharacter.weapons[0];
        return [
            {
                title: weapon0.title,
                abilityModifier: GetAbilityModifierFromScores(
                    weapon0.ability,
                    props.playerCharacter.abilityScores
                ),
                proficiency: GetProficiencyForWeapon(
                    weapon0,
                    props.playerCharacter.weaponProficiencies
                ),
                itemBonus: weapon0.toHitBonus,
                damageDice: weapon0.damageDice,
                damageAbilityModifier: GetAbilityModifierFromScores(
                    weapon0.damageAbilityModifier,
                    props.playerCharacter.abilityScores
                ).modifier,
                damageType: weapon0.damageType,
                weaponTraits: weapon0.weaponTraits,
            },
        ];
    };
    const headerText = (): string => {
        const pcClass = props.playerCharacter.class;
        const name = props.playerCharacter.name;
        return (
            name +
            " - " +
            pcClass.subClass +
            " " +
            pcClass.name +
            " Lvl:" +
            props.playerCharacter.level
        );
    };

    return (
        <View style={styles.container}>
            <Header
                centerComponent={{
                    text: headerText(),
                    style: { color: "#eee" },
                }}
            />
            <ScrollView>
                <MainPage
                    skills={props.playerCharacter.skills}
                    scores={props.playerCharacter.abilityScores}
                    languages={props.playerCharacter.languages}
                    characterMetadata={characterMetadata()}
                    classDCProficiency={classDCProficiency()}
                    acProficiency={acProficiency()}
                    level={props.playerCharacter.level}
                    armorProficiency={props.playerCharacter.armorProficiencies}
                    shieldProps={props.playerCharacter.shield}
                    saves={{
                        fortitude: fortitudeSave(),
                        reflex: reflexSave(),
                        will: willSave(),
                    }}
                    hitPoints={props.playerCharacter.hitPoint}
                    resistances={props.playerCharacter.resistances}
                    immunities={props.playerCharacter.immunities}
                    weaknesses={props.playerCharacter.weakness}
                    conditions={props.playerCharacter.conditions}
                    perception={perception()}
                    movements={props.playerCharacter.movement}
                    weaponProficiencies={
                        props.playerCharacter.weaponProficiencies
                    }
                    weapons={weapons()}
                />
                <FeatsAndInventoryPage
                    ancestryFeatsAndAbilities={
                        props.playerCharacter.ancestryFeatsAndAbilities
                    }
                    skillFeats={props.playerCharacter.skillFeats}
                    generalFeats={props.playerCharacter.generalFeats}
                    classFeatsAndAbilities={
                        props.playerCharacter.classFeatsAndAbilities
                    }
                    bonusFeats={props.playerCharacter.bonusFeats}
                />
                <StoryAndActionsPage
                    bioData={props.playerCharacter.biographicalData}
                    personalityData={props.playerCharacter.personalityData}
                    campaignNotesData={props.playerCharacter.campaignNotesData}
                    actions={props.playerCharacter.actions}
                />
                <SpellsPage
                    spellAttackProficiency={
                        props.playerCharacter.spellAttackProficiency
                    }
                    spellcastingAbilityModifier={GetAbilityModifierFromScores(
                        props.playerCharacter.spellcastingAbilityModifier,
                        props.playerCharacter.abilityScores
                    )}
                    currentLevel={props.playerCharacter.level}
                    bonuses={props.playerCharacter.bonuses}
                    spellSlots={props.playerCharacter.spellSlots}
                    magicTraditions={props.playerCharacter.magicTraditions}
                    spells={props.playerCharacter.spells}
                />
            </ScrollView>
            <TextEditModal />
            <NumberPickerModal />
        </View>
    );
};

// base state
interface LinkStateProps {
    playerCharacter: PlayerCharacterDTO;
}
//all actions to be dispatched
interface LinkDispatchProps {
    startChangeCharacterName: (name: string) => void;
    startChangePlayerName: (name: string) => void;
}

const mapStateToProps = (
    state: CharacterSheetState,
    ownProps: OwnProps
): LinkStateProps => ({
    playerCharacter: state.playerCharacter,
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => ({
    startChangePlayerName: bindActionCreators(startChangePlayerName, dispatch),
    startChangeCharacterName: bindActionCreators(
        startChangeCharacterName,
        dispatch
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSheet);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
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
});
