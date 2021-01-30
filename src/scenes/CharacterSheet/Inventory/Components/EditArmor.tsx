import React from "react";
import { StyleSheet } from "react-native";
import { IndexPath, Input, Layout, Text } from "@ui-kitten/components";
import { Armor } from "../../../../PF2eCoreLib/PlayerCharacter";
import { EditItemState } from "./EditItem";
import EditAcBonusAndDexCap from "../../../Shared/Armor/EditAcBonusAndDexCap";
import { isNumbersOnlyElseReturn0 } from "../../../Shared/Misc/StringToNumberHelper";
import { EditArmorCategoryAndGroup } from "../../../Shared/Armor/EditArmorCategoryAndGroup";
import { getArmorProficiencyForCurrentPC } from "../../Encounter/Defense/ArmorClass/ArmorClassHelper";
import { ArmorGroup } from "../../../../PF2eCoreLib/ArmorGroup";
import {
    ArmorCategoryData,
    ArmorGroupData,
} from "../../../Shared/Armor/ArmorHelper";
import { ArmorCategory } from "../../../../PF2eCoreLib/ArmorCategory";
import { iBonus } from "../../../../PF2eCoreLib/Bonus";
import { BonusType } from "../../../../PF2eCoreLib/BonusTypes";
import { EditArmorPenaltiesAndStrReq } from "../../../Shared/Armor/EditArmorPenaltiesAndStrReq";

type Props = {
    armor: Armor;
    state: EditItemState;
    setState: React.Dispatch<React.SetStateAction<EditItemState>>;
};

export const EditArmor: React.FC<Props> = (props) => {
    const onChangeAcBonus = (bonus: string) => {
        const acBonus = isNumbersOnlyElseReturn0(bonus);
        props.setState({
            ...props.state,
            item: { ...props.state.item, acBonus },
        });
    };
    const onChangeDexCap = (cap: string) => {
        const dexCap = isNumbersOnlyElseReturn0(cap);
        props.setState({
            ...props.state,
            item: { ...props.state.item, dexCap },
        });
    };
    const handleArmorGroupSelect = (index: IndexPath | IndexPath[]) => {
        const trueIndex = index as IndexPath;
        const armorGroup: ArmorGroup = ArmorGroupData[
            trueIndex.row
        ] as ArmorGroup;
        props.setState({
            ...props.state,
            item: {
                ...props.state.item,
                armorGroup,
            },
        });
    };
    const handleArmorCategorySelect = (index: IndexPath | IndexPath[]) => {
        const trueIndex = index as IndexPath;
        props.setState({
            ...props.state,
            item: {
                ...props.state.item,
                category: ArmorCategoryData[trueIndex.row] as ArmorCategory,
            },
        });
    };
    const changeCheckPenalty = (checkPenaltyAmount: string) => {
        const penalty: number = isNumbersOnlyElseReturn0(checkPenaltyAmount);
        const checkPenalty: iBonus = {
            type: BonusType.Untyped,
            appliesTo: "skills", // TODO: make this better. :(
            amount: penalty,
        };
        props.setState({
            ...props.state,
            item: {
                ...props.state.item,
                checkPenalty,
            },
        });
    };
    const changeSpeedPenalty = (speedPenaltyAmount: string) => {
        const penalty: number = isNumbersOnlyElseReturn0(speedPenaltyAmount);
        const speedPenalty: iBonus = {
            type: BonusType.Untyped,
            appliesTo: "speed", // TODO: make this better. :(
            amount: penalty,
        };
        props.setState({
            ...props.state,
            item: {
                ...props.state.item,
                speedPenalty,
            },
        });
    };
    const changeStrengthRequirement = (strengthRequirementString: string) => {
        const strengthRequirement = isNumbersOnlyElseReturn0(
            strengthRequirementString
        );
        props.setState({
            ...props.state,
            item: {
                ...props.state.item,
                strengthRequirement,
            },
        });
    };
    const changeWornBulk = (wornBulkString: string) => {
        const wornBulk = isNumbersOnlyElseReturn0(wornBulkString);
        props.setState({
            ...props.state,
            item: {
                ...props.state.item,
                wornBulk,
            },
        });
    };
    return (
        <Layout>
            <EditAcBonusAndDexCap
                acBonus={props.armor.acBonus}
                dexCap={props.armor.dexCap}
                changeACBonus={onChangeAcBonus}
                changeDexCap={onChangeDexCap}
            />
            <EditArmorCategoryAndGroup
                category={props.armor.category}
                group={props.armor.armorGroup}
                proficiency={getArmorProficiencyForCurrentPC(
                    props.armor.category
                )}
                handleArmorCategorySelect={handleArmorCategorySelect}
                handleArmorGroupSelect={handleArmorGroupSelect}
            />
            <EditArmorPenaltiesAndStrReq
                changeCheckPenalty={changeCheckPenalty}
                changeSpeedPenalty={changeSpeedPenalty}
                changeStrengthRequirement={changeStrengthRequirement}
                checkPenaltyAmount={props.state.item.checkPenalty?.amount!}
                speedPenaltyAmount={props.state.item.speedPenalty?.amount!}
                strengthRequirement={props.state.item.strengthRequirement!}
            />
            <Input
                label={"Worn Bulk"}
                placeholder="Worn Bulk"
                value={props.state.item.wornBulk?.toString()}
                size="medium"
                keyboardType="numeric"
                onChangeText={changeWornBulk}
                style={{ flex: 1, paddingHorizontal: 5 }}
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
