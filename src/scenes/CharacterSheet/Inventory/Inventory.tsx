import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";
import WornItemsView from "./Components/WornItems";
import ReadiedItemsView from "./Components/ReadiedItems";
import OtherItemsView from "./Components/OtherItems";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { InventoryStackParamList } from "./InventoryNavigation";
import { EntireAppState } from "../../../store/Store";
import { GetAbilityModifierFromScores } from "../../../PF2eCoreLib/AbilityScores";
import { connect } from "react-redux";
import { Ability } from "../../../PF2eCoreLib/Ability";

export type InventoryNavigationProps = StackNavigationProp<
    InventoryStackParamList,
    "EditInventoryView"
>;

const InventoryPage: React.FC<Props> = (props) => {
    const navigation = useNavigation<InventoryNavigationProps>();
    const goToEditInventoryView = () => {
        console.debug("Navigation to Inventory");
        navigation.navigate("EditInventoryView");
    };
    const currentBulk: number = props.currentBulk;
    const maxBulk: number = 10 + props.strengthModifier;
    const encumberedBulk: number = 5 + props.strengthModifier;
    const encumbered: boolean = currentBulk >= encumberedBulk;
    const maxInvested: number = 10;
    return (
        <Layout style={styles.container}>
            <Layout
                style={{
                    flex: 0.1,
                    borderWidth: 1,
                    alignContent: "center",
                }}
            >
                <Layout
                    style={{ flexDirection: "row", justifyContent: "center" }}
                >
                    <Text category="h5" style={{ marginHorizontal: 5 }}>
                        Bulk: {currentBulk}/{encumberedBulk}({maxBulk})
                    </Text>
                    <Text category="h5" style={{ marginHorizontal: 5 }}>
                        Invested: {props.currentInvested} of {maxInvested}
                    </Text>
                </Layout>
                {encumbered ? (
                    <Text
                        category="s2"
                        appearance="hint"
                        style={{ textAlign: "center" }}
                    >
                        Encumbered
                    </Text>
                ) : (
                    <></>
                )}
            </Layout>
            <ScrollView style={{ flex: 1 }}>
                <ReadiedItemsView readiedItems={[]} />
                <WornItemsView wornItems={[]} />
                <OtherItemsView otherItems={[]} />
            </ScrollView>
        </Layout>
    );
};

type Props = LinkStateProps;

interface LinkStateProps {
    strengthModifier: number;
    currentBulk: number;
    currentInvested: number;
}

const mapStateToProps = (state: EntireAppState): LinkStateProps => {
    return {
        strengthModifier: GetAbilityModifierFromScores(
            Ability.Strength,
            state.playerCharacter.abilityScores
        ),
        currentBulk: Math.floor(
            state.playerCharacter.inventory.items.reduce(
                (x, { bulk }) => x + bulk,
                0
            )
        ),
        currentInvested: state.playerCharacter.inventory.items.filter(
            (item) => item.invested
        ).length,
    };
};

export default connect(mapStateToProps, null)(InventoryPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
});
