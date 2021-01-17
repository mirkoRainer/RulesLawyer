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

interface PlayerCharacter {
    abilityScores: AbilityScoreArray;
    actions: PF2Action[];
    alignment: string;
    ancestry: Ancestry;
    ancestryFeatsAndAbilities: AncestryFeatsAndAbility[];
    armorProficiencies: ArmorProficiencies;
    background: Background;
    biographicalData: BiographicalData;
    bonuses: iBonus[];
    bonusFeats: AncestryFeatsAndAbility[];
    campaignNotesData: CampaignNotesData;
    classFeatsAndAbilities: AncestryFeatsAndAbility[];
    conditions: string;
    deity: string;
    experiencePoints: number;
    generalFeats: AncestryFeatsAndAbility[];
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
    skillFeats: AncestryFeatsAndAbility[];
    skills: Skill[];
    spellAttackItemBonus: number;
    spellAttackProficiency: Proficiencies;
    spellcastingAbilityModifier: keyof AbilityScoreArray;
    spellDCItemBonus: number;
    spells: SpellList;
    spellSlots: SpellSlot[];
    traits: (keyof typeof Traits)[];
    weakness: string;
    weaponProficiencies: WeaponProficiencies;
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
    skill?: Skill;
}

export interface Ancestry {
    name: string;
    heritage: string;
}

export interface AncestryFeatsAndAbility {
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
    hasShield: boolean;
    acBonus: number;
    hardness: number;
    maxHP: number;
    currentHP: number;
    breakThreshold: number;
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
    hasShield: true,
    acBonus: 2,
    hardness: 5,
    maxHP: 20,
    currentHP: 15,
    breakThreshold: 10,
    traits: ["Additive", "Grapple"],
    isContainer: false,
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
    itemBonus: number;
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
    Others: OtherWeaponProficiencies[];
}

export interface OtherWeaponProficiencies {
    description: string;
    proficiency: Proficiencies;
}

export interface Weapon extends Item {
    ability: keyof AbilityScoreArray;
    toHitBonus: number;
    damageDice: string;
    damageAbilityModifier?: keyof AbilityScoreArray;
    damageType: string;
    weaponCategory: keyof WeaponProficiencies;
}
export function IsWeapon(item: InventoryItem): item is Weapon {
    return (item as Weapon).damageDice !== undefined;
}

export interface Armor extends Item {
    category: ArmorCategory;
    acBonus: number;
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
export const DEFAULT_ARMOR: Armor = {
    id: Guid.create(),
    description: "Plain clothing offering no real protection",
    invested: false,
    worn: true,
    readied: false,
    name: "Clothes",
    category: "Light",
    level: 0,
    price: { Copper: 0, Silver: 0, Gold: 0, Platinum: 0 },
    acBonus: 0,
    dexCap: 10,
    checkPenalty: {
        type: BonusType.Armor,
        appliesTo: "StrAndDexChecks",
        amount: 0,
    },
    speedPenalty: {
        type: BonusType.Armor,
        appliesTo: "speed",
        amount: 0,
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
