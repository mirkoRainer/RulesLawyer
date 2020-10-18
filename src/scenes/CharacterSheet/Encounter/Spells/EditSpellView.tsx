import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Input, Layout, Select, Text } from "@ui-kitten/components";
import { PropsService } from "@ui-kitten/components/devsupport";
import React from "react";
import { StyleSheet, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { startDeleteSpell, startUpdateSpell } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { EntireAppState } from "../../../../store/Store";
import { SpellsStackParamList } from "../SpellsNavigation";
import { Spell, SpellList } from "./Components/Spell";

export const EditSpellView: React.FC<Props> = (props) => {
    if (props.spell.name === undefined) {
        props.navigation.navigate("SpellsView");
    }
    const [name, setName] = React.useState(props.spell.name);
    const [description, setDescription] = React.useState(props.spell.description);
    const handleNameChange = (value: string) => {
        setName(value);
    };
    const handleDescriptionChange = (value: string) => {
        setDescription(value);
    };
    const saveSpell = () => {
        
    };
    const deleteSpell = () => {
        Alert.alert(
            "Really delete?",
            `Would you like to delete ${props.spell.name}?`, 
            [
                {
                    text: "Yes, I know what I'm doing.",
                    onPress: () => {
                        props.deleteSpell(props.route.params.index, props.route.params.spellType);
                    },
                },
                {
                    text: "No! Don't!",
                }
            ]
        );
        
    };
    return (
        <Layout style={{ flex: 1 }}>
            <Text style={styles.centered} category="h1">
                Editing
            </Text>
            <Input
                label={"Spell Name"}
                placeholder={"Spell Name"}
                value={name}
                size="large"
                onChangeText={handleNameChange}
                style={{ padding: 5, margin: 5 }}
            />
            <Layout style={{flexDirection: "row"}}>
                <Button style={{ padding: 10, margin: 5, marginHorizontal: 10, flex: 1 }} onPress={saveSpell}>Save</Button>
                <Button style={{ padding: 10, margin: 5, marginHorizontal: 10, flex: 1 }} onPress={deleteSpell} status='danger'>Delete</Button>
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
    updateSpell: (newSpell: Spell, spellType: keyof SpellList, index: number) => void;
    deleteSpell: (index: number, spellType: keyof SpellList) => void;
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

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
    updateSpell: bindActionCreators(startUpdateSpell, dispatch),
    deleteSpell: bindActionCreators(startDeleteSpell, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSpellView);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
