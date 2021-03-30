import { AbilityScoreArray } from "../AbilityScores";
import { Proficiencies } from "../Proficiencies";
import { iBonus } from "../Bonus";
import { SpellList } from "../../scenes/CharacterSheet/Encounter/Spells/Components/Spell";
import { Traits } from "../Traits";
import { HealthData } from "../HealthData";
import { Size } from "../Size";
import { examplePlayerCharacter } from "../../../examplePlayerCharacter";
import { Companion } from "./Companion";
import { PathfinderClass } from "./PathfinderClass";
import { CampaignNotesData } from "./CampaignNotesData";
import { PF2Action } from "./PF2Action";
import { FeatOrAbility } from "./FeatOrAbility";
import { ArmorProficiencies } from "./ArmorProficiencies";
import { BiographicalData } from "./BiographicalData";
import { Metadata } from "./Metadata";
import { Movement } from "./Movement";
import { MagicTraditions } from "./MagicTraditions";
import { Saves } from "./Saves";
import { PersonalityData } from "./PersonalityData";
import { Skill } from "./Skill";
import { SpellSlot } from "./SpellSlot";
import { WeaponProficiencies } from "./WeaponProficiencies";
import { DEFAULT_ARMOR, DEFAULT_COMPANION_ARMOR } from "./Armor";
import { Inventory } from "./Inventory";
import { Familiar } from "./Familiar";

interface PlayerCharacterData {
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
    hitPoints: HealthData;
    immunities: string;
    inventory: Inventory;
    languages: string[];
    level: number;
    magicTraditions: MagicTraditions;
    metadata: Metadata;
    movement: Movement;
    name: string;
    pcClass: PathfinderClass;
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
    companions: Companion[];
    familiar?: Familiar;
}

export class PlayerCharacter {
    constructor(existingData?: PlayerCharacterData) {
        this._data = existingData ? existingData : examplePlayerCharacter;
        // Ensure that every PC and Companion has default Armor
        if (
            !this._data.inventory.items.find((item) => {
                return item.name === "Unarmored";
            })
        ) {
            // We didn't find the default armor on the PC
            this._data.inventory.items.push(DEFAULT_ARMOR);
        }
        this._data.companions.forEach((companion) => {
            if (
                !companion.inventory.items.find((item) => {
                    return item.name === "Fur, Feathers, or Scales";
                })
            ) {
                // We didn't find the default armor on the companion.
                companion.inventory.items.push(DEFAULT_COMPANION_ARMOR);
            }
        });
    }

    private _data: PlayerCharacterData;
    public get data(): PlayerCharacterData {
        return this._data;
    }
    public set data(v: PlayerCharacterData) {
        this._data = v;
    }
}
export default PlayerCharacterData;

export interface Background {
    name: string;
}

export interface Ancestry {
    name: string;
    heritage: string;
}
