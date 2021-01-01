export const getBulkString = (bulk: number): string => {
    switch (bulk) {
        case 0:
            return "-";
        case 0.1:
            return "L";
        default:
            return bulk.toString();
    }
};
