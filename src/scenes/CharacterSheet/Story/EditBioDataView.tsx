import React, { useState } from "react";
import { Button, Icon, Input, Layout, Text } from "@ui-kitten/components";
import { ScrollView, StyleSheet } from "react-native";
import { BiographicalData } from "../../../PF2eCoreLib/PlayerCharacter";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startChangeBioData } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { EntireAppState } from "../../../store/Store";
import { connect } from "react-redux";
import { isNumbersOnly } from "../../Shared/Misc/StringToNumberHelper";
import { useNavigation } from "@react-navigation/native";
import { StoryStackParamList } from "./StoryNavigation";
import { StackNavigationProp } from "@react-navigation/stack";

export type BioDataNavigationProp = StackNavigationProp<
    StoryStackParamList,
    "EditBioDataView"
>;

const EditBioDataView: React.FC<Props> = (props) => {
    const navigation = useNavigation<BioDataNavigationProp>();
    const goToBioDataView = () => {
        console.debug("Navigation to BioDataView");
        navigation.navigate("MainStoryView");
    };
    const CheckIcon = (props: any) => (
        <Icon {...props} name="checkmark-circle-outline" />
    );
    const [input, setInput] = useState({
        age: props.bioData.age.toString(),
        appearance: props.bioData.appearance,
        ethnicity: props.bioData.ethnicity,
        birthplace: props.bioData.birthplace,
        gender: props.bioData.gender,
        nationality: props.bioData.nationality,
        height: props.bioData.height.toString(),
        weight: props.bioData.weight.toString(),
    });
    const inputToBioData = (convertFrom: typeof input): BiographicalData => {
        const age = isNumbersOnly(input.age) ? parseInt(input.age) : 0;
        const height = isNumbersOnly(input.height) ? parseInt(input.height) : 0;
        const weight = isNumbersOnly(input.weight) ? parseInt(input.weight) : 0;
        return {
            ...convertFrom,
            age,
            height,
            weight,
        };
    };
    const updateBioData = () => {
        props.startChangeBioData(inputToBioData(input));
        goToBioDataView();
    };
    return (
        <ScrollView>
            <Layout style={{ flex: 1 }}>
                <Layout style={styles.header}>
                    <Text>{"Biographical Data:"}</Text>
                    <Button
                        appearance="ghost"
                        accessoryLeft={CheckIcon}
                        onPress={updateBioData}
                    />
                </Layout>
                <Layout style={{ flex: 1, marginHorizontal: 20 }}>
                    <Input
                        label={"Age"}
                        placeholder="Age"
                        value={input.age}
                        size="medium"
                        onChangeText={(age) => setInput({ ...input, age })}
                    />
                    <Input
                        label={"Gender"}
                        placeholder="Gender"
                        value={input.gender}
                        size="medium"
                        onChangeText={(gender) =>
                            setInput({ ...input, gender })
                        }
                    />
                    <Input
                        label={"Height"}
                        placeholder="Height"
                        value={input.height}
                        size="medium"
                        onChangeText={(height) =>
                            setInput({ ...input, height })
                        }
                    />
                    <Input
                        label={"Weight"}
                        placeholder="Weight"
                        value={input.weight}
                        size="medium"
                        onChangeText={(weight) =>
                            setInput({ ...input, weight })
                        }
                    />
                    <Input
                        label={"Appearance"}
                        placeholder="Appearance"
                        value={input.appearance}
                        size="medium"
                        onChangeText={(appearance) =>
                            setInput({ ...input, appearance })
                        }
                        multiline={true}
                    />
                    <Input
                        label={"Birthplace"}
                        placeholder="Birthplace"
                        value={input.birthplace}
                        size="medium"
                        onChangeText={(birthplace) =>
                            setInput({ ...input, birthplace })
                        }
                    />
                    <Input
                        label={"Ethnicity"}
                        placeholder="Ethnicity"
                        value={input.ethnicity}
                        size="medium"
                        onChangeText={(ethnicity) =>
                            setInput({ ...input, ethnicity })
                        }
                    />
                    <Input
                        label={"Nationality"}
                        placeholder="Nationality"
                        value={input.nationality}
                        size="medium"
                        onChangeText={(nationality) =>
                            setInput({ ...input, nationality })
                        }
                    />
                </Layout>
            </Layout>
        </ScrollView>
    );
};

type Props = LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {
    startChangeBioData: (BioData: BiographicalData) => void;
}

interface LinkStateProps {
    bioData: BiographicalData;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        startChangeBioData: bindActionCreators(startChangeBioData, dispatch),
    };
};

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    bioData: state.playerCharacter.biographicalData,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBioDataView);

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
