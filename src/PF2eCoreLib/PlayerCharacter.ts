import { AbilityScoreArray } from "./AbilityScores";
import { Proficiencies } from "./Proficiencies";
import { iBonus } from "./Bonus";
import { SpellList } from "../scenes/CharacterSheet/Encounter/Spells/Components/Spell";
import { ArmorCategory } from "./ArmorCategory";
import { Traits } from "./Traits";
import { HealthData } from "./HealthData";
import { ArmorGroup } from "./ArmorGroup";
import { Guid } from "guid-typescript";
import { BonusType } from "./BonusTypes";
import { Ability } from "./Ability";
import { Size } from "./Size";

interface PlayerCharacter {
    abilityScores: AbilityScoreArray;
    actions: PF2Action[];
    alignment: string;
    ancestry: Ancestry;
    ancestryFeatsAndAbilities: FeatOrAbility[];
    armorProficiencies: ArmorProficiencies;
    background: Background;
    biographicalData: BiographicalData;
    bonuses: iBonus[];
    bonusFeats: FeatOrAbility[];
    campaignNotesData: CampaignNotesData;
    classFeatsAndAbilities: FeatOrAbility[];
    conditions: string;
    deity: string;
    experiencePoints: number;
    generalFeats: FeatOrAbility[];
    hitPoint: HealthData;
    immunities: string;
    inventory: Inventory;
    languages: string[];
    level: number;
    magicTraditions: MagicTraditions;
    metadata: Metadata;
    movement: Movement;
    name: string;
    pcClass: iClass;
    penalties: iBonus[];
    perceptionProficiency: Proficiencies;
    personalityData: PersonalityData;
    playerName: string;
    resistances: string;
    saves: Saves;
    senses: string;
    size: Size;
    skillFeats: FeatOrAbility[];
    skills: Skill[];
    spellAttackProficiency: Proficiencies;
    spellcastingAbilityModifier: keyof AbilityScoreArray;
    spells: SpellList;
    spellSlots: SpellSlot[];
    traits: (keyof typeof Traits)[];
    weakness: string;
    weaponProficiencies: WeaponProficiencies;
    companion?: Companion;
    familiar?: Familiar;
}

export interface Companion {
    abilityScores: AbilityScoreArray;
    actions: PF2Action[];
    advancement: {
        advancedManuever: PF2Action;
        mature: boolean;
        nimble: boolean;
        savage: boolean;
    };
    alignment: string;
    attackProficiencies: Proficiencies;
    bardingProficiency: Proficiencies;
    bonuses: iBonus[];
    conditions: string;
    details: {
        variety: string;
        age: string;
        height: string;
        weight: string;
        attitude: string;
        likes: string;
        dislikes: string;
        notes: string;
    };
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
            id: Guid.create(),
            name: "Bark",
            numberOfActions: 2,
            traits: ["Attack", "Flourish"],
            bookAbbreviation: "CRB",
            pageNumber: 278,
            description: "Moar damage dice!",
            source: "What grants this action",
        },
        {
            id: Guid.create(),
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
    metaData: {},
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
            id: Guid.create(),
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
        variety: "pitbull",
        age: "22",
        height: "2",
        weight: "3",
        attitude: "cuddly",
        likes: "peanut butter",
        dislikes: "vacuum",
        notes: "is a good boi",
    },
};

export interface Familiar {
    abilities: string;
    actions: PF2Action[];
    movement: Movement;
    name: string;
    type: string;
    size: Size;
}

export default PlayerCharacter;

export interface iClass {
    name: string;
    subClass: string;
    proficiency: Proficiencies;
    keyAbility: keyof AbilityScoreArray;
}

export interface Background {
    name: string;
}

export interface CampaignNotesData {
    notes: string;
    allies: string;
    enemies: string;
    organizations: string;
}

export interface Ancestry {
    name: string;
    heritage: string;
}

export interface PF2Action {
    id: Guid;
    name: string;
    numberOfActions: number;
    traits: (keyof typeof Traits)[];
    description: string;
    source: string;
    bookAbbreviation?: string;
    pageNumber?: number;
    trigger?: string;
    requirements?: string;
    critSuccess?: string;
    success?: string;
    failure?: string;
    critFailure?: string;
    weapon?: Weapon;
    skill?: keyof Skills;
}

export interface Ancestry {
    name: string;
    heritage: string;
}

export interface FeatOrAbility {
    title: string;
    description: string;
}

export interface ArmorProficiencies {
    unarmored: Proficiencies;
    light: Proficiencies;
    medium: Proficiencies;
    heavy: Proficiencies;
}

export interface Background {
    name: string;
}

export interface BiographicalData {
    age: number;
    appearance: string;
    birthplace: string;
    ethnicity: string;
    gender: string;
    height: number;
    nationality: string;
    weight: number;
}

export interface CampaignNotesData {
    notes: string;
    allies: string;
    enemies: string;
    organizations: string;
}

export interface MagicTraditions {
    prepared: boolean;
    spontaneous: boolean;
    arcane: boolean;
    primal: boolean;
    divine: boolean;
    occult: boolean;
}

export interface Metadata {}

export type Movement = {
    landSpeed: number;
    burrowSpeed?: number;
    climbSpeed?: number;
    flySpeed?: number;
    swimSpeed?: number;
};

export interface PersonalityData {
    attitude: string;
    beliefs: string;
    likes: string;
    dislikes: string;
    catchphrases: string;
}

export interface Saves {
    fortitude: Proficiencies;
    reflex: Proficiencies;
    will: Proficiencies;
}

export interface Shield extends Item {
    acBonus: iBonus;
    hardness: number;
    maxHP: number;
    currentHP: number;
    breakThreshold: number;
    isRaised: boolean;
}
export function IsShield(item: InventoryItem): item is Shield {
    return (item as Shield).breakThreshold !== undefined;
}

export const DEFAULT_SHIELD: Shield = {
    id: Guid.create(),
    description: "Leather Armor made from leather",
    invested: false,
    worn: true,
    readied: false,
    name: "Shield McShieldFace",
    bulk: 1,
    level: 1,
    acBonus: {
        type: BonusType.Circumstance,
        appliesTo: "ac",
        amount: 0,
        source: "",
    },
    hardness: 5,
    maxHP: 20,
    currentHP: 15,
    breakThreshold: 10,
    traits: ["Additive", "Grapple"],
    isContainer: false,
    isRaised: false,
};

export type Skills = {
    Acrobatics: "Acrobatics";
    Arcana: "Arcana";
    Athletics: "Athletics";
    Crafting: "Crafting";
    Deception: "Deception";
    Diplomacy: "Diplomacy";
    Intimidation: "Intimidation";
    Lore: "Lore";
    Medicine: "Medicine";
    Nature: "Nature";
    Occultism: "Occultism";
    Performance: "Performance";
    Religion: "Religion";
    Society: "Society";
    Stealth: "Stealth";
    Survival: "Survival";
    Thievery: "Thievery";
};

export interface Skill {
    name: keyof Skills;
    ability: keyof AbilityScoreArray;
    proficiency: Proficiencies;
    hasArmorPenalty: boolean;
    armorPenalty?: number;
    loreDescriptor?: string;
}

export interface AbilityModifier {
    name: string;
    modifier: number;
}

export interface SpellSlot {
    maximum: number;
    current: number;
    spellLevel: string;
    focus?: boolean;
}

export interface Spell {
    spellType: string;
    spellNames?: string[];
    data?: any[];
}

export interface WeaponProficiencies {
    Unarmed: Proficiencies;
    Simple: Proficiencies;
    Martial: Proficiencies;
    Other: OtherWeaponProficiencies[];
}

export interface OtherWeaponProficiencies {
    description: string;
    proficiency: Proficiencies;
}

export interface Weapon extends Item {
    ability: Ability;
    toHitBonus: iBonus;
    damageDice: DamageDice[];
    damageAbilityModifier?: Ability;
    weaponCategory: keyof WeaponProficiencies;
}
export function IsWeapon(item: InventoryItem): item is Weapon {
    return (item as Weapon).damageDice !== undefined;
}
export const GetDiceStringPretty = (dice: DamageDice[]): string => {
    let output: string = "";
    dice.forEach((die) => {
        output += die.formula + " " + die.damageType + " ";
    });
    return output;
};

export interface Armor extends Item {
    category: ArmorCategory;
    acBonus: iBonus;
    dexCap: number;
    checkPenalty: iBonus;
    speedPenalty: iBonus;
    strengthRequirement: number;
    wornBulk: number;
    armorGroup: ArmorGroup;
    price: Price;
}
export function IsArmor(item: InventoryItem): item is Armor {
    return (item as Armor).dexCap !== undefined;
}
export const DEFAULT_ARMOR_ONLY_PROPS: Omit<Armor, keyof Item> = {
    category: ArmorCategory.Unarmored,
    acBonus: {
        type: BonusType.Item,
        appliesTo: "ac",
        amount: 0,
        source: "",
    },
    dexCap: 6,
    checkPenalty: {
        type: BonusType.Untyped,
        appliesTo: "skills",
        amount: 0,
        source: "",
    },
    speedPenalty: {
        type: BonusType.Untyped,
        appliesTo: "speed",
        amount: 0,
        source: "",
    },
    strengthRequirement: 0,
    wornBulk: 0,
    armorGroup: ArmorGroup.Clothing,
};
export const DEFAULT_ARMOR: Armor = {
    id: Guid.create(),
    description: "Plain clothing offering no real protection",
    invested: false,
    worn: true,
    readied: false,
    name: "Clothes",
    category: ArmorCategory.Light,
    level: 0,
    price: { Copper: 0, Silver: 0, Gold: 0, Platinum: 0 },
    acBonus: {
        type: BonusType.Item,
        appliesTo: "ac",
        amount: 0,
        source: "",
    },
    dexCap: 10,
    checkPenalty: {
        type: BonusType.Armor,
        appliesTo: "StrAndDexChecks",
        amount: 0,
        source: "",
    },
    speedPenalty: {
        type: BonusType.Armor,
        appliesTo: "speed",
        amount: 0,
        source: "",
    },
    strengthRequirement: 0,
    bulk: 0.1,
    wornBulk: 0,
    armorGroup: ArmorGroup.Clothing,
    traits: [],
    isContainer: false,
};

export interface Item {
    bulk: number;
    description: string;
    id: Guid;
    invested: boolean;
    isContainer: boolean;
    containedItems?: string[];
    level: number;
    name: string;
    price?: Price;
    quantity?: number;
    readied: boolean;
    traits: (keyof typeof Traits)[];
    worn: boolean;
    rarity?: "uncommon" | "rare" | "unique";
}
export const DEFAULT_ITEM: Item = {
    bulk: 0,
    description: "The default item",
    id: Guid.create(),
    invested: false,
    isContainer: false,
    level: 0,
    name: "Default item",
    readied: false,
    traits: [],
    worn: false,
};

export type InventoryItem = Item &
    Partial<Weapon> &
    Partial<Armor> &
    Partial<Shield>;

export interface Inventory {
    items: InventoryItem[];
}

export interface Price {
    Copper: number;
    Silver: number;
    Gold: number;
    Platinum: number;
}

export const DEFAULT_WEAPON_ONLY_PROPS: Omit<Weapon, keyof Item> = {
    ability: Ability.Strength,
    toHitBonus: {
        type: BonusType.Item,
        appliesTo: "toHit",
        amount: 0,
        source: "",
    },
    damageDice: [{ formula: "1d4", damageType: "piercing, slashing" }],
    damageAbilityModifier: Ability.Strength,
    weaponCategory: "Simple",
};
export const DEFAULT_WEAPON: Weapon = {
    ...DEFAULT_ITEM,
    ...DEFAULT_WEAPON_ONLY_PROPS,
};

export interface Dice {
    formula: string;
}

export interface DamageDice extends Dice {
    damageType: string; // TODO: Enumerate damage types; Update inputs
}
