import { Proficiencies } from "./src/PF2eCoreLib/Proficiencies";
import { BonusType } from "./src/PF2eCoreLib/BonusTypes";
import { ArmorGroup } from "./src/PF2eCoreLib/ArmorGroup";
import PlayerCharacter from "./src/PF2eCoreLib/PlayerCharacter";
import { Guid } from "guid-typescript";

export const examplePlayerCharacter: PlayerCharacter = {
    metadata: {},
    level: 1,
    experiencePoints: 100,
    name: "Chuck",
    playerName: "Mirko",
    alignment: "LN",
    deity: "Lamashtu",
    traits: ["Dwarf", "Druid", "Humanoid"],
    ancestry: {
        name: "Dwarf",
        heritage: "Anvil Dwarf",
    },
    background: {
        name: "Emancipated",
    },
    pcClass: {
        name: "Druid",
        subClass: "Wild Order",
        proficiency: Proficiencies.Master,
        keyAbility: "Wisdom",
    },
    abilityScores: {
        Strength: { score: 10, ability: "Strength" },
        Dexterity: { score: 16, ability: "Dexterity" },
        Constitution: { score: 20, ability: "Constitution" },
        Intelligence: { score: 6, ability: "Intelligence" },
        Wisdom: { score: 18, ability: "Wisdom" },
        Charisma: { score: 8, ability: "Charisma" },
    },
    languages: [" Common", " Dwarf", " Goblin"],
    wornArmor: {
        Name: "Leather Armor",
        Category: "Light",
        Level: 1,
        Price: { Copper: 0, Silver: 7, Gold: 0, Platinum: 0 },
        ACBonus: 2,
        DexCap: 4,
        CheckPenalty: {
            type: BonusType.Armor,
            appliesTo: "StrAndDexChecks",
            amount: 0,
        },
        SpeedPenalty: { type: BonusType.Armor, appliesTo: "speed", amount: 0 },
        StrengthRequirement: 12,
        Bulk: 1,
        WornBulk: 1,
        Group: ArmorGroup.Leather,
        Traits: ["Additive", "Grapple"],
    },
    shield: {
        hasShield: true,
        acBonus: 2,
        hardness: 5,
        maxHP: 20,
        currentHP: 15,
        breakThreshold: 10,
    },
    saves: {
        fortitude: Proficiencies.Expert,
        reflex: Proficiencies.Trained,
        will: Proficiencies.Expert,
    },
    armorProficiencies: {
        unarmored: Proficiencies.Trained,
        light: Proficiencies.Trained,
        medium: Proficiencies.Untrained,
        heavy: Proficiencies.Untrained,
    },
    skills: [
        {
            name: "Acrobatics",
            ability: "Dexterity",
            proficiency: Proficiencies.Legendary,
            itemBonus: 1,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Arcana",
            ability: "Intelligence",
            proficiency: Proficiencies.Trained,
            itemBonus: 1,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Athletics",
            ability: "Strength",
            proficiency: Proficiencies.Trained,
            itemBonus: 1,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Crafting",
            ability: "Intelligence",
            proficiency: Proficiencies.Trained,
            itemBonus: 1,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Deception",
            ability: "Charisma",
            proficiency: Proficiencies.Trained,
            itemBonus: 1,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Diplomacy",
            ability: "Charisma",
            proficiency: Proficiencies.Untrained,
            itemBonus: 0,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Intimidation",
            ability: "Charisma",
            proficiency: Proficiencies.Expert,
            itemBonus: 1,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Lore",
            loreDescriptor: "Golarion",
            ability: "Intelligence",
            proficiency: Proficiencies.Trained,
            itemBonus: 1,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Medicine",
            ability: "Wisdom",
            proficiency: Proficiencies.Trained,
            itemBonus: 1,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Nature",
            ability: "Wisdom",
            proficiency: Proficiencies.Trained,
            itemBonus: 1,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Occultism",
            ability: "Intelligence",
            proficiency: Proficiencies.Master,
            itemBonus: 1,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Performance",
            ability: "Charisma",
            proficiency: Proficiencies.Trained,
            itemBonus: 1,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Religion",
            ability: "Wisdom",
            proficiency: Proficiencies.Trained,
            itemBonus: 1,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Society",
            ability: "Intelligence",
            proficiency: Proficiencies.Trained,
            itemBonus: 1,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Stealth",
            ability: "Dexterity",
            proficiency: Proficiencies.Trained,
            itemBonus: 1,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Survival",
            ability: "Wisdom",
            proficiency: Proficiencies.Trained,
            itemBonus: 1,
            hasArmorPenalty: false,
        },
        {
            name: "Thievery",
            ability: "Dexterity",
            proficiency: Proficiencies.Trained,
            itemBonus: 1,
            hasArmorPenalty: true,
            armorPenalty: 2,
        },
    ],
    ancestryFeatsAndAbilities: [
        { title: "Special 1st", description: "Dwarf Stuff" },
        { title: "Heritage 1st", description: "other Dwarf Stuff" },
        { title: "Feat 1st", description: "other Dwarf Stuff" },
        { title: "Feat 5th", description: "other Dwarf Stuff" },
        { title: "Feat 9th", description: "other Dwarf Stuff" },
        { title: "Feat 13th", description: "other Dwarf Stuff" },
        { title: "Feat 17th", description: "other Dwarf Stuff" },
    ],
    hitPoint: {
        maxHitPoints: 30,
        currentHitPoints: 30,
        temporaryHitPoints: 2,
        dying: 0,
        maxDying: 4,
        wounded: 1,
    },
    movement: {
        landSpeed: 25,
        burrowSpeed: 5,
        climbSpeed: 10,
        flySpeed: 0,
    },
    weaponProficiencies: {
        Unarmed: Proficiencies.Trained,
        Simple: Proficiencies.Trained,
        Martial: Proficiencies.Untrained,
        Others: [
            {
                description: "Brass Knuckles",
                proficiency: Proficiencies.Expert,
            },
            {
                description: "Halberd",
                proficiency: Proficiencies.Expert,
            },
        ],
    },
    weapons: [
        {
            id: Guid.create(),
            name: "+1 ShortSword",
            ability: "Strength",
            toHitBonus: 1,
            damageDice: "1d6",
            damageAbilityModifier: "Strength",
            damageType: "Piercing",
            weaponTraits: ["Agile", "Finesse", "Versatile"],
            weaponCategory: "Simple",
        },
        {
            id: Guid.create(),
            name: "Longbow",
            ability: "Dexterity",
            toHitBonus: 0,
            damageDice: "1d8",
            damageAbilityModifier: undefined,
            damageType: "Piercing",
            weaponTraits: ["Volley30"],
            weaponCategory: "Martial",
        },
    ],
    perceptionProficiency: Proficiencies.Trained,
    senses: "Low-Light Vision",
    resistances: "Force 5, Cold 5",
    immunities: "Electricity, Fire",
    conditions: "Clumsy 1, Flat-Footed",
    weakness: "Silver 5",
    skillFeats: [
        { title: "Background", description: "Dwarf Stuff" },
        { title: "2nd", description: "other Dwarf Stuff" },
        { title: "4th", description: "other Dwarf Stuff" },
        { title: "6th", description: "other Dwarf Stuff" },
        { title: "8th", description: "other Dwarf Stuff" },
        { title: "10th", description: "other Dwarf Stuff" },
        { title: "12th", description: "other Dwarf Stuff" },
        { title: "14th", description: "other Dwarf Stuff" },
        { title: "16th", description: "other Dwarf Stuff" },
        { title: "18th", description: "other Dwarf Stuff" },
        { title: "20th", description: "other Dwarf Stuff" },
    ],
    generalFeats: [
        { title: "3rd", description: "Dwarf Stuff" },
        { title: "7th", description: "other Dwarf Stuff" },
        { title: "11th", description: "other Dwarf Stuff" },
        { title: "15th", description: "other Dwarf Stuff" },
        { title: "19th", description: "other Dwarf Stuff" },
    ],
    classFeatsAndAbilities: [
        { title: "Feature 1st", description: "Dwarf Stuff" },
        { title: "-Feature 1st", description: "Dwarf Stuff" },
        { title: "Feat 1st", description: "other Dwarf Stuff" },
        { title: "Feat 2nd", description: "other Dwarf Stuff" },
        { title: "Feature 3rd", description: "other Dwarf Stuff" },
        { title: "Feat 4th", description: "other Dwarf Stuff" },
        { title: "Feature 5th", description: "other Dwarf Stuff" },
        { title: "Feat 6th", description: "other Dwarf Stuff" },
        { title: "Feature 7th", description: "other Dwarf Stuff" },
        { title: "Feat 8th", description: "other Dwarf Stuff" },
        { title: "Feature 9th", description: "other Dwarf Stuff" },
        { title: "Feat 10th", description: "other Dwarf Stuff" },
        { title: "Feature 11th", description: "other Dwarf Stuff" },
        { title: "Feat 12th", description: "other Dwarf Stuff" },
        { title: "Feature 13th", description: "other Dwarf Stuff" },
        { title: "Feat 14th", description: "other Dwarf Stuff" },
        { title: "Feature 15th", description: "other Dwarf Stuff" },
        { title: "Feat 16th", description: "other Dwarf Stuff" },
        { title: "Feature 17th", description: "other Dwarf Stuff" },
        { title: "Feat 18th", description: "other Dwarf Stuff" },
        { title: "Feature 19th", description: "other Dwarf Stuff" },
        { title: "Feat 20th", description: "other Dwarf Stuff" },
    ],
    bonusFeats: [
        { title: "Bonus1", description: "Dwarf Stuff" },
        { title: "Bonus2", description: "other Dwarf Stuff" },
    ],
    inventory: {
        items: [
            {
                itemName: "Doubling Rings",
                bulk: 0,
                invested: true,
                worn: true,
                readied: false,
            },
            {
                itemName: "Bracers of Missile Deflection",
                bulk: 0.1,
                invested: true,
                worn: true,
                readied: false,
            },
            {
                itemName: "Alchemist's Fire",
                bulk: 0.1,
                invested: false,
                worn: false,
                readied: true,
            },
            {
                itemName: "Thieves Tools",
                bulk: 0.1,
                invested: false,
                worn: false,
                readied: true,
            },
            {
                itemName: "Feather Token (Ladder)",
                bulk: 0,
                invested: false,
                worn: false,
                readied: false,
            },
            {
                itemName: "Signal Whistle",
                bulk: 0.1,
                invested: false,
                worn: false,
                readied: false,
            },
        ],
    },
    biographicalData: {
        ethnicity: "Varisian",
        nationality: "Absalomnian",
        birthplace: "Absalom",
        age: 89,
        gender: "M",
        height: 70,
        weight: 210,
        appearance: "middle height fair skin moderate looks",
    },
    personalityData: {
        attitude: "sassy",
        beliefs: "all people are good",
        likes: "peanut butter",
        dislikes: "sassy people",
        catchphrases: "to infinity and beyond!",
    },
    campaignNotesData: {
        notes:
            "this is my campaign notes. They are thorough and they help my GM keep track of that various things that we do so he doesn't have to do all the work.",
        allies: "my trusty sword, my trusty dagger, my cat",
        enemies: "World Hungry",
        organizations: "PETA, NRA, PFS, LP",
    },
    actions: [
        {
            id: Guid.create(),
            name: "Shove",
            numberOfActions: 1,
            traits: ["Attack", "Athletics"],
            bookAbbreviation: "CRB",
            pageNumber: 242,
            description:
                "You shove your foe away and stuff. You can go too, if you want.",
            source: "Skill Action",
        },
        {
            id: Guid.create(),
            name: "Power Attack",
            numberOfActions: 2,
            traits: ["Attack", "Flourish"],
            bookAbbreviation: "CRB",
            pageNumber: 278,
            description: "Moar damage dice!",
            source: "What grants this action",
        },
        {
            id: Guid.create(),
            name: "Speak out loud",
            numberOfActions: 0,
            traits: ["FreeAction", "Verbal"],
            bookAbbreviation: "CRB",
            pageNumber: 1,
            description: "You speak. Like a dog.",
            source: "What grants this action",
        },
        {
            id: Guid.create(),
            name: "Attack of Opportunity",
            numberOfActions: 0.5,
            traits: [],
            bookAbbreviation: "CRB",
            pageNumber: 142,
            description:
                "You lash out at a foe that leaves an opening. Make a melee Strike against the triggering creature. If your attack is a critical hit and the trigger was a manipulate action, you disrupt that action. This Strike doesn’t count toward your multiple attack penalty, and your multiple attack penalty doesn’t apply to this Strike.",
            trigger:
                "A creature within your reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it’s using.",
            source: "What grants this action",
        },
    ],
    spellcastingAbilityModifier: "Wisdom",
    spellAttackProficiency: Proficiencies.Trained,
    spellAttackItemBonus: 1,
    spellDCItemBonus: 2,
    bonuses: [
        { type: BonusType.Item, appliesTo: "spellAttack", amount: 1 },
        { type: BonusType.Item, appliesTo: "spellAttack", amount: 4 },
        { type: BonusType.Item, appliesTo: "spellAttack", amount: 2 },
        { type: BonusType.Item, appliesTo: "spellAttack", amount: 1 },
        { type: BonusType.Item, appliesTo: "spellDC", amount: 12 },
        { type: BonusType.Item, appliesTo: "classDC", amount: 3 },
        { type: BonusType.Item, appliesTo: "classDC", amount: 2 },
    ],
    penalties: [],
    magicTraditions: {
        prepared: true,
        spontaneous: false,
        arcane: true,
        primal: false,
        divine: true,
        occult: false,
    },
    spellSlots: [
        {
            spellLevel: "Focus",
            maximum: 1,
            current: 0,
        },
        {
            spellLevel: "1st",
            maximum: 3,
            current: 3,
        },
        {
            spellLevel: "2nd",
            maximum: 3,
            current: 3,
        },
        {
            spellLevel: "3rd",
            maximum: 2,
            current: 1,
        },
        {
            spellLevel: "4th",
            maximum: 3,
            current: 3,
        },
        {
            spellLevel: "5th",
            maximum: 3,
            current: 3,
        },
        {
            spellLevel: "6th",
            maximum: 3,
            current: 3,
        },
        {
            spellLevel: "7th",
            maximum: 1,
            current: 3,
        },
        {
            spellLevel: "8th",
            maximum: 2,
            current: 2,
        },
        {
            spellLevel: "9th",
            maximum: 3,
            current: 1,
        },
        {
            spellLevel: "10th",
            maximum: 1,
            current: 1,
        },
    ],
    spells: {
        Focus: [{ name: "MantisForm" }],
        FirstLevel: [
            { name: "Heal", description: "you heal people with magic" },
        ],
        SecondLevel: [],
        ThirdLevel: [],
        FourthLevel: [],
        FifthLevel: [],
        SixthLevel: [],
        SeventhLevel: [],
        EighthLevel: [],
        NinthLevel: [],
        TenthLevel: [],
    },
};
