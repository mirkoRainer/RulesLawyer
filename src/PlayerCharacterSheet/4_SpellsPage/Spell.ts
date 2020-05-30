import { RulebookEntry } from "../Shared/RulebookEntry";

export interface SpellListEntry {
    spellType: string;
    data: Spell[];
}

export interface Spell {
    actionAbbr: string | string[];
    area?: string | null;
    cast?: string | null;
    components?: string[] | null;
    description: string;
    duration?: string | null;
    level?: number;
    name: string;
    range?: string | null;
    requirements?: string | null;
    source: RulebookEntry;
    targets?: string | null;
    traditions?: string[] | null;
    traits: string[];
    trigger?: string | null;
    type: string;
}
