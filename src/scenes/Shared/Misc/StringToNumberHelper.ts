export const isNumbersOnly = (input: string): boolean => {
    const numberReg = new RegExp(/^\d+$/);
    return numberReg.test(input);
};