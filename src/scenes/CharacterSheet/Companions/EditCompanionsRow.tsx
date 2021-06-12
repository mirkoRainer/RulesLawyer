import React from "react";
import { StyleSheet } from "react-native";
import { Button, Divider, Layout, Text } from "@ui-kitten/components";
import { connect } from "react-redux";
import { startDeleteCompanion } from "../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import { useNavigation } from "@react-navigation/native";
import { EditCompanionsNavigationProps } from "./CompanionsNavigator";

const EditCompanionsRow: React.FC<Props> = (props) => {
    const navigation = useNavigation<EditCompanionsNavigationProps>();
    return (
        <Layout>
            <Layout style={{ flexDirection: "row", padding: 10 }}>
                <Text style={styles.rowText} category="h5">
                    {props.name}
                </Text>
                <Button
                    size="small"
                    style={styles.rowButton}
                    appearance="ghost"
                    onPress={() =>
                        navigation.navigate("EditCompanionView", {
                            companionUuid: props.id,
                        })
                    }
                >
                    Edit
                </Button>
                <Button
                    size="small"
                    status="danger"
                    style={styles.rowButton}
                    appearance="ghost"
                    onPress={() => {
                        props.delete(props.id);
                    }}
                >
                    Delete
                </Button>
            </Layout>
            <Divider />
        </Layout>
    );
};

type Props = LinkDispatchProps & OwnProps;

export type OwnProps = {
    name: string;
    index: number;
    id: string;
};

interface LinkDispatchProps {
    delete: (id: string) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => {
    return {
        delete: bindActionCreators(startDeleteCompanion, dispatch),
    };
};
export default connect(null, mapDispatchToProps)(EditCompanionsRow);

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
