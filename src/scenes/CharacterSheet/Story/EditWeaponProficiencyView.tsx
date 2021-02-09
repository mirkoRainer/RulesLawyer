import { useNavigation } from "@react-navigation/native";
import { Divider, Input, Layout, Text, Button } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { WeaponProficiencies } from "../../../PF2eCoreLib/PlayerCharacter";
import {
    DetermineNextProficiency,
    Proficiencies,
} from "../../../PF2eCoreLib/Proficiencies";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { startChangeWeaponProficiencies } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { EntireAppState } from "../../../store/Store";
import ProficiencyArrayView from "../../Shared/ProficiencyArrayView";
import { StoryNavigatorHeader } from "./Components/StoryNavigatorHeader";

const EditWeaponProficiencyView: React.FC<Props> = (props) => {
    const [input, setInput] = useState<WeaponProficiencies>(
        props.weaponProficiencies
    );
    // TODO [$6021f0207b27d600084dbef0]: Use Navigation listener with local state to update redux.
    // const navigation = useNavigation();
    // useEffect(() => {
    //     navigation.addListener("beforeRemove", (event) => {
    //         props.updateWeaponProficiencies(input);
    //     });
    // }, [navigation]);
    //
    // Self contain the component with state and update when focus is removed.
    const navigation = useNavigation();
    useEffect(() => {
        navigation.addListener("beforeRemove", (event) => {
            props.updateWeaponProficiencies(input);
        });
    }, [navigation]);
    const addOtherProficiency = () => {
        let other = input;
        other.Other.push({
            description: "New Weapon proficiency",
            proficiency: Proficiencies.Untrained,
        });
        setInput({ ...other, Other: other.Other });
    };
    let others: JSX.Element[] = [];
    input.Other.forEach((x, index) => {
        const deleteOtherProficiency = () => {
            let other = input;
            other.Other.splice(index, 1);
            setInput({ ...other });
        };
        const handleTouch = () => {
            const newProficiency = DetermineNextProficiency(x.proficiency);
            let other = input.Other;
            other[index].proficiency = newProficiency;
            setInput({
                ...input,
                Other: other,
            });
        };
        const onChangeDescription = (inputText: string) => {
            let other = input.Other;
            other[index].description = inputText;
            setInput({
                ...input,
                Other: other,
            });
        };
        const render = (
            <Layout key={index}>
                <Layout style={{ flexDirection: "row" }}>
                    <Input
                        placeholder="Other weapon Proficiency"
                        style={styles.textInput}
                        value={x.description}
                        onChangeText={onChangeDescription}
                    />
                    <Button
                        status="danger"
                        appearance="ghost"
                        style={styles.deleteButton}
                        onPress={deleteOtherProficiency}
                    >
                        Delete
                    </Button>
                </Layout>
                <TouchableOpacity onPress={handleTouch}>
                    <Layout
                        style={{
                            ...styles.proficiencyRow,
                            padding: 10,
                            paddingBottom: 20,
                        }}
                    >
                        <ProficiencyArrayView proficiency={x.proficiency} />
                    </Layout>
                </TouchableOpacity>
                <Divider style={{ marginBottom: 10 }} />
            </Layout>
        );
        others.push(render);
    });
    const handleUnarmedTouch = () => {
        const newProficiency = DetermineNextProficiency(input.Unarmed);
        setInput({
            ...input,
            Unarmed: newProficiency,
        });
    };
    const handleSimpleTouch = () => {
        const newProficiency = DetermineNextProficiency(input.Simple);
        setInput({
            ...input,
            Simple: newProficiency,
        });
    };
    const handleMartialTouch = () => {
        const newProficiency = DetermineNextProficiency(input.Martial);
        setInput({
            ...input,
            Martial: newProficiency,
        });
    };
    return (
        <Layout style={{ flex: 1 }}>
            <StoryNavigatorHeader title="Edit Weapon Proficiencies" />
            <Divider />
            <ScrollView>
                <TouchableOpacity onPress={handleUnarmedTouch}>
                    <Text category="h6" style={styles.label}>
                        Unarmed
                    </Text>
                    <Layout style={styles.proficiencyRow}>
                        <ProficiencyArrayView proficiency={input.Unarmed} />
                    </Layout>
                </TouchableOpacity>
                <Divider style={{ marginTop: 10 }} />
                <TouchableOpacity onPress={handleSimpleTouch}>
                    <Text category="h6" style={styles.label}>
                        Simple
                    </Text>
                    <Layout style={styles.proficiencyRow}>
                        <ProficiencyArrayView proficiency={input.Simple} />
                    </Layout>
                </TouchableOpacity>
                <Divider style={{ marginTop: 10 }} />
                <TouchableOpacity onPress={handleMartialTouch}>
                    <Text category="h6" style={styles.label}>
                        Martial
                    </Text>
                    <Layout style={styles.proficiencyRow}>
                        <ProficiencyArrayView proficiency={input.Martial} />
                    </Layout>
                </TouchableOpacity>
                <Divider style={{ marginTop: 10 }} />
                <Button style={{ margin: 10 }} onPress={addOtherProficiency}>
                    Add Other Proficiency
                </Button>
                {others}
            </ScrollView>
        </Layout>
    );
};

type OwnProps = {};
interface LinkStateProps {
    weaponProficiencies: WeaponProficiencies;
}
const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    weaponProficiencies: state.playerCharacter.weaponProficiencies,
});

interface LinkDispatchProps {
    updateWeaponProficiencies: (newProficiencies: WeaponProficiencies) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        updateWeaponProficiencies: bindActionCreators(
            startChangeWeaponProficiencies,
            dispatch
        ),
    };
};

type Props = LinkStateProps & LinkDispatchProps & OwnProps;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditWeaponProficiencyView);

const styles = StyleSheet.create({
    centered: {
        // alignSelf: "center",
    },
    proficiencyRow: {
        flexDirection: "row",
        paddingHorizontal: 15,
        // borderWidth: 1,
    },
    label: {
        textAlign: "center",
        paddingVertical: 10,
    },
    textInput: { paddingHorizontal: 15, paddingRight: 0, flex: 5 },
    deleteButton: {
        flex: 0.9,
    },
});
