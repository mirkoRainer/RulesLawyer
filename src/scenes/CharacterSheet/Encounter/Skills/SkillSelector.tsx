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
    onSelect: (skill: Skill | undefined) => void;
};

export const SkillSelector: React.FC<Props> = (props) => {
    const handleSkillSelect = (index: IndexPath | IndexPath[]) => {
        const trueIndex = index as IndexPath;
        const skillArray = getSkillNamesArray();
        console.debug(`handleSkillSelect: ${skillArray[trueIndex.row]}`);
        if (trueIndex.row === 0) {
            props.onSelect(undefined);
            return;
        }
        console.debug(
            `Not undefined so it's ${props.currentSkills[trueIndex.row - 1]}`
        );
        props.onSelect(props.currentSkills[trueIndex.row - 1]);
        return;
    };

    const renderSelectItem = (skill: Skill | undefined) => {
        if (!skill) {
            return <SelectItem title={"None"}></SelectItem>;
        }
        const title: string = skill.loreDescriptor
            ? `${skill.name} ${skill.loreDescriptor} (${skill.proficiency})`
            : `${skill.name} (${skill.proficiency})`;
        return <SelectItem title={title}></SelectItem>;
    };
    const skills = props.currentSkills.map((x) => renderSelectItem(x));
    skills.unshift(renderSelectItem(undefined));
    const value = props.currentSkillSelected
        ? `${
              props.currentSkills[
                  indexOf(
                      getSkillNamesArray(),
                      props.currentSkillSelected?.name
                  )
              ].name
          } (${props.currentSkillSelected.proficiency})`
        : "None";
    const selectedIndex = props.currentSkillSelected
        ? new IndexPath(
              indexOf(getSkillNamesArray(), props.currentSkillSelected?.name) +
                  1
          )
        : new IndexPath(0);

    return (
        <>
            <Select
                label="Skill"
                placeholder="Select a Skill"
                selectedIndex={selectedIndex}
                onSelect={handleSkillSelect}
                value={value}
                style={{ paddingBottom: 10 }}
            >
                {skills}
            </Select>
        </>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
