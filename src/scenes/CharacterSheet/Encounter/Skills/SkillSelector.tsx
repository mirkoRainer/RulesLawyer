import { IndexPath, Select, SelectItem } from "@ui-kitten/components";
import { indexOf } from "lodash";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Skill } from "../../../../PF2eCoreLib/PlayerCharacter";
import { getSkillNamesArray } from "./SkillsHelper";
import SkillsView from "./SkillsView";

type Props = {
    currentSkills: Skill[];
    currentSkillSelected: Skill | undefined;
    onSelect: (skill: Skill) => void;
};

export const SkillSelector: React.FC<Props> = (props) => {
    const handleSkillSelect = (index: IndexPath | IndexPath[]) => {
        const trueIndex = index as IndexPath;
        const skillArray = getSkillNamesArray();
        console.debug(skillArray[trueIndex.row]);
    };

    const renderSelectItem = (skill: Skill | undefined) => {
        if (!skill) { return <SelectItem title={"None"}></SelectItem>;}
        const title: string = skill.loreDescriptor? skill.name + " " + skill.loreDescriptor : skill.name;
        return <SelectItem title={title}></SelectItem>;
    };
    const skills = props.currentSkills.map(x => renderSelectItem(x));
    skills.unshift(renderSelectItem(undefined));
    const value = props.currentSkillSelected ? props.currentSkills[indexOf(getSkillNamesArray(), props.currentSkillSelected?.name)].name : "";
    const selectedIndex = props.currentSkillSelected ? new IndexPath(indexOf(getSkillNamesArray(), props.currentSkillSelected?.name)) : new IndexPath(0);

    return(
        <>
            <Select
                placeholder='Select a Skill'
                selectedIndex={selectedIndex}
                onSelect={handleSkillSelect}
                value={value}
            >
                {skills}
            </Select>
        </>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center"
    }
});