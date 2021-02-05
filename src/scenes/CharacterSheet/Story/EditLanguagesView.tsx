import React, { createRef, useRef, useState } from "react";
import {
    Button,
    Divider,
    Icon,
    Input,
    Layout,
    Text,
} from "@ui-kitten/components";
import { Alert, FlatList, SafeAreaView, StyleSheet } from "react-native";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startChangeLanguages } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { EntireAppState } from "../../../store/Store";
import { connect } from "react-redux";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StoryStackParamList } from "./StoryNavigation";
import { LanguageList } from "./Components/LanguageList";

export type LanguagesNavigationProp = StackNavigationProp<
    StoryStackParamList,
    "EditLanguagesView"
>;

const EditLanguagesView: React.FC<Props> = (props) => {
    const [state, setState] = useState({});
    const scrollRef = useRef<FlatList<string>>(null);
    const navigation = useNavigation<LanguagesNavigationProp>();
    const goToMainStoryView = () => {
        console.debug("Navigation to MainStory");
        navigation.navigate("MainStoryView");
    };
    const CheckIcon = (props: any) => (
        <Icon {...props} name="checkmark-circle-outline" />
    );
    const [input, setInput] = useState({
        languages: props.languages,
        newLanguage: "",
    });
    const updateLanguages = () => {
        props.startChangeLanguages(input.languages);
        goToMainStoryView();
    };
    const keyExtractor = (language: string, index: number) => language + index;
    const renderItem = ({ item }: { item: string }) => {
        const handleDeleteButtonPress = () => {
            const languageToBeDeleted = item;
            setInput({
                ...input,
                languages: input.languages.filter(
                    (x) => x !== languageToBeDeleted
                ),
            });
        };

        return (
            <Layout style={{ flexDirection: "row" }}>
                <Text style={styles.actionText}>{item}</Text>
                <Button
                    style={styles.button}
                    status="danger"
                    appearance="ghost"
                    onPress={handleDeleteButtonPress}
                >
                    Delete
                </Button>
            </Layout>
        );
    };
    const addNewLanguage = () => {
        if (input.newLanguage === "") {
            Alert.alert(
                "Invalid Language",
                "It looks like you didn't enter a language. While this may be some esoteric language a mere mortal wouldn't understand, please try choosing one that can be spelled with letters. :)"
            );
            return;
        }
        if (input.languages.includes(input.newLanguage)) {
            Alert.alert(
                "Invalid Language",
                "It looks like his language is already on the list. Please add a new unique language."
            );
            return;
        }
        input.languages.push(input.newLanguage);
        setInput({ ...input, newLanguage: "" });
    };
    const addLanguageFromList = (language: string) => {
        if (input.languages.includes(language)) {
            Alert.alert(
                "Invalid Language",
                "It looks like his language is already on the list. Please add a new unique language."
            );
            return;
        }
        input.languages.push(language);
        setState({});
    };
    return (
        <Layout style={{ flex: 1 }}>
            <Layout style={{ flex: 1 }}>
                <Layout style={styles.header}>
                    <Text>{"Languages:"}</Text>
                    <Button
                        appearance="ghost"
                        accessoryLeft={CheckIcon}
                        onPress={updateLanguages}
                    />
                </Layout>
                <Layout
                    style={{
                        flex: 0.15,
                        marginHorizontal: 20,
                        marginVertical: 5,
                        flexDirection: "row",
                    }}
                >
                    <Input
                        style={{
                            flex: 1,
                            marginRight: 15,
                            justifyContent: "center",
                        }}
                        placeholder="Enter language here"
                        value={input.newLanguage}
                        size="medium"
                        onChangeText={(newLanguage) =>
                            setInput({ ...input, newLanguage })
                        }
                    />
                    <Button
                        onPress={addNewLanguage}
                        style={{ marginVertical: 7, alignSelf: "center" }}
                    >
                        Add
                    </Button>
                </Layout>
                <Divider />
                <LanguageList addLanguage={addLanguageFromList} />
                <Divider />
                <SafeAreaView style={{ flex: 1 }}>
                    <FlatList<string>
                        ref={scrollRef}
                        keyExtractor={keyExtractor}
                        data={input.languages}
                        renderItem={renderItem}
                        onContentSizeChange={() =>
                            scrollRef.current?.scrollToEnd()
                        }
                    />
                </SafeAreaView>
            </Layout>
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {
    startChangeLanguages: (languages: string[]) => void;
}

interface LinkStateProps {
    languages: string[];
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        startChangeLanguages: bindActionCreators(
            startChangeLanguages,
            dispatch
        ),
    };
};

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    languages: state.playerCharacter.languages,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditLanguagesView);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
    },
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    rightAction: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    actionText: {
        padding: 10,
        flex: 1,
    },
    button: {},
});
