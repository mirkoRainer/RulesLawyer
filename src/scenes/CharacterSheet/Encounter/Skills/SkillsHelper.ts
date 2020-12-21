import { Skills } from "../../../../PF2eCoreLib/PlayerCharacter";
import SkillsView from "./SkillsView";

export const getSkillNamesArray = () => {
    const skills: Skills = {
        Acrobatics: "Acrobatics",
        Arcana: "Arcana",
        Athletics: "Athletics",
        Crafting: "Crafting",
        Deception: "Deception",
        Diplomacy: "Diplomacy",
        Intimidation: "Intimidation",
        Lore: "Lore",
        Medicine: "Medicine",
        Nature: "Nature",
        Occultism: "Occultism",
        Performance: "Performance",
        Religion: "Religion",
        Society: "Society",
        Stealth: "Stealth",
        Survival: "Survival",
        Thievery: "Thievery",
    };
    return Object.keys(skills);
};
