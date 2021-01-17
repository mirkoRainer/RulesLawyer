import React from "react";
import { StyleSheet } from "react-native";
import {
    IndexPath,
    Layout,
    Select,
    SelectItem,
    Text,
} from "@ui-kitten/components";
import { ArmorGroup } from "../../../PF2eCoreLib/ArmorGroup";
import { ArmorCategory } from "../../../PF2eCoreLib/ArmorCategory";
import { Proficiencies } from "../../../PF2eCoreLib/Proficiencies";

type Props = {
    category: ArmorCategory;
    group: ArmorGroup;
    proficiency: Proficiencies;
    handleArmorCategorySelect: (index: IndexPath | IndexPath[]) => void;
    handleArmorGroupSelect: (index: IndexPath | IndexPath[]) => void;
};

export const EditArmorCategoryAndGroup: React.FC<Props> = ({
    category,
    group,
    proficiency,
    handleArmorCategorySelect,
    handleArmorGroupSelect,
}) => {
    return (
        <Layout>
            <Select
                value={category.toString()}
                label={"Armor Category (" + proficiency + ")"}
                onSelect={handleArmorCategorySelect}
            >
                <SelectItem title={"Unarmored"} />
                <SelectItem title={"Light"} />
                <SelectItem title={"Medium"} />
                <SelectItem title={"Heavy"} />
            </Select>
            <Select
                value={group}
                label={"Armor Group"}
                onSelect={handleArmorGroupSelect}
                placeholder={"Select Armor Group"}
            >
                <SelectItem title={ArmorGroup[ArmorGroup.Leather]} />
                <SelectItem title={ArmorGroup[ArmorGroup.Composite]} />
                <SelectItem title={ArmorGroup[ArmorGroup.Chain]} />
                <SelectItem title={ArmorGroup[ArmorGroup.Plate]} />
                <SelectItem title={ArmorGroup[ArmorGroup.Clothing]} />
            </Select>
        </Layout>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
