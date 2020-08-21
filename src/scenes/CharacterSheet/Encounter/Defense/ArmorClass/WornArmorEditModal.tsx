import React, { useState, useEffect } from "react";
import { Layout, Text, Input, Icon, Card, Button, Modal, Select, SelectItem, IndexPath, Divider } from "@ui-kitten/components";
import {
    StyleSheet, SafeAreaView, KeyboardAvoidingView, Dimensions
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
import { ArmorGroup } from "../../../../../PF2eCoreLib/ArmorGroup";

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
        CheckPenaltyAmount: props.wornArmor.CheckPenalty.amount.toString(),
        SpeedPenaltyAmount: props.wornArmor.SpeedPenalty.amount.toString(),
        Group: props.wornArmor.Group,
        Traits: props.wornArmor.Traits
    });

    const categoryData: Dictionary<keyof ArmorCategory> = {
        0: "Unarmored",
        1: "Light",
        2: "Medium",
        3: "Heavy"
    };
    const handleArmorCategorySelect = (index: IndexPath | IndexPath[]) => {
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
    const armorGroupData: Dictionary<string> = {
        0: ArmorGroup.Leather,
        1: ArmorGroup.Composite,
        2: ArmorGroup.Chain,
        3: ArmorGroup.Plate
    };
    const handleArmorGroupSelect = (index: IndexPath | IndexPath[]) => {
        const trueIndex = index as IndexPath;
        const Group: ArmorGroup = armorGroupData[trueIndex.row] as ArmorGroup;
        setInput({
            ...input,
            Group
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
    const changeCheckPenalty = (CheckPenaltyAmount: string) => {
        setInput({
            ...input,
            CheckPenaltyAmount
        });
    };
    const changeSpeedPenalty = (SpeedPenaltyAmount: string) => {
        setInput({
            ...input,
            SpeedPenaltyAmount
        });
    };
    const changeStrengthRequirement = (StrengthRequirement: string) => {
        setInput({
            ...input,
            StrengthRequirement
        });
    };
    const changeBulk = (Bulk: string) => {
        setInput({
            ...input,
            Bulk
        });
    };
    const changeWornBulk = (WornBulk: string) => {
        setInput({
            ...input,
            WornBulk
        });
    };
    
    const changeWornArmor = () => {
        props.toggleModal();
        props.updateWornArmor(inputToArmor(input));
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
        const CheckPenalty: iBonus = isNumbersOnly(input.CheckPenaltyAmount) ? { ...props.wornArmor.CheckPenalty,  amount: parseInt(input.CheckPenaltyAmount) } : { ...props.wornArmor.CheckPenalty, amount: 0};
        const SpeedPenalty: iBonus = isNumbersOnly(input.SpeedPenaltyAmount) ? { ...props.wornArmor.SpeedPenalty,  amount: parseInt(input.SpeedPenaltyAmount) } : { ...props.wornArmor.SpeedPenalty, amount: 0};
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
            CheckPenalty,
            SpeedPenalty
        };
    };

    return (
        <Modal
            visible={props.visible}
            style={styles.modalContainer}
            backdropStyle={styles.backdrop}
        >
            <KeyboardAvoidingView 
                behavior="height" 
                style={styles.keyboardContainer}
                contentContainerStyle={styles.keyboardContainer}
                keyboardVerticalOffset={0}
                enabled
            >
                <Layout style={styles.header}>
                    <Text>{"Worn Armor:"}</Text>
                    <Button appearance='ghost' accessoryLeft={CheckIcon} onPress={changeWornArmor}/>
                </Layout>
                <ScrollView style={{flex: 1}}>
                    <Layout>
                        <Card>
                            <Input 
                                label={"Name"}
                                placeholder='Armor Name'
                                value={input.Name}
                                size='medium'
                                onChangeText={changeArmorName}
                            />
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
                        </Card>
                        <Card>
                            <Select
                                value={input.Category}
                                label={"Armor Category"}
                                onSelect={handleArmorCategorySelect}
                            >
                                <SelectItem title={"Unarmored"} />
                                <SelectItem title={"Light"} />
                                <SelectItem title={"Medium"} />
                                <SelectItem title={"Heavy"} />
                            </Select>
                            <Select
                                value={input.Group}
                                label={"Armor Group"}
                                onSelect={handleArmorGroupSelect}
                                placeholder={"Select Armor Group"}
                            >
                                <SelectItem title={ArmorGroup[ArmorGroup.Leather]}/>
                                <SelectItem title={ArmorGroup[ArmorGroup.Composite]}/>
                                <SelectItem title={ArmorGroup[ArmorGroup.Chain]} />
                                <SelectItem title={ArmorGroup[ArmorGroup.Plate]}/>
                            </Select>
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
                        </Card>
                        <Card>

                            <Input 
                                label={"Check Penalty"}
                                placeholder='Penalty'
                                value={input.CheckPenaltyAmount}
                                size='medium'
                                keyboardType='numeric'
                                onChangeText={changeCheckPenalty}
                            />
                            <Input 
                                label={"Speed Penalty"}
                                placeholder='Penalty'
                                value={input.SpeedPenaltyAmount}
                                size='medium'
                                keyboardType='numeric'
                                onChangeText={changeSpeedPenalty}
                            />
                            <Input 
                                label={"Strength Requirement"}
                                placeholder='STR Req'
                                value={input.StrengthRequirement}
                                size='medium'
                                keyboardType='numeric'
                                onChangeText={changeStrengthRequirement}
                            />
                            <Input 
                                label={"Bulk"}
                                placeholder='Bulk'
                                value={input.Bulk}
                                size='medium'
                                keyboardType='numeric'
                                onChangeText={changeBulk}
                            />
                            <Input 
                                label={"Worn Bulk"}
                                placeholder='Worn Bulk'
                                value={input.WornBulk}
                                size='medium'
                                keyboardType='numeric'
                                onChangeText={changeWornBulk}
                            />
                        </Card>
                        <Text>Traits:</Text>
                    </Layout>
                </ScrollView>
            </KeyboardAvoidingView>
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
        width: 300,
        height: "65%",
        justifyContent: "flex-start"
    },
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    keyboardContainer: {
        flex: 1,
        alignSelf: "center",
        paddingBottom: 5,
        width: Dimensions.get("window").width * .8,
        height: Dimensions.get("window").height * .8,
    },
    modalContainer: {
        flex:1, 
        height: Dimensions.get("window").height * .8,
        width: Dimensions.get("window").width,
        paddingBottom: 10
    }
});
