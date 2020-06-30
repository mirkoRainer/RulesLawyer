import { RulebookEntry } from "../../Shared/RulebookEntry";

export interface SpellListEntry {
    spellType: string;
    data: Spell[];
}

export interface Spell {
    name: string;
}
