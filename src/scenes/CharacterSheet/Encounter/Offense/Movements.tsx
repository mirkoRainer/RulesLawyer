import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Modal from "react-native-modal";
import OtherMovements from "./OtherMovements";
import {
    Layout,
    Text,
    Card,
    Input,
    Icon,
    Button,
    useTheme,
} from "@ui-kitten/components";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../../store/actions/AllActionTypesAggregated";
import { bindActionCreators } from "redux";
import {
    startNumberPickerModalSelection,
    startTextEditModal,
} from "../../../../store/actions/Modals/ModalsActions";
import { connect } from "react-redux";
import Level from "../../Story/Components/CharacterMetadata/Level";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CHANGE_SPEED } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActionTypes";
import { Picker } from "@react-native-community/picker";
import { startChangeSpeed } from "../../../../store/actions/PlayerCharacter/PlayerCharacterActions";
import { Movement } from "../../../../PF2eCoreLib/PlayerCharacter";

const Movements: React.FC<Props> = (props) => {
    const handleSpeedSelect = (value: React.ReactText, index: number) => {
        props.updateMovements({
            ...props.movements,
            landSpeed: parseInt(value.toString())
                ? parseInt(value.toString())
                : 0,
        });
    };
    const handleFlySelect = (value: React.ReactText, index: number) => {
        props.updateMovements({
            ...props.movements,
            flySpeed: parseInt(value.toString())
                ? parseInt(value.toString())
                : 0,
        });
    };
    const handleClimbSelect = (value: React.ReactText, index: number) => {
        props.updateMovements({
            ...props.movements,
            climbSpeed: parseInt(value.toString())
                ? parseInt(value.toString())
                : 0,
        });
    };
    const handleSwimSelect = (value: React.ReactText, index: number) => {
        props.updateMovements({
            ...props.movements,
            swimSpeed: parseInt(value.toString())
                ? parseInt(value.toString())
                : 0,
        });
    };
    const handleBurrowSelect = (value: React.ReactText, index: number) => {
        props.updateMovements({
            ...props.movements,
            burrowSpeed: parseInt(value.toString())
                ? parseInt(value.toString())
                : 0,
        });
    };
    const [modalVisible, toggleModal] = React.useState(false);
    const handleToggleModal = () => {
        toggleModal(!modalVisible);
    };
    const theme = useTheme();

    const MovementEditModal = () => {
        const CheckIcon = (props: any) => (
            <Icon {...props} name="checkmark-circle-outline" />
        );
        const items = Array.from(new Array(30), (x, i) => i * 5).map(
            (value, index) => {
                return (
                    <Picker.Item
                        value={value}
                        key={value}
                        label={value.toString()}
                    />
                );
            }
        );
        return (
            <Modal
                isVisible={modalVisible}
                avoidKeyboard={true}
                style={styles.modal}
                backdropColor={"rgba(0, 0, 0, 0.5)"}
            >
                <Layout style={styles.header}>
                    <Text>{"Edit Movements:"}</Text>
                    <Button
                        appearance="ghost"
                        accessoryLeft={CheckIcon}
                        onPress={handleToggleModal}
                    />
                </Layout>
                <Layout
                    style={{
                        flexDirection: "row",
                        flex: 1,
                        paddingHorizontal: 5,
                    }}
                >
                    <Layout style={styles.pickerContainer}>
                        <Text style={styles.centered}>Speed</Text>
                        <Picker
                            selectedValue={props.movements.landSpeed}
                            onValueChange={handleSpeedSelect}
                            itemStyle={{ color: theme["color-primary-500"] }}
                            style={{ flex: 1 }}
                        >
                            {items}
                        </Picker>
                    </Layout>
                    <Layout style={styles.pickerContainer}>
                        <Text style={styles.centered}>Fly</Text>
                        <Picker
                            selectedValue={props.movements.flySpeed}
                            onValueChange={handleFlySelect}
                            itemStyle={{ color: theme["color-primary-500"] }}
                            style={{ flex: 1 }}
                        >
                            {items}
                        </Picker>
                    </Layout>
                    <Layout style={styles.pickerContainer}>
                        <Text style={styles.centered}>Climb</Text>
                        <Picker
                            selectedValue={props.movements.climbSpeed}
                            onValueChange={handleClimbSelect}
                            itemStyle={{ color: theme["color-primary-500"] }}
                            style={{ flex: 1 }}
                        >
                            {items}
                        </Picker>
                    </Layout>
                    <Layout style={styles.pickerContainer}>
                        <Text style={styles.centered}>Swim</Text>
                        <Picker
                            selectedValue={props.movements.swimSpeed}
                            onValueChange={handleSwimSelect}
                            itemStyle={{ color: theme["color-primary-500"] }}
                            style={{ flex: 1 }}
                        >
                            {items}
                        </Picker>
                    </Layout>
                    <Layout style={styles.pickerContainer}>
                        <Text style={styles.centered}>Burrow</Text>
                        <Picker
                            selectedValue={props.movements.burrowSpeed}
                            onValueChange={handleBurrowSelect}
                            itemStyle={{ color: theme["color-primary-500"] }}
                            style={{ flex: 1 }}
                        >
                            {items}
                        </Picker>
                    </Layout>
                </Layout>
            </Modal>
        );
    };

    return (
        <Layout style={styles.container}>
            <TouchableOpacity
                style={styles.horizontal}
                onPress={handleToggleModal}
            >
                <Layout style={styles.container}>
                    <Text style={styles.text} category="h6">
                        Speed:{" "}
                    </Text>
                    <Text style={styles.text} category="p1">
                        {props.movements.landSpeed} feet
                    </Text>
                </Layout>
                <OtherMovements movements={props.movements} />
            </TouchableOpacity>
            {MovementEditModal()}
        </Layout>
    );
};

interface OwnProps {
    movements: Movement;
}

type Props = OwnProps & LinkDispatchProps;

interface LinkDispatchProps {
    updateMovements: (movements: Movement) => void;
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: OwnProps
): LinkDispatchProps => {
    return {
        updateMovements: bindActionCreators(startChangeSpeed, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(Movements);

const styles = StyleSheet.create({
    horizontal: {
        flex: 1,
        flexDirection: "row",
        alignContent: "stretch",
        alignSelf: "stretch",
        padding: 5,
    },
    container: {
        flex: 0.3,
        padding: 2,
    },
    text: {
        flex: 1,
        alignSelf: "center",
    },
    centered: {
        alignSelf: "center",
    },
    modal: {
        width: "90%",
        alignSelf: "center",
        justifyContent: "center",
        height: "40%",
        flex: 0.75,
    },
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        flex: 0.2,
    },
    pickerContainer: {
        flex: 1,
        paddingHorizontal: 5,
    },
});
