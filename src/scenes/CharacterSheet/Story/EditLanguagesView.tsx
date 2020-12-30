import React, { createRef, useState } from "react";
import {
    Button,
    Divider,
    Icon,
    Input,
    Layout,
    Text,
} from "@ui-kitten/components";
import {
    Alert,
    Animated,
    FlatList,
    SafeAreaView,
    StyleSheet,
} from "react-native";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startChangeLanguages } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { EntireAppState } from "../../../store/Store";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StoryStackParamList } from "./StoryNavigation";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton, ScrollView } from "react-native-gesture-handler";

export type LanguagesNavigationProp = StackNavigationProp<
    StoryStackParamList,
    "EditLanguagesView"
>;

const EditLanguagesView: React.FC<Props> = (props) => {
    // TODO: Display Language list
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
    const keyExtractor = (item: string) => item;
    const renderItem = ({ item }: { item: string }) => {
        const myRef = createRef<Swipeable>();
        const renderRightAction = (
            text: string,
            color: string,
            x: number,
            progress: Animated.AnimatedInterpolation
        ) => {
            const trans = progress.interpolate({
                inputRange: [0, 1],
                outputRange: [x, 0],
            });
            const close = () => {
                const swipeRef = myRef.current;
                swipeRef?.close();
            };
            const handleEditButtonPress = () => {
                close();
            };
            const handleDeleteButtonPress = () => {
                const swipeRef = myRef.current;
                const languageToBeDeleted =
                    // @ts-ignore
                    swipeRef?.props.children?.props?.children;
                setInput({
                    ...input,
                    languages: input.languages.filter(
                        (x) => x !== languageToBeDeleted
                    ),
                });
                close();
            };
            return (
                <Animated.View
                    style={{ flex: 1, transform: [{ translateX: trans }] }}
                >
                    <RectButton
                        style={[styles.rightAction, { backgroundColor: color }]}
                        onPress={handleDeleteButtonPress}
                    >
                        <Animated.Text style={styles.actionText}>
                            {text}
                        </Animated.Text>
                    </RectButton>
                </Animated.View>
            );
        };
        const renderRightActions = (
            progress: Animated.AnimatedInterpolation
        ) => {
            return (
                <Layout style={{ width: 96, flexDirection: "row" }}>
                    {/* {renderRightAction("Edit", "#ffab00", 128, progress)} */}
                    {renderRightAction("Delete", "#dd2c00", 64, progress)}
                </Layout>
            );
        };

        return (
            <Swipeable
                friction={2}
                renderRightActions={renderRightActions}
                ref={myRef}
            >
                <Text style={styles.actionText}>{item}</Text>
            </Swipeable>
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
                    <Button onPress={addNewLanguage}>Add</Button>
                </Layout>
                <Divider />
                <SafeAreaView style={{ flex: 1 }}>
                    <FlatList<string>
                        keyExtractor={keyExtractor}
                        data={input.languages}
                        renderItem={renderItem}
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
        color: "white",
        fontSize: 16,
        backgroundColor: "transparent",
        padding: 10,
    },
});
