import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { indexOf } from "lodash";
import { Guid } from "guid-typescript";
import { PF2Action } from "../../../PF2eCoreLib/PlayerCharacter/PF2Action";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { EntireAppState } from "../../../store/Store";

interface OwnProps {
    companionId?: Guid;
    handleEditButton: (index: number) => void;
    handleDeleteButton: (index: number) => void;
    actions: PF2Action[];
}

const EditActions: React.FC<Props> = (props) => {
    const EditButton = (index: number) => {
        const handleEditButton = () => {
            props.handleEditButton(index);
        };
        return <Button onPress={handleEditButton}>Edit</Button>;
    };
    const DeleteButton = (index: number) => {
        const handleDeleteButton = () => {
            props.handleDeleteButton(index);
        };
        return (
            <Button onPress={handleDeleteButton} status="danger">
                -
            </Button>
        );
    };
    const renderItem = (item: PF2Action) => {
        const index = indexOf(props.actions, item);
        return (
            <Layout
                style={{ flex: 1, flexDirection: "row", padding: 10 }}
                key={item.id.toString()}
            >
                {EditButton(index)}
                {DeleteButton(index)}
                <Text
                    style={{
                        flex: 1,
                        paddingHorizontal: 10,
                        alignSelf: "center",
                    }}
                    category="h4"
                >
                    {item.name}
                </Text>
            </Layout>
        );
    };

    let actions: JSX.Element[] = [];
    props.actions.forEach((action, index) => {
        actions.push(renderItem(action));
    });

    return (
        <Layout>
            <ScrollView>{actions}</ScrollView>
        </Layout>
    );
};

type Props = OwnProps & LinkDispatchProps & LinkStateProps;

interface LinkDispatchProps {}

interface LinkStateProps {}

const mapStateToProps = (state: EntireAppState): LinkStateProps => ({});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EditActions);

const styles = StyleSheet.create({
    centered: {
        alignSelf: "center",
        flex: 1,
    },
});
