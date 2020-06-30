export enum Proficiencies {
    Untrained = "U",
    Trained = "T",
    Expert = "E",
    Master = "M",
    Legendary = "L",
}

export function GetProficiencyValue(proficiency: Proficiencies) {
    switch (proficiency) {
    case (Proficiencies.Untrained):{
        return 0;
    }
    case (Proficiencies.Trained):{
        return 2;
    }
    case (Proficiencies.Expert):{
        return 4;
    }
    case (Proficiencies.Master):{
        return 6;
    }
    case (Proficiencies.Legendary):{
        return 8;
    }
    default: {
        return 0;
    }
    }
}
