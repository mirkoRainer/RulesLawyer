import { Proficiencies } from "./src/PF2eCoreLib/Proficiencies";
import { BonusType } from "./src/PF2eCoreLib/BonusTypes";
import { ArmorGroup } from "./src/PF2eCoreLib/ArmorGroup";
import PlayerCharacter from "./src/PF2eCoreLib/PlayerCharacter";
import { Guid } from "guid-typescript";
import { ArmorCategory } from "./src/PF2eCoreLib/ArmorCategory";
import { Ability } from "./src/PF2eCoreLib/Ability";
import { Size } from "./src/PF2eCoreLib/Size";

export const examplePlayerCharacter: PlayerCharacter = {
    metadata: {
        id: Guid.create(),
    },
    level: 1,
    experiencePoints: 100,
    name: "Chuck",
    playerName: "Mirko",
    alignment: "LN",
    deity: "Lamashtu",
    traits: ["Dwarf", "Druid", "Humanoid"],
    size: Size.Medium,
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
        keyAbility: Ability.Wisdom,
    },
    abilityScores: {
        Strength: { score: 10, ability: Ability.Strength },
        Dexterity: { score: 16, ability: Ability.Dexterity },
        Constitution: { score: 20, ability: Ability.Constitution },
        Intelligence: { score: 6, ability: Ability.Intelligence },
        Wisdom: { score: 18, ability: Ability.Wisdom },
        Charisma: { score: 8, ability: Ability.Charisma },
    },
    languages: ["Common", "Dwarf", "Goblin"],
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
            ability: Ability.Dexterity,
            proficiency: Proficiencies.Legendary,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Arcana",
            ability: Ability.Intelligence,
            proficiency: Proficiencies.Trained,
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
            name: "Crafting",
            ability: Ability.Intelligence,
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
            name: "Lore",
            loreDescriptor: "Golarion",
            ability: Ability.Intelligence,
            proficiency: Proficiencies.Trained,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Medicine",
            ability: Ability.Wisdom,
            proficiency: Proficiencies.Trained,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Nature",
            ability: Ability.Wisdom,
            proficiency: Proficiencies.Trained,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Occultism",
            ability: Ability.Intelligence,
            proficiency: Proficiencies.Master,
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
            name: "Religion",
            ability: Ability.Wisdom,
            proficiency: Proficiencies.Trained,
            hasArmorPenalty: true,
            armorPenalty: 0,
        },
        {
            name: "Society",
            ability: Ability.Intelligence,
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
    ancestryFeatsAndAbilities: [
        { title: "Special 1st", description: "Dwarf Stuff" },
        { title: "Heritage 1st", description: "other Dwarf Stuff" },
        { title: "Feat 1st", description: "other Dwarf Stuff" },
        { title: "Feat 5th", description: "other Dwarf Stuff" },
        { title: "Feat 9th", description: "other Dwarf Stuff" },
        { title: "Feat 13th", description: "other Dwarf Stuff" },
        { title: "Feat 17th", description: "other Dwarf Stuff" },
    ],
    hitPoints: {
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
        Other: [
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
                id: Guid.create(),
                description: "Leather Armor made from leather",
                invested: false,
                worn: true,
                readied: false,
                name: "Leather Armor",
                category: ArmorCategory.Light,
                level: 1,
                price: { Copper: 0, Silver: 7, Gold: 0, Platinum: 0 },
                acBonus: {
                    type: BonusType.Item,
                    appliesTo: "ac",
                    amount: 2,
                    source: "armor",
                },
                dexCap: 4,
                checkPenalty: {
                    type: BonusType.Armor,
                    appliesTo: "StrAndDexChecks",
                    amount: 0,
                    source: "armor",
                },
                speedPenalty: {
                    type: BonusType.Armor,
                    appliesTo: "speed",
                    amount: 0,
                    source: "armor",
                },
                strengthRequirement: 12,
                bulk: 1,
                wornBulk: 1,
                armorGroup: ArmorGroup.Leather,
                traits: ["Additive", "Grapple"],
                isContainer: false,
            },
            {
                id: Guid.create(),
                description: "Leather Armor made from leather",
                invested: false,
                worn: true,
                readied: false,
                name: "Shield McShieldFace",
                bulk: 5,
                level: 1,
                acBonus: {
                    type: BonusType.Circumstance,
                    appliesTo: "ac",
                    amount: 2,
                    source: "shield",
                },
                hardness: 5,
                maxHP: 20,
                currentHP: 15,
                breakThreshold: 10,
                traits: ["Additive", "Grapple"],
                isContainer: false,
            },
            {
                id: Guid.create(),
                description: "Another Shield",
                invested: false,
                worn: true,
                readied: false,
                name: "Shield Squared",
                bulk: 5,
                level: 1,
                acBonus: {
                    type: BonusType.Circumstance,
                    appliesTo: "ac",
                    amount: 3,
                    source: "otherShield",
                },
                hardness: 5,
                maxHP: 20,
                currentHP: 15,
                breakThreshold: 10,
                traits: ["Additive", "Grapple"],
                isContainer: false,
            },
            {
                id: Guid.create(),
                description: "A magical short sword",
                bulk: 1,
                level: 5,
                invested: false,
                readied: true,
                worn: true,
                name: "+1 ShortSword",
                ability: Ability.Strength,
                toHitBonus: {
                    type: BonusType.Item,
                    appliesTo: "toHit",
                    amount: 1,
                    source: "",
                },
                damageDice: [
                    { formula: "1d6", damageType: "piercing, slashing" },
                ],
                damageAbilityModifier: Ability.Strength,
                traits: ["Agile", "Finesse", "Versatile"],
                weaponCategory: "Simple",
                isContainer: false,
            },
            {
                id: Guid.create(),
                name: "Longbow",
                description: "A longbow of yew",
                bulk: 1,
                level: 1,
                invested: false,
                readied: true,
                worn: true,
                ability: Ability.Dexterity,
                toHitBonus: {
                    type: BonusType.Item,
                    appliesTo: "toHit",
                    amount: 0,
                    source: "",
                },
                damageDice: [{ formula: "1d8", damageType: "piercing" }],
                damageAbilityModifier: undefined,
                traits: ["Volley30"],
                weaponCategory: "Martial",
                isContainer: false,
            },
            {
                id: Guid.create(),
                level: 5,
                name: "Doubling Rings",
                bulk: 0,
                invested: true,
                worn: true,
                readied: false,
                description: "Rings that are double",
                traits: [],
                isContainer: false,
            },
            {
                name: "Bracers of Missile Deflection",
                id: Guid.create(),
                level: 5,
                bulk: 0.1,
                invested: false,
                worn: true,
                readied: false,
                description: "",
                traits: [],
                isContainer: false,
            },
            {
                name: "Alchemist's Fire",
                id: Guid.create(),
                level: 5,
                bulk: 0.1,
                invested: false,
                worn: false,
                readied: true,
                description: "",
                traits: [],
                isContainer: false,
            },
            {
                name: "Thieves Tools",
                id: Guid.create(),
                level: 5,
                bulk: 0.1,
                invested: false,
                worn: false,
                readied: true,
                description: "",
                traits: [],
                isContainer: false,
            },
            {
                name: "Feather Token (Ladder)",
                id: Guid.create(),
                level: 5,
                bulk: 0,
                invested: false,
                worn: false,
                readied: false,
                description: "",
                traits: [],
                isContainer: false,
            },
            {
                name: "Signal Whistle",
                id: Guid.create(),
                level: 5,
                bulk: 0.1,
                invested: false,
                worn: false,
                readied: false,
                description: "",
                traits: [],
                isContainer: false,
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
        organizations: "NRA, PFS, LP",
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
            skill: "Athletics",
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
    spellcastingAbilityModifier: Ability.Wisdom,
    spellAttackProficiency: Proficiencies.Trained,
    bonuses: [
        // AC bonus from worn armor
        {
            type: BonusType.Item,
            appliesTo: "ac",
            amount: 2,
            source: "armor",
        },
        {
            type: BonusType.Item,
            appliesTo: "spellAttack",
            amount: 1,
            source: "",
        },
        {
            type: BonusType.Item,
            appliesTo: "spellAttack",
            amount: 4,
            source: "",
        },
        {
            type: BonusType.Item,
            appliesTo: "spellAttack",
            amount: 2,
            source: "",
        },
        {
            type: BonusType.Item,
            appliesTo: "spellAttack",
            amount: 1,
            source: "",
        },
        { type: BonusType.Item, appliesTo: "spellDC", amount: 12, source: "" },
        { type: BonusType.Item, appliesTo: "classDC", amount: 3, source: "" },
        { type: BonusType.Item, appliesTo: "classDC", amount: 2, source: "" },
        {
            type: BonusType.Item,
            appliesTo: "Athletics",
            amount: 2,
            source: "",
        },
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
    companions: [
        {
            abilityScores: {
                Strength: { score: 10, ability: Ability.Strength },
                Constitution: { score: 12, ability: Ability.Constitution },
                Dexterity: { score: 16, ability: Ability.Dexterity },
                Intelligence: { score: 6, ability: Ability.Intelligence },
                Wisdom: { score: 14, ability: Ability.Wisdom },
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
                maxHitPoints: 20,
                currentHitPoints: 20,
                temporaryHitPoints: 4,
                dying: 0,
                maxDying: 4,
                wounded: 1,
            },
            immunities: "",
            inventory: { items: [] },
            languages: ["Common"],
            metaData: {
                id: Guid.create(),
            },
            name: "Fido",
            perception: Proficiencies.Legendary,
            resistance: "",
            saves: {
                fortitude: Proficiencies.Legendary,
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
                landSpeed: 45,
                burrowSpeed: 5,
                climbSpeed: 10,
                flySpeed: 20,
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
        },
    ],
};
