import React, { useState, useEffect } from "react";
import { Layout, Text, Input, Icon, Card, Button, Modal, Select, SelectItem, IndexPath } from "@ui-kitten/components";
import {
    StyleSheet
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AppState } from "../../../../../store/Store";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { WornArmor } from "../../../../../PF2eCoreLib/PlayerCharacter";
import { startChangeWornArmor } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { ArmorCategory } from "../../../../../PF2eCoreLib/ArmorCategory";
import { Dictionary } from "../../../../Shared/Misc/Dictionary";

type OwnProps = {
    visible: boolean
    toggleModal: () => void
};

type Props = LinkStateProps & LinkDispatchProps & OwnProps;

const WornArmorEditModal: React.FC<Props> = (props) => {
    const CheckIcon = (props: any) => (
        <Icon {...props} name="checkmark-circle-outline" />
    );
    const [input, setInput] = useState({
        Name: props.wornArmor.Name,
        Category: props.wornArmor.Category,
        Level: props.wornArmor.Level,
        Price: props.wornArmor.Price,
        ACBonus: props.wornArmor.ACBonus,
        DexCap: props.wornArmor.DexCap,
        CheckPenalty: props.wornArmor.CheckPenalty,
        SpeedPenalty: props.wornArmor.SpeedPenalty,
        StrengthRequirement: props.wornArmor.StrengthRequirement,
        Bulk: props.wornArmor.Bulk,
        WornBulk: props.wornArmor.WornBulk,
        Group: props.wornArmor.Group,
        Traits: props.wornArmor.Traits
    });

    const categoryData: Dictionary<keyof ArmorCategory> = {
        0: "Unarmored",
        1: "Light",
        2: "Medium",
        3: "Heavy"
    };

    const handleCategorySelect = (index: IndexPath | IndexPath[]) => {
        const trueIndex = index as IndexPath;
        setInput({
            ...input,
            Category: categoryData[trueIndex.row]
        });
    };

    const changeArmorName = (Name: string) => {
        setInput({
            ...input,
            Name
        });
    };

    const changeWornArmor = () => {
        props.toggleModal();
        props.updateWornArmor(input);
    };

    return (
        <Modal
            visible={props.visible}
            style={styles.modal}
            backdropStyle={styles.backdrop}
        >
            <Card>
                <Layout style={styles.header}>
                    <Text>{"Worn Armor:"}</Text>
                    <Button appearance='ghost' accessoryLeft={CheckIcon} onPress={changeWornArmor}/>
                </Layout>
                <Layout>
                    <Input 
                        label={"Name"}
                        placeholder='Armor Name'
                        value={input.Name}
                        size='medium'
                        onChangeText={changeArmorName}
                    />
                    <Select
                        value={input.Category}
                        label={"Armor Category"}
                        onSelect={handleCategorySelect}
                        placeholder={"Armor Category"}
                    >
                        <SelectItem title={"Unarmored"} />
                        <SelectItem title={"Light"} />
                        <SelectItem title={"Medium"} />
                        <SelectItem title={"Heavy"} />
                    </Select>
                    <Text>Item Level:</Text>
                    <Text>Price:</Text>
                    <Text>AC Bonus:</Text>
                    <Text>Dex Cap:</Text>
                    <Text>Check Penalty:</Text>
                    <Text>Speed Penalty:</Text>
                    <Text>Strength Requirement:</Text>
                    <Text>Bulk:</Text>
                    <Text>Worn Bulk:</Text>
                    <Text>Armor Group:</Text>
                    <Text>Traits:</Text>
                </Layout>
            </Card>
        </Modal>
    );
};

interface LinkDispatchProps {
    updateWornArmor: (WornArmor: WornArmor) => void;
}

interface LinkStateProps {
    wornArmor: WornArmor
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {
        updateWornArmor: bindActionCreators(startChangeWornArmor, dispatch)
    };
};

const mapStateToProps = (
    state: AppState,
    ownProps: OwnProps
): LinkStateProps => ({
    wornArmor: state.playerCharacter.wornArmor
});

export default connect(mapStateToProps, mapDispatchToProps)(WornArmorEditModal);

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    backdrop: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modal: {
        overflow: "scroll"
    },
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
});
