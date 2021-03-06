import React from "react";
import { StyleSheet } from "react-native";
import { Button, Divider, Layout, Text } from "@ui-kitten/components";
import { EditCompanionsNavigationProps } from "./CompanionsNavigator";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { IsArmor } from "../../../PF2eCoreLib/PlayerCharacter/Armor";
import { Companion } from "../../../PF2eCoreLib/PlayerCharacter/Companion";
import { EntireAppState } from "../../../store/Store";
import { connect } from "react-redux";
import EditCompanionsRow from "./EditCompanionsRow";
import { startAddCompanion } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { bindActionCreators } from "redux";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const EditCompanions: React.FC<Props> = (props) => {
    const navigation = useNavigation<EditCompanionsNavigationProps>();
    const renderCompanionRows: JSX.Element[] = [];
    if (props.companions) {
        props.companions.forEach((companion, index) => {
            renderCompanionRows.push(
                <EditCompanionsRow
                    id={companion.metaData.id}
                    index={index}
                    name={companion.name}
                    key={companion.metaData.id.toString()}
                />
            );
        });
    }
    return (
        <Layout style={{ flex: 1 }}>
            <Layout style={{ flexDirection: "row" }}>
                <Button
                    onPress={() => navigation.goBack()}
                    style={{ alignSelf: "flex-end" }}
                    appearance="ghost"
                >
                    Back
                </Button>
                <Text style={styles.centered} category="h3">
                    Edit Companions
                </Text>
            </Layout>
            <Divider />
            <ScrollView>
                {renderCompanionRows}
                <Button
                    style={{ margin: 10, alignSelf: "center" }}
                    onPress={() => props.add(uuidv4())}
                >
                    + Add New Companion
                </Button>
            </ScrollView>
        </Layout>
    );
};

type Props = LinkDispatchProps & LinkStateProps & {};

interface LinkDispatchProps {
    add: (id: string) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        add: bindActionCreators(startAddCompanion, dispatch),
    };
};

interface LinkStateProps {
    companions: Companion[];
}
const mapStateToProps = (state: EntireAppState): LinkStateProps => ({
    companions: state.playerCharacter.companions,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCompanions);

export const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
        padding: 10,
        flex: 1,
    },
    rowText: {
        flex: 4,
    },
    rowButton: {
        flex: 1,
    },
});
