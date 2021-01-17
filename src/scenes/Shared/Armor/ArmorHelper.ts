import { ArmorCategory } from "../../../PF2eCoreLib/ArmorCategory";
import { ArmorGroup } from "../../../PF2eCoreLib/ArmorGroup";
import { Dictionary } from "../Misc/Dictionary";

export const ArmorCategoryData: Dictionary<string> = {
    0: "Unarmored",
    1: "Light",
    2: "Medium",
    3: "Heavy",
};

export const ArmorGroupData: Dictionary<string> = {
    0: ArmorGroup.Leather,
    1: ArmorGroup.Composite,
    2: ArmorGroup.Chain,
    3: ArmorGroup.Plate,
};
