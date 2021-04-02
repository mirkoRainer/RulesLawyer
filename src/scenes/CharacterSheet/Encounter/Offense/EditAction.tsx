import React from "react";
import { StyleSheet } from "react-native";
import {
    Input,
    Layout,
    Select,
    SelectItem,
    IndexPath,
} from "@ui-kitten/components";
import {
    IsWeapon,
    Weapon,
} from "../../../../PF2eCoreLib/PlayerCharacter/Weapon";
import { Skill } from "../../../../PF2eCoreLib/PlayerCharacter/Skill";
import { Skills } from "../../../../PF2eCoreLib/PlayerCharacter/Skills";
import { PF2Action } from "../../../../PF2eCoreLib/PlayerCharacter/PF2Action";
import { EntireAppState } from "../../../../store/Store";
import {
    reactionSymbol,
    freeActionSymbol,
    actionSymbol,
    MapActionToIndexPath,
    MapIndexToAction,
    DetermineActionSymbol,
} from "./ActionHelper";
import { ScrollView } from "react-native-gesture-handler";
import TraitSelector from "../../../Shared/TraitSelector";
import { SkillSelector } from "../Skills/SkillSelector";
import { WeaponSelector } from "./Weapons/WeaponSelector";
import { Guid } from "guid-typescript";
import { Companion } from "../../../../PF2eCoreLib/PlayerCharacter/Companion";
import { connect } from "react-redux";

const EditAction: React.FC<Props> = (props) => {
    const NumberOfActionsSelector = () => {
        const onSelect = (indexPath: IndexPath | IndexPath[]) => {
            const trueIndex = indexPath as IndexPath;
            const newCost = MapIndexToAction(trueIndex.row);
            props.updateAction(
                { ...props.action, numberOfActions: newCost },
                props.actionIndex
            );
        };
        return (
            <Select
                selectedIndex={MapActionToIndexPath(
                    props.action.numberOfActions
                )}
                onSelect={onSelect}
                value={DetermineActionSymbol(props.action.numberOfActions)}
                label="Action Cost"
            >
                {/* Don't change the order of these. They map to a switch in ActionHelper.ts */}
                <SelectItem title={freeActionSymbol} />
                <SelectItem title={reactionSymbol} />
                <SelectItem title={actionSymbol} />
                <SelectItem title={actionSymbol.repeat(2)} />
                <SelectItem title={actionSymbol.repeat(3)} />
            </Select>
        );
    };

    const updateTraits: (traits: string[]) => void = (traits: string[]) => {
        props.updateAction({ ...props.action, traits }, props.actionIndex);
    };

    const updateSkill: (skill: keyof Skills | undefined) => void = (
        skill: keyof Skills | undefined
    ) => {
        props.updateAction({ ...props.action, skill }, props.actionIndex);
    };

    const updateWeapon: (skill: Weapon | undefined) => void = (
        weapon: Weapon | undefined
    ) => {
        props.updateAction({ ...props.action, weapon }, props.actionIndex);
    };

    return (
        <Layout style={{ flex: 1, paddingVertical: 10 }}>
            <ScrollView>
                <Input
                    label="Action Name"
                    onChangeText={(name: string) =>
                        props.updateAction(
                            { ...props.action, name },
                            props.actionIndex
                        )
                    }
                    placeholder="Name the Action"
                    status={
                        props.action.name || props.action.name !== ""
                            ? "basic"
                            : "danger"
                    }
                    caption={
                        props.action.name ? undefined : "This value is needed"
                    }
                >
                    {props.action.name}
                </Input>
                {NumberOfActionsSelector()}
                <Input
                    label="Description"
                    onChangeText={(description: string) =>
                        props.updateAction(
                            { ...props.action, description },
                            props.actionIndex
                        )
                    }
                    placeholder="Describe the Action here"
                    status={
                        props.action.description ||
                        props.action.description !== ""
                            ? "basic"
                            : "danger"
                    }
                    caption={
                        props.action.description
                            ? undefined
                            : "This value is needed"
                    }
                    multiline={true}
                >
                    {props.action.description}
                </Input>
                <Input
                    label="Source of the Action"
                    onChangeText={(source: string) =>
                        props.updateAction(
                            { ...props.action, source },
                            props.actionIndex
                        )
                    }
                    placeholder="Where did the Action come from? A Feat? A Class Feature? A Weapon?"
                    status={
                        props.action.source || props.action.source !== ""
                            ? "basic"
                            : "danger"
                    }
                    caption={
                        props.action.source ? undefined : "This value is needed"
                    }
                    multiline={true}
                >
                    {props.action.source}
                </Input>
                {props.action.numberOfActions === 0.5 ? (
                    <Input
                        label="Trigger"
                        onChangeText={(trigger: string) => {
                            trigger !== ""
                                ? props.updateAction(
                                      { ...props.action, trigger },
                                      props.actionIndex
                                  )
                                : props.updateAction(
                                      {
                                          ...props.action,
                                          trigger: undefined,
                                      },
                                      props.actionIndex
                                  );
                        }}
                        placeholder="What triggers this reaction?"
                        multiline={true}
                    >
                        {props.action.trigger}
                    </Input>
                ) : (
                    <></>
                )}
                <Input
                    label="Requirements"
                    onChangeText={(requirements: string) => {
                        requirements !== ""
                            ? props.updateAction(
                                  { ...props.action, requirements },
                                  props.actionIndex
                              )
                            : props.updateAction(
                                  {
                                      ...props.action,
                                      requirements: undefined,
                                  },
                                  props.actionIndex
                              );
                    }}
                    placeholder="Action requirements?"
                    multiline={true}
                >
                    {props.action.requirements}
                </Input>
                <Input
                    label="Critical Success"
                    onChangeText={(critSuccess: string) => {
                        critSuccess !== ""
                            ? props.updateAction(
                                  { ...props.action, critSuccess },
                                  props.actionIndex
                              )
                            : props.updateAction(
                                  {
                                      ...props.action,
                                      critSuccess: undefined,
                                  },
                                  props.actionIndex
                              );
                    }}
                    placeholder="What happens on a critSuccess?"
                    multiline={true}
                >
                    {props.action.critSuccess}
                </Input>
                <Input
                    label="Success"
                    onChangeText={(success: string) => {
                        success !== ""
                            ? props.updateAction(
                                  { ...props.action, success },
                                  props.actionIndex
                              )
                            : props.updateAction(
                                  { ...props.action, success: undefined },
                                  props.actionIndex
                              );
                    }}
                    placeholder="What happens on a success?"
                    multiline={true}
                >
                    {props.action.success}
                </Input>
                <Input
                    label="Failure"
                    onChangeText={(failure: string) => {
                        failure !== ""
                            ? props.updateAction(
                                  { ...props.action, failure },
                                  props.actionIndex
                              )
                            : props.updateAction(
                                  { ...props.action, failure: undefined },
                                  props.actionIndex
                              );
                    }}
                    placeholder="What happens on a failure?"
                    multiline={true}
                >
                    {props.action.failure}
                </Input>
                <Input
                    label="Critical Failure"
                    onChangeText={(critFailure: string) => {
                        critFailure !== ""
                            ? props.updateAction(
                                  { ...props.action, critFailure },
                                  props.actionIndex
                              )
                            : props.updateAction(
                                  {
                                      ...props.action,
                                      critFailure: undefined,
                                  },
                                  props.actionIndex
                              );
                    }}
                    placeholder="What happens on a critFailure?"
                    multiline={true}
                >
                    {props.action.critFailure}
                </Input>
                <Input
                    label="Book Source"
                    onChangeText={(bookAbbreviation: string) => {
                        bookAbbreviation !== ""
                            ? props.updateAction(
                                  { ...props.action, bookAbbreviation },
                                  props.actionIndex
                              )
                            : props.updateAction(
                                  {
                                      ...props.action,
                                      bookAbbreviation: undefined,
                                  },
                                  props.actionIndex
                              );
                    }}
                    placeholder="Book this action can be referenced in"
                >
                    {props.action.bookAbbreviation}
                </Input>
                <Input
                    label="Page Number"
                    onChangeText={(pageNumber: string) => {
                        pageNumber !== "" && typeof pageNumber === typeof 1
                            ? props.updateAction(
                                  {
                                      ...props.action,
                                      pageNumber: parseInt(pageNumber),
                                  },
                                  props.actionIndex
                              )
                            : props.updateAction(
                                  {
                                      ...props.action,
                                      pageNumber: undefined,
                                  },
                                  props.actionIndex
                              );
                    }}
                    placeholder="Book this action can be referenced in"
                    keyboardType="numeric"
                >
                    {props.action.pageNumber}
                </Input>
                <WeaponSelector
                    currentWeapons={props.weapons}
                    onSelect={updateWeapon}
                    currentWeaponSelected={props.action.weapon}
                />
                <SkillSelector
                    currentSkills={props.skills}
                    onSelect={updateSkill}
                    currentSkillSelected={props.action.skill}
                />
                <TraitSelector
                    currentTraits={props.action.traits}
                    onSelection={updateTraits}
                />
            </ScrollView>
        </Layout>
    );
};

type Props = OwnProps & LinkStateProps;

type OwnProps = {
    updateAction: (updatedAction: PF2Action, index: number) => void;
    actionIndex: number;
    companionId?: Guid;
};

interface LinkStateProps {
    action: PF2Action;
    skills: Skill[];
    weapons: Weapon[];
}

const mapStateToProps = (
    state: EntireAppState,
    ownProps: OwnProps
): LinkStateProps => {
    if (ownProps.companionId !== undefined) {
        const companion: Companion = state.playerCharacter.companions.find(
            (x) => x.metaData.id.equals(ownProps.companionId!)
        )!;
        const weapons: Weapon[] = companion.inventory.items.filter<Weapon>(
            IsWeapon
        );
        return {
            action: companion.actions[ownProps.actionIndex],
            skills: companion.skills,
            weapons,
        };
    } else {
        const weapons: Weapon[] = state.playerCharacter.inventory.items.filter<Weapon>(
            IsWeapon
        );
        return {
            action: state.playerCharacter.actions[ownProps.actionIndex],
            skills: state.playerCharacter.skills,
            weapons,
        };
    }
};

export default connect(mapStateToProps)(EditAction);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
