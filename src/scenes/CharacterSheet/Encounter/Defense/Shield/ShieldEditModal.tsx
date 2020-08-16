import React from "react";
import { Layout, Text, Modal, Input, Icon, Card, Button } from "@ui-kitten/components";
import {
    StyleSheet,
    ModalBaseProps,
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AppState } from "../../../../../store/Store";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../../store/actions/AllActionTypesAggregated";

type OwnProps = {
    visible: boolean
    toggleModal: () => void
};

type Props = LinkStateProps & LinkDispatchProps & OwnProps;

const ShieldEditModal: React.FC<Props> = (props) => {
    const CheckIcon = (props: any) => (
        <Icon {...props} name="checkmark-circle-outline" />
    );

    return (
        <Modal
            visible={props.visible}
            onBackdropPress={props.toggleModal}
            style={styles.modal}
            backdropStyle={styles.backdrop}
        >
            <Card>
                <Layout style={styles.header}>
                    <Text>{"Shield:"}</Text>
                    <Button appearance='ghost' accessoryLeft={CheckIcon} onPress={props.toggleModal}/>
                </Layout>
                <Layout>
                    <Text>Edit Shield here</Text>
                </Layout>
            </Card>
        </Modal>
    );
};

interface LinkDispatchProps {
}

interface LinkStateProps {

}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {
    };
};

const mapStateToProps = (
    state: AppState,
    ownProps: OwnProps
): LinkStateProps => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ShieldEditModal);

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    backdrop: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    pickerContainer: {
        justifyContent: "center"
    },
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    text: {
        alignSelf: "center",
    },
    modal: {
        overflow: "scroll"
    },
    modalInput: {
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        padding: 10,
    },
});
