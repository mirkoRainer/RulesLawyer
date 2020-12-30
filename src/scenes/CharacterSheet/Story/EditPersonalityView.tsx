import React, { useState } from "react";
import { Button, Icon, Input, Layout, Text } from "@ui-kitten/components";
import { ScrollView, StyleSheet } from "react-native";
import { PersonalityData } from "../../../PF2eCoreLib/PlayerCharacter";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { EntireAppState } from "../../../store/Store";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StoryStackParamList } from "./StoryNavigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { startChangePersonality } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";

export type PersonalityDataNavigationProp = StackNavigationProp<
    StoryStackParamList,
    "EditPersonalityView"
>;

const EditPersonalityView: React.FC<Props> = (props) => {
    const navigation = useNavigation<PersonalityDataNavigationProp>();
    const goToMainStoryView = () => {
        console.debug("Navigation to StoryPage");
        navigation.navigate("MainStoryView");
    };
    const CheckIcon = (props: any) => (
        <Icon {...props} name="checkmark-circle-outline" />
    );
    const [input, setInput] = useState(props.personalityData);

    const updatePersonalityData = () => {
        props.startChangePersonalityData(input);
        goToMainStoryView();
    };
    return (
        <Layout style={{ flex: 1 }}>
            <ScrollView>
                <Layout style={styles.header}>
                    <Text>{"Personality Data:"}</Text>
                    <Button
                        appearance="ghost"
                        accessoryLeft={CheckIcon}
                        onPress={updatePersonalityData}
                    />
                </Layout>
                <Layout style={{ flex: 1, marginHorizontal: 20 }}>
                    <Input
                        label={"Attitude"}
                        placeholder="Attitude"
                        value={input.attitude}
                        size="medium"
                        onChangeText={(attitude) =>
                            setInput({ ...input, attitude })
                        }
                        multiline={true}
                    />
                    <Input
                        label={"Beliefs"}
                        placeholder="Beliefs"
                        value={input.beliefs}
                        size="medium"
                        onChangeText={(beliefs) =>
                            setInput({ ...input, beliefs })
                        }
                        multiline={true}
                    />
                    <Input
                        label={"Likes"}
                        placeholder="Likes"
                        value={input.likes}
                        size="medium"
                        onChangeText={(likes) => setInput({ ...input, likes })}
                        multiline={true}
                    />
                    <Input
                        label={"Dislikes"}
                        placeholder="Dislikes"
                        value={input.dislikes}
                        size="medium"
                        onChangeText={(dislikes) =>
                            setInput({ ...input, dislikes })
                        }
                        multiline={true}
                    />
                    <Input
                        label={"Catchphrases"}
                        placeholder="Catchphrases"
                        value={input.catchphrases}
                        size="medium"
                        onChangeText={(catchphrases) =>
                            setInput({ ...input, catchphrases })
                        }
                        multiline={true}
                    />
                </Layout>
            </ScrollView>
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {
    startChangePersonalityData: (PersonalityData: PersonalityData) => void;
}

interface LinkStateProps {
    personalityData: PersonalityData;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        startChangePersonalityData: bindActionCreators(
            startChangePersonality,
            dispatch
        ),
    };
};

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    personalityData: state.playerCharacter.personalityData,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPersonalityView);

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
});
