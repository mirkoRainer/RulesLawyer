export const isNumbersOnly = (input: string): boolean => {
    const numberReg = new RegExp(/^\d+$/);
    return numberReg.test(input);
};

export const isNumbersOnlyElseReturn0 = (input: string): number => {
    return isNumbersOnly(input) ? parseInt(input) : 0;
};
