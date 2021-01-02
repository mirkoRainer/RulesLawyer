import React, { useState, useEffect } from "react";
import {
    Layout,
    Text,
    Input,
    Icon,
    Card,
    Button,
    Select,
    SelectItem,
    IndexPath,
    Divider,
} from "@ui-kitten/components";
import {
    StyleSheet,
    SafeAreaView,
    KeyboardAvoidingView,
    Dimensions,
} from "react-native";
import Modal from "react-native-modal";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { EntireAppState } from "../../../../../store/Store";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import {
    Armor,
    Price,
    ArmorProficiencies,
    DEFAULT_ARMOR,
    isArmor,
} from "../../../../../PF2eCoreLib/PlayerCharacter";
import { startChangeWornArmor } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { ArmorCategory } from "../../../../../PF2eCoreLib/ArmorCategory";
import { Dictionary } from "../../../../Shared/Misc/Dictionary";
import CoinPriceEditor from "../../../../Shared/CoinPriceEditor";
import { ScrollView } from "react-native-gesture-handler";
import { isNumbersOnly } from "../../../../Shared/Misc/StringToNumberHelper";
import { iBonus } from "../../../../../PF2eCoreLib/Bonus";
import { ArmorGroup } from "../../../../../PF2eCoreLib/ArmorGroup";
import { Traits } from "../../../../../PF2eCoreLib/Traits";
import TraitSelector from "../../../../Shared/TraitSelector";
import { getWornArmorProficiency } from "./ArmorClassHelper";
import { Proficiencies } from "../../../../../PF2eCoreLib/Proficiencies";
import { DefenseStackParamList } from "../../DefenseNavigation";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = LinkStateProps & LinkDispatchProps & OwnProps;

export type EditArmorNavigationProps = StackNavigationProp<
    DefenseStackParamList,
    "EditWornArmor"
>;

interface OwnProps {
    navigation: EditArmorNavigationProps;
}

const EditWornArmor: React.FC<Props> = (props) => {
    const CheckIcon = (props: any) => (
        <Icon {...props} name="checkmark-circle-outline" />
    );
    const [input, setInput] = useState({
        name: props.wornArmor.name,
        category: props.wornArmor.category,
        level: props.wornArmor.level,
        price: {
            Copper: props.wornArmor.price.Copper.toString(),
            Silver: props.wornArmor.price.Silver.toString(),
            Gold: props.wornArmor.price.Gold.toString(),
            Platinum: props.wornArmor.price.Platinum.toString(),
        },
        acBonus: props.wornArmor.acBonus.toString(),
        dexCap: props.wornArmor.dexCap.toString(),
        strengthRequirement: props.wornArmor.strengthRequirement.toString(),
        bulk: props.wornArmor.bulk.toString(),
        wornBulk: props.wornArmor.wornBulk.toString(),
        checkPenaltyAmount: props.wornArmor.checkPenalty.amount.toString(),
        speedPenaltyAmount: props.wornArmor.speedPenalty.amount.toString(),
        group: props.wornArmor.armorGroup,
        traits: props.wornArmor.traits,
    });

    const wornProficiency: Proficiencies = getWornArmorProficiency(
        props.armorProficiencies,
        props.wornArmor.category
    );

    const categoryData: Dictionary<keyof ArmorCategory> = {
        0: "Unarmored",
        1: "Light",
        2: "Medium",
        3: "Heavy",
    };
    const handleArmorCategorySelect = (index: IndexPath | IndexPath[]) => {
        const trueIndex = index as IndexPath;
        setInput({
            ...input,
            category: categoryData[trueIndex.row],
        });
    };
    const handleLevelSelect = (index: IndexPath | IndexPath[]) => {
        const trueIndex = index as IndexPath;
        setInput({
            ...input,
            level: trueIndex.row,
        });
    };
    const armorGroupData: Dictionary<string> = {
        0: ArmorGroup.Leather,
        1: ArmorGroup.Composite,
        2: ArmorGroup.Chain,
        3: ArmorGroup.Plate,
    };
    const handleArmorGroupSelect = (index: IndexPath | IndexPath[]) => {
        const trueIndex = index as IndexPath;
        const group: ArmorGroup = armorGroupData[trueIndex.row] as ArmorGroup;
        setInput({
            ...input,
            group,
        });
    };
    const changeArmorName = (name: string) => {
        setInput({
            ...input,
            name,
        });
    };
    const changeACBonus = (acBonus: string) => {
        setInput({
            ...input,
            acBonus,
        });
    };
    const changeDexCap = (dexCap: string) => {
        setInput({
            ...input,
            dexCap,
        });
    };
    const changePrice = (price: typeof input.price) => {
        setInput({
            ...input,
            price,
        });
    };
    const changeCheckPenalty = (checkPenaltyAmount: string) => {
        setInput({
            ...input,
            checkPenaltyAmount,
        });
    };
    const changeSpeedPenalty = (speedPenaltyAmount: string) => {
        setInput({
            ...input,
            speedPenaltyAmount,
        });
    };
    const changeStrengthRequirement = (strengthRequirement: string) => {
        setInput({
            ...input,
            strengthRequirement,
        });
    };
    const changeBulk = (bulk: string) => {
        setInput({
            ...input,
            bulk,
        });
    };
    const changeWornBulk = (wornBulk: string) => {
        setInput({
            ...input,
            wornBulk,
        });
    };
    const changeTraits = (traits: (keyof typeof Traits)[]) => {
        setInput({
            ...input,
            traits: traits,
        });
    };

    const changeWornArmor = () => {
        props.updateWornArmor(inputToArmor(input));
        props.navigation.navigate("MainDefenseView");
    };
    const inputToArmor = (convertFrom: typeof input): Armor => {
        const acBonusIsNumber = isNumbersOnly(input.acBonus);
        const acBonus = acBonusIsNumber ? parseInt(input.acBonus) : 0;
        const dexCapIsNumber = isNumbersOnly(input.dexCap);
        const dexCap = dexCapIsNumber ? parseInt(input.dexCap) : 0;
        const Copper = isNumbersOnly(input.price.Copper)
            ? parseInt(input.price.Copper)
            : 0;
        const Silver = isNumbersOnly(input.price.Silver)
            ? parseInt(input.price.Silver)
            : 0;
        const Gold = isNumbersOnly(input.price.Gold)
            ? parseInt(input.price.Gold)
            : 0;
        const Platinum = isNumbersOnly(input.price.Platinum)
            ? parseInt(input.price.Platinum)
            : 0;
        const checkPenalty: iBonus = isNumbersOnly(input.checkPenaltyAmount)
            ? {
                  ...props.wornArmor.checkPenalty,
                  amount: parseInt(input.checkPenaltyAmount),
              }
            : { ...props.wornArmor.checkPenalty, amount: 0 };
        const speedPenalty: iBonus = isNumbersOnly(input.speedPenaltyAmount)
            ? {
                  ...props.wornArmor.speedPenalty,
                  amount: parseInt(input.speedPenaltyAmount),
              }
            : { ...props.wornArmor.speedPenalty, amount: 0 };
        return {
            ...convertFrom,
            acBonus,
            dexCap,
            strengthRequirement: parseInt(input.strengthRequirement),
            bulk: parseInt(input.bulk),
            wornBulk: parseInt(input.wornBulk),
            price: {
                Copper,
                Silver,
                Gold,
                Platinum,
            },
            checkPenalty,
            speedPenalty,
            armorGroup: input.group,
            id: props.wornArmor.id,
            description: props.wornArmor.description,
            readied: false,
            invested: props.wornArmor.invested,
            worn: true,
            isContainer: false,
        };
    };

    return (
        <Layout>
            <Layout style={styles.header}>
                <Text>{"Worn Armor:"}</Text>
                <Button
                    appearance="ghost"
                    accessoryLeft={CheckIcon}
                    onPress={changeWornArmor}
                />
            </Layout>
            <ScrollView>
                <Layout>
                    <Card>
                        <Input
                            label={"Name"}
                            placeholder="Armor Name"
                            value={input.name}
                            size="medium"
                            onChangeText={changeArmorName}
                        />
                        <Layout
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "space-around",
                                paddingBottom: 10,
                            }}
                        >
                            <Input
                                label={"AC Bonus"}
                                placeholder="AC Bonus"
                                value={input.acBonus}
                                size="medium"
                                keyboardType="numeric"
                                onChangeText={changeACBonus}
                                style={{ flex: 1, paddingHorizontal: 5 }}
                            />
                            <Input
                                label={"Dexterity Cap"}
                                placeholder="DEX Cap"
                                value={input.dexCap}
                                size="medium"
                                keyboardType="numeric"
                                onChangeText={changeDexCap}
                                style={{ flex: 1, paddingHorizontal: 5 }}
                            />
                        </Layout>
                    </Card>
                    <Card>
                        <Select
                            value={input.category}
                            label={"Armor Category (" + wornProficiency + ")"}
                            onSelect={handleArmorCategorySelect}
                        >
                            <SelectItem title={"Unarmored"} />
                            <SelectItem title={"Light"} />
                            <SelectItem title={"Medium"} />
                            <SelectItem title={"Heavy"} />
                        </Select>
                        <Select
                            value={input.group}
                            label={"Armor Group"}
                            onSelect={handleArmorGroupSelect}
                            placeholder={"Select Armor Group"}
                        >
                            <SelectItem
                                title={ArmorGroup[ArmorGroup.Leather]}
                            />
                            <SelectItem
                                title={ArmorGroup[ArmorGroup.Composite]}
                            />
                            <SelectItem title={ArmorGroup[ArmorGroup.Chain]} />
                            <SelectItem title={ArmorGroup[ArmorGroup.Plate]} />
                        </Select>
                        <Select
                            value={input.level}
                            label={"Item Level"}
                            onSelect={handleLevelSelect}
                            placeholder={"Choose Item Level"}
                        >
                            <SelectItem title={0} />
                            <SelectItem title={1} />
                            <SelectItem title={2} />
                        </Select>
                        <CoinPriceEditor
                            currentPrice={input.price}
                            updatePrice={changePrice}
                        />
                    </Card>
                    <Card>
                        <Layout
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "space-around",
                                paddingBottom: 10,
                            }}
                        >
                            <Input
                                label={"Check Penalty"}
                                placeholder="Penalty"
                                value={input.checkPenaltyAmount}
                                size="medium"
                                keyboardType="numeric"
                                onChangeText={changeCheckPenalty}
                                style={{ flex: 1, paddingHorizontal: 5 }}
                            />
                            <Input
                                label={"Speed Penalty"}
                                placeholder="Penalty"
                                value={input.speedPenaltyAmount}
                                size="medium"
                                keyboardType="numeric"
                                onChangeText={changeSpeedPenalty}
                                style={{ flex: 1, paddingHorizontal: 5 }}
                            />
                            <Input
                                label={"Strength Req."}
                                placeholder="STR Req"
                                value={input.strengthRequirement}
                                size="medium"
                                keyboardType="numeric"
                                onChangeText={changeStrengthRequirement}
                                style={{ flex: 1, paddingHorizontal: 5 }}
                            />
                        </Layout>
                        <Layout
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "space-around",
                            }}
                        >
                            <Input
                                label={"Bulk"}
                                placeholder="Bulk"
                                value={input.bulk}
                                size="medium"
                                keyboardType="numeric"
                                onChangeText={changeBulk}
                                style={{ flex: 1, paddingHorizontal: 5 }}
                            />
                            <Input
                                label={"Worn Bulk"}
                                placeholder="Worn Bulk"
                                value={input.wornBulk}
                                size="medium"
                                keyboardType="numeric"
                                onChangeText={changeWornBulk}
                                style={{ flex: 1, paddingHorizontal: 5 }}
                            />
                        </Layout>
                    </Card>
                    <TraitSelector
                        onSelection={changeTraits}
                        currentTraits={props.wornArmor.traits}
                    />
                </Layout>
            </ScrollView>
        </Layout>
    );
};

interface LinkDispatchProps {
    updateWornArmor: (WornArmor: Armor) => void;
}

interface LinkStateProps {
    wornArmor: Armor;
    armorProficiencies: ArmorProficiencies;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {
        updateWornArmor: bindActionCreators(startChangeWornArmor, dispatch),
    };
};

const mapStateToProps = (
    state: EntireAppState,
    ownProps: OwnProps
): LinkStateProps => {
    const armors: Armor[] = state.playerCharacter.inventory.items.filter<Armor>(
        isArmor
    );
    const wornArmor: Armor | undefined = armors.find((armor) => armor.worn);
    return {
        wornArmor: wornArmor ? wornArmor : DEFAULT_ARMOR,
        armorProficiencies: state.playerCharacter.armorProficiencies,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditWornArmor);

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
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
