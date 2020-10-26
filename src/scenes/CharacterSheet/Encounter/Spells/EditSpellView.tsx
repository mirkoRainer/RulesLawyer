import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Icon, Input, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { startUpdateSpell } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { EntireAppState } from "../../../../store/Store";
import { SpellsStackParamList } from "../SpellsNavigation";
import { Spell, SpellList } from "./Components/Spell";

export const EditSpellView: React.FC<Props> = (props) => {
    const [name, setName] = React.useState(props.spell.name);
    const [description, setDescription] = React.useState(
        props.spell.description
    );
    const handleNameChange = (value: string) => {
        setName(value);
    };
    const handleDescriptionChange = (value: string) => {
        setDescription(value);
    };
    const saveSpell = () => {
        props.updateSpell(
            { name, description },
            props.route.params.spellType,
            props.route.params.index
        );
    };
    const BackIcon = (props: any) => (
        <Icon {...props} name="arrow-ios-back-outline" />
    );
    const handleBackPress = () => {
        props.navigation.goBack();
    };
    return (
        <Layout style={{ flex: 1 }}>
            <Layout style={{ flexDirection: "row", margin: 10 }}>
                <Button
                    accessoryLeft={BackIcon}
                    onPress={handleBackPress}
                    style={{ flex: 0.25, margin: 10 }}
                >
                    Back
                </Button>
                <Text style={{ flex: 1 }} category="h1">
                    Editing
                </Text>
            </Layout>
            <Input
                label={"Spell Name"}
                placeholder={"Spell Name"}
                value={name}
                size="large"
                onChangeText={handleNameChange}
                style={{ padding: 5, margin: 5 }}
            />
            <Layout style={{ flexDirection: "row" }}>
                <Button
                    style={{
                        padding: 10,
                        margin: 5,
                        marginHorizontal: 10,
                        flex: 1,
                    }}
                    onPress={saveSpell}
                    disabled={
                        props.spell.name === name &&
                        props.spell.description === description
                    }
                >
                    Save
                </Button>
            </Layout>
            <ScrollView>
                <Input
                    label={"Spell Description"}
                    placeholder={"Describe the magic!"}
                    value={description}
                    size="medium"
                    onChangeText={handleDescriptionChange}
                    multiline={true}
                    style={{ padding: 5, margin: 5 }}
                />
            </ScrollView>
        </Layout>
    );
};

export type EditSpellNavigationProps = StackNavigationProp<
    SpellsStackParamList,
    "EditSpellView"
>;
type EditSpellRouteProps = RouteProp<SpellsStackParamList, "EditSpellView">;

type OwnProps = {
    route: EditSpellRouteProps;
    navigation: EditSpellNavigationProps;
};

type Props = LinkDispatchProps & LinkStateProps & OwnProps;

interface LinkStateProps {
    spell: Spell;
}

interface LinkDispatchProps {
    updateSpell: (
        newSpell: Spell,
        spellType: keyof SpellList,
        index: number
    ) => void;
}

const mapStateToProps = (
    state: EntireAppState,
    props: OwnProps
): LinkStateProps => {
    return {
        spell:
            state.playerCharacter.spells[props.route.params.spellType][
                props.route.params.index
            ],
    };
};

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({
    updateSpell: bindActionCreators(startUpdateSpell, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSpellView);

const styles = StyleSheet.create({});
