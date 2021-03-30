import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BiographicalData } from "../../../../PF2eCoreLib/PlayerCharacter/PlayerCharacter";
import { EntireAppState } from "../../../../store/Store";
import { startChangeBioData } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { useNavigation } from "@react-navigation/native";
import { BioDataNavigationProp } from "../EditBioDataView";

const BiographicalView: React.FC<Props> = (props) => {
    const navigation = useNavigation<BioDataNavigationProp>();
    const goToBioDataEditView = () => {
        console.debug("Navigation to EditBioDataView");
        navigation.navigate("EditBioDataView");
    };
    return (
        <TouchableOpacity onPress={goToBioDataEditView}>
            <Layout style={styles.rowContainer}>
                <Layout style={{ alignSelf: "center", padding: 5 }}>
                    <Text style={styles.sectionLabel} category="h6">
                        Ethnicity
                    </Text>
                    <Text style={styles.text}> {props.bioData.ethnicity} </Text>
                </Layout>
                <Layout style={{ alignSelf: "center", padding: 5 }}>
                    <Text style={styles.sectionLabel} category="h6">
                        Nationality
                    </Text>
                    <Text style={styles.text}>
                        {" "}
                        {props.bioData.nationality}{" "}
                    </Text>
                </Layout>
                <Layout style={{ alignSelf: "center", padding: 5 }}>
                    <Text style={styles.sectionLabel} category="h6">
                        Birthplace
                    </Text>
                    <Text style={styles.text}>
                        {" "}
                        {props.bioData.birthplace}{" "}
                    </Text>
                </Layout>
                <Layout style={{ alignSelf: "center", padding: 5 }}>
                    <Text style={styles.sectionLabel} category="h6">
                        Age
                    </Text>
                    <Text style={styles.text}> {props.bioData.age} </Text>
                </Layout>
                <Layout style={{ alignSelf: "center", padding: 5 }}>
                    <Text style={styles.sectionLabel} category="h6">
                        Gender
                    </Text>
                    <Text style={styles.text}> {props.bioData.gender} </Text>
                </Layout>
                <Layout style={{ alignSelf: "center", padding: 5 }}>
                    <Text style={styles.sectionLabel} category="h6">
                        HT
                    </Text>
                    <Text style={styles.text}> {props.bioData.height} </Text>
                </Layout>
                <Layout style={{ alignSelf: "center", padding: 5 }}>
                    <Text style={styles.sectionLabel} category="h6">
                        WT
                    </Text>
                    <Text style={styles.text}> {props.bioData.weight} </Text>
                </Layout>
                <Layout style={{ alignSelf: "center", padding: 5 }}>
                    <Text style={styles.sectionLabel} category="h6">
                        Appearance
                    </Text>
                    <Text style={styles.text}>{props.bioData.appearance}</Text>
                </Layout>
            </Layout>
        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(BiographicalView);

const styles = StyleSheet.create({
    rowContainer: {
        flex: 1,
        flexWrap: "wrap",
        padding: 10,
        flexDirection: "row",
        justifyContent: "center",
    },
    text: {
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
    },
    sectionLabel: {
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
    },
});
