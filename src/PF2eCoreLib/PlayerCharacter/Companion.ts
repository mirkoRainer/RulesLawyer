import { AbilityScoreArray } from "../AbilityScores";
import { Proficiencies } from "../Proficiencies";
import { iBonus } from "../Bonus";
import { Traits } from "../Traits";
import { HealthData } from "../HealthData";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { Ability } from "../Ability";
import { Size } from "../Size";
import { CompanionDetails } from "./CompanionDetails";
import { Inventory } from "./Inventory";
import { Skill } from "./Skill";
import { Saves } from "./Saves";
import { Movement } from "./Movement";
import { Metadata } from "./Metadata";
import { FeatOrAbility } from "./FeatOrAbility";
import { PF2Action } from "./PF2Action";

export interface Companion {
    abilityScores: AbilityScoreArray;
    actions: PF2Action[];
    advancement: {
        advancedManuever?: PF2Action;
        mature: boolean;
        nimble: boolean;
        savage: boolean;
    };
    alignment: string;
    attackProficiencies: Proficiencies;
    bardingProficiency: Proficiencies;
    bonuses: iBonus[];
    conditions: string;
    details: CompanionDetails;
    feats: FeatOrAbility[];
    hitPoints: HealthData;
    immunities: string;
    inventory: Inventory;
    languages: string[];
    metaData: Metadata;
    name: string;
    perception: Proficiencies;
    resistance: string;
    saves: Saves;
    senses: string;
    size: Size;
    skills: Skill[];
    speed: Movement;
    supportBenefit: string;
    traits: (keyof typeof Traits)[];
    type: string;
    unarmoredProficiency: Proficiencies;
    weaknesses: string;
}

export const DEFAULT_COMPANION: Companion = {
    abilityScores: {
        Strength: { score: 10, ability: Ability.Strength },
        Constitution: { score: 20, ability: Ability.Constitution },
        Dexterity: { score: 16, ability: Ability.Dexterity },
        Intelligence: { score: 6, ability: Ability.Intelligence },
        Wisdom: { score: 18, ability: Ability.Wisdom },
        Charisma: { score: 8, ability: Ability.Charisma },
    },
    actions: [
        {
            id: uuidv4(),
            name: "Bark",
            numberOfActions: 2,
            traits: ["Attack", "Flourish"],
            bookAbbreviation: "CRB",
            pageNumber: 278,
            description: "Moar damage dice!",
            source: "What grants this action",
        },
        {
            id: uuidv4(),
            name: "Fetch",
            numberOfActions: 0,
            traits: ["FreeAction", "Verbal"],
            bookAbbreviation: "CRB",
            pageNumber: 1,
            description: "you go get it",
            source: "What grants this action",
        },
    ],
    alignment: "Good boi",
    attackProficiencies: Proficiencies.Trained,
    bardingProficiency: Proficiencies.Trained,
    bonuses: [],
    conditions: "",
    feats: [],
    hitPoints: {
        maxHitPoints: 30,
        currentHitPoints: 30,
        temporaryHitPoints: 2,
        dying: 0,
        maxDying: 4,
        wounded: 1,
    },
    immunities: "",
    inventory: { items: [] },
    languages: ["Common"],
    metaData: {
        id: uuidv4(),
    },
    name: "Fido",
    perception: Proficiencies.Trained,
    resistance: "",
    saves: {
        fortitude: Proficiencies.Expert,
        reflex: Proficiencies.Trained,
        will: Proficiencies.Expert,
    },
    senses: "Scent 30ft",
    size: Size.Small,
    skills: [
        {
            name: "Acrobatics",
            ability: Ability.Dexterity,
            proficiency: Proficiencies.Legendary,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Athletics",
            ability: Ability.Strength,
            proficiency: Proficiencies.Trained,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Deception",
            ability: Ability.Charisma,
            proficiency: Proficiencies.Trained,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Diplomacy",
            ability: Ability.Charisma,
            proficiency: Proficiencies.Untrained,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Intimidation",
            ability: Ability.Charisma,
            proficiency: Proficiencies.Expert,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Performance",
            ability: Ability.Charisma,
            proficiency: Proficiencies.Trained,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Stealth",
            ability: Ability.Dexterity,
            proficiency: Proficiencies.Trained,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Survival",
            ability: Ability.Wisdom,
            proficiency: Proficiencies.Trained,
            hasArmorPenalty: false,
        },
        {
            name: "Thievery",
            ability: Ability.Dexterity,
            proficiency: Proficiencies.Trained,
            hasArmorPenalty: true,
            armorPenalty: 2,
        },
    ],
    speed: {
        landSpeed: 25,
        burrowSpeed: 5,
        climbSpeed: 10,
        flySpeed: 0,
    },
    supportBenefit: "Licking the dishes int he dishwasher.",
    traits: [],
    type: "dog",
    unarmoredProficiency: Proficiencies.Trained,
    weaknesses: "hugs",
    advancement: {
        advancedManuever: {
            id: uuidv4(),
            name: "Advanced",
            numberOfActions: 1,
            traits: ["Attack", "Athletics"],
            bookAbbreviation: "CRB",
            pageNumber: 242,
            description:
                "You shove your foe away and stuff. You can go too, if you want.",
            source: "Skill Action",
            skill: "Athletics",
        },
        mature: false,
        nimble: false,
        savage: false,
    },
    details: {
        variety: "pit-bull",
        age: "22",
        height: "2",
        weight: "3",
        attitude: "cuddly",
        likes: "peanut butter",
        dislikes: "vacuum",
        notes: "is a good boi",
    },
};
