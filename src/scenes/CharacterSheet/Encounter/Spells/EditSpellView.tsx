import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Input, Layout, Text } from "@ui-kitten/components";
import { PropsService } from "@ui-kitten/components/devsupport";
import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { EntireAppState } from "../../../../store/Store";
import { SpellsStackParamList } from "../SpellsNavigation";
import { Spell } from "./Components/Spell";

export const EditSpellView: React.FC<Props> = (props) => {
    const handleNameChange = () => {};
    return (
        <Layout style={{ flex: 1 }}>
            <Text style={styles.centered} category="h1">
                Editing
            </Text>
            <Input
                label={"Spell Name"}
                placeholder={"Spell Name"}
                value={props.spell.name}
                size="large"
                onChangeText={handleNameChange}
                style={{ padding: 5, margin: 5 }}
            />
            <Button style={{ padding: 10, margin: 5, marginHorizontal: 10 }} />
            <ScrollView>
                <Input
                    label={"Spell Description"}
                    placeholder={"Describe the magic!"}
                    value={props.spell.description}
                    size="medium"
                    onChangeText={handleNameChange}
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

interface LinkDispatchProps {}

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

const mapDispatchToProps = (): LinkDispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EditSpellView);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
});
