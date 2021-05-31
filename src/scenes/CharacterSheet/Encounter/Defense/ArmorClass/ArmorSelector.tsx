import { useNavigation } from "@react-navigation/native";
import { IndexPath, Select, SelectItem } from "@ui-kitten/components";
import { indexOf } from "lodash";
import React, { useEffect, useState } from "react";
import { Armor } from "../../../../../PF2eCoreLib/PlayerCharacter/Armor";
import { getArmorFromInventory } from "../../../../Shared/Armor/ArmorHelper";

type Props = {
    currentArmors: Armor[];
    currentArmorSelected: Armor;
    onSelect: (Armor: Armor | undefined) => void;
};

export const ArmorSelector: React.FC<Props> = (props) => {
    const [armorState, setArmorState] = useState(props.currentArmorSelected);
    const handleArmorSelect = (index: IndexPath | IndexPath[]) => {
        const trueIndex = index as IndexPath;
        setArmorState(props.currentArmors[trueIndex.row]);
    };
    const navigation = useNavigation();
    navigation.addListener("beforeRemove", () => {
        props.onSelect(
            props.currentArmors.find((x) => x.id.equals(armorState.id))
        );
    });
    // useEffect(() => {
    // }, [navigation, armorState]);

    const renderSelectItem = (Armor: Armor) => {
        const title: string = Armor.name;
        return (
            <SelectItem title={title} key={Armor.id.toString()}></SelectItem>
        );
    };
    const armors = props.currentArmors.map((x) => renderSelectItem(x));
    const selectedIndex = new IndexPath(
        indexOf(getArmorFromInventory(), armorState.name)
    );

    return (
        <>
            <Select
                label="Armor"
                placeholder="Select Armor"
                selectedIndex={selectedIndex}
                onSelect={handleArmorSelect}
                value={armorState.name}
                style={{ paddingBottom: 10, paddingHorizontal: 10 }}
            >
                {armors}
            </Select>
        </>
    );
};
