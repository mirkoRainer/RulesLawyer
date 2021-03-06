import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Layout, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { EntireAppState } from "../../../../store/Store";
import { LanguagesNavigationProp } from "../EditLanguagesView";

const LanguagesView: React.FC<Props> = (props) => {
    // make sure the screen is always refreshed.
    const [state, setState] = useState({});
    useFocusEffect(
        React.useCallback(() => {
            setState({});
        }, [])
    );
    const navigation = useNavigation<LanguagesNavigationProp>();
    const goToEditLanguages = () => {
        console.debug("Navigation to EditLanguages");
        navigation.navigate("EditLanguagesView");
    };
    return (
        <TouchableOpacity onPress={goToEditLanguages}>
            <Layout style={{ alignSelf: "center", padding: 5 }}>
                <Text style={styles.sectionLabel} category="h6">
                    Languages:
                </Text>
                <Text style={styles.text}>{props.languages.join(", ")}</Text>
            </Layout>
        </TouchableOpacity>
    );
};

type Props = LinkStateProps;

interface LinkStateProps {
    languages: string[];
}
const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    languages: state.playerCharacter.languages,
});

export default connect(mapStateToProps, null)(LanguagesView);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
    text: {
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    sectionLabel: {
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
    },
});
