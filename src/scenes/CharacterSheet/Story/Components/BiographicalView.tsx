import React, { Component } from "react";
import {
    GestureResponderEvent,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { startTextEditModal } from "../../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { BiographicalData } from "../../../../PF2eCoreLib/PlayerCharacter";

const BiographicalView: React.FC<Props> = (props) => {
    const changeProperty = (propertyToChange: keyof BiographicalData) => {
        props.startTextEditModal(propertyToChange);
    };
    return (
        <Layout style={styles.rowContainer}>
            <Layout style={{ alignSelf: "center", padding: 5 }}>
                <TouchableOpacity onPress={() => changeProperty("ethnicity")}>
                    <Text style={styles.sectionLabel} category="h6">
                        Ethnicity
                    </Text>
                    <Text style={styles.text}> {props.bioData.ethnicity} </Text>
                </TouchableOpacity>
            </Layout>
            <Layout style={{ alignSelf: "center", padding: 5 }}>
                <Text style={styles.sectionLabel} category="h6">
                    Nationality
                </Text>
                <Text style={styles.text}> {props.bioData.nationality} </Text>
            </Layout>
            <Layout style={{ alignSelf: "center", padding: 5 }}>
                <Text style={styles.sectionLabel} category="h6">
                    Birthplace
                </Text>
                <Text style={styles.text}> {props.bioData.birthplace} </Text>
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
    );
};

interface OwnProps {
    bioData: BiographicalData;
}

type Props = OwnProps & LinkDispatchProps;

interface LinkDispatchProps {
    startTextEditModal: (propertyToChange: string) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {
        startTextEditModal: bindActionCreators(startTextEditModal, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(BiographicalView);

const styles = StyleSheet.create({
    rowContainer: {
        flex: 1,
        flexWrap: "wrap",
        padding: 10,
        flexDirection: "row",
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
