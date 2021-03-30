export interface Dice {
    formula: string;
}

export interface DamageDice extends Dice {
    damageType: string; // TODO: Enumerate damage types; Update inputs
}

export const GetDiceStringPretty = (dice: DamageDice[]): string => {
    let output: string = "";
    dice.forEach((die) => {
        output += die.formula + " " + die.damageType + " ";
    });
    return output;
};
