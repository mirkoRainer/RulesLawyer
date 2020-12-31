import { AbilityScoreArray } from "./AbilityScores";
import { Proficiencies } from "./Proficiencies";
import { iBonus } from "./Bonus";
import { SpellList } from "../scenes/CharacterSheet/Encounter/Spells/Components/Spell";
import { ArmorCategory } from "./ArmorCategory";
import { Traits } from "./Traits";
import { HealthData } from "./HealthData";
import { ArmorGroup } from "./ArmorGroup";
import { Guid } from "guid-typescript";

interface PlayerCharacter {
    metadata: Metadata;
    level: number;
    experiencePoints: number;
    name: string;
    playerName: string;
    alignment: string;
    deity: string;
    traits: (keyof typeof Traits)[];
    ancestry: Ancestry;
    pcClass: iClass;
    background: Background;
    abilityScores: AbilityScoreArray;
    languages: string[];
    wornArmor: WornArmor;
    shield: Shield;
    saves: Saves;
    armorProficiencies: ArmorProficiencies;
    skills: Skill[];
    ancestryFeatsAndAbilities: AncestryFeatsAndAbility[];
    hitPoint: HealthData;
    movement: Movement;
    weaponProficiencies: WeaponProficiencies;
    weapons: Weapon[];
    perceptionProficiency: Proficiencies;
    senses: string;
    resistances: string;
    immunities: string;
    conditions: string;
    weakness: string;
    skillFeats: AncestryFeatsAndAbility[];
    generalFeats: AncestryFeatsAndAbility[];
    classFeatsAndAbilities: AncestryFeatsAndAbility[];
    bonusFeats: AncestryFeatsAndAbility[];
    inventory: Inventory;
    biographicalData: BiographicalData;
    personalityData: PersonalityData;
    campaignNotesData: CampaignNotesData;
    actions: PF2Action[];
    spellcastingAbilityModifier: keyof AbilityScoreArray;
    spellAttackProficiency: Proficiencies;
    spellAttackItemBonus: number;
    spellDCItemBonus: number;
    bonuses: iBonus[];
    penalties: iBonus[];
    magicTraditions: MagicTraditions;
    spellSlots: SpellSlot[];
    spells: SpellList;
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

export interface Inventory {
    items: Item[];
}

export interface Item {
    itemName: string;
    bulk: number;
    invested: boolean;
    worn: boolean;
    readied: boolean;
    quantity?: number;
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

export interface Shield {
    hasShield: boolean;
    acBonus: number;
    hardness: number;
    maxHP: number;
    currentHP: number;
    breakThreshold: number;
}

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

export interface Weapon {
    id: Guid;
    name: string;
    ability: keyof AbilityScoreArray;
    toHitBonus: number;
    damageDice: string;
    damageAbilityModifier?: keyof AbilityScoreArray;
    damageType: string;
    weaponTraits: (keyof typeof Traits)[];
    weaponCategory: keyof WeaponProficiencies;
}

export interface WornArmor {
    Name: string;
    Category: keyof ArmorCategory;
    Level: number;
    Price: Price;
    ACBonus: number;
    DexCap: number;
    CheckPenalty: iBonus;
    SpeedPenalty: iBonus;
    StrengthRequirement: number;
    Bulk: number;
    WornBulk: number;
    Group: ArmorGroup;
    Traits: (keyof typeof Traits)[];
}

export interface Price {
    Copper: number;
    Silver: number;
    Gold: number;
    Platinum: number;
}
