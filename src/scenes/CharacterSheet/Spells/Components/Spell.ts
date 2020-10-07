import { RulebookEntry } from "../../../../PF2eCoreLib/RulebookEntry";

export interface SpellListEntry {
    spellType: string;
    data: Spell[];
}

export interface Spell {
    name: string;
    description?: string;
}
