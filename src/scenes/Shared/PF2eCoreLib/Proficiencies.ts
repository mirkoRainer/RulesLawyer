export enum Proficiencies {
    Untrained = "Untrained",
    Trained = "Trained",
    Expert = "Expert",
    Master = "Master",
    Legendary = "Legendary",
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
