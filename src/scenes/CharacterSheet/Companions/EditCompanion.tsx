import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import {
    Button,
    Layout,
    PopoverPlacements,
    Text,
    Toggle,
} from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { EntireAppState } from "../../../store/Store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { startChangeCompanion } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { Armor, IsArmor } from "../../../PF2eCoreLib/PlayerCharacter/Armor";
import { Companion } from "../../../PF2eCoreLib/PlayerCharacter/Companion";
import {
    CompanionsStackParamList,
    EditCompanionNavigationProps,
} from "./CompanionsNavigator";
import { RouteProp } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { EditAbilityScores } from "../../Shared/Components/EditAbilityScores";
import { AbilityScoreArray } from "../../../PF2eCoreLib/AbilityScores";
import { SelectWornArmor } from "../../Shared/Armor/SelectArmor";
import EditHitPoints from "../../Shared/Components/EditHitPoints";

const EditCompanion: React.FC<Props> = (props) => {
    const setNewAbilityScores = (abilityScores: AbilityScoreArray) => {
        props.updateCompanion({ ...props.companion, abilityScores });
    };
    const onSelectWornArmor = (newArmor: Armor) => {
        const updatedItems = props.companion.inventory.items.map(
            (item, index) => {
                // If it's Armor, set Worn to true if it's the new Armor, otherwise, false.
                if (IsArmor(item)) {
                    if (item.id.equals(newArmor.id)) {
                        return { ...newArmor, worn: true };
                    } else {
                        return { ...item, worn: false };
                    }
                }
                return item;
            }
        );
        props.updateCompanion({
            ...props.companion,
            inventory: { items: updatedItems },
        });
    };
    const currentArmor: Armor = props.companion.inventory.items.find(
        (x) => IsArmor(x) && x.worn
    )! as Armor;
    const onChangeMature = (mature: boolean) => {
        props.updateCompanion({
            ...props.companion,
            advancement: { ...props.companion.advancement, mature },
        });
    };
    const onChangeNimble = (nimble: boolean) => {
        props.updateCompanion({
            ...props.companion,
            advancement: { ...props.companion.advancement, nimble },
        });
    };
    const onChangeSavage = (savage: boolean) => {
        props.updateCompanion({
            ...props.companion,
            advancement: { ...props.companion.advancement, savage },
        });
    };
    return (
        <Layout style={{ flex: 1 }}>
            <Layout style={{ flexDirection: "row" }}>
                <Button
                    onPress={() => {
                        props.navigation.goBack();
                    }}
                    style={{ alignSelf: "flex-end" }}
                    appearance="ghost"
                >
                    Back
                </Button>
                <Text category="h3" style={styles.centered}>
                    Editing {props.companion.name}
                </Text>
            </Layout>
            <ScrollView>
                <Layout style={{ flexDirection: "row", paddingHorizontal: 10 }}>
                    <Toggle
                        checked={props.companion.advancement.mature}
                        onChange={onChangeMature}
                    >
                        Mature
                    </Toggle>
                    <Toggle
                        checked={props.companion.advancement.nimble}
                        onChange={onChangeNimble}
                    >
                        Nimble
                    </Toggle>
                    <Toggle
                        checked={props.companion.advancement.savage}
                        onChange={onChangeSavage}
                    >
                        Savage
                    </Toggle>
                </Layout>
                <EditHitPoints
                    hitPoints={props.companion.hitPoints}
                    companionId={props.companion.metaData.id}
                />
                <EditAbilityScores
                    abilityScores={props.companion.abilityScores}
                    scoreRanges={Array.from(new Array(30), (x, i) => i + 1)}
                    onSelect={setNewAbilityScores}
                />
                <SelectWornArmor
                    availableArmor={props.companion.inventory.items.filter(
                        IsArmor
                    )}
                    onSelect={onSelectWornArmor}
                    currentArmor={currentArmor}
                />
                <Layout style={{ padding: 10 }}>
                    <Button
                        onPress={() =>
                            props.navigation.navigate(
                                "EditCompanionActionsView",
                                {
                                    companionUuid: props.companion.metaData.id,
                                }
                            )
                        }
                    >
                        Edit Companion Actions
                    </Button>
                </Layout>
            </ScrollView>
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps & OwnProps;

interface OwnProps {
    route: RouteProp<CompanionsStackParamList, "EditCompanionView">;
    navigation: EditCompanionNavigationProps;
}

interface LinkDispatchProps {
    updateCompanion: (companion: Companion) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        updateCompanion: bindActionCreators(startChangeCompanion, dispatch),
    };
};

interface LinkStateProps {
    companion: Companion;
}
const mapStateToProps = (
    state: EntireAppState,
    ownProps: OwnProps
): LinkStateProps => {
    const companion = state.playerCharacter.companions.find(
        (companion) =>
            companion.metaData.id.toString() ===
            ownProps.route.params.companionUuid
    );
    if (!companion) {
        ownProps.navigation.goBack();
    }
    return {
        companion: companion!,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCompanion);

export const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
        padding: 10,
        flex: 1,
    },
});
