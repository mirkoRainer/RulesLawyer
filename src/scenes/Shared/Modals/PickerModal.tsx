import React from "react";
import {
    StyleSheet,
    ModalBaseProps,
} from "react-native";
import { Layout, Text, Modal } from "@ui-kitten/components";
import {Picker} from "@react-native-community/picker";
import { Icon } from "react-native-elements";
import { bindActionCreators } from "redux";
import { AppActions } from "../../../store/actions/AllActionTypesAggregated";
import { ThunkDispatch } from "redux-thunk";
import { startTogglePickerModal } from "../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import { PickerModalState } from "../../../store/ModalsState";
import { CharacterSheetState } from "../../../store/Store";

type OwnProps = {};

type Props = LinkStateProps & LinkDispatchProps & OwnProps;

const PickerModal: React.FC<Props> = (props) => {
    let items = props.modalState.items.map((value, index) => {
        return <Picker.Item value={value} key={value} label={value.toString()} />;
    });

    return (
        <Modal
            visible={props.modalState.visible}
            onBackdropPress={props.toggleModal}
            style={styles.modal}
        >
            <Layout style={styles.pickerContainer}>
                <Layout style={styles.header}>
                    <Text>{props.modalState.title || "Edit:"}</Text>
                    <Icon name="check" onPress={props.toggleModal} />
                </Layout>
                <Layout>
                    <Picker
                        selectedValue={props.modalState.currentSelection}
                        onValueChange={props.modalState.onSelect}
                    >
                        {items}
                    </Picker>
                </Layout>
            </Layout>
        </Modal>
    );
};

interface LinkDispatchProps {
    toggleModal: () => void;
}

interface LinkStateProps {
    modalState: PickerModalState & ModalBaseProps;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {
        toggleModal: bindActionCreators(startTogglePickerModal, dispatch),
    };
};

const mapStateToProps = (
    state: CharacterSheetState,
    ownProps: OwnProps
): LinkStateProps => ({
    modalState: state.modals.pickerModal,
});

export default connect(mapStateToProps, mapDispatchToProps)(PickerModal);

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    pickerContainer: {
        height: "100%",
        width: "100%",
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
});
