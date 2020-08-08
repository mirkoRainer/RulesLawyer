import React from "react";
import { Layout, Text, Modal } from "@ui-kitten/components";
import {
    StyleSheet,
    TextInput,
    ModalBaseProps,
} from "react-native";
import { Icon } from "react-native-elements";
import { bindActionCreators } from "redux";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { ThunkDispatch } from "redux-thunk";
import { startToggleTextEditModal } from "../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { TextEditModalState } from "../../../store/ModalsState";
import { CharacterSheetState } from "../../../store/Store";

type OwnProps = {};

type Props = LinkStateProps & LinkDispatchProps & OwnProps;

const TextEditModal: React.FC<Props> = (props) => {
    return (
        <Modal
            visible={props.modalState.visible}
            onBackdropPress={props.toggleModal}
            style={styles.modal}
            backdropStyle={styles.backdrop}
        >
            <Layout style={styles.header}>
                <Text>{props.modalState.title || "Edit:"}</Text>
                <Icon name="check" onPress={props.toggleModal} />
            </Layout>
            <Layout>
                <TextInput
                    style={styles.modalTextInput}
                    placeholder={"Type Here"}
                    onChangeText={props.modalState.onTextChange}
                    multiline={true}
                >
                    {props.modalState.value}
                </TextInput>
            </Layout>
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
    state: CharacterSheetState,
    ownProps: OwnProps
): LinkStateProps => ({
    modalState: state.modals.textEditModal,
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditModal);

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
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
    modalTextInput: {
        justifyContent: "center",
        textAlign: "center",
        borderBottomWidth: 1,
        width: "100%",
        fontSize: 32,
        padding: 10,
        backgroundColor: "#e4dada",
    },
});
