import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import styles from "./CharacterMetadata.styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StoryStackParamList } from "../../StoryNavigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { Traits } from "../../../../../PF2eCoreLib/Traits";

interface Props {
    traits: (keyof typeof Traits)[];
}

type TraitNavigationProp = StackNavigationProp<
    StoryStackParamList,
    "EditTraitsView"
>;

const TraitsView: React.FC<Props> = (props) => {
    console.debug(`${props.traits}`);
    const navigation = useNavigation<TraitNavigationProp>();
    const goToTraitSelector = () => {
        console.debug(`Navigating to TraitSelector with ${props.traits}`);
        navigation.navigate("EditTraitsView");
    };
    return (
        <TouchableOpacity onPress={goToTraitSelector}>
            <Layout style={styles.rowContainer}>
                <Text style={styles.header} category="h5">
                    {" "}
                    Traits:
                </Text>
                <Text style={styles.text} category="h5">
                    {props.traits.join(", ")}{" "}
                </Text>
            </Layout>
        </TouchableOpacity>
    );
};

export default TraitsView;
