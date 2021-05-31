import React, { useState } from "react";
import {
    Layout,
    Text,
    Input,
    Card,
    Button,
    Select,
    SelectItem,
    IndexPath,
    TopNavigation,
    TopNavigationAction,
} from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { EntireAppState } from "../../../../../store/Store";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";
import {
    Armor,
    DEFAULT_ARMOR,
    IsArmor,
} from "../../../../../PF2eCoreLib/PlayerCharacter/Armor";
import { ArmorProficiencies } from "../../../../../PF2eCoreLib/PlayerCharacter/ArmorProficiencies";
import { startChangeWornArmor } from "../../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import CoinPriceEditor from "../../../../Shared/CoinPriceEditor";
import { ScrollView } from "react-native-gesture-handler";
import {
    isNumbersOnly,
    isNumbersOnlyElseReturn0,
} from "../../../../Shared/Misc/StringToNumberHelper";
import { iBonus } from "../../../../../PF2eCoreLib/Bonus";
import { ArmorGroup } from "../../../../../PF2eCoreLib/ArmorGroup";
import { Traits } from "../../../../../PF2eCoreLib/Traits";
import { getArmorProficiencyForCurrentPC } from "./ArmorClassHelper";
import { Proficiencies } from "../../../../../PF2eCoreLib/Proficiencies";
import { DefenseStackParamList } from "../../DefenseNavigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { BackIcon, CheckIcon } from "../../../../Shared/IconButtons";
import {
    ArmorCategoryData,
    ArmorGroupData,
} from "../../../../Shared/Armor/ArmorHelper";
import EditAcBonusAndDexCap from "../../../../Shared/Armor/EditAcBonusAndDexCap";
import { EditArmorCategoryAndGroup } from "../../../../Shared/Armor/EditArmorCategoryAndGroup";
import { ArmorCategory } from "../../../../../PF2eCoreLib/ArmorCategory";
import { EditArmorPenaltiesAndStrReq } from "../../../../Shared/Armor/EditArmorPenaltiesAndStrReq";
import { BonusType } from "../../../../../PF2eCoreLib/BonusTypes";
import { ArmorSelector } from "./ArmorSelector";

type Props = LinkStateProps & LinkDispatchProps & OwnProps;

export type EditArmorNavigationProps = StackNavigationProp<
    DefenseStackParamList,
    "EditWornArmor"
>;
// TODO [#28]: Make Worn Armor a selectable list of Armor in the Inventory
const EditWornArmor: React.FC<Props> = (props) => {
    const [input, setInput] = useState({
        name: props.wornArmor.name,
        category: props.wornArmor.category,
        level: props.wornArmor.level,
        price: {
            Copper: props.wornArmor.price.Copper,
            Silver: props.wornArmor.price.Silver,
            Gold: props.wornArmor.price.Gold,
            Platinum: props.wornArmor.price.Platinum,
        },
        acBonus: props.wornArmor.acBonus.amount.toString(),
        dexCap: props.wornArmor.dexCap.toString(),
        strengthRequirement: props.wornArmor.strengthRequirement.toString(),
        bulk: props.wornArmor.bulk.toString(),
        wornBulk: props.wornArmor.wornBulk.toString(),
        checkPenaltyAmount: props.wornArmor.checkPenalty.amount.toString(),
        speedPenaltyAmount: props.wornArmor.speedPenalty.amount.toString(),
        group: props.wornArmor.armorGroup,
        traits: props.wornArmor.traits,
    });

    const wornProficiency: Proficiencies = getArmorProficiencyForCurrentPC(
        props.wornArmor.category
    );

    const handleArmorCategorySelect = (index: IndexPath | IndexPath[]) => {
        const trueIndex = index as IndexPath;
        setInput({
            ...input,
            category: ArmorCategoryData[trueIndex.row] as ArmorCategory,
        });
    };
    const onChangeLevel = (text: string) => {
        const level: number = isNumbersOnlyElseReturn0(text);
        setInput({
            ...input,
            level,
        });
    };
    const handleArmorGroupSelect = (index: IndexPath | IndexPath[]) => {
        const trueIndex = index as IndexPath;
        const group: ArmorGroup = ArmorGroupData[trueIndex.row] as ArmorGroup;
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
        const acBonusInput = isNumbersOnlyElseReturn0(input.acBonus);
        const dexCap = isNumbersOnlyElseReturn0(input.dexCap);
        const checkPenalty: iBonus = {
            ...props.wornArmor.checkPenalty,
            amount: isNumbersOnlyElseReturn0(input.checkPenaltyAmount),
        };
        const speedPenalty: iBonus = {
            ...props.wornArmor.speedPenalty,
            amount: isNumbersOnlyElseReturn0(input.speedPenaltyAmount),
        };
        return {
            ...convertFrom,
            acBonus: {
                type: BonusType.Item,
                amount: acBonusInput,
                appliesTo: "ac",
                source: props.wornArmor.id.toString(),
            },
            dexCap,
            strengthRequirement: parseInt(input.strengthRequirement),
            bulk: parseInt(input.bulk),
            wornBulk: parseInt(input.wornBulk),
            price: input.price,
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

    const header = () => {};
    const onArmorSelect = (armor: Armor | undefined) => {
        if (!armor) return;
        props.updateWornArmor(armor);
    };

    return (
        <Layout style={{ flex: 1 }}>
            <TopNavigation
                accessoryLeft={() => (
                    <TopNavigationAction
                        icon={BackIcon}
                        onPress={() => {
                            props.navigation.goBack();
                        }}
                    />
                )}
                title={"Select Armor to Wear"}
            />
            <ArmorSelector
                currentArmors={props.armors}
                currentArmorSelected={props.wornArmor}
                onSelect={onArmorSelect}
            />
            {/* <ScrollView>
                <Card>
                    <Input
                        label={"Name"}
                        placeholder="Armor Name"
                        value={input.name}
                        size="medium"
                        onChangeText={changeArmorName}
                    />
                    <EditAcBonusAndDexCap
                        acBonus={input.acBonus}
                        dexCap={input.dexCap}
                        changeACBonus={changeACBonus}
                        changeDexCap={changeDexCap}
                    />
                </Card>
                <Card>
                    <EditArmorCategoryAndGroup
                        category={input.category}
                        group={input.group}
                        proficiency={wornProficiency}
                        handleArmorCategorySelect={handleArmorCategorySelect}
                        handleArmorGroupSelect={handleArmorGroupSelect}
                    />
                    <Input
                        label={"Level"}
                        placeholder="Item Level"
                        value={input.level.toString()}
                        size="medium"
                        keyboardType="numeric"
                        onChangeText={onChangeLevel}
                        style={{ flex: 1, paddingHorizontal: 5 }}
                    />
                    <CoinPriceEditor
                        currentPrice={input.price}
                        updatePrice={changePrice}
                    />
                </Card>
                <Card>
                    <EditArmorPenaltiesAndStrReq
                        changeCheckPenalty={changeCheckPenalty}
                        changeSpeedPenalty={changeSpeedPenalty}
                        changeStrengthRequirement={changeStrengthRequirement}
                        checkPenaltyAmount={input.checkPenaltyAmount}
                        speedPenaltyAmount={input.speedPenaltyAmount}
                        strengthRequirement={input.strengthRequirement}
                    />
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
            </ScrollView> */}
        </Layout>
    );
};

interface OwnProps {
    navigation: EditArmorNavigationProps;
    editArmor?: Armor;
}
interface LinkDispatchProps {
    updateWornArmor: (WornArmor: Armor) => void;
}

interface LinkStateProps {
    wornArmor: Armor;
    armorProficiencies: ArmorProficiencies;
    armors: Armor[];
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
        IsArmor
    );
    if (ownProps.editArmor) {
        return {
            wornArmor: ownProps.editArmor,
            armorProficiencies: state.playerCharacter.armorProficiencies,
            armors,
        };
    }
    const wornArmor: Armor | undefined = armors.find((armor) => armor.worn);
    return {
        wornArmor: wornArmor ? wornArmor : DEFAULT_ARMOR,
        armorProficiencies: state.playerCharacter.armorProficiencies,
        armors,
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
