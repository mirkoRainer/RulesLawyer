interface PcClass {
    Name: string;
    TypicalMembers: string;
    RolePlayingSuggestions: string;
    KeyAbilityScores: Ability[];
    HitPoints: number;
    Proficiencies: Dictionary<string, Proficiency>;
    AdvancementTable: Dictionary<number, string[]>;
    ClassFeats: string[];
    NameOfSubClass: string;
    SubClass: string;
    SubClasses: string[];
}
