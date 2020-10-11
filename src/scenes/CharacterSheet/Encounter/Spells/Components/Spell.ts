export interface SpellList {
    Focus: Spell[];
    FirstLevel: Spell[];
    SecondLevel: Spell[];
    ThirdLevel: Spell[];
    FourthLevel: Spell[];
    FifthLevel: Spell[];
    SixthLevel: Spell[];
    SeventhLevel: Spell[];
    EighthLevel: Spell[];
    NinthLevel: Spell[];
    TenthLevel: Spell[];
}

/**
 * @property {string} name - The name of the Spell
 * @property {string?} description - The description of the Spell
 */
export interface Spell {
    name: string;
    description?: string;
}
