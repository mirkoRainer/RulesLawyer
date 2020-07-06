import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ModalBaseProps,
} from "react-native";
import Modal from "react-native-modal";
import { Icon } from "react-native-elements";
import { bindActionCreators } from "redux";
import { AppActions } from "../../store/actions/AllActionTypesAggregated";
import { ThunkDispatch } from "redux-thunk";
import { startToggleTextEditModal } from "../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { TextEditModalState } from "../../store/ModalsState";
import { CharacterSheetState } from "../../store/Store";

type OwnProps = {};

type Props = LinkStateProps & LinkDispatchProps & OwnProps;

const TextEditModal: React.FC<Props> = (props) => {
    return (
        <Modal
            animationIn="fadeIn"
            animationOut="zoomOut"
            avoidKeyboard={true}
            isVisible={props.modalState.visible}
            onBackdropPress={props.toggleModal}
            style={styles.modal}
        >
            <View style={styles.container}>
                <View style={styles.pickerContainer}>
                    <View style={styles.header}>
                        <Text>{props.modalState.title || "Edit:"}</Text>
                        <Icon name="check" onPress={props.toggleModal} />
                    </View>
                    <View>
                        <TextInput
                            style={styles.modalTextInput}
                            placeholder={"Type Here"}
                            onChangeText={props.modalState.onTextChange}
                        >
                            {props.modalState.value}
                        </TextInput>
                    </View>
                </View>
            </View>
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
        height: 100,
    },
    pickerContainer: {
        height: 100,
        width: "100%",
        backgroundColor: "white",
    },
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#eee",
        padding: 10,
    },
    text: {
        alignSelf: "center",
    },
    modal: {
        height: 200,
    },
    modalTextInput: {
        justifyContent: "center",
        textAlign: "center",
        borderBottomColor: "black",
        borderBottomWidth: 2,
        width: "100%",
        fontSize: 32,
        backgroundColor: "#e4dada",
    },
});
