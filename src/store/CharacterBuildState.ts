import { AbilityScoreArray } from "../PF2eCoreLib/AbilityScores";
import { Skills } from "../PF2eCoreLib/PlayerCharacter/PlayerCharacter";
import { Proficiencies } from "../PF2eCoreLib/Proficiencies";
import { Ancestries } from "../PF2eCoreLib/Ancestries";
import { Backgrounds } from "../PF2eCoreLib/Backgrounds";
import { Classes } from "../PF2eCoreLib/Classes";
import { Traits } from "../PF2eCoreLib/Traits";

export type CharacterBuildState = {
    Ancestry: keyof Ancestries;
    Background: keyof Backgrounds;
    Class: keyof Classes;
    SubClass?: string;
    ClassBuild: BuildChoices; // actually selected options
    ChoicesAvailable: BuildChoice[]; // all the various levels and their respective choices
};

type BuildChoices = {
    Level1: BuildChoice[];
    Level2: BuildChoice[];
    Level3: BuildChoice[];
    Level4: BuildChoice[];
    Level5: BuildChoice[];
    Level6: BuildChoice[];
    Level7: BuildChoice[];
    Level8: BuildChoice[];
    Level9: BuildChoice[];
    Level10: BuildChoice[];
    Level11: BuildChoice[];
    Level12: BuildChoice[];
    Level13: BuildChoice[];
    Level14: BuildChoice[];
    Level15: BuildChoice[];
    Level16: BuildChoice[];
    Level17: BuildChoice[];
    Level18: BuildChoice[];
    Level19: BuildChoice[];
    Level20: BuildChoice[];
};

export type BuildChoice = {
    choiceName: string;
    hasExtraChoice: boolean;
    extraChoice?: BuildChoice; // for things that grant another option (i.e. Dedication, etc)
    prerequisites?: ChoicePrerequisite;
    applyChoice: () => void;
};

type ChoicePrerequisite = {
    abilityScore?: keyof AbilityScoreArray;
    choice?: BuildChoice;
    skillProficiency?: SkillProficiencyPreReq;
    trait: TraitPrerequisite;
    meetsPreReqs: () => boolean;
};

type SkillProficiencyPreReq = {
    skill: keyof Skills;
    proficiency: Proficiencies;
};

type TraitPrerequisite = {
    traits: keyof typeof Traits[];
};
