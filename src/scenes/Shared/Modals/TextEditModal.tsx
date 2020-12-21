import React from "react";
import {
    Layout,
    Text,
    Modal,
    Input,
    Icon,
    Card,
    Button,
} from "@ui-kitten/components";
import { StyleSheet, ModalBaseProps } from "react-native";
import { bindActionCreators } from "redux";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { ThunkDispatch } from "redux-thunk";
import { startToggleTextEditModal } from "../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { TextEditModalState } from "../../../store/ModalsState";
import { EntireAppState } from "../../../store/Store";

type OwnProps = {};

type Props = LinkStateProps & LinkDispatchProps & OwnProps;

const TextEditModal: React.FC<Props> = (props) => {
    const CheckIcon = (props: any) => (
        <Icon {...props} name="checkmark-circle-outline" />
    );

    return (
        <Modal
            visible={props.modalState.visible}
            // onBackdropPress={props.toggleModal}
            style={styles.modal}
            backdropStyle={styles.backdrop}
        >
            <Card>
                <Layout style={styles.header}>
                    <Text>{props.modalState.title || "Edit:"}</Text>
                    <Button
                        appearance="ghost"
                        accessoryLeft={CheckIcon}
                        onPress={props.toggleModal}
                    />
                </Layout>
                <Layout>
                    <Input
                        style={styles.modalInput}
                        placeholder={"Type Here"}
                        onChangeText={props.modalState.onTextChange}
                        size={"large"}
                        multiline={true}
                    >
                        {props.modalState.value}
                    </Input>
                </Layout>
            </Card>
        </Modal>
    );
};

interface LinkDispatchProps {
    toggleModal: () => void;
}

interface LinkStateProps {
    modalState: TextEditModalState & ModalBaseProps;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {
        toggleModal: bindActionCreators(startToggleTextEditModal, dispatch),
    };
};

const mapStateToProps = (
    state: EntireAppState,
    ownProps: OwnProps
): LinkStateProps => ({
    modalState: state.modals.textEditModal,
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditModal);

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    backdrop: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    pickerContainer: {
        justifyContent: "center",
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
        overflow: "scroll",
    },
    modalInput: {
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        padding: 10,
    },
});
