import { RulebookEntry } from "../Shared/RulebookEntry";

export interface Spell {
    action_abbr: string;
    area: string;
    cast: string;
    components: string[];
    description: string;
    duration: string;
    name: string;
    range: string;
    requirements: string;
    source: RulebookEntry;
    targets: string;
    traditions: string[];
    traits: string[];
    trigger: string;
    type: string;
}
