import * as data from "../PF2eCoreLib/populateData/traits.json";

function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}
const traits: string[] = data.traits;
export const Traits = strEnum( traits );
