export interface Skill {
    name: string;
    loreDescriptor?: string;
    abilityModifier: number;
    proficiency: string;
    itemBonus: number;
    hasArmorPenalty: boolean;
    armorPenalty?: number;
}
