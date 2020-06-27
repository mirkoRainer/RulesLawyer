import { AbilityScoreArray } from "./src/PlayerCharacterSheet/Shared/PF2eCoreLib/AbilityScores";


export interface PlayerCharacterDTO {
    metadata:                    Metadata;
    level:                       number;
    experiencePoints:            number;
    name:                        string;
    playerName:                  string;
    alignment:                   string;
    deity:                       string;
    traits:                      string[];
    ancestry:                    Ancestry;
    background:                  Background;
    class:                       Class;
    abilityScores:               AbilityScoreArray;
    languages:                   string[];
    wornArmor:                   WornArmor;
    shield:                      Shield;
    saves:                       Saves;
    armorProficiencies:          ArmorProficiencies;
    skills:                      Skill[];
    ancestryFeatsAndAbilities:   AncestryFeatsAndAbility[];
    hitPoint:                    HitPoint;
    movement:                    Movement;
    weaponProficiencies:         WeaponProficiencies;
    weapons:                     Weapon[];
    perceptionProficiency:       string;
    senses:                      string;
    resistances:                 string;
    immunities:                  string;
    conditions:                  string;
    weakness:                    string;
    skillFeats:                  AncestryFeatsAndAbility[];
    generalFeats:                AncestryFeatsAndAbility[];
    classFeatsAndAbilities:      AncestryFeatsAndAbility[];
    bonusFeats:                  AncestryFeatsAndAbility[];
    inventory:                   Inventory;
    biographicalData:            BiographicalData;
    personalityData:             PersonalityData;
    campaignNotesData:           CampaignNotesData;
    actions:                     Action[];
    spellcastingAbilityModifier: string;
    spellAttackProficiency:      string;
    spellAttackItemBonus:        number;
    spellDCItemBonus:            number;
    bonuses:                     Bonus[];
    penalties:                   any[];
    magicTraditions:             MagicTraditions;
    spellSlots:                  SpellSlot[];
    spells:                      Spell[];
}

export interface AbilityScoreDTO {
    amount:  number;
    ability: string;
}

export interface ActionDTO {
    name:             string;
    numberOfActions:  number;
    traits:           string[];
    bookAbbreviation: string;
    pageNumber:       number;
    description:      string;
    trigger?:         string;
}

export interface AncestryDTO {
    name:     string;
    heritage: string;
}

export interface AncestryFeatsAndAbilityDTO {
    title:       string;
    description: Description;
}

export enum Description {
    DwarfStuff = "Dwarf Stuff",
    OtherDwarfStuff = "other Dwarf Stuff",
}

export interface ArmorProficienciesDTO {
    unarmored: string;
    light:     string;
    medium:    string;
    heavy:     string;
}

export interface BackgroundDTO {
    name: string;
}

export interface BiographicalDataDTO {
    ethnicity:   string;
    nationality: string;
    birthplace:  string;
    age:         number;
    gender:      string;
    height:      number;
    weight:      number;
    appearance:  string;
}

export interface BonusDTO {
    type:      string;
    appliesTo: string;
    amount:    number;
}

export interface CampaignNotesDataDTO {
    notes:         string;
    allies:        string;
    enemies:       string;
    organizations: string;
}

export interface ClassDTO {
    name:        string;
    subClass:    string;
    proficiency: string;
    keyAbility:  string;
}

export interface HitPointDTO {
    max:       number;
    current:   number;
    temporary: number;
    dying:     number;
    wounded:   number;
}

export interface InventoryDTO {
    items: Item[];
}

export interface ItemDTO {
    itemName: string;
    bulk:     number;
    invested: boolean;
    worn:     boolean;
    readied:  boolean;
}

export interface MagicTraditionsDTO {
    prepared:    boolean;
    spontaneous: boolean;
    arcane:      boolean;
    primal:      boolean;
    divine:      boolean;
    occult:      boolean;
}

export interface Metadata {
}

export interface MovementDTO {
    landSpeed:   number;
    burrowSpeed: number;
    climbSpeed:  number;
    flySpeed:    number;
}

export interface PersonalityDataDTO {
    attitude:     string;
    beliefs:      string;
    likes:        string;
    dislikes:     string;
    catchphrases: string;
}

export interface SavesDTO {
    fortitude: string;
    reflex:    string;
    will:      string;
}

export interface ShieldDTO {
    hasShield:      boolean;
    acBonus:        number;
    hardness:       number;
    maxHP:          number;
    currentHP:      number;
    breakThreshold: number;
}

export interface SkillDTO {
    name:            string;
    abilityModifier: AbilityModifier;
    proficiency:     string;
    itemBonus:       number;
    hasArmorPenalty: boolean;
    armorPenalty?:   number;
    loreDescriptor?: string;
}

export interface AbilityModifierDTO {
    name:     string;
    modifier: number;
}

export interface SpellSlotDTO {
    spellLevel: string;
    maximum:    number;
    current:    number;
}

export interface SpellDTO {
    spellType:   string;
    spellNames?: string[];
    data?:       any[];
}

export interface WeaponProficienciesDTO {
    unarmed: string;
    simple:  string;
    martial: string;
    others:  Other[];
}

export interface OtherDTO {
    description: string;
    proficiency: string;
}

export interface WeaponDTO {
    title:                 string;
    ability:               string;
    toHitBonus:            number;
    damageDice:            string;
    damageAbilityModifier: string;
    damageType:            string;
    weaponTraits:          string;
}

export interface WornArmorDTO {
    name:                string;
    category:            string;
    level:               number;
    price:               Price;
    acBonus:             number;
    dexCap:              number;
    checkPenalty:        Bonus;
    speedPenalty:        Bonus;
    strengthRequirement: number;
    bulk:                number;
    wornBulk:            number;
    group:               string;
    traits:              any[];
}

export interface PriceDTO {
    copper:   number;
    silver:   number;
    gold:     number;
    platinum: number;
}
