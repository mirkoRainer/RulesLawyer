import React, { useState, useEffect } from "react";
import { Layout, Text, Input, Icon, Card, Button, Select, SelectItem, IndexPath, Divider } from "@ui-kitten/components";
import {
    StyleSheet, SafeAreaView, KeyboardAvoidingView, Dimensions
} from "react-native";
import Modal from "react-native-modal";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { EntireAppState } from "../../../../../store/Store";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import { WornArmor, Price, ArmorProficiencies } from "../../../../../PF2eCoreLib/PlayerCharacter";
import { startChangeWornArmor } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { ArmorCategory } from "../../../../../PF2eCoreLib/ArmorCategory";
import { Dictionary } from "../../../../Shared/Misc/Dictionary";
import CoinPriceEditor from "../../../../Shared/CoinPriceEditor";
import { ScrollView } from "react-native-gesture-handler";
import { isNumbersOnly } from "../../../../Shared/Misc/StringToNumberHelper";
import { iBonus } from "../../../../../PF2eCoreLib/Bonus";
import { ArmorGroup } from "../../../../../PF2eCoreLib/ArmorGroup";
import { Traits } from "../../../../../PF2eCoreLib/Traits";
import { TraitSelector } from "../../../../Shared/TraitSelector";
import { getWornArmorProficiency } from "./ArmorClassHelper";
import { Proficiencies } from "../../../../../PF2eCoreLib/Proficiencies";
import { DefenseStackParamList } from "../../DefenseNavigation";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = LinkStateProps & LinkDispatchProps & OwnProps;

export type EditArmorNavigationProps = StackNavigationProp<DefenseStackParamList, "EditWornArmor">;

interface OwnProps {
    navigation: EditArmorNavigationProps
}


const EditWornArmor: React.FC<Props> = (props) => {
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

    const wornProficiency: Proficiencies = getWornArmorProficiency(props.armorProficiencies, props.wornArmor.Category);

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
    const changeTraits = (traits: (keyof typeof Traits)[]) => {
        setInput({
            ...input,
            Traits: traits
        });
    };
    
    const changeWornArmor = () => {
        props.updateWornArmor(inputToArmor(input));
        props.navigation.navigate("MainDefenseView");
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
        <Layout>
            <Layout style={styles.header}>
                <Text>{"Worn Armor:"}</Text>
                <Button appearance='ghost' accessoryLeft={CheckIcon} onPress={changeWornArmor}/>
            </Layout>
            <ScrollView>
                <Layout>
                    <Card>
                        <Input 
                            label={"Name"}
                            placeholder='Armor Name'
                            value={input.Name}
                            size='medium'
                            onChangeText={changeArmorName}
                        />
                        <Layout style={{flex: 1, flexDirection: "row", justifyContent: "space-around", paddingBottom: 10}}>
                            <Input 
                                label={"AC Bonus"}
                                placeholder='AC Bonus'
                                value={input.ACBonus}
                                size='medium'
                                keyboardType='numeric'
                                onChangeText={changeACBonus}
                                style={{flex: 1, paddingHorizontal: 5}}
                            />
                            <Input 
                                label={"Dexterity Cap"}
                                placeholder='DEX Cap'
                                value={input.DexCap}
                                size='medium'
                                keyboardType='numeric'
                                onChangeText={changeDexCap}
                                style={{flex: 1, paddingHorizontal: 5}}
                            />
                        </Layout>
                    </Card>
                    <Card>
                        <Select
                            value={input.Category}
                            label={"Armor Category (" + wornProficiency +")"}
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
                        <Layout style={{flex: 1, flexDirection: "row", justifyContent: "space-around", paddingBottom: 10}}>
                            <Input 
                                label={"Check Penalty"}
                                placeholder='Penalty'
                                value={input.CheckPenaltyAmount}
                                size='medium'
                                keyboardType='numeric'
                                onChangeText={changeCheckPenalty}
                                style={{flex: 1, paddingHorizontal: 5}}
                            />
                            <Input 
                                label={"Speed Penalty"}
                                placeholder='Penalty'
                                value={input.SpeedPenaltyAmount}
                                size='medium'
                                keyboardType='numeric'
                                onChangeText={changeSpeedPenalty}
                                style={{flex: 1, paddingHorizontal: 5}}
                            />
                            <Input 
                                label={"Strength Req."}
                                placeholder='STR Req'
                                value={input.StrengthRequirement}
                                size='medium'
                                keyboardType='numeric'
                                onChangeText={changeStrengthRequirement}
                                style={{flex: 1, paddingHorizontal: 5}}
                            />
                        </Layout>
                        <Layout style={{flex: 1, flexDirection: "row", justifyContent: "space-around"}}>
                            <Input 
                                label={"Bulk"}
                                placeholder='Bulk'
                                value={input.Bulk}
                                size='medium'
                                keyboardType='numeric'
                                onChangeText={changeBulk}
                                style={{flex: 1, paddingHorizontal: 5}}
                            />
                            <Input 
                                label={"Worn Bulk"}
                                placeholder='Worn Bulk'
                                value={input.WornBulk}
                                size='medium'
                                keyboardType='numeric'
                                onChangeText={changeWornBulk}
                                style={{flex: 1, paddingHorizontal: 5}}
                            />
                                
                        </Layout>
                    </Card>
                    <TraitSelector onSelection={changeTraits} currentTraits={props.wornArmor.Traits}/>
                </Layout>
            </ScrollView>
        </Layout>
    );
};

interface LinkDispatchProps {
    updateWornArmor: (WornArmor: WornArmor) => void;
}

interface LinkStateProps {
    wornArmor: WornArmor,
    armorProficiencies: ArmorProficiencies
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
    state: EntireAppState,
    ownProps: OwnProps
): LinkStateProps => ({
    wornArmor: state.playerCharacter.wornArmor,
    armorProficiencies: state.playerCharacter.armorProficiencies
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWornArmor);

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    modal: {
        width: 300,
        height: "75%",
        marginBottom: 5,
        justifyContent: "flex-start",
        alignSelf: "center",
    },
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
});
