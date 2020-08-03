export enum Proficiencies {
    Untrained = "Untrained",
    Trained = "Trained",
    Expert = "Expert",
    Master = "Master",
    Legendary = "Legendary",
}

export function GetProficiencyValue(proficiency: Proficiencies, level: number) {
    switch (proficiency) {
    case (Proficiencies.Untrained):{
        return 0;
    }
    case (Proficiencies.Trained):{
        return 2 + level;
    }
    case (Proficiencies.Expert):{
        return 4 + level;
    }
    case (Proficiencies.Master):{
        return 6 + level;
    }
    case (Proficiencies.Legendary):{
        return 8 + level;
    }
    default: {
        return 0;
    }
    }
}
