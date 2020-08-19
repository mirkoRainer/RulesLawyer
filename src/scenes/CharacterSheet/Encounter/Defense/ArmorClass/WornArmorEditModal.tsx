import React, { useState, useEffect } from "react";
import { Layout, Text, Input, Icon, Card, Button, Modal, Select, SelectItem, IndexPath } from "@ui-kitten/components";
import {
    StyleSheet, SafeAreaView
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AppState } from "../../../../../store/Store";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { WornArmor, Price } from "../../../../../PF2eCoreLib/PlayerCharacter";
import { startChangeWornArmor } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { ArmorCategory } from "../../../../../PF2eCoreLib/ArmorCategory";
import { Dictionary } from "../../../../Shared/Misc/Dictionary";
import CoinPriceEditor from "../../../../Shared/CoinPriceEditor";
import { ScrollView } from "react-native-gesture-handler";
import { isNumbersOnly } from "../../../../Shared/Misc/StringToNumberHelper";
import { iBonus } from "../../../../../PF2eCoreLib/Bonus";

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
        Price: {
            Copper:   props.wornArmor.Price.Copper.toString(),
            Silver:   props.wornArmor.Price.Silver.toString(),
            Gold:     props.wornArmor.Price.Gold.toString(),
            Platinum: props.wornArmor.Price.Platinum.toString()
        },
        ACBonus: props.wornArmor.ACBonus.toString(),
        DexCap: props.wornArmor.DexCap.toString(),
        StrengthRequirement: props.wornArmor.StrengthRequirement.toString(),
        Bulk: props.wornArmor.Bulk.toString(),
        WornBulk: props.wornArmor.WornBulk.toString(),
        CheckPenalty: props.wornArmor.CheckPenalty,
        SpeedPenalty: props.wornArmor.SpeedPenalty,
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

    const handleLevelSelect = (index: IndexPath | IndexPath[]) => {
        const trueIndex = index as IndexPath;
        setInput({
            ...input,
            Level: trueIndex.row
        });
    };

    const changeArmorName = (Name: string) => {
        setInput({
            ...input,
            Name
        });
    };
    const changeACBonus = (ACBonus: string) => {
        setInput({
            ...input,
            ACBonus
        });
    };
    const changeDexCap = (DexCap: string) => {
        setInput({
            ...input,
            DexCap
        });
    };

    const changePrice = (Price: typeof input.Price) => {
        setInput({
            ...input,
            Price
        });
    };
    const changeCheckPenalty = (penaltyAmount: string) => {
        const CheckPenalty: iBonus = isNumbersOnly(penaltyAmount) ? { ...input.CheckPenalty,  amount: parseInt(penaltyAmount) } : { ...input.CheckPenalty, amount: 0};
        setInput({
            ...input,
            CheckPenalty
        });
    };

    const inputToArmor = (convertFrom: typeof input): WornArmor => {
        const acBonusIsNumber = isNumbersOnly(input.ACBonus);
        const ACBonus = acBonusIsNumber ? parseInt(input.ACBonus) : 0;
        const dexCapIsNumber = isNumbersOnly(input.DexCap);
        const DexCap = dexCapIsNumber ? parseInt(input.DexCap) : 0;
        const Copper = isNumbersOnly(input.Price.Copper) ? parseInt(input.Price.Copper) : 0;
        const Silver = isNumbersOnly(input.Price.Silver) ? parseInt(input.Price.Silver) : 0;
        const Gold = isNumbersOnly(input.Price.Gold) ? parseInt(input.Price.Gold) : 0;
        const Platinum = isNumbersOnly(input.Price.Platinum) ? parseInt(input.Price.Platinum) : 0;
        return{
            ...convertFrom,
            ACBonus,
            DexCap,
            StrengthRequirement: parseInt(input.StrengthRequirement),
            Bulk: parseInt(input.Bulk),
            WornBulk: parseInt(input.WornBulk),
            Price: {
                Copper,
                Silver,
                Gold,
                Platinum
            },
        };
    };
    const changeWornArmor = () => {
        props.toggleModal();
        props.updateWornArmor(inputToArmor(input));
    };

    return (
        <Modal
            visible={props.visible}
            style={styles.modal}
            backdropStyle={styles.backdrop}
        >
            <ScrollView>
                <Card style={{width: 300}}>
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
                        >
                            <SelectItem title={"Unarmored"} />
                            <SelectItem title={"Light"} />
                            <SelectItem title={"Medium"} />
                            <SelectItem title={"Heavy"} />
                        </Select>
                        <Input 
                            label={"AC Bonus"}
                            placeholder='AC Bonus'
                            value={input.ACBonus}
                            size='medium'
                            keyboardType='numeric'
                            onChangeText={changeACBonus}
                        />
                        <Input 
                            label={"Dexterity Cap"}
                            placeholder='DEX Cap'
                            value={input.DexCap}
                            size='medium'
                            keyboardType='numeric'
                            onChangeText={changeDexCap}
                        />
                        <Select
                            value={input.Level}
                            label={"Item Level"}
                            onSelect={handleLevelSelect}
                            placeholder={"Choose Item Level"}
                        >
                            <SelectItem title={0} />
                            <SelectItem title={1} />
                            <SelectItem title={2} />
                        </Select>
                        <CoinPriceEditor currentPrice={input.Price} updatePrice={changePrice} />
                        <Input 
                            label={"Check Penalty"}
                            placeholder='Penalty'
                            value={input.CheckPenalty.amount.toString()}
                            size='medium'
                            keyboardType='numeric'
                            onChangeText={changeCheckPenalty}
                        />
                        <Text>Check Penalty:</Text>
                        <Text>Speed Penalty:</Text>
                        <Text>Strength Requirement:</Text>
                        <Text>Bulk:</Text>
                        <Text>Worn Bulk:</Text>
                        <Text>Armor Group:</Text>
                        <Text>Traits:</Text>
                    </Layout>
                </Card>
            </ScrollView>
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
