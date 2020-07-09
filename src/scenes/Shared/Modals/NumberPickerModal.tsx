import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ModalBaseProps,
} from "react-native";
import {Picker} from "@react-native-community/picker";
import Modal from "react-native-modal";
import { Icon } from "react-native-elements";
import { bindActionCreators } from "redux";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { ThunkDispatch } from "redux-thunk";
import { startToggleTextEditModal, startToggleNumberPickerModal } from "../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { TextEditModalState, NumberPickerModalState } from "../../../store/ModalsState";
import { CharacterSheetState } from "../../../store/Store";

type OwnProps = {};

type Props = LinkStateProps & LinkDispatchProps & OwnProps;

const PickerModal: React.FC<Props> = (props) => {
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
                        <Picker
                            selectedValue={props.modalState.value}
                            onValueChange={props.modalState.onSelect}
                        >
                            <Picker.Item label="5" value={5} />
                            <Picker.Item label="10" value={10} />
                        </Picker>
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
    modalState: NumberPickerModalState & ModalBaseProps;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {
        toggleModal: bindActionCreators(startToggleNumberPickerModal, dispatch),
    };
};

const mapStateToProps = (
    state: CharacterSheetState,
    ownProps: OwnProps
): LinkStateProps => ({
    modalState: state.modals.numberPickerModal,
});

export default connect(mapStateToProps, mapDispatchToProps)(PickerModal);

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        height: "30%",
    },
    pickerContainer: {
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        justifyContent: "center"
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
        overflow: "scroll"
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
